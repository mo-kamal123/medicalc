import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import PlanData from '../../../../shared/components/plan-data';
import usePagination from '../../../../shared/hooks/usePagination';
import {
  FaExclamationTriangle,
  FaChartLine,
  FaExclamationCircle,
} from 'react-icons/fa';

const planData = [
  {
    id: 1,
    header: {
      icon: <FaExclamationTriangle className="text-orange-500 text-2xl" />,
      title: 'Exceptions Details',
    },
    inputs: [
      {
        label: 'Number of services',
        data: ['Number of services'],
        defaultValue: 'Number of services',
        placeholder: 'Number of services',
      },
      {
        label: 'Percentage / Number of member',
        data: ['Percentage / Number of member'],
        defaultValue: 'Percentage / Number of member',
        placeholder: 'Percentage / Number of member',
      },
      {
        label: 'Total in EGP',
        data: ['Total in EGP'],
        defaultValue: 'Total in EGP',
        placeholder: 'Total in EGP',
      },
    ],
  },
  {
    id: 2,

    header: {
      icon: <FaChartLine className="text-red-500 text-2xl" />,
      title: 'Exceled Maximum Limit',
    },
    inputs: [
      {
        label: 'Number of services',
        data: ['Number of services'],
        defaultValue: 'Number of services',
        placeholder: 'Number of services',
      },
      {
        label: 'Percentage / Number of member',
        data: ['Percentage / Number of member'],
        defaultValue: 'Percentage / Number of member',
        placeholder: 'Percentage / Number of member',
      },
      {
        label: 'Total in EGP',
        data: ['Total in EGP'],
        defaultValue: 'Total in EGP',
        placeholder: 'Total in EGP',
      },
    ],
  },
  {
    id: 3,

    header: {
      icon: <FaExclamationCircle className="text-red-600 text-2xl" />,
      title: 'Critical Case',
    },
    inputs: [
      {
        label: 'Number of services',
        data: ['Number of services'],
        defaultValue: 'Number of services',
        placeholder: 'Number of services',
      },
      {
        label: 'Percentage / Number of member',
        data: ['Percentage / Number of member'],
        defaultValue: 'Percentage / Number of member',
        placeholder: 'Percentage / Number of member',
      },
      {
        label: 'Total in EGP',
        data: ['Total in EGP'],
        defaultValue: 'Total in EGP',
        placeholder: 'Total in EGP',
      },
    ],
  },
  {
    id: 4,

    header: {
      icon: <FaExclamationCircle className="text-red-600 text-2xl" />,
      title: 'Critical Case',
    },
    inputs: [
      {
        label: 'Number of services',
        data: ['Number of services'],
        defaultValue: 'Number of services',
        placeholder: 'Number of services',
      },
      {
        label: 'Percentage / Number of member',
        data: ['Percentage / Number of member'],
        defaultValue: 'Percentage / Number of member',
        placeholder: 'Percentage / Number of member',
      },
      {
        label: 'Total in EGP',
        data: ['Total in EGP'],
        defaultValue: 'Total in EGP',
        placeholder: 'Total in EGP',
      },
    ],
  },
  {
    id: 5,

    header: {
      icon: <FaExclamationCircle className="text-red-600 text-2xl" />,
      title: 'Critical Case',
    },
    inputs: [
      {
        label: 'Number of services',
        data: ['Number of services'],
        defaultValue: 'Number of services',
        placeholder: 'Number of services',
      },
      {
        label: 'Percentage / Number of member',
        data: ['Percentage / Number of member'],
        defaultValue: 'Percentage / Number of member',
        placeholder: 'Percentage / Number of member',
      },
      {
        label: 'Total in EGP',
        data: ['Total in EGP'],
        defaultValue: 'Total in EGP',
        placeholder: 'Total in EGP',
      },
    ],
  },
  {
    id: 6,

    header: {
      icon: <FaExclamationCircle className="text-red-600 text-2xl" />,
      title: 'Critical Case',
    },
    inputs: [
      {
        label: 'Number of services',
        data: ['Number of services'],
        defaultValue: 'Number of services',
        placeholder: 'Number of services',
      },
      {
        label: 'Percentage / Number of member',
        data: ['Percentage / Number of member'],
        defaultValue: 'Percentage / Number of member',
        placeholder: 'Percentage / Number of member',
      },
      {
        label: 'Total in EGP',
        data: ['Total in EGP'],
        defaultValue: 'Total in EGP',
        placeholder: 'Total in EGP',
      },
    ],
  },
];
const PremiumPlanData = () => {
  const programOne = {
    id: 1,
    header: {
      // icon: <FaStar className="text-blue-400 text-2xl" />,
      title: 'Plan 1',
    },
    inputs: [
      {
        label: 'Annual Limit',
        data: [10000, 12000, 13000],
        defaultValue: 10000,
        placeholder: 'Annual Limit',
      },
      {
        label: 'Applied Network',
        data: ['A', 'B', 'C'],
        defaultValue: 'A',
        placeholder: 'Applied Network',
      },
      {
        label: 'Geography',
        data: ['Egypt', 'Worldwide', 'Mena'],
        defaultValue: 'Egypt',
        placeholder: 'Geography',
      },
      {
        label: 'Service Accessibility',
        data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
        defaultValue: 'Direct Access',
        placeholder: 'Service Accessibility',
      },
    ],
  };
  const programTwo = {
    id: 2,
    header: {
      // icon: <FaMedal className="text-gray-400 text-2xl" />,
      title: 'Plan 2',
    },
    inputs: [
      {
        label: 'Annual Limit',
        data: [10000, 12000, 13000],
        defaultValue: 10000,
        placeholder: 'Annual Limit',
      },
      {
        label: 'Applied Network',
        data: ['A', 'B', 'C'],
        defaultValue: 'A',
        placeholder: 'Applied Network',
      },
      {
        label: 'Geography',
        data: ['Egypt', 'Worldwide', 'Mena'],
        defaultValue: 'Egypt',
        placeholder: 'Geography',
      },
      {
        label: 'Service Accessibility',
        data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
        defaultValue: 'Direct Access',
        placeholder: 'Service Accessibility',
      },
    ],
  };
  const programThree = {
    id: 3,
    header: {
      // icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'Plan 3',
    },
    inputs: [
      {
        label: 'Annual Limit',
        data: [10000, 12000, 13000],
        defaultValue: 10000,
        placeholder: 'Annual Limit',
      },
      {
        label: 'Applied Network',
        data: ['A', 'B', 'C'],
        defaultValue: 'A',
        placeholder: 'Applied Network',
      },
      {
        label: 'Geography',
        data: ['Egypt', 'Worldwide', 'Mena'],
        defaultValue: 'Egypt',
        placeholder: 'Geography',
      },
      {
        label: 'Service Accessibility',
        data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
        defaultValue: 'Direct Access',
        placeholder: 'Service Accessibility',
      },
    ],
  };
  const programFour = {
    id: 4,
    header: {
      // icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'Plan 4',
    },
    inputs: [
      {
        label: 'Annual Limit',
        data: [10000, 12000, 13000],
        defaultValue: 10000,
        placeholder: 'Annual Limit',
      },
      {
        label: 'Applied Network',
        data: ['A', 'B', 'C'],
        defaultValue: 'A',
        placeholder: 'Applied Network',
      },
      {
        label: 'Geography',
        data: ['Egypt', 'Worldwide', 'Mena'],
        defaultValue: 'Egypt',
        placeholder: 'Geography',
      },
      {
        label: 'Service Accessibility',
        data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
        defaultValue: 'Direct Access',
        placeholder: 'Service Accessibility',
      },
    ],
  };
  const plans = [programOne, programTwo, programThree, programFour];
  return (
    <PlanData
      plans={plans}
      nextNavigation={'/premium-package/healthcare-services'}
      prevNavigation={'/select-package/ready'}
    />
  );
};

export default PremiumPlanData;
