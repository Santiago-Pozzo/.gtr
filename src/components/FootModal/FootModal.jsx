import React from 'react'
import { FootModalStyled } from './FootModalStyles'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { closeFootModal, setSelectedProduct } from '../../Redux/FootModal/FootModalSlice'
import { addToCart } from '../../Redux/Cart/CartSlice'

const FootModal = () => {
    const dispatch = useDispatch();
    const selectedProduct = useSelector((state)=>state.footModal.selectedProduct)
    const activeModal = useSelector((state)=>state.footModal.active)

  return (
    <FootModalStyled
     className={activeModal? "" :"hidden"}
    >
      <h3>¿Agregar <span>{selectedProduct.brand}</span> <span>{selectedProduct.model}</span> al carrito?</h3>

      <Button
        onClick={()=>{
            dispatch(addToCart({ ...selectedProduct }));
            dispatch(closeFootModal())
        }}
      >
        Confirmar
      </Button>

      <Button
        onClick={()=>{
            dispatch(setSelectedProduct({}))
            dispatch(closeFootModal())
        }}
      >
        Cancelar
      </Button>
    </FootModalStyled>
  )
}

export default FootModal
