import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const ContainerMain = styled.div`
    min-height: 95vh;
    display: flex;
`

export const PainelVideos = styled.section`
    width: 86vw;
    height: 80vh;
    background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
`