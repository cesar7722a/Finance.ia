import { Container } from "@/components/container";
import { HeaderPages } from "@/components/header-pages";
import { CardTransacoesDashBord } from "./components/card-transacoes-dashbord";
import { CardCategirias } from "./components/card-categorias";
import { CardGrafico } from "./components/card-grafico";
import { CardAddTransacoes } from "./components/card-add-transacoes";
import { CardInvesReceiDesp } from "./components/card-inves-recei-desp";
import React from "react";
import { InputSelect } from "@/components/input-select";
import { Input } from "@/components/input";

export function Home() {
  const [isModal, setIsMOdal] = React.useState<boolean>(true);
  return (
    <>
      <Container>
        <div className="pb-8">
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
      {isModal && (
        <div className="fixed z-20 bg-brand-1/60 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <form
            action=""
            className="bg-brand-4 p-5 rounded-lg space-y-5 w-[350px]"
          >
            <div>
              <h1 className="text-center text-xl font-bold">
                Adicionar Transação
              </h1>
              <h2 className="text-textPrimary-1 font-semibold text-center text-sm">
                Insira as informações abaixo
              </h2>
            </div>
            <Input
              label="Título"
              placeholder="Título"
              name="titulo"
              type="text"
            />
            <Input
              label="Valor"
              placeholder="0.000,00 Kz"
              name="Valor"
              type="text"
            />
            <InputSelect
              label="Tipo da transação"
              options={["Gasto", "Ganho", "Investimento"]}
            />
            <InputSelect
              label="Método de pagamento"
              options={["Pix", "Cartão", "Boleto"]}
            />
          </form>
        </div>
      )}
    </>
  );
}
