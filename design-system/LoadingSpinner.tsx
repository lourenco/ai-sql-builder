import {ArrowPathIcon} from '@heroicons/react/24/outline';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <ArrowPathIcon className="h-8 w-8 animate-spin text-neutral-100" />
    </div>
  );
}

export default LoadingSpinner
