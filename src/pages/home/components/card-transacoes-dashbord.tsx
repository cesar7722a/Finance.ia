import { Button } from "@/components/ui/button";
import { CardTransacoes } from "./card-transacoe";
import { Barcode, Component, CreditCard } from "lucide-react";

export function CardTransacoesDashBord() {
  return (
    <div className="w-[444px] border border-white/10 rounded-xl p-6 space-y-5">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold">Transações</h4>
        <Button className="rounded-full border border-white/10 bg-transparent hover:bg-white/5">
          Ver mais
        </Button>
      </div>
      <div className="h-px bg-white/10" />
      <CardTransacoes
        Icon={Component}
        data="25 Nov, 2025"
        title="Salário"
        valor={3900}
        variantValorColor="terciary"
      />
      <CardTransacoes
        Icon={Component}
        data="25 Nov, 2025"
        title="Bitcoin"
        valor={3900}
        variantValorColor="primary"
      />
      <CardTransacoes
        Icon={CreditCard}
        data="25 Nov, 2025"
        title="Academia"
        valor={3900}
        variantValorColor="secondary"
      />
      <CardTransacoes
        Icon={Component}
        data="25 Nov, 2025"
        title="Aluguel"
        valor={3900}
        variantValorColor="secondary"
      />

      <CardTransacoes
        Icon={Barcode}
        data="25 Nov, 2025"
        title="Freelancing"
        valor={3900}
        variantValorColor="terciary"
      />
      <CardTransacoes
        Icon={Component}
        data="25 Nov, 2025"
        title="Freelancing"
        valor={3900}
        variantValorColor="terciary"
      />

      <CardTransacoes
        Icon={Component}
        data="25 Nov, 2025"
        title="Salário"
        valor={3900}
        variantValorColor="primary"
      />
      <CardTransacoes
        Icon={Component}
        data="25 Nov, 2025"
        title="Bitcoin"
        valor={3900}
        variantValorColor="primary"
      />
      <CardTransacoes
        Icon={CreditCard}
        data="25 Nov, 2025"
        title="Academia"
        valor={3900}
        variantValorColor="secondary"
      />
      <CardTransacoes
        Icon={Component}
        data="25 Nov, 2025"
        title="Aluguel"
        valor={3900}
        variantValorColor="secondary"
      />

      <CardTransacoes
        Icon={Barcode}
        data="25 Nov, 2025"
        title="Freelancing"
        valor={3900}
        variantValorColor="terciary"
      />
    </div>
  );
}
