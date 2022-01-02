import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Col, Row, Image, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function RestaurantDetails() {
    const [data, setData] = useState([]);
    const params = useParams()


    useEffect(() => {
        const fetchData = async () => {
            await fetch('/restaurants.json')
                .then((res) => res.json())
                .then((data) => setData(data.restaurants))
        }
        fetchData()
    }, [])



    const details = data.find((item) => item.id == params.id)

    return (
        <>
            <Link className="btn btn-outline-dark my-3 rounded btn" to="/">Back Button</Link>
            {details ? (

                <>
                    <Row className="my-3">
                        <Col md={3}>
                            <Image className="img" src={details.photograph} alt={details.name} fluid></Image>
                        </Col>
                        <Col md={4}>
                            <ListGroup.Item>
                                <h2>{details.name}</h2>
                                <p>{details.neighborhood}</p>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <p><strong>Cuisine:</strong>{details.cuisine_type}</p>
                            </ListGroup.Item>


                            <ListGroup.Item>
                                <p><strong>Address:</strong>{details.address}</p>
                            </ListGroup.Item>
                        </Col>

                        <Col md={4}>
                            <ListGroup.Item>
                                <h4>Operating Hours</h4>
                                <p>Monday:{details.operating_hours.Monday}</p>
                                <p>Tuesday:{details.operating_hours.Tuesday}</p>
                                <p>Wednesday:{details.operating_hours.Wednesday}</p>
                                <p>Thursday:{details.operating_hours.Thursday}</p>
                                <p>Friday:{details.operating_hours.Friday}</p>
                                <p>Saturday:{details.operating_hours.Saturday}</p>
                                <p>Sunday:{details.operating_hours.Sunday}</p>
                            </ListGroup.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Card className="my-3 mx-3 p-3 rounded cards">
                            <Rating details={details} />
                        </Card>
                    </Row>
                </>





            ) : null}




        </>
    )
}

export default RestaurantDetails
