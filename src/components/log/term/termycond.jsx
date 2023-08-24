import React from 'react'
import "./termycond.css"

document.addEventListener("DOMContentLoaded", function () {
  const printLink = document.getElementById("print-link");

  if (printLink) {
    printLink.addEventListener("click", () => {
      window.print();
    });
  }
});

const TermYCond = () => {
  return (
<div>
<ul className='terms-list'>
<li className='term-title'>1. Introducción</li>
<li>Los siguientes términos y condiciones regulan la compra y venta de semillas de plantas a través de nuestra plataforma de venta online. Al realizar una compra, aceptas cumplir con estos términos y condiciones en su totalidad. Te recomendamos leer detenidamente esta información antes de realizar una compra.</li>

<li className='term-title'>2. Productos y Descripciones</li>
<li>2.1. Nuestro sitio web ofrece una variedad de semillas de plantas para su compra.</li>
<li>2.2. Nos esforzamos por proporcionar descripciones precisas y fotografías de los productos. Sin embargo, las imágenes son de carácter ilustrativo y las plantas resultantes pueden variar en apariencia.</li>

<li className='term-title'>3. Precios y Pagos</li>
<li>3.1. Los precios de los productos se muestran en la moneda local y pueden estar sujetos a cambios sin previo aviso.</li>
<li>3.2. Los pagos se realizan a través de métodos de pago seguros y confiables. Tu información financiera se trata con la máxima confidencialidad.</li>

<li className='term-title'>4. Envíos y Entrega</li>
<li>4.1. Realizamos envíos a las ubicaciones especificadas en nuestra plataforma. Los plazos de entrega estimados se proporcionan al momento de la compra.</li>
<li>4.2. No nos responsabilizamos por retrasos causados por factores externos, como aduanas, condiciones climáticas o problemas de transporte.</li>

<li className='term-title'>5. Devoluciones y Reembolsos</li>
<li>5.1. Si recibes productos dañados o incorrectos, contáctanos dentro de los 7 días posteriores a la recepción para coordinar la devolución o el reemplazo.</li>
<li>5.2. No aceptamos devoluciones de semillas que hayan sido abiertas o utilizadas debido a la naturaleza perecedera del producto.</li>

<li className='term-title'>6. Privacidad y Protección de Datos</li>
<li>6.1. Recopilamos y utilizamos tu información personal de acuerdo con nuestra política de privacidad. No compartiremos tus datos con terceros sin tu consentimiento.</li>

<li className='term-title'>7. Uso Responsable</li>
<li>7.1. Las semillas se venden con la expectativa de ser utilizadas para fines de cultivo legales y éticos. No nos responsabilizamos por un uso indebido de los productos.</li>

<li className='term-title'>8. Propiedad Intelectual</li>
<li>8.1. Todos los contenidos, imágenes y diseños de nuestra plataforma están protegidos por derechos de propiedad intelectual. No está permitido copiar, reproducir o distribuir estos contenidos sin autorización.</li>

<li className='term-title'>9. Cambios en los Términos y Condiciones</li>
<li>9.1. Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor una vez que se publiquen en nuestra plataforma.</li>

<li className='term-title'>10. Contacto</li>
<li>10.1. Si tienes preguntas, comentarios o inquietudes, no dudes en ponerte en <a className="contacto" href='/contacto'>contacto con nuestro equipo de atención al cliente.</a></li>

<li>Al realizar una compra en nuestra plataforma, estás aceptando automáticamente estos términos y condiciones. Te recomendamos <span id="print-link" onClick={() => window.print()}>imprimir</span> o guardar una copia para tu referencia futura.</li>
</ul>
</div>
  )}
  export default TermYCond;