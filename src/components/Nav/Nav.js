import { NavContainer, NavList } from "./styled"


function Nav() {
    return (
        <NavContainer>
            <ul>
                <NavList class="botoes-meunu-vertical">Início</NavList>
                <NavList class="botoes-meunu-vertical">Em alta</NavList>
                <NavList class="botoes-meunu-vertical">Inscrições</NavList>
                <hr></hr>
                <NavList class="botoes-meunu-vertical">Originais</NavList>
                <NavList class="botoes-meunu-vertical">Histórico</NavList>
            </ul>
        </NavContainer>
    )
}

export default Nav