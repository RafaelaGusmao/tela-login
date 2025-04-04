import Cabecalho from "../../componentes/Cabecalho/Cabecalho";
import Welcome from "../../componentes/Welcome/Welcome";
import Rodape from "../../componentes/Rodape/Rodape";
import TabelaLivro from "../../Tabelas/TabelaLivro";
import TabelaEmprestimo from "../../Tabelas/TabelaEmprestimo";
import TabelaAluno from "../../Tabelas/TabelaAluno";

function PHome() {
    return (
      <>
         <Cabecalho/>
         <TabelaAluno/>
         <Rodape/>
      </>
    );
}

export default PHome;