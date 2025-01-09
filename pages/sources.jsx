import { useEffect, useState } from "react"
import "./sources.css"
import Home from "./pagina1"

export function Fondito(){
    return(
        <body class = "bodi">
        <div>
         <video autoPlay muted loop id="background-video">
         <source src="/web-apidolar/byob2.mp4" type="video/mp4"></source>
         </video>
         </div>
         </body>
    )
  }
  
export function Cuadradito(){
    return(
        <article>
            <div>
            <img src='https://i.imgur.com/ktnBc1q_d.webp?maxwidth=760&fidelity=grand'></img>
            </div>
            <div>
                <h1>
                    EnBici
                </h1>
                <text>
                    Dev for fun :D
                </text>
            </div>
            <div>
                <Botonchingon texto = "Github" imagen = 'gitjab.png' lugar = "https://github.com/Enbici"></Botonchingon>
                <Botonchingon texto = "Home" imagen='home-icon.png' lugar = "/EnBiciweb/"></Botonchingon>
                <Botonchingon texto = "Dolar Value" imagen='dolar-icon.jpeg' lugar = "/EnBiciweb/Apidolar"></Botonchingon>

            </div>
        </article>
    )
  }

export function Botonchingon({texto,imagen,lugar}){
    return(
        <button class="botonchingon" 
        onClick={() => window.location.href = lugar}
        >
            <img class = "imgboton"src={imagen}/>
            <div>
                <text>
                    {texto}
                </text>
            </div>
        </button>
    )
}



export function Apidolalblue(){
    const [data,setData] = useState(null);
    useEffect(() => {
        fetch("https://dolarapi.com/v1/dolares/blue")
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.error("Error al consultar la API:", error));
      }, []); 
      return (
        <div>
            {data ? (
                <>  
                    <h1>Dolar Blue</h1>
                    <h3>Venta: {data.venta}</h3>
                    <h3>Compra: {data.compra}</h3>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

export function Apidolaloficial(){
    const [data,setData] = useState(null);
    useEffect(() => {
        fetch("https://dolarapi.com/v1/dolares/oficial")
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.error("Error al consultar la API:", error));
      }, []); 
      return (
        <div>
            {data ? (
                <>  
                    <h1>Dolar  Oficial</h1>
                    <h3>Venta: {data.venta}</h3>
                    <h3> Compra: {data.compra}</h3>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

export function Cuadraditodolar(){
    return(
        <article >
            <div class = "dolarvaluetext">
                <h1>Dolar Value</h1>
                <text>
                En esta sección, podrás consultar las cotizaciones actualizadas del dólar oficial y el dólar blue en Argentina.
                </text>
            </div>
            <div class = "cuadraditodolar">
            <Apidolalblue></Apidolalblue>
            <Apidolaloficial></Apidolaloficial>
            </div>
            <Botonchingon imagen="/web-apidolar/dolar-icon.jpeg" texto="Back" lugar="https://enbici.github.io/EnBiciweb/"></Botonchingon>
        </article>
    )

}