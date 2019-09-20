import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState()
  
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   axios
   .get(`https://rickandmortyapi.com/api/character/`)
   .then(response => {
     console.log("response data", response.data);
     setCharacters(response.data.results);
   })
   .catch(err => console.error(err));
  }, [])
  console.log("characters:", characters);
  
  if(!characters) {
    return <h2>Loading...</h2>
  }else{
  
    return(
      <section className='character-list grid-view'>
  
      <h2>{characters.map((character, index) =>
        <CharacterCard value={character} key={index}/>
        )}</h2>
      
    </section>
    
    );

  }
   

}
