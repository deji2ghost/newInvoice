import { ColumnDef } from "@tanstack/react-table";

export interface TableProps<T> {
  data: any[];
  columns: ColumnDef<T, any>[];
  overview?: boolean
  isLoading?: boolean;
  error?: string | null | undefined;
  currentPage?: number;
  totalCount?: number;
  pageSize?: number;
  onPageChange?: (newPage: number) => void;
}