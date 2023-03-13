import React from 'react'
import './yoPersonal.css'


const YoPersonal = () => {





  return (
    <><div className='portfolio'>
  
    
    <header>
      <section>
       <a href=""><i className="fa-solid fa-language"></i></a> 
      <a href="#conocimiento"><i className="fa-regular fa-lightbulb"></i><i className="fa-solid fa-angle-down"></i></a>
      <a href="#portafolio"><i className="fa-solid fa-briefcase"></i><i className="fa-solid fa-angle-down"></i></a> 
      <button><i className="fa-solid fa-file-arrow-down"></i> cv</button></section>
      </header>
    
     <div className='divisor'> </div>

    <div className='con'>
      <img className='foto_mia' src="yo.jpg" alt="fotografia" />
   <div className='text'> 
    <h2 className='text_azul'>&lt; Bienvenido</h2>
    <h2 className='text_azul'>soy</h2>
    <h1 className='nombre'> Rodolfo A. Cabrera</h1>
    <h2 className='text_azul'> Front-End Developer /&gt;</h2>
    <section className='contacto'> 
      <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=GTvVlcSPFdTFsRdZrnJRzGpxjXFqtchZtVjnpPVQCKmnjRMzCdXBhwqfdFpncQknSSRDwBvrWzfMV"  target="_blank"><i className="fa-solid fa-envelope"></i></a>
      <a href="https://www.linkedin.com/in/rodolfo-a-cabrera-33649a208/"  target="_blank"><i className="fa-brands fa-linkedin"></i></a>
      <a href="https://www.youtube.com/channel/UCFNx2KwndUdqtqxlgLPujjA"  target="_blank"><i className="fa-brands fa-youtube"></i></a>
      <a href="https://github.com/rodo555666"  target="_blank"><i className="fa-brands fa-square-github"></i></a>
      </section>
    </div>
   
    </div>
   
    
      <section className='idiomas'> 
      </section>

    
    <article id='conocimiento' >
      <section  className='experiencia'> <div><i className="fa-regular fa-lightbulb"></i></div> <p>conocimiento</p>   </section>
       <section className='skills'>
        <div><i className="fa-brands fa-html5"></i><p>HTML</p></div>
        <div><i className="fa-brands fa-css3-alt"></i><p>Css</p></div>
        <div><i className="fa-brands fa-js"></i><p>JavaScript</p></div>
        <div><i className="fa-brands fa-react"></i><p>React</p></div>
        <div><i className="fa-brands fa-python"></i><p>Pithon</p></div>
        <div><i className="fa-solid fa-gem"></i><p>Ruby</p></div>
       </section>

      <ul className='habilidades'>
        <li><i className="fa-solid fa-mobile"></i><p>Responsive</p></li>
        <li><img className='img_tec' src="tailwind-css-logo.png" alt="taiwind"/><p>Tailwind</p></li>
        <li><i className="fa-solid fa-fingerprint"></i><p>friendly interfaces</p></li>
        <li><i className="fa-brands fa-figma"></i><p>Design</p> </li>
        <li><i className="fa-solid fa-server"></i><p>Api consumption</p></li>
      </ul></article>

   

    <section id='portafolio' className='proyectos'> 

    <section className='experiencia'> <div><i className="fa-solid fa-briefcase"></i></div> <p>Portafolio</p>   </section>

    <div className='trabajo' >
      <section className='pagina'><img className='img_largo' src="reproductor.jpg" alt="prueba" />
      <img className='img_corto' src="reproductor.jpg" alt="prueba" />
      <img className='img_corto' src="reproductor.jpg" alt="prueba" />
      <img className='img_corto' src="reproductor.jpg" alt="prueba" />
        <a className='link' href="https://illustrious-cat-fb5127.netlify.app" target='_blank'>
        <p className='proyecto_nombre'>reproductor</p>
       </a>
       </section>

      <ul className='descripcion'>
        App de musica
        <li>consume api de deezer</li>
        <li>responsivo</li>
        <li>funcion lista de favoritos</li>
        <li>interfaz amigable</li>
      </ul>
      </div>

      
  
    </section>
       <footer>
      <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=GTvVlcSPFdTFsRdZrnJRzGpxjXFqtchZtVjnpPVQCKmnjRMzCdXBhwqfdFpncQknSSRDwBvrWzfMV"  target="_blank"><i className="fa-solid fa-envelope"></i></a>
      <a href="https://www.linkedin.com/in/rodolfo-a-cabrera-33649a208/"  target="_blank"><i className="fa-brands fa-linkedin"></i></a>
      <a href="https://www.youtube.com/channel/UCFNx2KwndUdqtqxlgLPujjA"  target="_blank"><i className="fa-brands fa-youtube"></i></a>
      <a href="https://github.com/rodo555666"  target="_blank"><i className="fa-brands fa-square-github"></i></a>
     </footer>
     </div>
    </>
  )
}

export default YoPersonal