import Header from "./components/header-perfil-github/header";
import Repositorios from "./components/main-repositorio-github/repositorios";
import { Main } from "./components/main-repositorio-github/StyleComponents/MainRepositorio";

import ArrowTop from "./components/arrow-top/ArrowTop";

const App = () => {
  return (
    <>
      <Header/>
      <Main>
        <Repositorios/>
      </Main>
      <ArrowTop/>
    </>
  )
}

export default App
