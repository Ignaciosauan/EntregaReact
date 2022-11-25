import { Link } from "react-router-dom";


const Nav = (props) => {

    


    return (
        <nav>
           <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/servicios">servicios</Link></li>
            <li><Link to="/nosotros">nosotros</Link></li>
            <li><Link to="/contactos">contactos</Link></li>
           </ul>
        </nav>
        
      
    )
}

export default Nav; 