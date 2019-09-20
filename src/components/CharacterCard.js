import React from 'react';
import styled from "styled-components";

const StyledCard = styled.div`
border: 2px solid gray;
width: 80%;
padding: 3rem;
marging-bottom: 4rem;

`


export default function CharacterCard (props) {
  console.log("props:", props)
  return (
  <div className="card">
  <StyledCard>
  <span className="names">{props.value.name}</span>
  <img src={props.value.image} alt="character" />
  <div>
    <p>Status: {props.value.status}</p>
    <p>Species: {props.value.species}</p>
    <p>Gender: {props.value.gender}</p>
  
  </div>
  
  </StyledCard>
  </div>
  )
}
