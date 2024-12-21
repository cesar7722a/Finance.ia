import { Button } from "@/components/ui/button";
import { ArrowDownUp, Eye, Wallet } from "lucide-react";

export function CardAddTransacoes() {
  return (
    <div className="py-8 px-6 border border-white/10 rounded-xl bg-brand-2 space-y-3">
      <div className="flex gap-2 items-center text-white">
        <span className="flex items-center justify-center rounded-lg size-10 bg-brand-3">
          <Wallet className="size-4" />
        </span>
        <span className="text-sm font-semibold text-textPrimary-1">Saldo</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="flex gap-2 items-center">
          <h2 className="text-4xl font-bold">2.770 Kz</h2>
          <Eye />
        </span>
        <Button className="py-2 px-4 bg-brandPrimary-1 hover:bg-brandPrimary-1/80  rounded-full space-x-2 text-sm font-bold">
          <span>Adicionar Transação</span>
          <ArrowDownUp className="size-4" />
        </Button>
      </div>
    </div>
  );
}
