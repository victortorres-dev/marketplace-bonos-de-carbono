import React from 'react'

const CardPresentation = ({ imageProyect, price, proyectLocation, proyectName, proyectType, availableOffsets }) => {
  return (
    <div class='img-card-presentation' style={{ backgroundImage: `url('${imageProyect}')` }}>
      <div class='card-presentation'>
        <div class='section-price'>
          <div class='label-price bg-yellow'>
            <div class='mr-1 subtitle-secondary text-white'>
              $
            </div>
            <div class='mr-1 subtitle text-white'>
              {price}10
            </div>
            <div class='subtitle-secondary text-white'>
              usd
            </div>
          </div>
          <button type='button' class='btn button-price mt-3 mb-3'>
            <div class='mr-4'>
              <img src='/svg/cards/add.svg' />
            </div>
            <div class='mr-4 subtitle text-white'>
              AGREGAR
            </div>
          </button>
          <div class='mt-5 content-features'>
            <div class='subtitle-secondary text-magenta'>{proyectLocation}proyectLocation</div>
            <div class='title text-white'>{proyectName}proyectName</div>
            <div class='text-yellow subtitle'>{proyectType}proyectType</div>
          </div>
        </div>
        <div class='mr-3 mt-5 content-more-information'>
          <div class='label-bonos bg-green'>
            <div class='subtitle-secondary text-white'>
              {availableOffsets}Bonos disponibles: 1200
            </div>
          </div>
          <div class='content-button-more-info mt-3 mt-md-0'>
            <div class='caption text-green'>
              CONOCER MÁS
            </div>
            <button type='button' class='btn btn-more-information ml-4'>
              <div>
                <img src='/svg/cards/knowMore.svg' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPresentation
