import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const LineMan = () => {
    const [lineMen, setLineMen] = useState([]);
    useEffect(() => {
        const fetchDate = async () => {

            const API_URL = "http://localhost:8080/users/userTp"
            let response = await axios.get(API_URL).catch((res) => {
                //alert user about password incorrrect or user not found
                // console.log(res.response);

            })


            setLineMen(response.data)
            // console.log(lineMen);

        }

        fetchDate();


    }, [lineMen]);


    const deleteLineManHandler = async (phoneNumber) => {
        // e.preventDefault();
        const API_URL = "http://localhost:8080/users/deleteLineMan"
        console.log(phoneNumber);
       
        let user = {
            phoneNumber: phoneNumber,
        }
        console.log(user)

        if (user.phoneNumber) {
            console.log(user)
            // all fields are correct

            let response = await axios.post(API_URL, user).catch((res) => {
                //alert user about any error in saving user
                alert(res.response.data.message)
            })

            console.log(response)
            if (response && response.status === 200) {
                alert("User " + response.data.name + " deleted")
            }
        }
        else {
            alert('Please provide line man phone number')
        }
    }


    return (
        <div>
            <div className="text-center">

                <Link to="/addLineMan">
                    <Button variant="success" style={{ marginTop: "20px" }}>Add Line Man</Button>
                </Link>
                <Table striped bordered hover style={{ marginTop: "10px" }}>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Monile No.</th>
                            <th>Feeder Code</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lineMen.map(
                                (lineMan) => <tr key={lineMan.phoneNumber}>
                                    <td>#</td>
                                    <td>{lineMan.name}</td>
                                    <td>{lineMan.phoneNumber}</td>
                                    <td>{lineMan.feederCode}</td>
                                    <td>{lineMan.status}</td>
                                    <td><Button variant="danger" onClick={() => deleteLineManHandler(lineMan.phoneNumber)}>Deactivate</Button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    );
}

export default LineMan;