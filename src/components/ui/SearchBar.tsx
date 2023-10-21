import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center border-b w-full rounded-md mx-20">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 flex-grow outline-none"
      />
      <button type="submit" className="p-2 hover:bg-gray-200 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l5.293 5.294a1 1 0 01-1.414 1.414l-5.293-5.293A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
