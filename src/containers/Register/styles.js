import styled from "styled-components";

import Backgroundlogin from "../../assets/backgroundi.png"

import Background from "../../assets/background-from.png"


import { Link as Reactlink } from "react-router-dom"; //para navegar entre as paginas usando o usenavigate//



export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;

`

export const Leftcontainer = styled.div`

background: url("${Backgroundlogin}");

background-size:cover;
background-position: center;

height: 100%;
width: 100%;
max-width: 50%;

display: flex;
align-items: center;
justify-content: center;

img{
    width: 80%;
}




`

export const Rightcontainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

height: 100%;
width: 100%;
max-width: 50%;

background: url("${Background}");
background-size:cover;
background-color: #1e1e1e;

p{
    color: #fff;
    font-size: 18px;
    font-weight: 800;
text-align: center;
    
}

a{
    text-decoration: underline;
    
}

`

export const Title = styled.h2`
font-family: "Road Rage", sans-serif;
font-size: 40px;
color: ${(props)=> props.theme.purple};





`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap:20px;
padding:20px;
width: 100%;
max-width: 400px;


`

export const Inputcontainer = styled.div`

display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

label{
    font-size:18px;
    font-weight:600;
    color: #fff;

}
input{
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 16px;
}
p{
font-size: 14px;
line-height: 80%;
color:#cf3057 ;
font-weight: 600;
text-align: start;
height: 10px;


}

`
export const Link = styled(Reactlink)`

text-decoration: none;
color: #fff;



`



