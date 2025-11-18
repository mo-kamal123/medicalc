import * as XLSX from 'xlsx';
import { useState, useEffect } from 'react';
import DragAndDrop from '../UI/drag-drop';
import PlanAgeTable from '../../features/ready-packags/standard-packs/components/plan-age-table';
import Modal from '../UI/modal';
import Dropdown from '../UI/drop-down';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CustomizeByAge = ({ PLAN_META, nextStep }) => {
  const [showModal, setShowModal] = useState(false);
  const [excelRows, setExcelRows] = useState([]);
  const [columnMap, setColumnMap] = useState({
    program: null,
    birthdate: null,
  });
  const [processedData, setProcessedData] = useState(null);

  const navigate = useNavigate();

  // Redux
  const calculationId = useSelector((state) => state.client.calculationId);
  const calculationData = useSelector((state) => state.calculationResult);

  const allowedTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel',
  ];
  console.log(calculationData);

  /* -----------------------------------------------
     🔥 REDIRECT GUARD
  ------------------------------------------------ */
  useEffect(() => {
    if (calculationData === undefined || calculationData === null) return;

    if (
      !calculationId ||
      !calculationData.data ||
      calculationData.data.length === 0
    ) {
      navigate('/', { replace: true });
    }
  }, [calculationId, calculationData, navigate]);

  // Stop rendering if redirecting
  if (
    calculationData === undefined ||
    calculationData === null ||
    !calculationId ||
    !calculationData.data ||
    calculationData.data.length === 0
  ) {
    return null;
  }

  /* -----------------------------------------------
     PROCESS EXCEL
  ------------------------------------------------ */
  const handleProcess = () => {
    if (columnMap.program === null || columnMap.birthdate === null) {
      alert('Please map all columns');
      return;
    }

    const ageGroups = [
      { label: '_0_17', min: 0, max: 17 },
      { label: '_18_24', min: 18, max: 24 },
      { label: '_25_29', min: 25, max: 29 },
      { label: '_30_34', min: 30, max: 34 },
      { label: '_35_39', min: 35, max: 39 },
      { label: '_40_44', min: 40, max: 44 },
      { label: '_45_49', min: 45, max: 49 },
      { label: '_50_54', min: 50, max: 54 },
      { label: '_55_59', min: 55, max: 59 },
      { label: '_60_64', min: 60, max: 64 },
      { label: '_65_69', min: 65, max: 69 },
      { label: '_70_74', min: 70, max: 74 },
      { label: '_75_79', min: 75, max: 79 },
      { label: '_plus_80', min: 80, max: 200 },
    ];

    const counts = {};

    Object.keys(PLAN_META).forEach((planKey) => {
      counts[planKey] = {};
      ageGroups.forEach((group) => {
        counts[planKey][group.label] = 0;
      });
    });

    for (let i = 1; i < excelRows.length; i++) {
      const row = excelRows[i];
      const program = String(row[columnMap.program] || '').trim();
      const birthdateValue = row[columnMap.birthdate];

      if (!program || !birthdateValue) continue;

      let birthdate;
      if (typeof birthdateValue === 'number') {
        const parsedDate = XLSX.SSF.parse_date_code(birthdateValue);
        birthdate = new Date(parsedDate.y, parsedDate.m - 1, parsedDate.d);
      } else {
        birthdate = new Date(birthdateValue);
      }

      if (isNaN(birthdate.getTime())) continue;

      const today = new Date();
      let age = today.getFullYear() - birthdate.getFullYear();
      const monthDiff = today.getMonth() - birthdate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthdate.getDate())
      ) {
        age--;
      }

      const group = ageGroups.find((g) => age >= g.min && age <= g.max);
      if (!group) continue;

      const planKey = Object.keys(PLAN_META).find((key) => {
        const planName = PLAN_META[key].name.toLowerCase();
        const p = program.toLowerCase();
        return planName === p || planName.includes(p) || p.includes(planName);
      });

      if (planKey) {
        counts[planKey][group.label]++;
      }
    }

    setProcessedData(counts);
    setShowModal(false);
  };

  /* -----------------------------------------------
     FILE UPLOAD HANDLER
  ------------------------------------------------ */
  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });

      setExcelRows(rows);
      setShowModal(true);
      setColumnMap({ program: null, birthdate: null });
    };
    reader.readAsArrayBuffer(file);
  };

  /* -----------------------------------------------
     RENDER
  ------------------------------------------------ */
  return (
    <div className="mt-5">
      <div className="bg-white p-5 rounded-lg flex flex-col gap-5">
        <DragAndDrop
          onFileDrop={handleFileUpload}
          allowedTypes={allowedTypes}
        />

        <button
          onClick={() => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = allowedTypes.join(',');
            input.onchange = (e) => {
              const file = e.target.files[0];
              if (file) handleFileUpload(file);
            };
            input.click();
          }}
          className="flex items-center justify-center gap-2 bg-main text-white w-full border px-5 py-2 rounded-xl hover:bg-opacity-90 transition-all"
        >
          Browse File
        </button>
      </div>

      <PlanAgeTable
        PLAN_META={PLAN_META}
        plans={processedData}
        navigation={nextStep}
        type="custom"
      />

      {/* ---------------------------------------------------------
          FULL MODAL CONTENT (AS REQUESTED)
      --------------------------------------------------------- */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col gap-5">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-dark mb-2">Map Columns</h1>
            <p className="text-sec text-xs md:text-base mb-6 md:max-w-2/3 m-auto">
              Match your uploaded file's columns with the system fields to
              ensure accurate data import and reporting.
            </p>
          </div>

          {excelRows.length > 0 && (
            <>
              <div className="flex items-center justify-between gap-5">
                <div className="w-full">
                  <label className="font-semibold text-sm md:text-base mb-2 block">
                    Program Name
                  </label>
                  <Dropdown
                    placeholder="Select Program Column"
                    data={excelRows[0].map((header, idx) => ({
                      title: header || `Column ${idx + 1}`,
                      value: idx,
                    }))}
                    defaultValue={columnMap.program}
                    onChange={(value) =>
                      setColumnMap((prev) => ({ ...prev, program: value }))
                    }
                  />
                </div>

                <div className="w-full">
                  <label className="font-semibold text-sm md:text-base mb-2 block">
                    Birthdate
                  </label>
                  <Dropdown
                    placeholder="Select Birthdate Column"
                    data={excelRows[0].map((header, idx) => ({
                      title: header || `Column ${idx + 1}`,
                      value: idx,
                    }))}
                    defaultValue={columnMap.birthdate}
                    onChange={(value) =>
                      setColumnMap((prev) => ({ ...prev, birthdate: value }))
                    }
                  />
                </div>
              </div>

              {/* Preview of first row */}
              {excelRows.length > 1 &&
                columnMap.program !== null &&
                columnMap.birthdate !== null && (
                  <div className="mt-4">
                    <p className="text-sm text-sec mb-2">
                      Preview (first row):
                    </p>
                    <div className="flex items-center justify-around bg-[#CA8A0410] p-5 rounded-xl">
                      <div>
                        <p className="text-xs text-sec">Program</p>
                        <p className="font-semibold">
                          {excelRows[1][columnMap.program]}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-sec">Birthdate</p>
                        <p className="font-semibold">
                          {excelRows[1][columnMap.birthdate]}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
            </>
          )}

          <div className="flex justify-center gap-3 mt-8 pt-4">
            <button
              className="px-4 py-2 text-[#FF1F35] border border-[#FF1F35] rounded-lg hover:bg-[#FF1F35]/10 transition-all duration-200"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
              onClick={handleProcess}
              disabled={
                columnMap.program === null || columnMap.birthdate === null
              }
            >
              Process
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomizeByAge;
