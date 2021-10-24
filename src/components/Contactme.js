import React from 'react';
import '../App.css';
import { useState } from "react";

function Contactme(){

    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    return(
    <div className="Container">
        <div className ="Contactme">
            <h2>Contact me</h2>
            <text> Name: </text>
            <input 
                value={contact.name}
                onChange={(e) => {
                    console.log(e.target.value);
                    setContact(
                    {
                        ...contact,
                        name: e.target.value
                    }
                    );
                }}
            />
        <br/>
            <text> Email: </text> 
            <input 
                value={contact.email}
                onChange={(e) => {
                    console.log(e.target.value);
                    setContact(
                    {
                        ...contact,
                        email: e.target.value
                    }
                    );
                }}
            />
        <br/>
            <text> Subject: </text>
            <input 
                value={contact.subject}
                onChange ={(e) => {
                    console.log(e.target.value);
                    setContact(
                    {
                        ...contact,
                        subject: e.target.value
                    }
                    );
                }}
            />
        <br/>
            <text>Message:</text>
            <input style={{height:400}}
                value={contact.message}
                onChange = {(e) => {
                    console.log(e.target.value);
                    setContact(
                    {
                        ...contact,
                        message: e.target.value
                    }
                    );
                }}
            />
        <br/>
        <button>Submit</button>
        </div>
    </div>
    )
}

export default Contactme;