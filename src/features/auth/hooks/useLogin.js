import { useMutation } from '@tanstack/react-query';
import { login } from '../api/authApi';
import { useDispatch } from 'react-redux';
import { log_in } from '../store/auth-slice';
// import { toast } from 'sonner';

/**
 * Custom Hook: useLogin
 *
 * React Query mutation hook for handling user authentication.
 * Manages login API call, token storage, and Redux state updates.
 *
 * Features:
 * - Makes login API request
 * - Stores authentication token in localStorage
 * - Updates Redux auth state on success
 * - Handles errors appropriately
 *
 * @returns {Object} Mutation object from React Query with:
 *   - mutate: Function to trigger login
 *   - isLoading: Boolean indicating loading state
 *   - isError: Boolean indicating error state
 *   - error: Error object if request failed
 *   - data: Response data on success
 *
 * @example
 * const { mutate: loginUser, isLoading } = useLogin();
 *
 * // Trigger login
 * loginUser({ mobile: '01234567890', password: 'password123' });
 */
export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    // Mutation function - called when mutate is invoked
    mutationFn: login,

    // Success handler - called when login is successful
    onSuccess: (data) => {
      // Store authentication token in localStorage for persistence
      // Token will be used by axios interceptors for subsequent API calls
      localStorage.setItem('token', data.data.token);

      // Update Redux auth state to mark user as logged in
      dispatch(log_in());

      // TODO: Remove console.log in production
      console.log('Login successful, token stored');

      // ✅ Optional: Show success toast notification
      // toast.success('Login successful!', {
      //   description: 'Welcome back 👋',
      // });
    },

    // Error handler - called when login fails
    onError: (error) => {
      // Log error for debugging
      console.error('Login error:', error);

      // ❌ Optional: Show error toast notification
      // toast.error(error.response?.data?.message || 'Login failed');
    },

    // Disable automatic retries for login
    // Failed login attempts should not be automatically retried
    retry: false,
  });
};
