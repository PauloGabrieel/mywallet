import styled from "styled-components";

import FormUsers from "../shered/FormUsers.js"
export default function Signin(){
    return(
        <Container>
            <h1>Mywallet</h1>
            <FormUsers >
                <input type="email" placeholder="E-mail"></input>
                <input type="password" placeholder="Senha"></input>
                <button>Entrar</button>
            </FormUsers>
            <span>Primeira vez? Cadastre-se!</span>
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
    span{
        margin-top: 36px;
        font: 700 15px 'Raleway', sans-serif;
        color: #FFFFFF;
    }

`
