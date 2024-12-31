import { ExternalLink, Trash2 } from "lucide-react";
import { TableCell } from "./td";
import { TableHeader } from "./th";

export function Table() {
  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-white/5">
            <TableHeader colSpan={2}>Nome</TableHeader>
            <TableHeader>Tipo</TableHeader>
            <TableHeader>Categoria</TableHeader>
            <TableHeader>Método</TableHeader>
            <TableHeader>Data</TableHeader>
            <TableHeader>Valor</TableHeader>
            <TableHeader></TableHeader>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map(() => (
            <tr className="border border-b-white/10 border-r-0 border-t-0 border-l-0">
              <TableCell colSpan={2}>Cesar</TableCell>
              <TableCell>investimento</TableCell>
              <TableCell>Moradia</TableCell>
              <TableCell>pix</TableCell>
              <TableCell className="text-textPrimary-1">
                12 de Março 2025
              </TableCell>
              <TableCell>12444</TableCell>

              <TableCell>
                <span className="flex gap-6 w-12">
                  <ExternalLink className="size-4 text-textPrimary-1 hover:text-textPrimary-1/70 cursor-pointer" />
                  <Trash2 className="size-4 text-textPrimary-1 hover:text-textPrimary-1/70 cursor-pointer" />
                </span>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
