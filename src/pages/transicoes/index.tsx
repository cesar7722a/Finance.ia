import { Container } from "@/components/container";
import { ContainerHeaderPages } from "@/components/container-header-pages";
import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";
import { Table } from "./components/table/table";

export function Transicoes() {
  return (
    <Container>
      <ContainerHeaderPages>
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="py-2 px-4 bg-brandPrimary-1 hover:bg-brandPrimary-1/80  rounded-full space-x-2 text-sm font-bold">
          <span>Adicionar Transação</span>
          <ArrowDownUp className="size-4" />
        </Button>
      </ContainerHeaderPages>
      <Table />
    </Container>
  );
}
