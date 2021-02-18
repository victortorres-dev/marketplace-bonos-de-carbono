import React from 'react'

const CardBenefits = ({ url, description }) => {
  return (
    <div class='card-benefits'>
      <div>
        <img src={url} class='img-card-benefits' />
      </div>
      <div class='mt-5'>
        <p class='text-center txt-color-blue'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default CardBenefits
