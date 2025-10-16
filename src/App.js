

import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from 'react';



function App() {
const [mode,setMode] = useState("light")

const [alert, setAlert] = useState(null);
  
const showAlert = (message,type)=>{
 setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 1000);
  }
  

  const toggleMode = ()=>{
  if(mode === "light"){
    setMode("dark")
    document.body.style.background = "grey";
    showAlert("Darkmode is being enabled","success");
     }
  else{
    setMode("light")
    document.body.style.background = "white";
    showAlert("lightmode is being enabled","success");

    }
  }

  const toggleGreen = ()=>{
  if(mode === "light"){
    setMode("green")
    document.body.style.background = "green";
    showAlert("Greenmode is being enabled","success");
  
     }
  else{
    setMode("light")
    document.body.style.background = "white";
    showAlert("lightmode is being enabled","success");

    }
  }
  const toggleYellow =()=>{
  if(mode === "light"){
    setMode("yellow")
    document.body.style.background = "yellow";
    showAlert("Greenmode is being enabled","success");
    
     }
  else{
    setMode("light")
    document.body.style.background = "white";
    showAlert("lightmode is being enabled","success");

    }
  }


  return (
    <>
    <Navbar   title="Textutils" about="Textutils about" toggleMode={toggleMode} toggleYellow={toggleYellow} toggleGreen={toggleGreen} mode={mode}/>
    <Alert alert={alert}/>
    <div className="container">
        <TextForm btnGreen="green" showAlert={showAlert} heading="Enter Text below to analyze" mode={mode}/>
    </div>
    {/* <About/> */}
    
  
    </>
  );
}


export default App;

