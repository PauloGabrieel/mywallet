
import styled from "styled-components";

export default function FormUsers(props){
    return(
        <FormContainer autoComplete="off">
            {props.children}
        </FormContainer>
    ); 
};

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 13px;
    
    input{
        height: 58px;
        width: 326px;
        border: none;
        border-radius: 5px;
        font: 400 20px 'Raleway', sans-serif;
        padding-left: 10px;
        box-shadow: 2px 2px 2px rgba(0,0,0,.2);
    };
    input:focus{
        outline : none;
    };

    button{
        background-color: #A328D6;
        height: 46px;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        font: 700 20px 'Raleway', sans-serif; 
        cursor: pointer;
    }

`