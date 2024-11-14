import styled from "styled-components";

import Bannerhome from "../../assets/bannerhome.png"

import Background from "../../assets/background-from.png"


export const Banner = styled.div`

background: url('${Bannerhome}');
background-size:cover;
background-position:center;
height: 480px;

h1{
    font-family: "Road Rage", sans-serif;

    font-size: 80px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 10%;
    
}

`

export const Container = styled.section`


background: linear-gradient(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)), url("${Background}");

height: 800px;




`

export const Content = styled.div`

padding-bottom:70px;
`