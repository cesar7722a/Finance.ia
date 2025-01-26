import { Input } from "@/components/input";
import { InputDia } from "@/components/input-dia";
import { InputSelect } from "@/components/input-select";
import { Button } from "@/components/ui/button";
import { Trash2, X } from "lucide-react";

type ModalProps = {
  ClosedModalEditTransicoes: (e: React.FormEvent<HTMLElement>) => void;
};

export function ModalEditTransacao({ ClosedModalEditTransicoes }: ModalProps) {
  return (
    <div className=" fixed z-20 bg-brand-1/60 top-0 left-0 right-0 bottom-0 flex items-center justify-end">
      <div className="text-white border-none rounded-lg scrollbar-thumb-brand-5 scrollbar-track-brand-2 overflow-x-hidden h-[584px] hover:scrollbar-thumb-white space-y-6 scrollbar-hover-thumb scrollbar overflow-y-auto scrollbar-custom">
        <form className="bg-brand-4 p-5 rounded-lg rounded-tr-none rounded-br-none space-y-5 w-[350px]">
          <div className="flex justify-between items-center">
            <h1 className="text-center text-xl font-bold">Transação</h1>
            <span onClick={ClosedModalEditTransicoes}>
              <X className="size-5 cursor-pointer" />
            </span>
          </div>
          <div className="h-px bg-white/10 w-full px-4" />
          <div className="space-y-24">
            <div className="space-y-5">
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
              <InputSelect
                label="Categoria"
                options={["Moradia", "Alimentação", "Trnsporte", "Lazer"]}
              />
              <InputDia label="Data" />
              <div className="flex gap-2 text-redPrimary-1 hover:text-redPrimary-1/80 cursor-pointer justify-end py-2">
                <span className="text-xs font-bold">Deletar Transação</span>
                <Trash2 className="size-4" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="px-4 py-3 h-16 bg-white/10 rounded-md"></div>
              <div className="flex gap-3">
                <Button
                  onClick={ClosedModalEditTransicoes}
                  className="py-2 px-4 rounded-lg w-[149px]  text-sm font-bold text-white  bg-brand-5 hover:bg-brand-5/50"
                >
                  Cancelar
                </Button>
                <Button className="disabled:bg-brandPrimary-1/60 py-2 px-4 rounded-lg w-[149px]  text-sm font-bold text-white bg-brandPrimary-1 hover:bg-brandPrimary-1/80">
                  Salvar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
