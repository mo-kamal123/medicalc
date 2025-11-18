import Spinner from './spinner';

/**
 * AsyncState Component
 *
 * Small utility wrapper that centralizes the way we display loading and error
 * states across the application. This avoids duplicating spinner markup in
 * every screen and keeps feedback messages consistent.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isLoading - Flag that indicates the async request is in progress.
 * @param {boolean} props.isError - Flag that indicates the async request failed.
 * @param {string} [props.loadingText='Loading...'] - Optional helper text displayed with the spinner.
 * @param {string} [props.errorMessage='Something went wrong'] - Friendly error message for users.
 * @param {Function} [props.onRetry] - Optional retry handler that renders a retry button when provided.
 * @param {string} [props.retryLabel='Retry'] - Label for the retry button.
 * @param {boolean} [props.fullHeight=false] - Expands the wrapper to a minimum height for layout stability.
 * @param {React.ReactNode} props.children - Content to render when neither loading nor error state is active.
 * @param {string} [props.className=''] - Extra classes to customize the wrapper layout.
 * @returns {JSX.Element} Conditional UI for async states.
 */
const AsyncState = ({
  isLoading,
  isError,
  loadingText = 'Loading...',
  errorMessage = 'Something went wrong. Please try again.',
  onRetry,
  retryLabel = 'Retry',
  fullHeight = false,
  children,
  className = '',
}) => {
  const baseWrapper =
    'flex flex-col items-center justify-center text-center gap-4 px-4 py-6 rounded-xl border border-dashed border-main/40 bg-white/70';

  if (isLoading) {
    return (
      <div
        className={`${baseWrapper} ${className} ${
          fullHeight ? 'min-h-[220px]' : ''
        }`}
      >
        <Spinner text={loadingText} />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={`${baseWrapper} ${className} ${
          fullHeight ? 'min-h-[220px]' : ''
        }`}
      >
        <p className="text-lg font-semibold text-main">Request Failed</p>
        <p className="text-sm text-gray-600 max-w-md">{errorMessage}</p>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="px-4 py-2 rounded-lg bg-main text-white font-medium hover:bg-main/90 transition-colors"
          >
            {retryLabel}
          </button>
        )}
      </div>
    );
  }

  return children;
};

export default AsyncState;
