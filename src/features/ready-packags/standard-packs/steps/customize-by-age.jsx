import { useState } from 'react';
import DragAndDrop from '../../../../shared/UI/drag-drop';
import PlanAgeTable from '../components/plan-age-table';
import Modal from '../../../../shared/UI/modal';
import Dropdown from '../../../../shared/UI/drop-down';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';

const CustomizeByAge = () => {
  const [showModal, setShowModal] = useState(false);
  // Allowed file types
  const allowedTypes = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/gif',
    'image/svg+xml',
  ];

  const PLAN_META = {
    _100000: {
      name: 'Plan 1',
      color: 'text-blue-400',
      icon: <FaStar className="text-blue-400 text-2xl" />,
    },
    _50000: {
      name: 'Plan 2',
      color: 'text-gray-400',
      icon: <FaMedal className="text-gray-400 text-2xl" />,
    },
    _20000: {
      name: 'Plan 3',
      color: 'text-yellow-400',
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
    },
    _30000: {
      name: 'Plan 4',
      color: 'text-yellow-400',
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
    },
  };
  return (
    <div className="mt-5">
      <div className="bg-white p-5 rounded-lg flex flex-col gap-5">
        <DragAndDrop allowedTypes={allowedTypes} />
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="flex items-center justify-center gap-2 bg-main text-white w-full border px-5 py-2 rounded-xl"
        >
          Browse File
        </button>
      </div>
      <PlanAgeTable
        PLAN_META={PLAN_META}
        navigation={'/premium-package/coverage-details'}
      />
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div className="flex flex-col gap-5">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-dark mb-2">Map Columns</h1>
            <p className="text-sec mb-6 max-w-2/3 m-auto">
              Match your uploaded file's columns with the system fields to
              ensure accurate data import and reporting.
            </p>
          </div>
          <div className="flex items-center justify-between gap-5">
            <div className="w-full">
              <label className="font-semibold">Program Name</label>
              <Dropdown placeholder="Program" />
            </div>
            <div className="w-full">
              <label className="font-semibold">Birthdate</label>
              <Dropdown placeholder="Birthdate" />
            </div>
            <div className="w-full">
              <label className="font-semibold">Employer Name</label>
              <Dropdown placeholder="Employer" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between w-[85%] m-auto bg-[#CA8A0410] p-5 rounded-xl">
              <p>Gold Plan</p>
              <p>11/2/2015</p>
              <p>Mahmad Ali</p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-center gap-3 mt-8 pt-4">
            <button
              className="px-4 py-2 text-[#FF1F35] border border-[#FF1F35] rounded-lg hover:bg-[#FF1F35]/10 transition-all duration-200"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200">
              Process
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomizeByAge;
