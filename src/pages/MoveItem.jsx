import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function MoveItem() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setData(data));
    })
    return (
        <Container fluid>
            <Col></Col>
            <Col>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Col>
            <Col>
                <table>

                </table>
            </Col>
            <Col></Col>
        </Container>
    )
}

        