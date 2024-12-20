import { Progress } from "@/components/ui/progress";

interface CardGastosCategiriasProps {
  title: string;
  percentagens: number;
  valor: number;
}

export function CardGastosCategirias({
  title,
  valor,
  percentagens,
}: CardGastosCategiriasProps) {
  return (
    <div className="space-y-2.5">
      <div className="flex justify-between text-sm font-bold">
        <h4>{title}</h4>
        <span>{percentagens}%</span>
      </div>
      <Progress className="h-3 text-red-500" value={percentagens} />
      <div className="text-sm font-semibold text-textPrimary-1">{valor} Kz</div>
    </div>
  );
}
