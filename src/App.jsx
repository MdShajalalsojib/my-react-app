 
import './App.css'

function App() {
  

  return (
    <>
       
      <h1>Vite + React</h1>
      <Person></Person>
      <Sports></Sports> 
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <NameList></NameList>
       
    </>
  )
}
function Person(){
  const age = 22;
  const name = 'shajalal';
  return (
    <p>I am a person: {name} {age}</p>
  )
}

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>kola</li>
        <li>komola</li>
      </ul>
      <p>Playing and losing</p>
    </div>
  )
}
function NameList(){
  return(
     <div>
      <p>md.sakib</p>
      <p>md.lamiya</p>
     </div>
  )
}

export default App
