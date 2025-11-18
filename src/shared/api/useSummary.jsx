import { useMutation } from '@tanstack/react-query';
// import { addSummaryResult } from '../store/summary-slice';  // Replace with your actual Redux action
import { fetchSummary } from './summary';
import { useSelector } from 'react-redux';

/**
 * Custom Hook: useSummary
 *
 * React Query mutation hook for fetching the final summary PDF/table payload.
 * Automatically blocks calls when there is no calculation id and exposes the
 * usual mutation helpers (loading/error/data).
 *
 * @returns {Object} Mutation object from React Query.
 */
const useSummary = () => {
  const calculationId = useSelector((state) => state.client.calculationId);

  return useMutation({
    mutationFn: () => {
      if (!calculationId) {
        throw new Error('No calculationId found');
      }
      return fetchSummary(calculationId);
    },
    onSuccess: (data) => {
      // Debug: confirm summary payload was fetched successfully
      console.log('useSummary::onSuccess payload', data);
      // Dispatch to Redux to save summary result
      // dispatch(addSummaryResult(data));
    },
    onError: (error) => {
      // Debug: log server/client errors for easier troubleshooting
      console.error('useSummary::onError fetching summary:', error);
    },
    retry: false, // disable automatic retries
  });
};

export default useSummary;
