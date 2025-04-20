 
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

       
    </>
  )
}
   function Teacher(tes){
    return(
      <div style={{
        border: '2px solid green',
        borderRadius:'20px',
         
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
        borderRadius:'20px'

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
