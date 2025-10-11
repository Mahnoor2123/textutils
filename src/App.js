
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";



function App() {
  return (
    <>
    <Navbar title="Textutils" about="Textutils about"/>
    <div className="container">
        <TextForm heading="Enter Text below to analyze"/>
    </div>
  
    </>
  );
}

export default App;
