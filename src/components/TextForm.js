import React, {useState} from "react";

export default function TextForm(props) {
  
  const handleUpClick=()=>{
    // console.log("Uppercase was Clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleLowClick=()=>{
    // console.log("Uppercase was Clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success");
  }

  const handleOnChange=(event)=>{
      setText(event.target.value);
  }
  const handleclearText =()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text Cleared!", "success");
  }
  const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard!", "success");
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          style={{backgroundColor : props.mode==='dark'?'grey':'white' , color : props.mode==='dark'?'white':'black'}}
          id="myBox"
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleclearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{ color : props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} Characters. </p>
      <p>{0.008 * text.split(" ").length} Minutes to read. </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
    
  )
}





