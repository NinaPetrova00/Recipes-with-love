import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Recipes" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/catalogue">Vegan</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Vegetarian</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">High protein</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Low sugar</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Gluten free</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Lactose free</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Regular recipes
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Meal Type" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Breakfast</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Lunch</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Dinner</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Snack</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                    {/* <NavDropdown title="Account" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Register</NavDropdown.Item>
                    </NavDropdown> */}
                    <div style={{ 'paddingLeft': '639px', 'display': 'flex' }}>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="#action2" disabled>Logout</Nav.Link>
                    </div>
                    <Nav.Link href="/create" >Add recipe</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>

            </Container>
        </Navbar>
    );
}