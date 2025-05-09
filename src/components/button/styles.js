import styled from "styled-components";


export const Containerbutton = styled.button`
width: 100%;
height: 52px;
border: 0;
border-radius: 5px;
background-color: ${(props)=> props.theme.purple};
font-family: "Road Rage", sans-serif;
font-size: 30px;
color: #fff;


&:hover {
    background-color: #6f357c;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23F9F7F7FF' stroke-width='6' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
border-radius: 5px;
    

}



`