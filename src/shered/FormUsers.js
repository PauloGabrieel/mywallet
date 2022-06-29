
import styled from "styled-components";

export default function FormUsers(){
    return(
        <FormContainer autoComplete="off">
            <input type="email" placeholder="E-mail"></input>
            <input type="password" placeholder="Senha"></input>
            <button>Entrar</button>
        </FormContainer>
    ); 
};

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`