import { Container } from "@/components/container";
import { CardTransacoesDashBord } from "./components/card-transacoes-dashbord";
import { CardCategirias } from "./components/card-categorias";
import { CardGrafico } from "./components/card-grafico";
import { CardAddTransacoes } from "./components/card-add-transacoes";
import { CardInvesReceiDesp } from "./components/card-inves-recei-desp";
import React, { FormEvent } from "react";
import { HeaderPages } from "./components/header-pages";
import { Modal } from "@/components/modal-add-transicoes";

export function Home() {
  const [isModal, setIsModal] = React.useState<boolean>(false);

  const OpenModal = () => {
    setIsModal(true);
  };
  const ClosedModal = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    setIsModal(false);
  };
  return (
    <>
      <Container>
        <div className="pb-8">
          <HeaderPages title="Dashbord" />
          <div className="flex gap-8 justify-between">
            <div className="w-[886px] space-y-6">
              <CardAddTransacoes OpenModal={OpenModal} />
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
      {isModal && <Modal ClosedModal={ClosedModal} />}
    </>
  );
}
