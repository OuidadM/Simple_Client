import React , {useState} from "react";
import { Button, Col, Container , Form, Row} from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Layout from "./Layout";
const CreateUser = () => {
    const createUserEndpoint="http://localhost:4000/v1/user";

    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [city,setCity]= useState("");
    const [country,setCountry]= useState("");

    const submitForm = async(event) => {
        event.preventDefault();

        const payload={
            name,
            email,
            city,
            country,
        };

        try{
            const { data:apiResponse }= await axios.post(`${createUserEndpoint}`, payload);

            if(apiResponse?.status){
                const getUserId=apiResponse?.user?.id;
                //OK, give a success message
                toast.success(`User ${getUserId} successfully created.`);
                //Clear states
                setName('');
                setEmail('');
                setCity('');
                setCountry('');
            }
            else{
                toast.warn("An error has occurred");

            }
        }
        catch(error){
            const fixCaps=(message)=>message[0].toUpperCase() +message.substring(1)
            const getErrorMessage=()=>{
                const {
                    data:{
                    errors:{ body },
                },
                } = error.response;
                const message= body[0]?.message;
                //UpperCase the first letter of the message
                return fixCaps(message)
            }
            
            toast.error(getErrorMessage());
        }
    }
    return(
        <Layout>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Name"
                            onChange= {(elName)=> setName(elName.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder="Email"
                            onChange= {(FieldElement)=> setEmail(FieldElement.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="City"
                            onChange= {(FieldElement)=> setCity(FieldElement.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Country"
                            onChange= {(FieldElement)=> setCountry(FieldElement.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={submitForm}>Add User</Button>
                    </Form>
                </Col>
            </Row>
        </Layout>
    );
};

export default CreateUser;