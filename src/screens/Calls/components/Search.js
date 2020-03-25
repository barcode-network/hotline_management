import React from 'react';

export const Search = ({ onChange, value }) => {
  return (
    <div className="my-8">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <form className="rounded-lg flex bg-white p-1 border w-full">
          <input
            className="rounded-lg px-4 py-2 flex-1 mr-4"
            type="text"
            placeholder="Search Calls"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-100 text-blue-600 px-4 rounded hover:bg-blue-200"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
