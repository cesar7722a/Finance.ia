import { FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type HeaderPagesProps = {
  title: string;
};

export function HeaderPages({ title }: HeaderPagesProps) {
  return (
    <div className="py-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex">
        <button className="py-2 px-4 flex gap-2">
          <span className="text-sm font-bold">Relatório IA</span>
          <FileText className="size-4" />
        </button>
        <span>
          <Select>
            <SelectTrigger className="px-4 py-2 rounded-full space-x-2 border-white/10">
              <SelectValue placeholder="Novembro" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="outubro">Outubro</SelectItem>
              <SelectItem value="setembro">Setembro</SelectItem>
              <SelectItem value="agosto">Agosto</SelectItem>
            </SelectContent>
          </Select>
        </span>
      </div>
    </div>
  );
}
