import { LucideIcon } from "lucide-react";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface CardTransacoesProps {
  title: string;
  data: string;
  valor: number;
  Icon: LucideIcon;
  variantValorColor: "primary" | "secondary" | "terciary" | undefined;
}

export function CardTransacoes({
  data,
  Icon,
  title,
  valor,
  variantValorColor,
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
      <ValorTransacoes valor={valor} colors={variantValorColor} />
    </div>
  );
}

const spanVariants = tv({
  base: "font-bold text-sm",
  variants: {
    colors: {
      primary: "text-white",
      secondary: "text-redPrimary-1",
      terciary: "text-brandPrimary-1",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "primary",
  },
});

interface NewProps
  extends ComponentProps<`span`>,
    VariantProps<typeof spanVariants> {
  valor: number;
}

export function ValorTransacoes({ valor, colors, ...props }: NewProps) {
  return colors === "primary" || colors === "secondary" ? (
    <span {...props} className={spanVariants({ colors })}>
      -{valor} Kz
    </span>
  ) : (
    <span {...props} className={spanVariants({ colors })}>
      +{valor} Kz
    </span>
  );
}
