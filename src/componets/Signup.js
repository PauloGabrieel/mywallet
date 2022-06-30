import { Link } from "react-router-dom"
import styled from "styled-components"

import FormUsers from "../shared/FormUsers"
export default function Signup(){
    return(
        <Container>
            <h1>Mywallet</h1>
            <FormUsers>
                <input type="text" placeholder="Nome"></input>
                <input type="email" placeholder="E-mail"></input>
                <input type="password" placeholder="Senha"></input>
                <input type="password" placeholder="Confirme a senha"></input>
                <button>Cadastrar</button>
            </FormUsers>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font: 400 32px 'Saira Stencil One', cursive;
        color: #FFFFFF;
        margin-bottom: 24px;
    };
    a{
        margin-top: 36px;
        font: 700 15px 'Raleway', sans-serif;
        color: #FFFFFF;
        text-decoration: none;
    }

`