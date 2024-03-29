import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Restaurant({ item }) {
    return (

        <>
              {/* for PARAMS- :id */}
            <Link style={{textDecoration:'none'}} to={`restaurant/${item.id}`} >

                <Card className="my-3 p-3 rounded cards">
                    <Card.Img src={item.photograph} className="p-3" variant="top" />
                    <Card.Body>
                        <Card.Title as="div">
                            <h4>{item.name}</h4>
                        </Card.Title>
                        <Card.Text as="div">
                            <p> Cuisine: {item.cuisine_type}</p>
                        </Card.Text>
                        <Card.Text as="div">
                            <p> {item.neighborhood}</p>
                        </Card.Text>

                    </Card.Body>
                </Card>

            </Link>

        </>


    )
}

export default Restaurant
