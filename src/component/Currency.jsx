import React, { useState } from 'react'



const Currency = () => {
    const[India, SetIndia] = useState("");
    const [Dollar, SetDollar]=useState("");

    const HandleDollar = (e) =>{
        const value = e.target.value;
        SetDollar(value)
        SetIndia(DollartoInd(value));
    };

    
    const HandleIndia = (e)=>{
      const value = e.target.value;
      SetIndia(value)
      SetDollar(IndtoDollar(value));

    };
    const DollartoInd=(Dollar)=>{
      return Dollar*82.72;
    }

    const IndtoDollar=(India)=>{
      return India*0.012;
    }
  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
      <label>India: </label>
      <input type="text" value={India}  onChange={HandleIndia} />
      </div>
  
      <div>
      <label>Dollar: </label>
      <input type="text" value={Dollar} onChange={HandleDollar} />
      </div>
    </div>
  )
}

export default Currency
