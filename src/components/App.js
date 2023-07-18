import { useState } from "react";
import Modal from '@material-ui/core/Modal';
import "./App.css";
import Record from "./Record";

function App(props) {

  const [inputField, setinputField] = useState({
    fname : '',
    lname : '',
    contact : ''
  })

  const [open, setOpen] = useState(false);

  function handleOpen(){
    setOpen(true);
  }

  function handleClose(){
    setOpen(false);
  }

  function handleSubmit(){

  }

  function handleInput(event){
    // setinputField(
    //   const {name, value} = event.target;

    // );
    
  }

  // createRecord function

  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="https://react.dev/">
        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
        Bootstrap
      </a>
      </nav>
      <div id='button-wrapper'><button type="button" class="btn btn-secondary" onClick={handleOpen}>Add User</button>
      </div>
      
      <Modal
        onClose={handleClose}
        open={open}
        style={{
            position: 'absolute',
            border: '2px solid #000',
            backgroundColor: 'gray',
            boxShadow: '2px solid black',
            height: 300,
            width: 250,
            margin: 'auto',
            padding: '2px'
        }}
      >

        <div>
          <input 
          type="text" 
          name="first_name" 
          // onChange={handleInput} 
          placeholder="First Name" 
          value={inputField.fname}/>

          <br/>

          <input 
          type="text" 
          name="last_name" 
          // onChange={handleInput} 
          placeholder="First Name" 
          value={inputField.lname}/>

          <br/>

          <input 
          type="gmail" 
          name="gmail" 
          // onChange={handleInput} 
          placeholder="Contact" 
          value={inputField.contact}/>

          <br/>

          <button onClick={handleSubmit}>Submit Now</button>
        </div>

      </Modal>

      {/* table */}
      <Record records={props.records}/>
      
    </div>
  );
}

export default App;
