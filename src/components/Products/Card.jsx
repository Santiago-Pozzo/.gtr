import React from 'react'
import { CardProductStyled } from './ProductsStyles'
import { ButtonStyled } from '../Button/ButtonStyles'
//{id, cat, brand, model, description, img, price}

const Card = () => {
  return (
    <CardProductStyled>
        <h2>Holanda</h2>
        {/* <h4>{cat}</h4>
        <img src={img} alt={model} />
        <h2>{brand}</h2>
        <h3>{model}</h3>
        <p>{description}</p>
        <p>${price}</p> */}
        {/* <ButtonStyled>
            Agregar
        </ButtonStyled> */}

    </CardProductStyled>
  )
}

export default Card
