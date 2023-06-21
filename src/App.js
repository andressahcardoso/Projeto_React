import "./styled.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import HomePage from "./components/Pages/Home/HomePage";
import StyledGlobal, { ContainerMain, PainelVideos, TelaInteira } from "./styledGlobal";

function App() {

  function reproduzVideo(onClick) {
    alert("O vídeo está sendo reproduzido")
  }

  return (
   <>
    <StyledGlobal/>

    <TelaInteira>
      <Header/>
      <ContainerMain>
        <Nav/>
        <PainelVideos>
          <HomePage reproduz={reproduzVideo} />
        </PainelVideos>
      </ContainerMain>
      <Footer/>
    </TelaInteira>

   </>
  );
}

export default App;
