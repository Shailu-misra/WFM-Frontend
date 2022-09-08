import React, {useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';

const AddLineMan = ()=> {
    const nameRef = useRef(null);
    const erpPsaRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const passwordRef = useRef(null);
    const creatorErpIdRef = useRef(null);
    const reportingPhoneNumberRef = useRef(0);
    const aadharNumberRef = useRef(null);
    const uanNumberRef = useRef(null);
    const feederCodeRef = useRef(null);
    const status = useRef(null);

    let navigate = useNavigate()

    const API_URL = "http://localhost:8080/users/addLineMan"
    const addLineMan =  async (e)=>{
        e.preventDefault();
        let user = {
            name: nameRef.current.value,
            erpPsa: erpPsaRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
            password: passwordRef.current.value,
            creatorErpId: creatorErpIdRef.current.value,
            reportingPhoneNumber: reportingPhoneNumberRef.current.value,
            aadharNumber: aadharNumberRef.current.value,
            uanNumber: uanNumberRef.current.value,
            feederCode: feederCodeRef.current.value,
            status: "ACTIVE"
        }
        console.log(user)
        
        if(user.name && user.erpPsa && user.phoneNumber && user.password && user.aadharNumber && user.uanNumber && user.feederCode) {
            console.log(user)
            // all fields are correct
            
            let response = await axios.post(API_URL, user).catch((res)=> {
                //alert user about any error in saving user
                alert(res.response.data.message)
            })
    
            if(response && response.status === 201) {
                alert("User "+ response.data.name +" created")
                navigate("/lineman")
            }                
        }
        else {
            alert('Some fields are empty')
        }
    }
    return (
        <div >
            <h1 style = {{textAlign: "center"}}>Add Line Man</h1>
            <Form style={{width: "50%", margin:"10px auto"}}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref= {nameRef} type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPSA">
                    <Form.Label>ERP PSA(Division)</Form.Label>
                    <Form.Control ref= {erpPsaRef} type="text" placeholder="ERP PSA (Division)" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control ref= {phoneNumberRef} type="text" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCreatorErpId">
                    <Form.Label>JE ERP ID</Form.Label>
                    <Form.Control ref= {creatorErpIdRef} type="text" placeholder="JE ERP ID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicreportingPhoneNumber">
                    <Form.Label>Reporting Phone Number</Form.Label>
                    <Form.Control ref= {reportingPhoneNumberRef} type="text" placeholder="Reporting Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref= {passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAadharNumber">
                    <Form.Label>Aadhar Number</Form.Label>
                    <Form.Control ref= {aadharNumberRef} type="text" placeholder="Aadhar Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUanNumber">
                    <Form.Label>UAN Number</Form.Label>
                    <Form.Control ref= {uanNumberRef} type="text" placeholder="UAN Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFeederCode">
                    <Form.Label>Feeder Coder</Form.Label>
                    <Form.Control ref= {feederCodeRef} type="text" placeholder="Feeder Code" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={addLineMan}>
                    Submit
                </Button>

            </Form>
        </div>
        
    );
};

export default AddLineMan;