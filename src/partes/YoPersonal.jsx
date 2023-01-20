import React from 'react'
import './yoPersonal.css'

const YoPersonal = () => {





  return (
    <><div> </div>
    <header></header>
    <div className='con'>
      <img className='foto_mia' src="yo.jpg" alt="fotografia" />
   <div className='text'> 
    <h2 className='bienvenido'>Bienvenido</h2>
    <h2>soy</h2>
    <h1 className='nombre'> Rodolfo A. Cabrera</h1>
    <h2 className='front'> Frontend Development</h2>
    <h2 className='say_me'>pero todos me llaman <strong className='apodo'>Rodo!</strong></h2>
    </div>
   
    </div>
   <section className='contacto'> 
      <a href=" mailto:rodo555666@gmail.com"  target="_blank"> <i className="fa-solid fa-envelope"></i> </a>
      <a href="https://www.linkedin.com/in/rodolfo-a-cabrera-33649a208/"  target="_blank"><i className="fa-brands fa-linkedin"></i></a>
      <a href="https://www.youtube.com/channel/UCFNx2KwndUdqtqxlgLPujjA"  target="_blank"><i className="fa-brands fa-youtube"></i></a>
      <a href="https://github.com/rodo555666"  target="_blank"><i className="fa-brands fa-square-github"></i></a>
      </section>
      <hr />
      <section className='idiomas'> 
      <div className='con_idioma'><h3>Ingles</h3></div> 
      <div className='con_idioma'> <h3>Español</h3></div> 
      <div className='con_idioma'> <h3>Chino</h3></div> 
      </section>
    
      <h2 className='experiencia'> <strong className='años'>+3</strong> Años desarrollando <strong className='años'>soluciones y productos</strong></h2>
      <hr />
      <article className='skills'> 
      <i className="fa-brands fa-square-js"></i>
      <i className="fa-brands fa-html5"></i>
      <i className="fa-brands fa-css3-alt"></i>
      <i className="fa-brands fa-react"></i>
      <i className="fa-brands fa-node-js"></i>
      <i className="fa-brands fa-python"></i>
   
      </article>
      
      <article className='otras_tecnologias'>
      <p>Ruby</p>
      <p>Blender</p>
      <p>Unreal Engine</p>
      <p>Unity</p>
      <p>Godot</p>
      <p>Construct</p>
      <p>Photoshop</p>
      <p>Krita</p>
    </article>

    <section className='proyectos'> 

    <div className='trabajo' >
      <img src="reproductor.jpg" alt="prueba" />
     <a className='link' href="https://illustrious-cat-fb5127.netlify.app" target='_blank'>
      <p className='proyecto_nombre'>reproductor</p> </a></div>
      
  
    </section>
        <h2>" Hoy estás haciendo lo que ayer no podías" .</h2>
    
    </>
  )
}

export default YoPersonal