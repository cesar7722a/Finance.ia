import { ComponentProps } from "react";

interface TableCellProps extends ComponentProps<`td`> {
  name?: string;
}

export function TableCell(props: TableCellProps) {
  return <td className="text-left text-sm text-white px-4 py-4" {...props} />;
}
