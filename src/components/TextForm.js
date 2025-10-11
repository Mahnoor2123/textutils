import React,{useState} from 'react'

export default function TextForm(props) {

const[text , settext ] = useState(" ");
const textUpchange = () =>{
    console.log("clicked the uppercase button")
    let newtext = text.toUpperCase();
    
    settext(newtext)
}
const textchange = (event) =>{
    settext(event.target.value)
}
const textLochange=()=>{
    let newtext = text.toLowerCase();
    settext(newtext)
}
  return (
    <>
      <div className='container'>
     <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={textchange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary  mx-2" onClick={textUpchange}>Uppercase</button>

<button className="btn btn-primary mx-2" onClick={textLochange}>Lowercase</button>
    </div>
    <div className="container">
        <h3>Text Summary</h3>
        <p>No of characters = {text.length}</p>
        <p>No of words = {text.split(" ").length}</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  
  )
}

