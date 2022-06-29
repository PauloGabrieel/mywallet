import styled from "styled-components";

import FormUsers from "../shered/FormUsers.js"
export default function Signin(){
    return(
        <Container>
            <h1>Mywallet</h1>
            <FormUsers></FormUsers>
        </Container>
            
        
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
