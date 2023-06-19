import "./styled.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

function App() {

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <body>
    <div class="tela-inteira">
        
        <Header/>

        <main>
            <Menu/>
            
            <section class="painel-de-videos">
                <div class="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
            </section>
        </main>

        <Footer/>
    </div>
</body>
  );
}

export default App;
