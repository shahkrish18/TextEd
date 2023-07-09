import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleLoClick=()=>{
      console.log("Lowercase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!","success")
  }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleClear=()=>{
      console.log("Cleared");
      let newText="";
      setText(newText);
      props.showAlert("Content cleared!","success")
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Content Copied to Clipboard!","success")
  }
    const [text,setText]=useState("");
  return (
    <>
    <div className="cont" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}} ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-4 my-1" onClick={handleLoClick}>Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear} >Clear All</button>
      <button disabled={text.length===0} className="btn btn-primary mx-4 my-1" onClick={handleCopy} >Copy</button>
    </div>
    <div className="cont my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} chars</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}mins to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
