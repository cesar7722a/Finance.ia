import { Link } from "react-router";
import { Container } from "./container";
import LogoHearder from "../../src/assets/logo-hearder.svg";
import UserImg from "../../src/assets/Avatar.png";

export function Hearder() {
  return (
    <Container>
      <div className="py-4 flex justify-between">
        <nav className="flex gap-12 items-center">
          <Link to={"/"}>
            <img src={LogoHearder} alt="Logo finance.ia" />
          </Link>
          <ul className="flex gap-11 items-center">
            <Link to={"#"}>
              <li className="text-sm font-bold text-brandPrimary-1 hover:text-brandPrimary-1/80">
                Dashboard
              </li>
            </Link>
            <Link to={"#"}>
              <li className="text-sm font-bold text-textPrimary-1 hover:text-textPrimary-1/80">
                Transações
              </li>
            </Link>
            <Link to={"#"}>
              {" "}
              <li className="text-sm font-bold text-textPrimary-1 hover:text-textPrimary-1/80">
                Assinatura
              </li>
            </Link>
          </ul>
        </nav>

        <div className="border border-white/10 py-2 px-4 rounded-md">
          <div className="flex gap-2">
            <figure>
              <img src={UserImg} alt="" />
            </figure>
            <span className="text-sm">Alicia Koch</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
