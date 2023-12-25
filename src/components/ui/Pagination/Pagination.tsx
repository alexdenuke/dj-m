const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <button className="px-4 py-2 border rounded bg-white hover:bg-gray-100">
        &laquo; Prev
      </button>

      <button className="px-4 py-2 border rounded bg-blue-500 text-white">
        1
      </button>
      <button className="px-4 py-2 border rounded bg-white hover:bg-gray-100">
        2
      </button>
      <button className="px-4 py-2 border rounded bg-white hover:bg-gray-100">
        3
      </button>
      <button className="px-4 py-2 border rounded bg-white hover:bg-gray-100">
        4
      </button>
      <button className="px-4 py-2 border rounded bg-white hover:bg-gray-100">
        5
      </button>

      <button className="px-4 py-2 border rounded bg-white hover:bg-gray-100">
        Next &raquo;
      </button>
    </div>
  );
};


export default Pagination;