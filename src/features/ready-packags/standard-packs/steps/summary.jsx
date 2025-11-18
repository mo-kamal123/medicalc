import { useEffect, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import Breadcrumb from '../../../../shared/UI/breadcrumb';
// import GeneralBenefited from '../components/general-benefited';
// import InpatientBenefit from '../components/inpatient-benefite';
// import OutpatientBenefit from '../components/outpatient-benefit';
// import Mediactions from '../components/mediactions';
import autoTable from 'jspdf-autotable';
import SummaryCard from '../../../../shared/UI/summary-card';
import useSummary from '../../../../shared/api/useSummary';
import { getPlanDisplayName } from '../../../../shared/utils/plan-mapping';
import AsyncState from '../../../../shared/UI/async-state';
import { useSelector } from 'react-redux';

/**
 * Summary Component
 *
 * Final step that renders the benefits & pricing table, enables exporting
 * the content as a merged PDF, and provides clear loading/error feedback.
 */
const Summary = ({ type = 'standard' }) => {
  const pdfRef = useRef();
  const {
    mutate: getSummary,
    data: plansSummaryData,
    isPending,
    isError,
    error,
  } = useSummary();

  useEffect(() => {
    getSummary(); // calls API on mount
  }, [getSummary]);
  const clientName = useSelector((state) => state.client.name);
  const summaryErrorMessage =
    error?.response?.data?.message ||
    error?.message ||
    'Failed to load summary. Please try again.';

  const tables = plansSummaryData?.data?.tables ?? [];
  const packageLabel =
    type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ');

  const breadcrumbItems = [
    { title: 'Plan Data', url: `/${type}-package/plan-data`, active: true },
    {
      title: 'Healthcare Services',
      url: `/${type}-package/healthcare-services`,
      active: true,
    },
    {
      title: 'Reimbursement Details',
      url: `/${type}-package/reimbursement-details`,
      active: true,
    },
    {
      title: 'Plan Summary',
      url: `/${type}-package/plan-by-age/summary`,
      active: true,
    },
    {
      title: 'Customize plan by age',
      url: `/${type}-package/plan-by-age/summary`,
      active: true,
    },
    {
      title: 'Coverage & Expense Details',
      url: `/${type}-package/coverage-details`,
      active: true,
    },
    {
      title: 'Installments',
      url: `/${type}-package/installments`,
      active: true,
    },
    { title: 'Summary', url: `/${type}-package/summary`, active: true },
  ];

  const mergePDFs = async () => {
    if (!plansSummaryData?.data?.tables?.length) {
      console.warn('Summary::mergePDFs skipped - no tables to export');
      return;
    }

    const tablePdfDoc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = tablePdfDoc.internal.pageSize.getWidth();

    // Header
    tablePdfDoc.setFontSize(16);
    tablePdfDoc.setFont('helvetica', 'bold');
    tablePdfDoc.text('BENEFITS & PRICING TABLE OFFER', pageWidth / 2, 15, {
      align: 'center',
    });

    // Client name under the header
    tablePdfDoc.setFontSize(12);
    tablePdfDoc.setFont('helvetica', 'bold');
    tablePdfDoc.text(clientName, pageWidth / 2, 25, {
      align: 'center',
    });

    let currentY = 35;

    for (const table of plansSummaryData.data.tables) {
      tablePdfDoc.setFontSize(14);
      tablePdfDoc.setFont('helvetica', 'bold');
      tablePdfDoc.text(table.sectionTitle, 10, currentY);
      currentY += 6;

      const rows = table.rows.map((row) => [
        row.category,
        ...table.headers.slice(1).map((header) => {
          const program = row.programs.find((p) => p.name === header);
          return program ? program.value : '';
        }),
      ]);

      autoTable(tablePdfDoc, {
        startY: currentY,
        head: [
          table.headers.map((h) =>
            h === 'Category' ? h : getPlanDisplayName(h)
          ),
        ],
        body: rows,
        theme: 'grid',
        headStyles: {
          fillColor: [60, 121, 231],
          textColor: 255,
          fontStyle: 'bold',
        },
        styles: { font: 'helvetica', fontSize: 11, cellPadding: 3 },
        margin: { left: 10, right: 10 },
        didDrawPage: (data) => {
          currentY = data.cursor.y + 12;
        },
      });
    }

    // 🔥 Convert table PDF into bytes (IMPORTANT)
    const tablePdfBytes = tablePdfDoc.output('arraybuffer');

    // Load existing PDFs
    const existingPdf1 = await fetch('/pdfs/pdf1.pdf').then((res) =>
      res.arrayBuffer()
    );
    const existingPdf2 = await fetch('/pdfs/pdf2.pdf').then((res) =>
      res.arrayBuffer()
    );

    // Create merged PDF
    const mergedPdf = await PDFDocument.create();

    // Add existing PDF 1
    const pdfA = await PDFDocument.load(existingPdf1);
    const pagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
    pagesA.forEach((page) => mergedPdf.addPage(page));

    // Add your generated table PDF
    const tablePdf = await PDFDocument.load(tablePdfBytes);
    const tablePages = await mergedPdf.copyPages(
      tablePdf,
      tablePdf.getPageIndices()
    );
    tablePages.forEach((page) => mergedPdf.addPage(page));

    // Add existing PDF 2
    const pdfB = await PDFDocument.load(existingPdf2);
    const pagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
    pagesB.forEach((page) => mergedPdf.addPage(page));

    // Save merged file
    const mergedPdfBytes = await mergedPdf.save();
    saveAs(
      new Blob([mergedPdfBytes], { type: 'application/pdf' }),
      `${clientName}-plans-summary.pdf`
    );
  };

  return (
    <div ref={pdfRef} className="flex flex-col gap-10 p-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-main text-center w-full md:w-fit">
          {packageLabel} Package Summary
        </h1>
        <button
          onClick={mergePDFs}
          className="bg-blue-400 text-white w-full md:w-fit p-4 rounded md:text-lg font-semibold self-end"
        >
          Download {packageLabel} PDF
        </button>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      <AsyncState
        isLoading={isPending}
        isError={isError}
        errorMessage={summaryErrorMessage}
        onRetry={getSummary}
        loadingText="Loading summary..."
        fullHeight
      >
        <div className="flex flex-col gap-10">
          {tables.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              No summary data yet. Run the previous steps to generate a summary.
            </div>
          ) : (
            tables.map((table) => (
              <div key={table.sectionTitle} className="flex flex-col gap-5">
                <h2 className="text-main font-semibold text-2xl text-center border border-borders bg-white w-full p-7 rounded-xl shadow">
                  {table.sectionTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                  {table.rows.map((row) => (
                    <SummaryCard
                      key={`${table.sectionTitle}-${row.category}`}
                      header={{
                        icon: null,
                        title: row.category,
                      }}
                      inputs={row.programs.map((program) => ({
                        label: getPlanDisplayName(program.name),
                        data: [program.value],
                        defaultValue: program.value,
                        placeholder: program.name,
                      }))}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </AsyncState>

      <button className="bg-blue-500 text-white text-lg font-semibold p-4 rounded mt-5">
        These prices are approximate and subject to change.
      </button>
    </div>
  );
};

export default Summary;
