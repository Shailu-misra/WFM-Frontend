import React from 'react';
import {useNavigate, Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Dashboard = () => {

    let navigate = useNavigate()
    return (
        <div className="row">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Disconnection summary</Card.Title>
                    <Card.Text>
                    total 1011 disconnection done, 10 pending.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Dashboard;