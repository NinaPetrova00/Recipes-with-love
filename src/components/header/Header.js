import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    const user = useContext(AuthContext);

    // when there is logged user - login and registered btns are disabled, but loggout btn is enabled
    let isDisabledLoginRegisterBtn = user?.email ? true : false;
    // when there isn't logged user - login and registered btns are enabled, but loggout btn is disabled
    let isDisabledLogoutBtn = user?.email ? false : true;

    const onSubmitHandler = (ev) => {
        ev.preventDefault();

        const { search } = Object.fromEntries(new FormData(ev.target));
        console.log(search);

        // authService.login(email, password);
        navigate('/catalogue/search');
    };


    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                {/* <div>{user?.email}</div> */}
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Recipes" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/catalogue/vegan">Vegan</NavDropdown.Item>
                        <NavDropdown.Item href="/catalogue/vegetarian">Vegetarian</NavDropdown.Item>
                        <NavDropdown.Item href="/catalogue/highProtein">High protein</NavDropdown.Item>
                        <NavDropdown.Item href="/catalogue/lowSugar">Low sugar</NavDropdown.Item>
                        <NavDropdown.Item href="/catalogue/glutenFree">Gluten free</NavDropdown.Item>
                        <NavDropdown.Item href="/catalogue/lactoseFree">Lactose free</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/catalogue/myRecipes" disabled={isDisabledLogoutBtn}>
                            My recipes
                        </NavDropdown.Item>
                    </NavDropdown>
                    {/* <NavDropdown title="Meal Type" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Breakfast</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Lunch</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Dinner</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Snack</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>  */}

                    <div className={styles.usernameContainer}>
                        {user
                            ? <Nav.Link>Welcome, {user.email} !</Nav.Link>
                            : <></>
                        }
                    </div>
                    <div className={user ? styles.customContainerUser : styles.customContainerNoUser}>
                        <Nav.Link href="/register" disabled={isDisabledLoginRegisterBtn}>Register</Nav.Link>
                        <Nav.Link href="/login" disabled={isDisabledLoginRegisterBtn}>Login</Nav.Link>
                        <Nav.Link href="/logout" disabled={isDisabledLogoutBtn} >Logout</Nav.Link>
                        <Nav.Link href="/create" disabled={isDisabledLogoutBtn} >Add recipe</Nav.Link>
                    </div>
                </Nav>

                {/* <Form className="d-flex" onSubmit={onSubmitHandler}>
                    <Form.Control
                        type="search"
                        name="search"
                        placeholder="Search recipe"
                        className="me-2"
                        aria-label="Search"
                    />
                    {/* //TODO: redirect ot SearchCatalogue component */}
                {/* <Button variant="outline-success">Search</Button>
                </Form> */}

                <form onSubmit={onSubmitHandler}>
                    <input
                        type="search"
                        name="search"
                        id="serach"
                        placeholder="Search recipe"
                    />
                    <button>Click</button>
                </form>
            </Container>
        </Navbar>
    );
}