import React, { useContext } from 'react';
import messageContext from '../../contexts/messageContext';

function Inner(){
    // eslint-disable-next-line no-unused-vars
    const [msg, setMsg] = useContext(messageContext)
    return (
        <>
        <h3>Inner: </h3>
        
        <button onClick={() => { setMsg(Math.random().toString()) }}>Change Message</button>
        </>
    )

}


export default Inner;
