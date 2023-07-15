import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const contries = useLoaderData();
    console.log(contries);
    return (
        <div>
            <h1>Here are All {contries.length} the Countries  </h1>

            {
                contries.map(country => <li 
                key={country.ccn3}
                > <Link to={`/country/${country.name.common}`}> {country.name.common}  </Link>  </li>)
            }
        
        </div>
    );
};

export default Countries;