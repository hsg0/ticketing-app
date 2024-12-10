import React from 'react';

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    // Default color
    let color = 'bg-slate-700';

    // Check if status is valid and is a string
    if (typeof status === 'string') {
      switch (status.toLowerCase()) {
        case 'done':
          color = 'bg-green-200';
          break;
        case 'started':
          color = 'bg-yellow-200';
          break;
        case 'not started':
          color = 'bg-red-200';
          break;
        default:
          color = 'bg-slate-700';
      }
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status || 'Unknown'}
    </span>
  );
};

export default StatusDisplay;