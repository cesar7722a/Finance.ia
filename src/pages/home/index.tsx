import { Container } from "@/components/container";
import { HeaderPages } from "@/components/header-pages";
import { Button } from "@/components/ui/button";
import { ArrowDownUp, CreditCard, Eye } from "lucide-react";

export function Home() {
  return (
    <Container>
      <div>
        <HeaderPages title="Dashboard" />
        <div className="flex gap-8 justify-between">
          <div className="w-[886px]">
            <div className="py-8 px-6 border border-white/10 rounded-xl bg-brand-2 space-y-3">
              <span className="flex gap-2 text-sm font-semibold items-center">
                <CreditCard className="size-4" />
                Saldo
              </span>
              <div className="flex justify-between items-center">
                <span className="flex gap-2 items-center">
                  <h2 className="text-4xl font-bold">2.770 Kz</h2>
                  <Eye />
                </span>
                <Button className="py-2 px-4 bg-brandPrimary-1 hover:bg-brandPrimary-1/80  rounded-full space-x-2 text-sm font-bold">
                  <span>Adicionar Transação</span>
                  <ArrowDownUp className="size-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[444px] border border-blue-700"></div>
        </div>
      </div>
    </Container>
  );
}
