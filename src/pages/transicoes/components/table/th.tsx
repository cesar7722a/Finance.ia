import { ComponentProps } from "react";

interface TableHederProps extends ComponentProps<`th`> {
  name?: string;
}

export function TableHeader(props: TableHederProps) {
  return <th className="text-left px-4 py-4 text-sm text-white" {...props} />;
}
