import { Card } from "@/components/ui/card";
import { PiggyBank, TrendingDown, TrendingUp } from "lucide-react";

export function CardInvesReceiDesp() {
  return (
    <div className="flex gap-4">
      <Card className=" w-[346px] space-y-3 border border-white/10 bg-white/5 rounded-xl p-6">
        <div className="flex gap-2 items-center text-white">
          <span className="flex items-center justify-center rounded-lg size-10 bg-white/10">
            <PiggyBank className="size-4" />
          </span>
          <span className="text-sm font-semibold text-textPrimary-1">
            Investido
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white">3.500 Kz</h2>
      </Card>

      <Card className=" w-[254px] space-y-3 border border-white/10 bg-transparent rounded-xl p-6">
        <div className="flex gap-2 items-center text-white">
          <span className="flex items-center justify-center rounded-lg size-10 bg-brandPrimary-1/10">
            <TrendingUp className="size-4 text-brandPrimary-1" />
          </span>
          <span className="text-sm font-semibold text-textPrimary-1">
            Receita
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white">8.500 Kz</h2>
      </Card>

      <Card className=" w-[254px] space-y-3 border border-white/10 bg-transparent rounded-xl p-6">
        <div className="flex gap-2 items-center text-white">
          <span className="flex items-center justify-center rounded-lg size-10 bg-redPrimary-2">
            <TrendingDown className="size-4 text-redPrimary-1" />
          </span>
          <span className="text-sm font-semibold text-textPrimary-1">
            Despesas
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white">2.940 Kz</h2>
      </Card>
    </div>
  );
}
