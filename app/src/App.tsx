
import './App.css'

function App() {
  const greeting: string = "Hello Typescript!";
  const numberList: number[] = [5,10,15];
  function calculateSum(a:number, b:number):number {
    return a + b;
    
  }

  return (
    <>
    <h1>{greeting}</h1>
    <h2>Number List:</h2>
    <ul>
      {numberList.map ((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
    <h2>Sum of 4 and 4 = {calculateSum(4,4)}</h2>
      
    </>
  )
}

export default App
