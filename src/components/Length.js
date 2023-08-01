import React, { useState } from "react";

export default function Length() {
  //all the states that are being used.
  const [value, setValue] = useState("");
  const data = (event) => {
    setValue(event.target.value);
  };
  const [pass, setPassword] = useState("");
  const [displays, setDisplay] = useState(false);
  const [ucheck, setUcheck] = useState(false);
  const [ncheck, setNcheck] = useState(false);
  const [scheck, setScheck] = useState(false);
  const[gen,setGen]=useState("Generate");
  //function to generate the password.
  function generate() {
    let a = "abcdefghijklmnopqrstuvwxyz";
    let b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let c = "123456789";
    let d = "!@#$%^&*";
    a = ncheck ? (a += c) : a;
    a = ucheck ? (a += b) : a;
    a = scheck ? (a += d) : a;
    let pwd = "";
    for (let i = 0; i < value; i++) {
      pwd += a[Math.floor(Math.random() * a.length)];
    }
    setPassword(pwd);
    setDisplay(true);
    setGen("Re-Generate");
  }

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              pattern="[8-50]"
              onChange={data}
              value={value}
              className="form-group form-control"
              placeholder="Enter the length of the password."
            />
             </div>
            <div className="col-12 my-2">
              <input
                type="checkbox"
                checked={ucheck}
                onChange={() => {
                  setUcheck(!ucheck);
                }}
                className="form-group"
                id="radio-check"
              /><label className="form-group text-dark fw-bold" htmlFor="radio-check">
              Include Uppercase Alphabet
            </label>
              
            </div>
            <div className="my-2">
              <input
                type="checkbox"
                className="form-group"
                checked={ncheck}
                onChange={() => {
                  setNcheck(!ncheck);
                }}
                id="radio-check-2"
              />
              <label className="text-dark fw-bold" htmlFor="radio-check-2">
                Include Numbers
              </label>
            </div>
            <div className="my-2">
              <input
                type="checkbox"
                className="form-group"
                checked={scheck}
                onChange={() => {
                  setScheck(!scheck);
                }}
                id="radio-check-3"
              />
              <label className="text-dark fw-bold" htmlFor="radio-check-3">
                Include Special Characters
              </label>
            </div>
         
        </div>

        <div className="row">
          <div className="col-md-12 my-3">
            <button
              className="btn btn-sm btn-primary"
              onClick={generate}
              disabled={(value < 8) | (value > 50)}
            >
              {gen} Password
            </button>

            <button
              className="btn px-4 btn-danger btn-sm mx-2"
              onClick={() => {
                setValue("");
                setDisplay(false);
                setGen("Generate");
              }}
            >
              Clear
            </button>
          </div>
        </div>

        <p>Min length is 8 and max length is 50.</p>

        <div style={{ display: displays ? "block" : "none" }}>
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                value={pass}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className=" form-group form-control bg-white"
              />
             <div className="d-flex justify-content-center">
             <button
                className="btn btn-info my-2 btn-sm"
                onClick={() => {
                  navigator.clipboard.writeText(pass);
                }}
              >
                Copy to Clipboard!
              </button>
              </div>
            </div>
            
             
            
          </div>
        </div>
      </div>
    </>
  );
}
