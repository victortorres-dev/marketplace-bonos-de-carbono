import { Navbar, Nav } from 'react-bootstrap'
import Image from 'next/image'

export default function NavBar () {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-blue' fixed='top'>
      <div className='container '>
        <Navbar.Brand href='#home' className='text-white'>
          <Image src='/images/logo.png' width='120px' height='30px' alt='Toroto' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto' />
          <Nav>
            <Nav.Link href='#deets' className='text-white'>INICIO</Nav.Link>
            <Nav.Link href='#deets' className='text-white'>BONOS DE CARBONO</Nav.Link>
            <Nav.Link href='#deets' className='text-white'>PROYECTOS</Nav.Link>
            <Nav.Link href='#deets' className='text-white'><i class='fas fa-shopping-cart' /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
