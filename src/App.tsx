import Certificados from "./componentes/Certificados";
import Footer from "./componentes/Footer";
import Habilidades from "./componentes/Habilidades";
import Header from "./componentes/Header";
import Principal from "./componentes/Principal";
import Projetos from "./componentes/Projetos";
import SobreMim from "./componentes/SobreMim";


function App() {
  return (
    <>
      <Header/>
      <Principal/>
      <SobreMim/>
      <Certificados/>
      <Habilidades/>
      <Projetos/>
      <Footer/>
    </>
    );
}

export default App;
