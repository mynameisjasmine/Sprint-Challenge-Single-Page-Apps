import React from 'react';
import styled from "styled-components";




export default function CharacterCard (props) {
  console.log("props:", props)
  return (
  <div>
  <span>{props.value.name}</span>
  
  </div>
  )
}
