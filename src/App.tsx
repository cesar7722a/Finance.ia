import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/autenticate/login";
import { Home } from "./pages/home";
import { Layout } from "./layout/layout";
import { Transicoes } from "./pages/transicoes";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/transicoes" element={<Transicoes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
