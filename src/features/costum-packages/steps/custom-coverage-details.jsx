import { useSearchParams } from 'react-router-dom';
import CoverageDetails from '../../../shared/components/coverage-details';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';

const CustomCoverageDetails = () => {
  const [searchParams] = useSearchParams();
  const count = Number(searchParams.get('count')) || 1;

  // Generate plans dynamically
  const icons = [FaStar, FaMedal, FaCrown];
  const plans = Array.from({ length: count }, (_, i) => {
    const Icon = icons[i % icons.length]; // cycle through icons
    return {
      icon: (
        <Icon
          className={`${i === 0 ? 'text-blue-400' : i === 1 ? 'text-gray-400' : 'text-yellow-400'} text-2xl`}
        />
      ),
      title: `Plan ${i + 1}`,
      data: {
        employees: Math.floor(Math.random() * 100) + 10, // random employee count for demo
        pooled: (Math.random() * 10_000_000).toFixed(0),
        total: (Math.random() * 10_000_000).toFixed(0),
      },
    };
  });

  // Add summary/footer row
  plans.unshift({
    title: 'Employees',
    data: {
      employees: 'Total Employees',
      pooled: 'Total Premium with pooled benefit',
      total: 'Total Premium EGP',
    },
  });

  return (
    <div>
      <CoverageDetails plans={plans} />
    </div>
  );
};

export default CustomCoverageDetails;
