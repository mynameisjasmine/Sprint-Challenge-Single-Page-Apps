import React, { useEffect, useState } from 'react';
import axios from "axios";
import LocationCard from "./LocationCard";



export default function LocationsList() {
    const [location, setLocation] = useState()
  
    useEffect(() => {
      
     axios
     .get(`https://rickandmortyapi.com/api/location/`)
     .then(response => {
       console.log("response data", response.data);
       setLocation(response.data.location);
     })
     .catch(err => console.error(err));
    }, [])
    console.log("location:", location);
    
    if(!location) {
      return <h2>Loading...</h2>
    }else{
    
      return(
        <section className='location-list'>
    
        <h2>{location.map((located, index) =>
          <LocationCard located={located} key={index}/>
          )}</h2>
        
      </section>
      
      );
  
    }
     
  
  }
  

