// src/components/AboutUs.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContextProvider';
import './AboutUs.css';

const items = [
    {
        id: 1,
        name: "Cooking Oil",
        category: "Kitchen",
        photo: "https://www.google.com/imgres?q=sunflower%20oil%20cooking%20oil%20photo&imgurl=https%3A%2F%2Fgreenspoon.co.ke%2Fwp-content%2Fuploads%2F2022%2F09%2FGreenspoon-Sun-Gold-3L.jpg&imgrefurl=https%3A%2F%2Fgreenspoon.co.ke%2Fproduct%2Fsungold-lite-sunflower-oil-3l%2F&docid=rv3DhRYKXkEkMM&tbnid=MF3xpxf_1aACpM&vet=12ahUKEwifhqfUsb2GAxWphv0HHQSdDW8QM3oECBgQAA..i&w=1400&h=933&hcb=2&ved=2ahUKEwifhqfUsb2GAxWphv0HHQSdDW8QM3oECBgQAA",
        size: "1 litre",
        price: "2780"
    },
    {
        id: 2,
        name: "Sugar",
        category: "Kitchen",
        photo: "https://www.google.com/imgres?q=sugar%20photo&imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fsugar-18751962.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fsugar.html&docid=H3UlP5dlBaqphM&tbnid=uR1B_i3n9z0jOM&vet=12ahUKEwi83Jj8sr2GAxWS7bsIHTaeBiUQM3oECBQQAA..i&w=800&h=534&hcb=2&ved=2ahUKEwi83Jj8sr2GAxWS7bsIHTaeBiUQM3oECBQQAA",
        size: "1 Kg",
        price: 1290
    },
    {
        id: 3,
        name: "Coffee",
        category: "Kitchen",
        photo: "https://www.google.com/imgres?q=packagedcoffee%20photo&imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FR1F423%2Fpaper-arabica-coffee-package-design-mock-up-empty-coffee-template-packaging-in-vintage-style-3d-vector-illustration-R1F423.jpg&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fcoffee-package.html&docid=w0O6Z2OisLGrNM&tbnid=6BnQrjMRT91FeM&vet=12ahUKEwiZ34DNs72GAxWch_0HHVbfBQYQM3oECFQQAA..i&w=1300&h=1035&hcb=2&ved=2ahUKEwiZ34DNs72GAxWch_0HHVbfBQYQM3oECFQQAA",
        size: "1 Kg",
        price: 2460
    },
    {
        id: 4,
        name: "Rice",
        category: "Kitchen",
        photo: "https://www.alamy.com/stock-photo/rice-plastic-packaging.html",
        size: "1 Kg",
        price: 1420
    },
    {
        id: 5,
        name: "Eggs",
        category: "Kitchen",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fegg-tray&psig=AOvVaw25sr9FbKHNS2y9f5MWhZiw&ust=1717434575728000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKibisi0vYYDFQAAAAAdAAAAABAK",
        price: 590
    },
    {
        id: 6,
        name: "Milk",
        category: "Kitchen",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Fmilk-packet-mockup_25147912.htm&psig=AOvVaw3L-8FRHLmcYon9c7jMjKgz&ust=1717434778492000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLC846i1vYYDFQAAAAAdAAAAABAE",
        price: 98
    },
    {
        id: 7,
        name: "Meat",
        category: "Kitchen",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fwww.Meatonwheelskenya.co.ke%2Fphotos%2Fa.366898083494468%2F420204871497122%2F%3Ftype%3D3&psig=AOvVaw3J5sx8qlm2GPVGf1stq8Uw&ust=1717434976656000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDC04C2vYYDFQAAAAAdAAAAABAE",
        size: "1 Kg",
        price: 1540
    },
    {
        id: 8,
        name: "Cinnamon",
        category: "Kitchen",
        photo: "https://www.google.com/imgres?q=cinnamon%20package%20photos&imgurl=https%3A%2F%2Fwww.scandikitchen.co.uk%2Fwp-content%2Fuploads%2F2024%2F02%2F3-PACK-Pagen-Kanelgifflar-Mini-Cinnamon-Buns-260g.png&imgrefurl=https%3A%2F%2Fwww.scandikitchen.co.uk%2Fproduct%2Fpagen-kanelgifflar-3-pack%2F&docid=k8Wn9zBVeMF9pM&tbnid=stPyzKgcqndDdM&vet=12ahUKEwjWsvW-tr2GAxW_T2wGHUNhAnsQM3oECC8QAA..i&w=600&h=600&hcb=2&ved=2ahUKEwjWsvW-tr2GAxW_T2wGHUNhAnsQM3oECC8QAA",
        price: 4600
    }
];

const AboutUs = () => {
    const { theme } = useTheme();

    return (
        <Container className={`about-us ${theme}`}>
            <h1 className="my-4">About Us</h1>
            <Row>
                <Col md={12} className="mb-4">
                    <Card>
                        <Card.Body>
                            <h2>Our Mission</h2>
                            <p>
                                Our mission is to provide the best products and services to our customers.
                            
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} className="mb-4">
                    <Card>
                        <Card.Body>
                            <h2>Our Products</h2>
                            <p>
                                We offer a variety of high-quality products to meet the needs of our customers.
                                Here are some of the items we provide:
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                {items.map((item) => (
                    <Col key={item.id} sm={12} md={6} lg={4} xl={3} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={item.photo} alt={item.name} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Category: {item.category}
                                </Card.Text>
                                {item.size && <Card.Text>Size: {item.size}</Card.Text>}
                                <Card.Text>Price: ${item.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AboutUs;
