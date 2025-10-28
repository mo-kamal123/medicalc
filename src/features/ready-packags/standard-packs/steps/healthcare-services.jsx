import { FaCrown, FaEye, FaMedal, FaStar } from 'react-icons/fa';
import {
  FaHospital,
  FaUserInjured,
  FaPills,
  FaTooth,
  FaRunning,
  FaHeartbeat,
  FaBaby,
} from 'react-icons/fa';
import PlanCard from '../../../../shared/UI/plan-card';
import { Link } from 'react-router-dom';

const HealthcareServices = () => {
  const planData = [
    {
      header: {
        icon: <FaHospital className="text-blue-500 text-2xl" />,
        title: 'Hospital & Inpatient Care',
      },
      inputs: [
        {
          label: 'Room Type',
          data: ['LUX', 'PRIVATE', 'SHARED'],
          defaultValue: 'Applied Network',
          placeholder: 'Room Type',
        },
        {
          label: 'Inpatient Copayment',
          data: ['0%', '5%', '10%', '15%'],
          defaultValue: 'Inpatient Copayment',
          placeholder: 'Inpatient Copayment',
        },
      ],
    },
    {
      header: {
        icon: <FaUserInjured className="text-green-500 text-2xl" />,
        title: 'Outpatient Services',
      },
      inputs: [
        {
          label: 'Outpatient Copayment',
          data: ['0%', '10%', '15%', '20%'],
          defaultValue: 'Outpatient Copayment',
          placeholder: 'Outpatient Copayment',
        },
      ],
    },
    {
      header: {
        icon: <FaPills className="text-purple-500 text-2xl" />,
        title: 'Prescription Medicines',
      },
      inputs: [
        {
          label: 'Prescription Medicines Copayment',
          data: ['0%', '10%', '15%', '20%', '25%'],
          defaultValue: 'Prescription Medicines Copayment',
          placeholder: 'Prescription Medicines Copayment',
        },
      ],
    },
    {
      header: {
        icon: <FaTooth className="text-teal-500 text-2xl" />,
        title: 'Dental Care',
      },
      inputs: [
        {
          label: 'Prescription Medicines Copayment',
          data: ['0%', '10%', '20%', '30%'],
          defaultValue: 'Prescription Medicines Copayment',
          placeholder: 'Prescription Medicines Copayment',
        },
        {
          label: 'Dental Money',
          data: [
            'Excluded',
            'EGP 300',
            'EGP 500',
            'EGP 700',
            'EGP 750',
            'EGP 1,000',
            'EGP 1,200',
            'EGP 1,500',
            'EGP 2,000',
            'EGP 2,500',
            'EGP 3,000',
          ],
          defaultValue: 'Dental Money',
          placeholder: 'Dental Money',
        },
      ],
    },
    {
      header: {
        icon: <FaEye className="text-blue-400 text-2xl" />,
        title: 'Optical Care',
      },
      inputs: [
        {
          label: 'Optical Copayment',
          data: ['0%', '10%', '20%', '30%'],
          defaultValue: 'Optical Copayment',
          placeholder: 'Optical Copayment',
        },
        {
          label: 'Optical Annual Fees',
          data: [
            'Excluded',
            'EGP 300',
            'EGP 500',
            'EGP 700',
            'EGP 750',
            'EGP 1,000',
            'EGP 1,200',
            'EGP 1,500',
            'EGP 2,000',
            'EGP 2,500',
            'EGP 3,000',
          ],
          defaultValue: 'Optical Annual Fees',
          placeholder: 'Optical Annual Fees',
        },
      ],
    },
    {
      header: {
        icon: <FaRunning className="text-orange-500 text-2xl" />,
        title: 'Physical Therapy',
      },
      inputs: [
        {
          label: 'Physio Therapy Count',
          data: ['Covered', 'Sessions 12', 'Sessions 24', 'Sessions 36'],
          defaultValue: 'Physio Therapy Count',
          placeholder: 'Physio Therapy Count',
        },
      ],
    },
    {
      header: {
        icon: <FaHeartbeat className="text-red-500 text-2xl" />,
        title: 'Chronic & Pre-existing Conditions',
      },
      inputs: [
        {
          label: 'Chronic And Pre Existing',
          data: [
            'Excluded',
            '2,500',
            '5,000',
            '7,500',
            '10,000',
            '15,000',
            '20,000',
            '25,000',
            '30,000',
            '35,000',
            '40,000',
            '50,000',
            '60,000',
            '75,000',
            '80,000',
            '100,000',
            '120,000',
            '150,000',
            '200,000',
            '250,000',
            '300,000',
          ],
          defaultValue: 'Chronic And Pre Existing',
          placeholder: 'Chronic And Pre Existing',
        },
      ],
    },
    {
      header: {
        icon: <FaBaby className="text-pink-500 text-2xl" />,
        title: 'Maternity Care',
      },
      inputs: [
        {
          label: 'Maternity Care',
          data: [
            'Excluded',
            'Wait 10 Month',
            '3,000',
            '5,000',
            '7,000',
            '8,000',
            '10,000',
          ],
          defaultValue: 'Maternity Care',
          placeholder: 'Maternity Care',
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col gap-10">
          <PlanCard
            header={{
              icon: <FaStar className="text-blue-400 text-2xl" />,
              title: 'Standard White Plan',
            }}
          />
          {planData.map((data) => (
            <>
              <PlanCard header={data.header} inputs={data.inputs} />
            </>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <PlanCard
            header={{
              icon: <FaMedal className="text-gray-400 text-2xl" />,
              title: 'Silver Plan',
            }}
          />
          {planData.map((data) => (
            <>
              <PlanCard header={data.header} inputs={data.inputs} />
            </>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <PlanCard
            header={{
              icon: <FaCrown className="text-yellow-400 text-2xl" />,
              title: 'premium Gold Plan',
            }}
          />
          {planData.map((data) => (
            <>
              <PlanCard header={data.header} inputs={data.inputs} />
            </>
          ))}
        </div>
      </div>
      <div className="flex gap-5 justify-end w-full mb-10">
        <Link
          to={-1}
          className="flex items-center justify-center gap-2 border-main text-main border px-5 py-2 rounded-xl"
        >
          Previse
        </Link>
        <Link
          to={'/standard-package/reimbursement-details'}
          className="flex items-center justify-center gap-2 bg-main text-white px-5 py-2 rounded-xl"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default HealthcareServices;
