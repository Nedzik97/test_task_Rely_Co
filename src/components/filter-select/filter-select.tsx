import React from 'react';

type FilterSelectProps = {
  label: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const FilterSelect: React.FC<FilterSelectProps> = ({
  label,
  options,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={`${label}Filter`}
        className="text-white font-semibold mb-1"
      >
        {`Filter by ${label}:`}
      </label>
      <div className="relative">
        <select
          id={`${label}Filter`}
          onChange={onChange}
          className="w-48 px-4 py-2 border border-gray-300 cursor-pointer rounded-lg 
					bg-black text-white appearance-none focus:outline-none"
        >
          <option value="">All</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
