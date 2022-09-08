import React, {useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';

const DeleteLineMan = ()=> {

    const phoneNumberRef = useRef(null);

    let navigate = useNavigate()

    const API_URL = "http://localhost:8080/users/deleteLineMan"
    const deleteLineMan =  async (e)=>{
        e.preventDefault();
        let user = {
            phoneNumber: phoneNumberRef.current.value,
        }
        console.log(user)
        
        if(user.phoneNumber) {
            console.log(user)
            // all fields are correct
            
            let response = await axios.post(API_URL, user).catch((res)=> {
                //alert user about any error in saving user
                alert(res.response.data.message)
            })
            
            console.log(response)
            if(response && response.status === 200) {
                alert("User "+ response.data.name +" deleted")
            }                
        }
        else {
            alert('Please provide line man phone number')
        }
    }
    return (
        <div>
            <h1 style = {{textAlign: "center"}}>Delete Line Man</h1>
            <Form style={{width: "50%", margin:"10px auto"}}>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number of Line Man</Form.Label>
                    <Form.Control ref= {phoneNumberRef} type="text" placeholder="Phone Number" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={deleteLineMan}>
                    Delete Line Man
                </Button>

            </Form>
        </div>
        
    );
};

export default DeleteLineMan;