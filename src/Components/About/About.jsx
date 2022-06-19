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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae suscipit adipisci sed illum dignissimos vitae. Laboriosam eum amet earum libero quaerat hic, et rerum asperiores vel reprehenderit vitae est maxime ad beatae, dicta nemo voluptatum dolorum nostrum sapiente. Ipsam doloribus quibusdam repellat. Distinctio fugiat minus voluptatibus harum unde deserunt modi tempora numquam tenetur nemo incidunt nam itaque tempore at vitae esse error asperiores ut vero quidem provident architecto adipisci, mollitia quae! Id esse sed ex quae, atque quas neque obcaecati omnis tempora distinctio enim incidunt possimus fugiat dignissimos at nisi quidem voluptatibus assumenda cum reprehenderit culpa! Cumque fugit rem, magni pariatur maxime sint natus reprehenderit ea suscipit corrupti, quis porro eos beatae error omnis illum provident excepturi. In quo praesentium at a, magni iure numquam? Maiores consequatur molestias blanditiis et nesciunt ducimus quam, inventore optio vero nisi eveniet aliquam velit sequi animi ipsam, vitae incidunt recusandae quisquam modi unde temporibus?    
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