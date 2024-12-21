import { Container } from "@/components/container";
import { HeaderPages } from "@/components/header-pages";
import { CardTransacoesDashBord } from "./components/card-transacoes-dashbord";
import { CardCategirias } from "./components/card-categorias";
import { CardGrafico } from "./components/card-grafico";
import { CardInvesReceiDesp } from "./card-inves-recei-desp";
import { CardAddTransacoes } from "./components/card-add-transacoes";

export function Home() {
  return (
    <Container>
      <div className=" pb-8">
        <HeaderPages title="Dashbord" />
        <div className="flex gap-8 justify-between">
          <div className="w-[886px] space-y-6">
            <CardAddTransacoes />
            <CardInvesReceiDesp />
            <div className=" flex gap-4">
              <CardGrafico />
              <CardCategirias />
            </div>
          </div>
          <CardTransacoesDashBord />
        </div>
      </div>
    </Container>
  );
}
