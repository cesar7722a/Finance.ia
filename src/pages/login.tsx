import { Logo } from "../components/logo";
import logoGoogle from "../assets/logoGoogle.png";
import { Button } from "../components/ui/button";
import financeImagem from "../assets/Decorative_image.png";

export function Login() {
  return (
    <div className="flex">
      <div className="w-[720px] flex items-center justify-center h-screen">
        <div className="max-w-md space-y-8">
          <Logo />
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Bem-Vindo</h1>
            <p className="text-white/90">
              A Finance AI é uma plataforma de gestão financeira que utiliza IA
              para monitorar suas movimentações, e oferecer insights
              personalizados, facilitando o controle do seu orçamento.
            </p>
            <Button className="border w-full hover:bg-white/10 h-11 bg-white/5 py-2 px-4 rounded-md border-white/10 space-x-2">
              <img src={logoGoogle} alt="" />
              <span>Entrar com Google</span>
            </Button>
          </div>
        </div>
      </div>
      <figure className="w-[720px] py-4">
        <img width={720} src={financeImagem} alt="imagem finance.ia" />
      </figure>
    </div>
  );
}
