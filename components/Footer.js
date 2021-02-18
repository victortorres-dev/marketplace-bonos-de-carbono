import Image from 'next/image'
export default function Footer () {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <Image src='/images/LOGO-BLANCO.svg' width='100%' height='100%' alt='logo' />
          <div>
            <nav className='menu'>
              <a href='#'>INICIO</a>
              <a href='#'>BONOS DE CARBONO</a>
              <a href='#'>PROYECTOS</a>
            </nav>
            <ul className='social-icons'>
              <li>
                <a href='https://www.linkedin.com/company/toroto/about/' target='_blank' rel='noreferrer'><i class='fab fa-linkedin' /></a>
              </li>
              <li>
                <a href='https://twitter.com/holatoroto' target='_blank' rel='noreferrer'><i class='fab fa-twitter' /></a>
              </li>
              <li>
                <a href='https://www.instagram.com/holatoroto/' target='_blank' rel='noreferrer'><i class='fab fa-instagram' /></a>
              </li>
              <li>
                <a href='https://www.facebook.com/holatoroto' target='_blank' rel='noreferrer'><i class='fab fa-facebook-square' /></a>
              </li>
            </ul>
          </div>

        </div>
        <p>Todos los derechos reservados Toroto 2021</p>
      </div>
    </footer>
  )
}
