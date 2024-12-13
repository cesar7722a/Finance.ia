import { Logo } from "../logo";
import logoGoogle from "../../assets/logoGoogle.png";
import { Button } from "../ui/button";

export function Login() {
  return (
    <div>
      <div className="max-w-3xl flex items-center justify-center flex-col border h-screen">
        <div className="max-w-md space-y-8">
          <Logo />
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Bem-Vindo</h1>
            <p className="font-normal">
              A Finance AI é uma plataforma de gestão financeira que utiliza IA
              para monitorar suas movimentações, e oferecer insights
              personalizados, facilitando o controle do seu orçamento.
            </p>
            <Button className="border w-full h-11 bg-white/5 py-2 px-4 rounded-md border-white/10 space-x-2">
              <img src={logoGoogle} alt="" />
              <span>Entrar com Google</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
