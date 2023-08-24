import Offcanvas from 'react-bootstrap/Offcanvas';
import { Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaChartArea,FaSynagogue,FaFilm,FaTicketAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function DrawerMenu({ show, handleClose }) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} id="offcanvas">
        <Offcanvas.Header className='bg-dark pt-4 ps-4' closeButton>
          <Offcanvas.Title ><p className='h2 fw-bold'>Admin Panel</p></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='p-0'>
          <Navbar bg="dark" data-bs-theme="dark" gap={3} className='h-100'>
            <Container fluid className='mb-auto pt-4'>
              <Nav className="me-auto flex-column w-100">
                <Nav.Link as={Link} to="/admin/dashboard" id='admin-panel-link' activeClassName="active-link" onClick={handleClose}><FaChartArea className='me-3 mb-2' size={30}/>Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/admin/movies" id='admin-panel-link' onClick={handleClose}><FaFilm className='me-3 mb-2' size={30}/>Manage Movies</Nav.Link>
                <Nav.Link as={Link} to="/admin/theatres" id='admin-panel-link'onClick={handleClose}><FaSynagogue className='me-3 mb-2' size={30}/>Manage Theatres</Nav.Link>
                <Nav.Link as={Link} to="/admin/promo" id='admin-panel-link'onClick={handleClose}><FaTicketAlt className='me-3 mb-2' size={30}/>Promotions</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DrawerMenu;