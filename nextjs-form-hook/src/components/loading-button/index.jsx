import React from 'react';

interface LoadingButtonProps {
  isSubmitting: boolean;
  type: "button" | "submit";
  text: string;
  loadingText?: string;
  className?: string;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isSubmitting,
  type,
  text,
  loadingText = 'Finalizando...',
  className = '',
}) => {

  return (
    <button 
      className={`bg-gray-800 w-full rounded-md text-white px-5 py-3 ${className}`} 
      type={type}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <div className="flex justify-center items-center">
          <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          {loadingText}
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default LoadingButton;