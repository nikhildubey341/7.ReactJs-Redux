import React, { useState } from 'react'


const FormData = () => {
    const[Data, SetData] = useState({
        Name: "",
        LName: "",
        Email: "",
        Address: "",
    })

    const HandleChange = (e) =>{
        const {name,value} = e.target;
        SetData((prevData)=>({
            ...prevData,
            [name]:value,


        }));
        
    };


    const SubmitData = (e)=>{
        e.preventDefault();
        console.log(Data)

    }
  return (
    <div>
     <form>
      <div>
      <label>Name: </label>
      <input type="text" name='Name'  onChange={HandleChange} />
      </div>
      
    
      <div>
      <label>LName: </label>
      <input type="text" name='LName' onChange={HandleChange} />
      </div>

      <div>
      <label>Email: </label>
      <input type="text" name='Email' onChange={HandleChange} />
      </div>

      <div>
      <label>Address: </label>
      <input type="text" name='Address' onChange={HandleChange} />
      </div>

      <div>
      <button type='submit' onClick={SubmitData}>Submit</button>
      
      </div>

      </form>

    </div>
  )
}

export default FormData
