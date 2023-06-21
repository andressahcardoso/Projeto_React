import { VideoDiv, VideoImg } from "./styled";

function Video(props) {
    return (
        <VideoDiv class="box-pagina-principal media1" onClick={props.reproduz}>
            <VideoImg src={props.link} alt="Imagem gerada automaticamente"></VideoImg>
            <h4>{props.titulo}</h4>
        </VideoDiv>
    )
}

export default Video