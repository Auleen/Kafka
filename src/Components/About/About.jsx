import React from 'react';
import './About.css'
import image from 'E:/ReactJS/ReactApp/Kafka/kafka/src/Assest/ImageAbout.jpg'
function About() {
    return ( <>
    <div className='container'>
        <div className='image'>
            <img src={image} />
        </div>
        <div className='Text'>
        <h1 className='aboutHead'>The Missing Persons Project</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed nostrum nemo quo! Officiis esse dolor reiciendis minus pariatur. Assumenda.
        </div>
    </div>
    <div className='buttonTab'>
        <button className='btnAbt'>
            Search for Someone
        </button>
        <button className='btnAbt'>
            Register Missing Person
        </button>
    </div>

    </> );
}

export default About;