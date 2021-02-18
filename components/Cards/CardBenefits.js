import React from 'react'

const CardBenefits = ({url, description}) => {
  return (
    <div>
        <div>
            <img src={url} />
        </div>
        <div>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}

export default CardBenefits
