import React, {useState, useEffect} from 'react'

 function Effect() {
    const [paieskosZodis, setPaieskosZodis] = useState('users')
    const [paieskosZodiss, setPaieskosZodiss] = useState('users')
    const [gautaInfo, setGautaInfo] = useState([]); //tuscias masyvas, i ji desime

    useEffect (()=>{
    fetch(`https://jsonplaceholder.typicode.com/${paieskosZodis}`)
    .then (response=> response.json())
    .then (json=> setGautaInfo(json))
    }, [paieskosZodis]) //[] reiskia kam pasikeitus
   
    useEffect (()=>{
        fetch(`https://jsonplaceholder.typicode.com/${paieskosZodiss}`)
        .then (response=> response.json())
        .then (json=> setGautaInfo(json))
        }, [paieskosZodiss]) //[] reiskia kam pasikeitus


    return (
        <div>
           Effect
           <div>
                <button onClick={()=> setPaieskosZodis('posts')}>posts</button>
                <button onClick={()=> setPaieskosZodis('users')}>users</button>
                <button onClick={()=> setPaieskosZodiss('comments')}>comments</button>
                <button onClick={()=> setPaieskosZodiss('users')}>comments</button>
           </div>
            <div>
                <h2>{paieskosZodis}</h2>
                {gautaInfo.map(item=>{
                    return <p>{JSON.stringify(item)}</p>
                })}
            </div>
        </div>
    )
}

export default  Effect;