import { useEffect } from 'react';
import logo from '../assets/simulacr-logo.png'
import ReactPlayer from 'react-player';

import './styles/MainPage.css';

const mainPage = (info) => {

//   useEffect(() => {
//     document.title = info.data.cliente.toUpperCase();
//   }, [])

  const data = info.info

  const res = "verbalResponse"
//   console.log(info)


  return (
    <>
    <div className="app__bigcontainer">
      <div className="header wf-section">
        <div>
        <a href="/" aria-label="home"><img src = {logo} 
        loading = "lazy"
        width = "170"
        srcset="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-500.png 500w,
        https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-800.png 800w, 
        https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-1080.png 1080w, 
        https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd.png 1377w"
        sizes="(max-width: 479px) 154.6943125px, 170px"
        alt ="logo" /></a>
        </div>
        </div>

        <br/>
        <div className="app__mainpage">
        <h3 className="app__nameclient">{data.cliente}</h3>
        <h3 className="app__subtitle">Test: Test de usabilidad en el sitio web</h3>
        

        <div class="app__video-container">
            {/* <ReactPlayer 
            className="react-player"
            url={data.linkVideo}
            controls= {true}
            width= "100%"
            heigth= "100%"
            />  */}
            <iframe 
            className="app__video"
            src={data.linkVideo} 
            width="1366" 
            height= "1024" 
            scrolling ="no"
            title="Loom embed"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen="true"
            />
        </div>

        <h3 className="app__subtitle">Transcripción</h3>
        <div className="app__transcripcion"><p dangerouslySetInnerHTML={{__html: data.transcripcion}}></p></div>

        <h3 className="app__subtitle">Tareas</h3>
        <div>
          <p className="app__text">Escenario: {data.escenario}</p>
          {
            data.preguntas && data.preguntas.map((tarea, index) => (
              <div className="app__tareas">
                <p className="app__text-tareas">Tarea {index + 1}:</p>
                <p className="app__text-tareas">{tarea.texto.replace(/\\n/g, " ")}</p>
                {!isNaN(tarea.respuesta) ? <p className="app__text">Respuesta: {tarea.respuesta}</p> : null} 
                <p className="app__colortext">Duración de la tarea: {tarea.tiempo}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default mainPage