import { X } from "lucide-react";
import { Button } from "./ui/button";

interface ModalConfirmDeleteProps {
  CloseModalConfirmDelete: () => void;
}

export function ModalConfirmDelete({
  CloseModalConfirmDelete,
}: ModalConfirmDeleteProps) {
  return (
    <div className=" fixed z-20 bg-brand-1/60 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="max-w-md h-36 bg-brand-4 rounded-lg p-5 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="size-[18px] flex justify-center items-center bg-redPrimary-1 rounded-full">
              <X className="size-4 text-black" />
            </span>
            <p className="flex-1 font-bold">Deseja deletar essa transação?</p>
            <X
              onClick={CloseModalConfirmDelete}
              className="size-4 cursor-pointer hover:text-white/80"
            />
          </div>
          <p className="text-sm text-textPrimary-1">
            Uma vez deletada não poderá recuperá-la.
          </p>
        </div>
        <div className="flex justify-end gap-2.5">
          <Button
            onClick={CloseModalConfirmDelete}
            className="h-9 rounded-md bg-brand-5 hover:bg-brand-5/60"
          >
            Cancelar
          </Button>
          <Button className="h-9 rounded-md bg-redPrimary-1 hover:bg-redPrimary-1/80">
            Deletar
          </Button>
        </div>
      </div>
    </div>
  );
}
