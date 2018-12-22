import React from "react"
import { Button, Form, Col, Row, FormControl} from "react-bootstrap"
import { NavLink } from 'react-router-dom'

export default function CheckOut(props) {
    const buttonStyle = { margin: '20px 0 0 0'}
    return ( 
        <div className="checkout-form">
            <Form horizontal>
                <h3>Please enter your shipping address:</h3>
                <Row>
                    <Col xs={12} md={6}>
                        Last Name:
                    <FormControl type="text" placeholder="Name" />
                    </Col>
                    <Col xs={12} md={6}>
                        First Name:
                    <FormControl type="text" placeholder="Name" />
                    </Col>
                </Row>
                <Col>
                    Street:
            </Col>
                <Col>
                    <FormControl type="text" placeholder="Street" />
                </Col>
                <Col>
                    City:
            </Col>
                <Col>
                    <FormControl type="text" placeholder="City" />
                </Col>
                <Col>
                    Zip Code:
            </Col>
                <Col>
                    <FormControl type="number" placeholder="zipcode" />
                </Col>
            <NavLink to='./done'>
            <Button style={buttonStyle} bsSize='large' bsStyle="primary" type="submit" block>submit</Button>
            </NavLink>
            
            </Form>
        </div>
    )
}