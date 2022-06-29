import styled from "styled-components";

import "./assets/css/reset.css";
import Signin from "./componets/Signin";
export default function App(){
    return(
        <Container>
            <Signin></Signin>
        </Container>
    );
};

const Container = styled.div`
    background-color: #8C11BE;
    height: 100vh;
    display: flex;
    justify-content: center;

`