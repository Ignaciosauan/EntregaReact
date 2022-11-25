import alumnos from '../data/alumnos.json'


const ServiciosPage = props =>{
    return(
        <>

            <h1>Servicios EJEMPLO4</h1>
            <ul>
                { alumnos.map( alumno => (
                    <li>{alumno.nombre} {alumno.apellido} - edad: ({alumno.edad}) </li>

                ))}
            </ul>
        </>
    )
}

 export default ServiciosPage;