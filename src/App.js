import AnimalShow from "./AnimalShow";
import {useState} from 'react'
import './App.css'
function getRandomAnimal(){
  const animals = ['dog', 'cat',  'cow', 'gator','horse'];


  return animals[Math.floor(Math.random() * animals.length)];

}
// console.log(getRandomAnimal());
function App() {
  //     const handleClick = ()=>{
  //         console.log("clicked");
    const [animals,setAnimals] = useState([]);
    // };
    // return (<><div> Show animals list here </div>
    // <AnimalShow/></>)
    
    // const [count,setCount] = useState(0);
    const handleClick = ()=>{
    setAnimals([...animals,getRandomAnimal()]);
    // setCount(count+1)
    };
    const renderedAnimals = animals.map((animal,index)=>{
      return <AnimalShow type={animal} key={index} />
    });
  return (
    <div className="app">
      <p style={{fontSize:30 }}>Random Animal Generater</p>
      <button onClick={handleClick}>
        Add Animal
      </button>
      <div className="animal-list">{renderedAnimals}</div>
      {/* <div>Numbers Of Animals : {count}</div> */}
    </div>
  );
}
// };

export default App;

