import { PiggyBank, TrendingDown, TrendingUp } from "lucide-react";

export function CardGrafico() {
  return (
    <div className=" py-6 px-8 flex flex-col gap-12 justify-center items-center rounded-xl border border-white/10 w-[346px]">
      <div className="size-[170px]">grafico vêm aqui</div>

      <div className="space-y-3 w-[227px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center text-white">
            <span className="flex items-center justify-center rounded-lg size-8 bg-brandPrimary-1/10">
              <TrendingUp className="size-4 text-brandPrimary-1" />
            </span>
            <span className="text-sm font-semibold text-textPrimary-1">
              Ganhos
            </span>
          </div>
          <span className="text-sm font-bold">60%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center text-white">
            <span className="flex items-center justify-center rounded-lg size-8 bg-redPrimary-2">
              <TrendingDown className="size-4 text-redPrimary-1" />
            </span>
            <span className="text-sm font-semibold text-textPrimary-1">
              Gastos
            </span>
          </div>
          <span className="text-sm font-bold">22%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center text-white">
            <span className="flex items-center justify-center rounded-lg size-8 bg-white/10">
              <PiggyBank className="size-4" />
            </span>
            <span className="text-sm font-semibold text-textPrimary-1">
              Investido
            </span>
          </div>
          <span className="text-sm font-bold">18%</span>
        </div>
      </div>
    </div>
  );
}
