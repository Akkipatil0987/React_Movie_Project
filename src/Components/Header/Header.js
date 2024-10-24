import React, { useState } from 'react'
import './Header.css'
import { Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom';
function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();


  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // window.location.href = `/searchresults/${searchTerm}`;
  //  navigate (`/searchresults/${searchTerm}`);
    if (searchTerm.trim()) {
      console.log(`Navigating to search results for query: ${searchTerm}`);
      navigate(`/search?query=${searchTerm}`);
    }
  };
  return (
   <section className='heder_section'>
    <Navbar collapseOnSelect expand="lg" className="navsecti">
      <Container>
        <Navbar.Brand as={Link} to="/">MovieDb</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Popular</Nav.Link>
            <Nav.Link as={Link} to="/toprated">Top Rated</Nav.Link>
            <Nav.Link as={Link} to="/upcoming">Upcoming</Nav.Link>
            <Form onSubmit={handleSubmit}>
            <Form.Control type="text" value={searchTerm} onChange={handleChange} placeholder="Search" />
            </Form>
            <Link to={`/searchresults/${searchTerm}`}><button className='searchbutton'>search</button></Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </section>
  )
}

export default Header

