import React,{useState} from 'react'

export default function TextForm(props) {

const[text , settext ] = useState(" ");
const textUpchange = () =>{
    console.log("clicked the uppercase button")
    let newtext = text.toUpperCase();
    props.showAlert("Converted to Uppercase","success");
       

    
    settext(newtext)
}
const textchange = (event) =>{
    settext(event.target.value)
}
const textLochange=()=>{
    let newtext = text.toLowerCase();
    settext(newtext)
    props.showAlert("Converted to Lowercase","success");

}
  return (
    <>
      <div className={`container my-3 text-${props.mode==='light'?'black':'white'}`} >
     <h3 >{props.heading}</h3>
<div className="mb-3">
  <textarea className={`form-control text-${props.mode==='light'?'black':'white'}`} value={text} onChange={textchange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="6"></textarea>
</div>
<button className="btn  mx-2" style={{
    backgroundColor:
      props.mode === 'yellow'
        ? '#dfc311ff'
        : props.mode === 'green'
        ? '#198754'
        : '#007bff',
    color:
      props.mode === 'yellow'
        ? 'white'
        : props.mode === 'green'
        ? 'white'
        : 'white',
    

  }} onClick={textUpchange}>Uppercase</button>

<button className="btn  mx-2" style={{
    backgroundColor:
      props.mode === 'yellow'
        ? '#dfc311ff'
        : props.mode === 'green'
        ? '#198754'
        : '#007bff',
    color:
      props.mode === 'yellow'
        ? 'white'
        : props.mode === 'green'
        ? 'white'
        : 'white',
  }} onClick={textLochange}>Lowercase</button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'black':'white'}`}>
        <h3>Text Summary</h3>
        <p>No of characters = {text.length} and No of words = {text.split(" ").length} </p>
        
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter some text in your textarea"}</p>
    </div>
    </>
  
  )
}

