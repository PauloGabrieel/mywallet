import styled from "styled-components"
export default function Signup(){
    return(
        <Container>
            <h1>Mywallet</h1>
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
    }

`