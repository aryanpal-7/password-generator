import React, { useState } from "react";

export default function Length(props) {
  const [value, setValue] = useState("");
  const data = (event) => {
    setValue(event.target.value);
  };
  const [pass, setPassword] = useState("");
  const [displays, setDisplay] = useState(false);
  function generate() {
    let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@&";
    let pwd = "";
    for (let i = 0; i < value; i++) {
      pwd += a[Math.floor(Math.random() * a.length)];
    }
    setPassword(pwd);
    setDisplay(true);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <input
            type="text" pattern="[8-50]"
            onChange={data}
            value={value}
            className="form-group form-control"
            placeholder="Enter the length of the password."
          />
           </div></div>
          <div className="row">
            <div className="col-md-12 my-3">
          
            <button
              className="btn btn-sm btn-primary"
              onClick={generate}
              disabled={(value < 8) | (value > 50)}
            >
              {props.title}
            </button> 
           
              <button
                className="btn px-4 btn-danger btn-sm mx-2"
                onClick={() => {
                  setValue("");
                  setDisplay(false);
                }}
              >
                Clear
              </button>
              
          </div>
          </div>
        
        <p>Min length is 8 and max length is 50.</p>
     
      <div  style={{ display: displays ? "block" : "none" }}>
        <div className="row">
          <div className="col-6">
      <input type="text" value={pass}  className=" form-group form-control bg-white" />
     <br/> 
     </div>
     <div className="col-8">
     <button className="btn btn-info btn-sm" onClick={
      ()=>{
        navigator.clipboard.writeText(pass);
      }
     }>Copy to Clipboard!</button>
     </div>
     </div>
      </div>
    </div>
  );
}
