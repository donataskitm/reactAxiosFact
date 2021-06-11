import React, { useState, useEffect} from 'react';
import axios from 'axios';

const Cats = () => {
    const [posts, setPost] = useState([]);

    const getFacts =()=>{
        axios.get('https://cat-fact.herokuapp.com/facts')
        .then((response)=>{
            console.log(response);
            let facts = response.data;
            setPost(facts);
            console.log(facts)
        })
    }
    useEffect(()=>{
        getFacts()
    }, [])

    return (
        <div>
            {
                posts.map((fact, index) => (
                    <p key={index}>{fact.text}</p>
                ))
            }
        </div>
    )
}

export default Cats