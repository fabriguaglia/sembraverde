import React from 'react'
import "./contact.css"
import imgImport from './imgimport'

 function Contact() {
  return (
    <div className='contactbody'>
        <h1 className='title'>Sobre mi</h1>
        <div className='contenido'>
            <img src={imgImport.person} alt='me' className='picture'/>
            <div className='abouttext'>
                <p>Hola! Mi nombre es Fabrizio Donato Guaglianone, pertenezco al Stage 2 del curso de desarrollo web de Streambre "Generación T", y en este entregable buscaba crear una página para ayudar al medio ambiente, por esta idea es que nació Sembraverde, una página web de venta de paquetes de semillas de plantas y arboles.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolore modi asperiores, possimus suscipit reprehenderit nesciunt similique maxime repellendus consequatur earum. Eum aut necessitatibus eveniet, repellendus praesentium velit blanditiis quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolore modi asperiores, possimus suscipit reprehenderit nesciunt similique maxime repellendus consequatur earum. Eum aut necessitatibus eveniet, repellendus praesentium velit blanditiis quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolore modi asperiores, possimus suscipit reprehenderit nesciunt similique maxime repellendus consequatur earum. Eum aut necessitatibus eveniet, repellendus praesentium velit blanditiis quae.</p>
            </div>
        </div>
        <div className="redes">
            <a href='https://github.com/fabriguaglia/'><img src={imgImport.githubicon} alt="github" className='icon'/></a>
            <a href='https://www.instagram.com/ffazzdg/'><img src={imgImport.iglogo} alt="instgram" className='icon'/></a>
            <a href='https://discord.com/users/696021846579085352'><img src={imgImport.discordicon} alt="discord" className='icondis'/></a>
            <a href='https://twitter.com/fazzdg'><img src={imgImport.twittericon} alt="twitter" className='icon'/></a>
        </div>
    </div>
  )
}
export default Contact