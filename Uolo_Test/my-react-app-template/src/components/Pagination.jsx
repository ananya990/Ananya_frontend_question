function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        ◀ Previous
      </button>

      <span className="font-semibold">Page {page}</span>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => setPage(page + 1)}
      >
        Next ▶
      </button>
    </div>
  );
}

export default Pagination;
