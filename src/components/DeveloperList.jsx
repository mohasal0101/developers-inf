import React from "react";
import Grid from '@material-ui/core/Grid';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import { actions } from "./Developer";
import Button from '@material-ui/core/Button';



function DeveloperList (props) {
 

    return props.devOps.length ?(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.devOps.map((dev) => (
                        <tr key={dev.id}>
                            <td>{dev.name}</td>
                            <td>{dev.email}</td>  
                            <td>{dev.username}</td>
                            <td>{dev.address}</td>
                            <td>{dev.age}</td>
                            <td className="delete-btn">
                                    <Grid item xs={30} style={{width:'113%'}}>
                                        <Button variant="contained" color="secondary" onClick={() =>
                                        props.dispatch({
                                            type: actions.deleteDeveloper,
                                            payload: { id: dev.id },
                                        })
                                    }>
                                    Delete
                                    </Button>
                                        <DeleteForeverSharpIcon />
                                    </Grid>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : (
        <h1 className="form-header">Developers List</h1>
    );

}

export default DeveloperList;
