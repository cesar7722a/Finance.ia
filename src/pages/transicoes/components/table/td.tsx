import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<`td`> {
  className?: string;
}

export function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      className={twMerge("text-left text-sm text-white px-4 py-4", className)}
      {...props}
    />
  );
}
