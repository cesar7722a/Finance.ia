import { Container } from "@/components/container";
import { HeaderPages } from "@/components/header-pages";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowDownUp,
  Eye,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { CardGastosCategirias } from "./components/card-gastos-categorias";

export function Home() {
  return (
    <Container>
      <div>
        <HeaderPages title="Dashbord" />
        <div className="flex gap-8 justify-between">
          <div className="w-[886px] space-y-6">
            <div className="py-8 px-6 border border-white/10 rounded-xl bg-brand-2 space-y-3">
              <div className="flex gap-2 items-center text-white">
                <span className="flex items-center justify-center rounded-lg size-10 bg-brand-3">
                  <Wallet className="size-4" />
                </span>
                <span className="text-sm font-semibold text-textPrimary-1">
                  Saldo
                </span>
              </div>

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

            <div className="flex gap-4">
              <Card className=" w-[346px] space-y-3 border border-white/10 bg-white/5 rounded-xl p-6">
                <div className="flex gap-2 items-center text-white">
                  <span className="flex items-center justify-center rounded-lg size-10 bg-white/10">
                    <PiggyBank className="size-4" />
                  </span>
                  <span className="text-sm font-semibold text-textPrimary-1">
                    Investido
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">3.500 Kz</h2>
              </Card>

              <Card className=" w-[254px] space-y-3 border border-white/10 bg-transparent rounded-xl p-6">
                <div className="flex gap-2 items-center text-white">
                  <span className="flex items-center justify-center rounded-lg size-10 bg-brandPrimary-1/10">
                    <TrendingUp className="size-4 text-brandPrimary-1" />
                  </span>
                  <span className="text-sm font-semibold text-textPrimary-1">
                    Receita
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">8.500 Kz</h2>
              </Card>

              <Card className=" w-[254px] space-y-3 border border-white/10 bg-transparent rounded-xl p-6">
                <div className="flex gap-2 items-center text-white">
                  <span className="flex items-center justify-center rounded-lg size-10 bg-redPrimary-2">
                    <TrendingDown className="size-4 text-redPrimary-1" />
                  </span>
                  <span className="text-sm font-semibold text-textPrimary-1">
                    Despesas
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">2.940 Kz</h2>
              </Card>
            </div>

            <div className=" flex gap-4">
              <div className=" py-6 px-8 flex flex-col gap-12 justify-center items-center rounded-xl border border-white/10 w-[346px]">
                <div className="size-[170px]">grafico vêm aqui</div>

                <div className="space-y-3 w-[227px]">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center text-white">
                      <span className="flex items-center justify-center rounded-lg size-8 bg-brandPrimary-1/10">
                        <TrendingUp className="size-4 text-brandPrimary-1" />
                      </span>
                      <span className="text-sm font-semibold text-textPrimary-1">
                        Ganhos
                      </span>
                    </div>
                    <span className="text-sm font-bold">60%</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center text-white">
                      <span className="flex items-center justify-center rounded-lg size-8 bg-redPrimary-2">
                        <TrendingDown className="size-4 text-redPrimary-1" />
                      </span>
                      <span className="text-sm font-semibold text-textPrimary-1">
                        Gastos
                      </span>
                    </div>
                    <span className="text-sm font-bold">22%</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center text-white">
                      <span className="flex items-center justify-center rounded-lg size-8 bg-white/10">
                        <PiggyBank className="size-4" />
                      </span>
                      <span className="text-sm font-semibold text-textPrimary-1">
                        Investido
                      </span>
                    </div>
                    <span className="text-sm font-bold">18%</span>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 w-[529px] rounded-xl space-y-6 p-6">
                <h3 className="text-lg font-bold">Gastos por categoria</h3>
                <div className="h-px bg-white/10" />
                <CardGastosCategirias
                  title="Moradia"
                  valor={2500}
                  percentagens={50}
                />
                <CardGastosCategirias
                  title="Alimentação"
                  valor={1500}
                  percentagens={40}
                />
                <CardGastosCategirias
                  title="Saúde"
                  valor={3200}
                  percentagens={30}
                />
                <CardGastosCategirias
                  title="Transporte"
                  valor={1500}
                  percentagens={20}
                />
              </div>
            </div>
          </div>
          <div className="w-[444px] border border-blue-700"></div>
        </div>
      </div>
    </Container>
  );
}
