import React from 'react'
import { AboutImageContainerStyled, AboutInfoContainerStyled, AboutTextContainerStyled, AboutWrapperStyled, AboutLocationContainerStyled } from './AboutStyles'
import { ButtonStyled } from '../Button/ButtonStyles'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  return (
    <AboutWrapperStyled>
      <AboutInfoContainerStyled>
        <AboutImageContainerStyled>
            <img src="https://www.infoviajera.com/wp-content/uploads/2020/03/Tienda_Musica_Guitar_Center_NYC_New_York_USA.jpg" alt="Guitaras" />
        </AboutImageContainerStyled>

        <AboutTextContainerStyled> 
            <h2>Acerca de .GTR</h2>
            <p>Somos una tienda de instrumentos espacializada en guitarras y otros instrumentos de cuerdas. Con nosotros vas a encontrar la más amplia variedad, las mejores marcas y excelentes precios en todos los equipos para músicos profesionales o iniciantes. Te vamos a brindar una atención personalizada tanto en nuestro local como en nuestras redes y tienda virtual, para que encuentres la mejor opción que se ajuste a tus necesidades. <br/>¡Te esperamos!</p>
        </AboutTextContainerStyled>
      </AboutInfoContainerStyled>

      <AboutInfoContainerStyled> 
        <AboutTextContainerStyled>
            <h3>¿Dónde estamos?</h3>
            <p>Vení a conocer nuestro local en Av. Siempreviva 2400</p>
            <ButtonStyled
             whileTap={{scale: 0.95}}
             onClick={()=> navigate("/contact")}
            >Contactanos</ButtonStyled>
        </AboutTextContainerStyled>

        <AboutLocationContainerStyled>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217955.00184548012!2d-64.35902573214794!3d-31.39905470565493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses!2sar!4v1692458640452!5m2!1ses!2sar"></iframe>
        </AboutLocationContainerStyled>
      </AboutInfoContainerStyled>
    </AboutWrapperStyled>
  )
}

export default About
