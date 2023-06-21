import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    hr {
        border-color: #20B2AA;
    }
`

export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const ContainerMain = styled.div`
    min-height: 80vh;
    display: flex;
`

export const PainelVideos = styled.section`
    width: 85.5vw;
    height: 80vh;
    padding-top: 2vh;
    padding-left: 1.5;
    padding-right: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
`