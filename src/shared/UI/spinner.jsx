import React from 'react';

/**
 * Spinner Component
 *
 * A reusable loading spinner component that can be used throughout the application
 * to indicate loading states for both API requests and route transitions.
 *
 * @param {Object} props - Component props
 * @param {string} props.size - Size of the spinner ('sm', 'md', 'lg', 'xl'). Default: 'md'
 * @param {string} props.color - Color of the spinner. Default: 'text-main'
 * @param {string} props.className - Additional CSS classes to apply
 * @param {string} props.text - Optional text to display below the spinner
 * @param {boolean} props.fullScreen - If true, displays spinner as full-screen overlay. Default: false
 *
 * @returns {JSX.Element} Spinner component
 *
 * @example
 * // Basic usage
 * <Spinner />
 *
 * @example
 * // With text
 * <Spinner text="Loading data..." />
 *
 * @example
 * // Full screen overlay
 * <Spinner fullScreen text="Loading..." />
 *
 * @example
 * // Custom size and color
 * <Spinner size="lg" color="text-blue-500" />
 */
const Spinner = ({
  size = 'lg',
  color = 'text-main',
  className = '',
  text = '',
  fullScreen = false,
}) => {
  // Size mapping for spinner dimensions
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  // Get size class, default to 'md' if invalid
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  // Base spinner SVG component
  const SpinnerSVG = () => (
    <svg
      className={`${sizeClass} ${color} animate-spin ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Loading"
    >
      {/* Outer circle with opacity */}
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      {/* Inner path with animated opacity */}
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );

  // Full screen overlay spinner
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex flex-col items-center justify-center px-4">
        <SpinnerSVG />
        {text && (
          <p
            className={`mt-3 sm:mt-4 ${color} font-medium text-sm sm:text-base text-center`}
          >
            {text}
          </p>
        )}
      </div>
    );
  }

  // Inline spinner with optional text
  return (
    <div className="flex flex-col items-center justify-center">
      <SpinnerSVG />
      {text && (
        <p className={`mt-2 sm:mt-3 ${color} font-medium text-xs sm:text-sm`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default Spinner;
