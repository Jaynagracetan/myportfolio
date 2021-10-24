import React from 'react';
import '../App.css';
import dancing from '../Images/dancing.jpeg';
import drawing from '../Images/drawing.jpg';
import netflix from '../Images/netflix.jpg';
import reading from '../Images/reading.jpg';
import exercise from '../Images/exercise.jpeg';



function Hobbies(){
    return(
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

    )
}

export default Hobbies;