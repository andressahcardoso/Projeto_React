import "./styled.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import HomePage from "./components/Pages/Home/HomePage";

function App() {

  function reproduzVideo(onClick) {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <body>
    <div class="tela-inteira">
        
        <Header/>

        <main>
            <Menu/>
            <HomePage reproduz={reproduzVideo} />
        </main>

        <Footer/>
    </div>
</body>
  );
}

export default App;
