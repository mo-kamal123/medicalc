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
  const [errors, setErrors] = useState([]);
  const [warnings, setWarnings] = useState([]);

  const navigate = useNavigate();

  // Redux
  const calculationId = useSelector((state) => state.client.calculationId);
  const calculationData = useSelector((state) => state.calculationResult);

  const allowedTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel',
  ];

  // Helper function to safely convert header to string
  // This prevents React errors when headers are Date objects or other non-string types
  const getHeaderTitle = (header, idx) => {
    // Always return a string, never an object
    let result = `Column ${idx + 1}`;

    if (header === null || header === undefined) {
      return result;
    }

    // Handle strings
    if (typeof header === 'string') {
      const trimmed = header.trim();
      return trimmed || result;
    }

    // Handle numbers
    if (typeof header === 'number') {
      return String(header);
    }

    // Handle Date objects
    if (header instanceof Date) {
      try {
        return header.toLocaleDateString() || result;
      } catch (e) {
        return result;
      }
    }

    // Handle boolean
    if (typeof header === 'boolean') {
      return String(header);
    }

    // For any other type (objects, arrays, etc.), try to convert to string safely
    try {
      const str = String(header);
      // If String() returns "[object Object]", use fallback
      if (str === '[object Object]' || str === '[object Array]') {
        return result;
      }
      return str;
    } catch (e) {
      return result;
    }
  };

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
    setErrors([]);
    setWarnings([]);

    if (columnMap.program === null || columnMap.birthdate === null) {
      setErrors(['Please map all columns before processing.']);
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
    const unmatchedPrograms = new Set();
    const newWarnings = [];
    let processedCount = 0;
    let skippedCount = 0;

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

      if (!program || !birthdateValue) {
        skippedCount++;
        continue;
      }

      let birthdate;
      if (typeof birthdateValue === 'number') {
        const parsedDate = XLSX.SSF.parse_date_code(birthdateValue);
        birthdate = new Date(parsedDate.y, parsedDate.m - 1, parsedDate.d);
      } else {
        birthdate = new Date(birthdateValue);
      }

      if (isNaN(birthdate.getTime())) {
        skippedCount++;
        continue;
      }

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
      if (!group) {
        console.warn(`Row ${i}: Age ${age} out of range`);
        skippedCount++;
        continue;
      }

      const planKey = Object.keys(PLAN_META).find((key) => {
        const planName = PLAN_META[key].name.toLowerCase();
        const p = program.toLowerCase();
        return planName === p || planName.includes(p) || p.includes(planName);
      });

      if (planKey) {
        counts[planKey][group.label]++;
        processedCount++;
      } else {
        unmatchedPrograms.add(program);
        skippedCount++;
      }
    }

    // Set warnings if any
    if (unmatchedPrograms.size > 0) {
      newWarnings.push(
        `${unmatchedPrograms.size} plan name(s) not recognized: ${Array.from(unmatchedPrograms).join(', ')}`
      );
    }

    if (skippedCount > 0) {
      newWarnings.push(
        `${skippedCount} row(s) were skipped due to missing or invalid data.`
      );
    }

    setWarnings(newWarnings);
    setProcessedData(counts);

    // Close modal only if no warnings
    if (newWarnings.length === 0) {
      setShowModal(false);
    }
  };

  /* -----------------------------------------------
     FILE UPLOAD HANDLER - FIXED FOR .xls FILES
  ------------------------------------------------ */
  const handleFileUpload = (file) => {
    setErrors([]);
    setWarnings([]);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target.result;
        // FIXED: Changed to binary reading for .xls support
        const workbook = XLSX.read(data, {
          type: 'binary',
          cellDates: true,
        });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });

        if (rows.length < 2) {
          setErrors([
            'The file must contain at least a header row and one data row.',
          ]);
          return;
        }

        setExcelRows(rows);
        setShowModal(true);
        setColumnMap({ program: null, birthdate: null });
      } catch (error) {
        setErrors([`Failed to read file: ${error.message}`]);
      }
    };

    reader.onerror = () => {
      setErrors(['Failed to read the file. Please try again.']);
    };

    // FIXED: Changed from readAsArrayBuffer to readAsBinaryString
    reader.readAsBinaryString(file);
  };

  /* -----------------------------------------------
     AUTO-PROCESS when columns are mapped
  ------------------------------------------------ */
  useEffect(() => {
    if (
      showModal &&
      columnMap.program !== null &&
      columnMap.birthdate !== null &&
      excelRows.length > 1
    ) {
      handleProcess();
    }
  }, [columnMap.program, columnMap.birthdate]);

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

        {/* ERROR DISPLAY */}
        {errors.length > 0 && (
          <div className="flex flex-col gap-2">
            {errors.map((error, idx) => (
              <div
                key={`error-${idx}`}
                className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{error}</span>
              </div>
            ))}
          </div>
        )}

        {/* WARNING DISPLAY */}
        {warnings.length > 0 && (
          <div className="flex flex-col gap-2">
            {warnings.map((warning, idx) => (
              <div
                key={`warning-${idx}`}
                className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{warning}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <PlanAgeTable
        PLAN_META={PLAN_META}
        plans={processedData}
        navigation={nextStep}
        type="custom"
      />

      {/* MODAL */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col gap-5">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-dark mb-2">Map Columns</h1>
            <p className="text-sec text-xs md:text-base mb-6 md:max-w-2/3 m-auto">
              Match your uploaded file's columns with the system fields to
              ensure accurate data import and reporting.
            </p>
          </div>

          {/* ERROR DISPLAY IN MODAL */}
          {errors.length > 0 && (
            <div className="flex flex-col gap-2">
              {errors.map((error, idx) => (
                <div
                  key={`modal-error-${idx}`}
                  className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              ))}
            </div>
          )}

          {/* WARNING DISPLAY IN MODAL */}
          {warnings.length > 0 && (
            <div className="flex flex-col gap-2">
              {warnings.map((warning, idx) => (
                <div
                  key={`modal-warning-${idx}`}
                  className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{warning}</span>
                </div>
              ))}
            </div>
          )}

          {excelRows.length > 0 && (
            <>
              <div className="flex items-center justify-between gap-5">
                <div className="w-full">
                  <label className="font-semibold text-sm md:text-base mb-2 block">
                    Program Name
                  </label>
                  <Dropdown
                    placeholder="Select Program Column"
                    data={excelRows[0]
                      .map((header, idx) => {
                        const title = getHeaderTitle(header, idx);
                        // Double-check that title is always a string
                        return {
                          title:
                            typeof title === 'string'
                              ? title
                              : String(title || `Column ${idx + 1}`),
                          value: idx,
                        };
                      })
                      .filter(
                        (item) => item.title && typeof item.title === 'string'
                      )}
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
                    data={excelRows[0]
                      .map((header, idx) => {
                        const title = getHeaderTitle(header, idx);
                        // Double-check that title is always a string
                        return {
                          title:
                            typeof title === 'string'
                              ? title
                              : String(title || `Column ${idx + 1}`),
                          value: idx,
                        };
                      })
                      .filter(
                        (item) => item.title && typeof item.title === 'string'
                      )}
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
                          {excelRows[1][columnMap.birthdate] instanceof Date
                            ? excelRows[1][
                                columnMap.birthdate
                              ].toLocaleDateString()
                            : excelRows[1][columnMap.birthdate]}
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
            {warnings.length > 0 && processedData && (
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
                onClick={() => setShowModal(false)}
              >
                Continue Anyway
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomizeByAge;
