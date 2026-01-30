import React from 'react'

function Signhup() {
  return (
    <>
    <form style={{textAlign:'center'}}>
      <h1>REGISTRATION FORM</h1>
      <div>
        <label>username</label> <br />
        <input type='text' placeholder='username' />  
      </div>

      <div>
        <label>text</label> <br />
        <input type='text' placeholder='email'/>   
      </div>

      <div>
        <label>password</label> <br />
        <input type='password' placeholder='password'/>
      </div>
     <br /> 
      <button>Register</button>   
          
        </form>    
    </>
  
  )
}

export default Signhup