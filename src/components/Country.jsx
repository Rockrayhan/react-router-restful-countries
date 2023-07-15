import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const country = useLoaderData()[0];
    console.log(country);
    const name = country?.name?.common ;
    // const {name} = country?.name?.common ;
     {/* country?.name is not an object but a string value representing the country's name. */} 
    const img =  country.flags.png ;
    const capital = country.capital ;
    

    return (
        <div>
            <img src={country.coatOfArms.svg} alt="" />
            <h1>County name : {name}</h1>  
            <img src={img} alt="" />
            <h2> Capital :  {capital}  </h2>

        </div>
    );
};

export default Country;