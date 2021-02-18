import Container from '../components/Layout/Container'
import CardBenefits from '../components/Cards/CardBenefits'

export default function Home () {
  return (
    <Container>

      <div class='bg-image'>
        <div class='container-fluid hero'>
          <div class='row'>
            <div class='col-12 mt-32 bg-yellow p-3'>
              <section class='title-hero title'>
                ¿Ya conoces tu huella de carbono?
              </section>
            </div>
          </div>
          <div class='row'>
            <div class='col-12 mt-32 bg-magenta p-3'>
              <p class='subtitle-hero subtitle'>
                Tu puedes ayudar a reducir tus emisiones de carbono y mitigar el cambio climático
              </p>
              <p class='subtitle-hero subtitle'>
                ¡Nuestra plataforma te ayuda!
              </p>
              <p class='subtitle-hero subtitle'>
                Te explicamos como...
              </p>
            </div>
          </div>
          <div class='row'>
            <div class='container'>
              <div class='row'>
                <div class='col-12'>
                  <section class='card-explain-mobile p-5'>
                    <div class='mr-3'>
                      <img src='/svg/explain-process/actualidad.svg' class='img-explain-process' />
                    </div>
                    <div class='mr-3'>
                      <img src='/svg/explain-process/certificado.svg' class='img-explain-process' />
                    </div>
                    <div class='mr-3'>
                      <img src='/svg/explain-process/financiar.png' class='img-explain-process' />
                    </div>
                    <div class='mr-3'>
                      <img src='/svg/explain-process/plataforma.svg' class='img-explain-process' />
                    </div>
                  </section>
                  <section class='card-explain-desktop p-5'>
                    <div class='mr-3'>
                      <img src='/svg/explain-process/process.svg' class='img' />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='container-fluid bg-yellow'>
        <div class='row'>
          <div class='container'>
            <div class='row'>
              <div class='col-12'>
                <section class='second-title title p-3'>
                  Esto solo lo podemos hacer si trabajamos juntos. Con visión y sabiduría, tú y tu compañía pueden ser parte de esta historia.
                </section>
              </div>
              <div class='col-12 col-md-4'>
                <CardBenefits />
              </div>
              <div class='col-12 col-md-4' />
              <div class='col-12 col-md-4' />
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        {/* Aqui va mapa */}
      </div>

      <div class='container-fluid'>
        <div class='row'>
          <div class='container'>
            <div class='row'>
              <div class='col-12 col-md-6'>
                {/* componente de projects */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}
