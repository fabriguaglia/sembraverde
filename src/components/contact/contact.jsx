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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolore modi asperiores, possimus suscipit reprehenderit nesciunt similique maxime repellendus consequatur earum. Eum aut necessitatibus eveniet, repellendus praesentium velit blanditiis quae.</p>
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