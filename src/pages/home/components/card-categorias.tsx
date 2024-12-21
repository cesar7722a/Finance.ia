import { CardGastosCategirias } from "./card-gastos-categorias";

export function CardCategirias() {
  return (
    <div className="border border-white/10 w-[529px] rounded-xl space-y-6 p-6">
      <h3 className="text-lg font-bold">Gastos por categoria</h3>
      <div className="h-px bg-white/10" />
      <CardGastosCategirias title="Moradia" valor={2500} percentagens={50} />
      <CardGastosCategirias
        title="Alimentação"
        valor={1500}
        percentagens={40}
      />
      <CardGastosCategirias title="Saúde" valor={3200} percentagens={30} />
      <CardGastosCategirias title="Transporte" valor={1500} percentagens={20} />
    </div>
  );
}
