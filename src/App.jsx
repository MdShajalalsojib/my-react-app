 
import './App.css'

function App() {
  

  return (
    <>
       
      <h1>Vite + React</h1>
       <Student></Student>
       <Student></Student>
       <Student></Student>
       <Person></Person>
       <Developer name="Mozumder" tech = "js"></Developer>
       <Developer name="Rajon" tech = "html"></Developer>
       <Developer name ="Shabana" tech = "c++"></Developer>
       <Teacher class = "ten" SN = "55"></Teacher>
       <Teacher class = "Nine" SN = "92"></Teacher>
       <Player name ="Tamim" runs = "5000"></Player>
       <Player name ="Sakib" runs= "5500"></Player>
       <Player name ="Taskin" runs = "1000"></Player>
       <Salami event ="Roja Eid" amount = "4000"></Salami>
       <Salami event ="Graduation" ></Salami>

       
    </>
  )
}
   function Salami({event, amount = 0}){
    return(
      <div className='student'>
        <p>Salami For:{event} </p>
        <p>Amount: {amount} </p>

      </div>
    )
   }

    function Player({name, runs}){
      return(
        <div className='student'>
          <h3>Name: {name} </h3>
          <p>Runs: {runs} </p>
        </div>
      )
    }

   function Teacher(tes){
    return(
      <div style={{
        border: '2px solid green',
        borderRadius:'20px',
        margin:'10px'
         
      }}>
        <p>English teacher</p>
        <h4>Md.Rakib</h4>
        <h4>Ms.lamiya</h4>
        <h4>Class:{tes.class} </h4>
        <h4>Studend Number:{tes.SN}</h4>
      </div>
    )
   }

   function Developer(props){
    console.log(props);
    return(
      <div style={{
        border:'2px solid green',
        borderRadius:'20px',
        margin: '10px'

      }}>
        <h3>Developer:{props.name} </h3>
        <p>Technoloygy:{props.tech} </p>
      </div>
    )
   }

function Person(){
  const age = 22;
  const name = 'shajalal';
  const personStyle = {
    color:'red',
    textAlign:'reght',
  }
  return (
    <p style={personStyle}>I am a person: {name} {age}</p>
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
function Student(){
  return(
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

export default App
