// import statements
import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import "./App.css";

function App() {
  // states

  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    contact: "",
  });

  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [inputEditField, setInputEditField] = useState({
    firstName: "",
    lastName: "",
    contact: "",
  });

  const [userId, setUserId] = useState(null);

  const [records, setRecords] = useState([
    { id: 1, firstName: "myfirstName", lastName: "mylastName", contact: "1234567890" },
  ]);

  // functions

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleSubmit = (event) => {
    setRecords([...records, inputField]);
    setInputField({
      firstName: "",
      lastName: "",
      contact: "",
    });
    setOpen(false);
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputField((prev) => ({
      ...prev,
      id: records.length + 1,
      [name]: value,
    }));
  };

  function handleIsOpen(id) {
    setUserId(id);
    setIsOpen(true);
    handleEdit(id);
  }

  function handleIsClose() {
    setIsOpen(false);
  }

  function handleEdit(id) {
    const result = records.filter((each_record) => each_record.id === id);
    let userData = result[0];
    setInputEditField({
      id: userId,
      firstName: userData.firstName,
      lastName: userData.lastName,
      contact: userData.contact,
    });
  }

  const handleEditInput = (event) => {
    const { name, value } = event.target;
    // the new data is updating here from state
    setInputEditField((prev) => ({
      ...prev,
      id: userId,
      [name]: value,
    }));
  };

  const handleSave = (event) => {
    // temporary save records to newArr
    // replace newArr with the inputEditField state of the corresponding id
    // replace the updated array with previous
    let newArr = [...records];
    newArr = newArr.map((x) => {
      if (x.id === userId) x = inputEditField;
      return x;
    });
    setRecords(newArr);
    setIsOpen(false);
  };

  function handleDelete(r) {
    setUserId(r.id);
    let newArr = [...records];
    newArr.splice(userId - 1, 1);
    setRecords(newArr);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="https://react.dev/">
          <img
            src="/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Bootstrap
        </a>
      </nav>
      <div id="button-wrapper">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleOpen}
        >
          Add User
        </button>
      </div>

      <div id="table-wrapper">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
          {records.map((r, index) => (
            <tr key={index}>
              <td>{r.firstName}</td>
              <td>{r.lastName}</td>
              <td>{r.contact}</td>
              {/* use arrow funtion to pass parameter and to prevent instant calling*/}
              <td>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={(event) => handleIsOpen(r.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={(event) => handleDelete(r)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>

      {/* Add User Modal */}
      <Modal
        onClose={handleClose}
        open={open}
        style={{
          position: "absolute",
          border: "2px solid #000",
          backgroundColor: "gray",
          boxShadow: "2px solid black",
          height: 300,
          width: 250,
          margin: "auto",
          padding: "2px",
        }}
      >
        <div>
          <input
            type="text"
            name="firstName"
            onChange={handleInput}
            placeholder="First Name"
            value={inputField.firstName}
            required
          />

          <br />

          <input
            type="text"
            name="lastName"
            onChange={handleInput}
            placeholder="Last Name"
            value={inputField.lastName}
            required
          />

          <br />

          <input
            type="text"
            name="contact"
            onChange={handleInput}
            placeholder="Contact"
            value={inputField.contact}
            required
          />

          <br />
          <button type="submit" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </Modal>

      {/* Edit User Modal */}
      <Modal
        onClose={handleIsClose}
        open={isOpen}
        style={{
          position: "absolute",
          border: "2px solid #000",
          backgroundColor: "gray",
          boxShadow: "2px solid black",
          height: 300,
          width: 250,
          margin: "auto",
          padding: "2px",
        }}
      >
        <div>
          <input
            type="text"
            name="firstName"
            onChange={handleEditInput}
            placeholder="First Name"
            value={inputEditField.firstName}
            required
          />

          <br />

          <input
            type="text"
            name="lastName"
            onChange={handleEditInput}
            placeholder="Last Name"
            value={inputEditField.lastName}
            required
          />

          <br />

          <input
            type="text"
            name="contact"
            onChange={handleEditInput}
            placeholder="Contact"
            value={inputEditField.contact}
            required
          />

          <br />
          {/*  */}
          <button type="submit" onClick={() => handleSave()}>
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
