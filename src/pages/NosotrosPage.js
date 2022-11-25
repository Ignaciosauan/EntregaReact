import '../styles/estilos.css'; 
import { useEffect, useState } from 'react';

const NosotrosPage = prpos =>{

    const [cargando, setCargando] = useState(false);
    const [pilotos, setPilotos] = useState([]);


    useEffect (() => {
        const cargarDatos = async () => {
            setCargando(true);
            const res = await (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPilotos(res.results);
            setCargando(false);
        }
    cargarDatos();
}, []);



    return (
       <>
        <h1>NOSOTROS EJEMPLO5</h1>
        { cargando ? <p>cargando datos</p> :
        <div className="pilotos">
            { pilotos.map(piloto => (
            <div className="piloto" key={piloto}>
                <h4>{piloto.name}</h4>
                <div className="ficha">
                    <div className="foto">
                        <img src={piloto.image} alt={piloto.name}/>
                        

                    </div>
                    <div className="datos">
                        <h6>Especie : {piloto.species ==='human' ? 'humano': piloto.species} </h6>
                        <h6>Profesional : {piloto.status === 'Alive' ? 'Si' : 'No'}</h6>

                    </div>
                </div>
            </div>
            ))}
        </div>
            }
     </>
    )
}



export default NosotrosPage;