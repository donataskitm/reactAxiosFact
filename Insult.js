  
import React, { useState } from 'react';
import axios from 'axios';

const Insult = () => {
    const [juokelis, setJuokelis]=useState([]);

    const gaukJuokeli = ()=> {
        axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        .then((response)=>{
            console.log(response);
            let item = response.data;
            setJuokelis(item);
        })
    }

    return (
        <div>
            <p>{juokelis.insult}</p>
            <button onClick={gaukJuokeli}>Gauk juokeli</button>
        </div>
    )
}

export default Insult