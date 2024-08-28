import React from "react";
import styles from  "./Countries.module.css";
import { useEffect,useState } from "react";





const CountryCard =({flagImg,name,alttext}) =>{

   //console.log("print ", data);
    return (
        <div className={styles.carddiv} >
            
            <img src={flagImg} alt={alttext} 
                                style={{
                                    width:"100px",
                                    height:"100px",
                                    }}/>
            <h2>{name}</h2>
       </div>);
};


function Countries(){
  
    const API_URL="https://xcountries-backend.azurewebsites.net/all";
    
    const [countriesData,setCountriesData] = useState([]);

    useEffect(()=>{
               
            fetch(API_URL)
            .then(response => response.json() )
            .then(data => setCountriesData(data))
            .catch((error)=>console.error("Error fetching data:",error));        

           },[]);

    return(
    <div className={styles.gridcontainer}>
        {
            countriesData.map((country) =>  <CountryCard key={country.abbr} flagImg={country.flag} name={country.name} alttext={country.abbr} /> )
        }   

    </div>
    );

}
export default Countries;