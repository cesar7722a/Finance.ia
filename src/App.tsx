import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/autenticate/login";
import { Home } from "./pages/home";
import { Layout } from "./layout/layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
