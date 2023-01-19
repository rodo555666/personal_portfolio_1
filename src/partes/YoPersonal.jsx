import React from 'react'
import './yoPersonal.css'

const YoPersonal = () => {





  return (
    <><div> </div>
    <div className='con'>
      <img className='foto_mia' src="yo.jpg" alt="fotografia" />
   <div className='text'> 
    <h2>Bienvenido soy</h2>
    <h1 className='nombre'> Rodolfo A. Cabrera</h1>
    <h2 className='front'>Frontend Development</h2>
    <h2 className='say_me'>pero puedes decirme <strong className='apodo'>Rodo!</strong></h2>
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
       <h3>Ingles</h3>
      <h3>Español</h3>
      <h3>Chino</h3>
      </section>
    
      <h2 className='experiencia'>+3 años desarrollando</h2>
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
      <a className='repro' href="https://illustrious-cat-fb5127.netlify.app" target='_blank'> <img src="reproductor.jpg" alt="prueba" /> </a>
      <a className='repro' href="https://illustrious-cat-fb5127.netlify.app" target='_blank'> <img src="reproductor.jpg" alt="" /> </a>
      <a className='repro' href="https://illustrious-cat-fb5127.netlify.app" target='_blank'> <img src="reproductor.jpg" alt="" /> </a>
      <a className='repro' href="https://illustrious-cat-fb5127.netlify.app" target='_blank'> <img src="reproductor.jpg" alt="" /> </a>
      <a className='repro' href="https://illustrious-cat-fb5127.netlify.app" target='_blank'> <img src="reproductor.jpg" alt="" /> </a>
      <a className='repro' href="https://illustrious-cat-fb5127.netlify.app" target='_blank'> <img src="reproductor.jpg" alt="" /> </a>
      
    </section>
      
    
    </>
  )
}

export default YoPersonal