
function HomePage(reproduzProps) {

    console.log('------', reproduzProps)

    return(
         
        <section class="painel-de-videos">
        <div class="box-pagina-principal media1" reproduz={reproduzProps.reproduz}>
            <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media2" reproduz={reproduzProps.reproduz}>
            <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media3" reproduz={reproduzProps.reproduz}>
            <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media4" reproduz={reproduzProps.reproduz}>
            <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media5"reproduz={reproduzProps.reproduz}>
            <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media6" reproduz={reproduzProps.reproduz}>
            <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media7" reproduz={reproduzProps.reproduz}>
            <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        <div class="box-pagina-principal media8" reproduz={reproduzProps.reproduz}>
            <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
            <h4>Título do vídeo</h4>
        </div>
        </section>
    )
}

export default HomePage