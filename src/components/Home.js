import React from 'react';
import '../App.css';
import profileimage from '../Images/profilepict.JPG';
import toppict from '../Images/toppict.JPG';
import dancing from '../Images/dancing.jpeg';
import drawing from '../Images/drawing.jpg';
import netflix from '../Images/netflix.jpg';
import reading from '../Images/reading.jpg';
import exercise from '../Images/exercise.jpeg';

function Home(){
    return(
    <div className = "Homepage">
        <div className ="Toppict">
            <img src={toppict} width="auto" height="200px"/>
        </div>
        <h1>My Portfolio</h1>
        <div className ="imgcontainer">
            <div className = "profileimg"> 
                <img src = {profileimage} alt="image" width="280" height="220" />
            </div>
        </div>
        <div className ="contentcontainer">
            <h1>Hello</h1>
            <p>I am Jayna Grace, currently studying in SUSS, majoring in Business Analytics and minoring in Psychology. 
                I am currently doing an internship with the Digital Church Office as a Products and Operations intern. 
                Previously, I was an intern in SHAREit Technology where I was a Sales Business analytics intern, supporting 
                the sales leaders in their analysis of their team and ways to increase sales.
                Prior to entering into University, I was in a traineeship under SAS Institute as an Associate Data Analyst which 
                allowed me to put into practice what I have learnt in school and during my training. Currently in SUSS, I am an active 
                member in SUSS Catholic Community Interest Group where I am a leader in there to help coordinate and focus on the growth 
                of individuals in that group.
            </p>
        </div>
        <h1>Hobbies</h1>
        <div className ="Hobbies">
            <div className ="container1">
                <h3>Dancing</h3>
                <img src={dancing} height={300} width={300} />
            </div>
            <div className ="container2">
                <h3>Drawing</h3>
                <img src={drawing} height={300} width={300}/>
            </div>
            <div className ="container3">
                <h3>Netflix</h3>
                <img src={netflix} height={300} width={300}/>
            </div>
            <div className ="container4">
                <h3>Reading</h3>
                <img src={reading} height={300} width={300}/>
            </div>
            <div className ="container5">
                <h3>Exercising</h3>
                <img src={exercise} height={300} width={300}/>
            </div>
        </div>
    </div>

        

    )
}

export default Home;