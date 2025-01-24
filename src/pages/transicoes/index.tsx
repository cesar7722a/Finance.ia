import { Container } from "@/components/container";
import { ContainerHeaderPages } from "@/components/container-header-pages";
import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";
import { Table } from "./components/table/table";
import { FormEvent, useState } from "react";
import { Modal } from "@/components/modal-add-transicoes";
import { ModalEditTransacao } from "./components/modal-edit-transicao";
import { ModalConfirmDelete } from "@/components/modal-confirm-delete";

export function Transicoes() {
  const [openModalTransicoes, setOpenModalTransicoes] =
    useState<boolean>(false);
  const [openModalEditTransicoes, setOpenModalEditTransicoes] =
    useState<boolean>(false);
  const handleOpenModalTransicoes = () => {
    setOpenModalTransicoes(true);
  };
  const [openModalConfirmDelete, setOpenModalConfirmDelete] = useState(true);

  const ClosedModalAddTransicao = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    setOpenModalTransicoes(false);
  };
  const ClosedModalEditTransicoes = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    setOpenModalEditTransicoes(false);
  };
  const handleOpenModalEditTransicao = () => {
    setOpenModalEditTransicoes(true);
  };

  return (
    <Container>
      <ContainerHeaderPages>
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button
          onClick={handleOpenModalTransicoes}
          className="py-2 px-4 bg-brandPrimary-1 hover:bg-brandPrimary-1/80  rounded-full space-x-2 text-sm font-bold"
        >
          <span>Adicionar Transação</span>
          <ArrowDownUp className="size-4" />
        </Button>
      </ContainerHeaderPages>
      <Table handleOpenModalEditTransicao={handleOpenModalEditTransicao} />
      {openModalTransicoes && (
        <Modal ClosedModalAddTransicao={ClosedModalAddTransicao} />
      )}
      {openModalEditTransicoes && (
        <ModalEditTransacao
          ClosedModalEditTransicoes={ClosedModalEditTransicoes}
        />
      )}

      {openModalConfirmDelete && <ModalConfirmDelete />}
    </Container>
  );
}
