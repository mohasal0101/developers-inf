import React from "react";
import { actions } from "./Developer";
import { useState } from "react";
import Select from "@material-ui/core/Select";
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';


const DeveloperForm = ({ dispatch }) => {
  const [name, setName] = useState("  ");
  const [email, setEmail] = useState(" user@example.com ");
  const [phone, setPhone] = useState(" +962 ");
  const [address, setAddress] = useState("  ");
  const [age, setAge] = useState("  ");


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !phone || !address || !age) return;
    dispatch({
      type: actions.addDeveloper,
      payload: { name, email, phone, address, age },
    });
    setName("");
    setEmail(" user@example.com ");
    setPhone(" +962 ");
    setAddress("");
    setAge("");
  };

  return (
    <div className="form-group-1">
      <form onSubmit={ handleSubmit }>
        <div className="inputs">
          <TextField
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="filled"
          />
        </div>
        <div>
          <div className="inputs">
            <TextField
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="filled"
            />
          </div>
        </div>
        <div className="inputs">
          <TextField
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="phone"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            label="Address"
            variant="filled"
          />
        </div>

        <div>
        
            
            <Select
            style={{
                width: "100%",
                marginBottom: "10%",
                marginTop: "10%",
                cursor: "pointer",
              }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                label="Age"
                variant="filled"
            >
                <option style={{cursor: 'pointer'}} value={10}>Ten</option>
                <option style={{cursor: 'pointer'}} value={20}>Twenty</option>
                <option style={{cursor: 'pointer'}} value={30}>Thirty</option>
            </Select>
            



        </div>
         <div>
      <Button type="submit" variant="outlined">Submit</Button>
    </div>
      </form>
    </div>
  );
};

export default DeveloperForm;
