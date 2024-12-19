import React from "react";
import { PaginationProps } from "./paginationTypes"
import { getPaginationArray } from "./pagination"

export const CustomPagination= ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const paginationArray = getPaginationArray(currentPage, totalPages);

  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
      {/* Previous Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      {/* Pagination Numbers */}
      {paginationArray.map((item, index) => (
        <button
          key={index}
          onClick={() => typeof item === "number" && onPageChange(item)}
          disabled={currentPage === item}
          style={{
            fontWeight: currentPage === item ? "bold" : "normal",
            cursor: item === "..." ? "default" : "pointer",
          }}
        >
          {item}
        </button>
      ))}

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
