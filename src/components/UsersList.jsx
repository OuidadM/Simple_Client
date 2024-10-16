import React, { useEffect, useState } from 'react';
import { Card,Container,Row,Col } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import Layout from './Layout';
const UsersList = ()=>{
    const getAllUsersEndPoint = 'http://localhost:4000/v1/user/all';
    const [users , setUsers] = useState({});

    const fetchUsers = async ()=>{
        const {data : apiResponse } = await axios.get(`${getAllUsersEndPoint}`);

        setUsers(apiResponse);
    }


useEffect(() => {
    fetchUsers();
},[])

    return (
        <Layout>
            <h3 className='text-center mb-3'>Users</h3>
            {/*<Row className="justify-content-md-center">{renderedUsers}</Row>*/}
            {Object.values(users).map(user => (
                <Row className='justify-content-center'>
                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>

                                { user.city && user.country && (
                                    <p>{user.city} - {user.country}</p>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
            
            

        </Layout>
    )
}

export default UsersList;
{/*<Row className='d-flex flex-row flex-wrap justify-content-between'>*/}

