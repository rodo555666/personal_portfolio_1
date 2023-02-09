import React from 'react'
import './yoPersonal.css'

const YoPersonal = () => {





  return (
    <><div className='portfolio'>
  
    
    <header>
       <a href="#conocimiento"><i className="fa-regular fa-lightbulb"></i><i className="fa-solid fa-angle-down"></i></a>
      <a href="#portafolio"><i className="fa-solid fa-briefcase"></i><i className="fa-solid fa-angle-down"></i></a>
      <button><i className="fa-solid fa-file-arrow-down"></i> cv</button>
      </header>
 
     <div className='divisor'> </div>
 
    <div className='con'>
      <img className='foto_mia' src="yo.jpg" alt="fotografia" />
   <div className='text'> 
    <h2 className='text_azul'>&lt; Bienvenido</h2>
    <h2>soy</h2>
    <h1 className='nombre'> Rodolfo A. Cabrera</h1>
    <h2 className='text_azul'> Frontend Development /&gt;</h2>
    
    </div>
   
    </div>
   <section className='contacto'> 
      <a href=" mailto:rodo555666@gmail.com"  target="_blank"> <i className="fa-solid fa-envelope"></i> </a>
      <a href="https://www.linkedin.com/in/rodolfo-a-cabrera-33649a208/"  target="_blank"><i className="fa-brands fa-linkedin"></i></a>
      <a href="https://www.youtube.com/channel/UCFNx2KwndUdqtqxlgLPujjA"  target="_blank"><i className="fa-brands fa-youtube"></i></a>
      <a href="https://github.com/rodo555666"  target="_blank"><i className="fa-brands fa-square-github"></i></a>
      </section>
    
      <section className='idiomas'> 
      <div className='con_idioma'><h3>Ingles</h3></div> 
      <div className='con_idioma'> <h3>Español</h3></div> 
      <div className='con_idioma'> <h3>Chino</h3></div> 
      </section>
    
      <h2 id='conocimiento'className='experiencia'> <strong className='años'>+3</strong> Años desarrollando <strong className='años'>soluciones y productos</strong></h2>
    

      <article  className='skills'> 
      <img src="html.png" alt="html" />
      <img src="css.png" alt="css" />
      <img src="js.png" alt="js" />
      <img src="react.png" alt="react" />
      <img src="python.png" alt="python" />
      <img src="ruby.png" alt="ruby" />
      </article>
      
      <ul className='habilidades'>
        <li><i className="fa-solid fa-mobile"></i><p>Responsive</p> </li>
        <li><i class="fa-solid fa-fingerprint"></i><p>friendly interfaces</p></li>
        <li><i class="fa-brands fa-figma"></i><p>Design</p> </li>
        <li><i class="fa-solid fa-server"></i><p>Api consumption</p></li>
         
      </ul>

   

    <section id='portafolio' className='proyectos'> 
    <div className='trabajo' >
      <img src="reproductor.jpg" alt="prueba" />
      <video className='video' src="dsf"></video>
     <a className='link' href="https://illustrious-cat-fb5127.netlify.app" target='_blank'>
      <p className='proyecto_nombre'>reproductor</p> </a>
      <ul className='descripcion'>
        App de musica
        <li>consume api de deezer</li>
        <li>responsivo</li>
        <li>funcion lista de favoritos</li>
        <li>interfaz amigable</li>
      </ul>
      </div>

      <div className='trabajo' >
      <img src="reproductor.jpg" alt="prueba" />
      <video className='video' src="dsf"></video>
     <a className='link' href="https://illustrious-cat-fb5127.netlify.app" target='_blank'>
      <p className='proyecto_nombre'>reproductor</p> </a>
      <ul className='descripcion'>
        App de musica
        <li>consume api de deezer</li>
        <li>responsivo</li>
        <li>funcion lista de favoritos</li>
        <li>interfaz amigable</li>
      </ul>
      </div>
      
  
    </section>
       
     </div>
    </>
  )
}

export default YoPersonal