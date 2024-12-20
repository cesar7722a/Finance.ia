import { LucideIcon } from "lucide-react";

interface CardTransacoesProps {
  title: string;
  data: string;
  valor: number;
  Icon: LucideIcon;
}

export function CardTransacoes({
  data,
  Icon,
  title,
  valor,
}: CardTransacoesProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-white/5 rounded-md">
          <Icon className="size-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold">{title}</h4>
          <span className="text-sm font-semibold text-textPrimary-1">
            {data}
          </span>
        </div>
      </div>
      <span>{valor}</span>
    </div>
  );
}
