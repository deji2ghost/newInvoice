import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TableProps } from "./tableTypes";
import { CustomPagination } from "../../ui/pagination/customPagination";

const Table = <T,>({
  data,
  columns,
  overview,
  isLoading,
  error,
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}: TableProps<T>) => {
  const totalPages = pageSize && Math.ceil((totalCount || 0) / pageSize);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-4">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (data?.length === 0) {
    return (
      <div className="flex justify-center items-center py-4">
        <p>No data available.</p>
      </div>
    );
  }

  return (
    <>
      <table className="w-full">
        <thead className="">
          {table?.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup?.id} className="">
              {headerGroup?.headers.map((header) => (
                <th
                  key={header?.id}
                  className={`${
                    overview
                      ? "bg-[#EAEAEA] border border-[#BDBDBD]"
                      : "bg-[#FAFAFA] border border-[#EAEAEA]"
                  } "border w-[20%] text-left p-[12px] font-bold text-[14px] leading-[20.3px]" `}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {table?.getRowModel()?.rows.map((row) => (
            <tr
              key={row.id}
              className={`${
                overview && "border-none"
              } " border-b border-[#EAEAEA] "`}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-3 font-medium text-[16px] leading-[23.2px] "
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      {/* <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> */}
      {currentPage && onPageChange && totalPages && (
        <CustomPagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default Table;
