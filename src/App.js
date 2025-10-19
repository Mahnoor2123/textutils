
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
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
   

     <BrowserRouter>
       <Navbar mode={mode} setMode={setMode}
        title="TextUtils" 
  about="About" 

  toggleMode={toggleMode}
  toggleGreen={toggleGreen}
  toggleYellow={toggleYellow} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm mode={mode} />} />
          <Route path="/about" element={<About />} />
          {/* 👇 optional 404 / fallback route */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
   
  );
}


export default App;

