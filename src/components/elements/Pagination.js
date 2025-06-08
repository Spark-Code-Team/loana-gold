
"use client";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 my-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            w-10 
            h-10 
            flex 
            items-center 
            justify-center 
            rounded-lg 
            border-[1px]
            border-primary
            text-primary 
            ${page == currentPage ? " text-white bg-primary" : "bg-white "}
          `}
        >
          {page}
        </button>
        ))}
    </div>
  );
};

export default Pagination;
