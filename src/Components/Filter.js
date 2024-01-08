import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  function handleFilterClick(title) {
    setCategory(title);
  }

  return (
    <div className="flex w-11/12 flex-wrap space-x-3 gap-y-1 justify-center py-3">
      {filterData.map((data) => (
        <button
        className={`rounded-md px-2 py-1 bg-slate-800 text-white text-lg hover:bg-opacity-50 border-2 transition-all duration-300
        ${category === data.title ? "bg-opacity-50 border-white" : "bg-opacity-50 border-transparent"}`}

          key={data.id}
          onClick={() => handleFilterClick(data.title)} 
        >
          {data.title} 
        </button>
      ))}
    </div>
  );
};

export default Filter;


