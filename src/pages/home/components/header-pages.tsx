import { ContainerHeaderPages } from "@/components/container-header-pages";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText } from "lucide-react";

type HeaderPagesProps = {
  title: string;
};

export function HeaderPages({ title }: HeaderPagesProps) {
  return (
    <ContainerHeaderPages>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex">
        <button className="py-2 px-4 flex gap-2 hover:text-white/80">
          <span className="text-sm font-bold">Relatório IA</span>
          <FileText className="size-4" />
        </button>
        <span>
          <Select>
            <SelectTrigger className="w-32 py-2 px-4 rounded-full border border-white/10 font-bold hover:bg-white/5">
              <SelectValue placeholder="Novembro" />
            </SelectTrigger>
            <SelectContent className="bg-brand-1 text-white border-white/10">
              <SelectItem value="outubro">Outubro</SelectItem>
              <SelectItem value="setembro">Setembro</SelectItem>
              <SelectItem value="agosto">Agosto</SelectItem>
            </SelectContent>
          </Select>
        </span>
      </div>
    </ContainerHeaderPages>
  );
}
