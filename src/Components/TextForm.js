import React, { useState } from 'react'


function TextForm(props) {
const handleUpClick=()=>{
    
    let newtext= text.toUpperCase();
    setText(newtext);
}
const handleLowClick=()=>{
    
    let newtext= text.toLowerCase();
    setText(newtext);
}
const handleclear=()=>{
    
    let newtext='';
    setText(newtext);
}
const handlecopy=()=>{

    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
}
const handleChange=(event)=>{
 
 setText(event.target.value);
}
    
const [text,setText]=useState('');
    return (
        <>
        <div className="container" style={{color:props.mode=='dark'?'white':'black'}} >
            <h1> {props.heading}</h1>
            
  
  <textarea className="form-control" value={text} onChange={handleChange} id="mybox" rows="10" ></textarea>
  <button className="btn btn-primary my-3 mx-2 my-1" onClick={handleUpClick} > convert to uppercase </button>
  <button className="btn btn-primary my-3 mx-2 my-1" onClick={handleLowClick} > convert to lowercase </button>
  <button className="btn btn-primary my-3 mx-2 my-1" onClick={handleclear} > clear text </button>
  <button className="btn btn-primary my-3 mx-2 my-1" onClick={handlecopy} > copy text </button>
  
</div>
       <div className="container my-4"style={{color:props.mode=='dark'?'white':'black'}}>
        <h1> Your text Summary</h1>
        <p>{text.split(/\s+/) .filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
        <h1>Preview</h1>
        <p>{text}</p>
       </div>
       </>
    )
}

export default TextForm
