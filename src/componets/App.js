import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../assets/css/reset.css";
import Signin from "./Signin";
import Signup from "./Signup";
import Mywallet from "./MyWallet"; 
export default function App(){
    return(
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/" element={<Signin />}></Route>    
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/mywallet" element={<Mywallet />}></Route>
                </Routes>
            </Container>
        </BrowserRouter>
 
    );
};

const Container = styled.div`
    background-color: #8C11BE;
    height: 100vh;
    display: flex;
    justify-content: center;

`