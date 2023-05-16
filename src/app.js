import React from 'react';
import './app.css';
import Panel from './components/panel';

//Using Static Data
const resources = [{   
    id: 1,
    description: "Alireza Firouzja",
    url: "assets/firouzja.jpg"
}, 
{   id: 2,
    description: "ButterFly",
    url: "assets/butterfly.PNG"
},
{   id: 3,
    description: "King Lion",
    url: "assets/kinglion.PNG"
},
{
    id:4,
    description: "Prince Duck",
    url: "assets/princeduck.PNG"
},
{
    id:5,
    description: "Prince Kenzo",
    url: "assets/princekenzo.jpeg"
}
];

const [resource1, resource2,  resource3, resource4, resource5] = resources;

const App = () => {
    
  return (
    <div className='container'>
     <Panel text={resource1.description} url={resource1.url}/>
     <Panel text={resource2.description} url={resource2.url}/>
     <Panel text={resource3.description} url={resource3.url}/>
     <Panel text={resource4.description} url={resource4.url}/>
     <Panel text={resource5.description} url={resource5.url}/>
    </div>
  )
}

export default App
