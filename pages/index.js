import { useEffect, useState } from 'react'

import Container from '../components/Layout/Container'
import CardBenefits from '../components/Cards/CardBenefits'
import CardPresentation from '../components/Cards/CardPresentation'

import { getProjects } from '../services/projects'

export default function Home () {
  const [projects, setProjects] = useState([])

  const callProjects = async () => {
    const allProjects = await getProjects()
    setProjects(allProjects)
  }

  useEffect(() => {
    callProjects()
  }, [])

  return (
    <Container>

      <div class='bg-image'>
        <div class='container-fluid hero'>
          <div class='row mt-5'>
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
            <div class='row pt-4 pb-5'>
              <div class='col-12 mt-32 mb-4'>
                <section class='second-title title p-3'>
                  Esto solo lo podemos hacer si trabajamos juntos. Con visión y sabiduría, tú y tu compañía pueden ser parte de esta historia.
                </section>
              </div>
              <div class='col-12 col-md-4'>
                <CardBenefits
                  url='/svg/cards/pollution.svg'
                  description='Por la compra de un Bono de Carbono se evita la emisión a la atmósfera de una tonelada de dióxido de carbono (CO2).'
                />
              </div>
              <div class='col-12 col-md-4'>
                <CardBenefits
                  url='/svg/cards/certified.svg'
                  description='Adquiere tus bonos de carbono con los proyectos que se encuentran en nuestra plataforma y recibe tu certificado en el que se avala tu contribución directa a la mitigación del cambio climático.'
                />
              </div>
              <div class='col-12 col-md-4'>
                <CardBenefits
                  url='/svg/cards/compartir.svg'
                  description='Comunica entre sus grupos de interés sobre las acciones que ya estas tomando para compensar tus emisiones anuales de gases de efecto invernadero e invitalos a seguir construyendo juntos un futuro carbono neutro.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        {/* Aqui va mapa */}
      </div>

      <div class='bg-projects'>
        <div class='container-fluid projects'>
          <div class='row'>
            <div class='col-12 bg-magenta p-3'>
              <section class='text-white title text-center'>
                Elige un proyecto y ¡construyamos juntos un futuro carbono neutro!
              </section>
            </div>
          </div>
          <div class='row'>
            <div class='container py-5'>
              <div class='row'>
                {

                        [1, 2, 3].map((project, index) => (
                          <div key={index} class='col-12 col-md-6 mt-3'>
                            <CardPresentation imageProyect='https://admin.toroto.mx/toroto/img/projects/conservation-and-management-of-forest-reserve-in-chiapas_21604961266.jpeg' price='10.5' location='Chis, Mex' name='Finca Guadalupe Zajú' type='Forestry' availableOffsets='1200' />
                          </div>
                        ))

                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}
