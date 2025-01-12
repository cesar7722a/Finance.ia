import { Link } from "react-router";
import { Container } from "./container";
import LogoHearder from "../../src/assets/logo-hearder.svg";
import UserImg from "../../src/assets/Avatar.png";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export function Hearder() {
  const [menuActive, setMenuActive] = useState<number>();
  const menuHeader = [
    { id: 0, label: "Dashbord", url: "/" },
    { id: 1, label: "Transições", url: "/transicoes" },
    { id: 2, label: "Assinatura", url: "/assinatura" },
  ];

  const HandleMenu = (id: number) => {
    setMenuActive(id);
  };

  return (
    <Container>
      <div className="py-4 flex justify-between">
        <nav className="flex gap-12 items-center">
          <Link to={"/"}>
            <img src={LogoHearder} alt="Logo finance.ia" />
          </Link>
          <ul className="flex gap-11 items-center">
            {menuHeader.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={() => HandleMenu(item.id)}
              >
                <li
                  className={twMerge(
                    "text-sm font-bold text-textPrimary-1 hover:text-textPrimary-1/80",
                    menuActive === item.id
                      ? "text-brandPrimary-1 hover:text-brandPrimary-1/80"
                      : null
                  )}
                >
                  {item.label}
                </li>
              </Link>
            ))}
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
