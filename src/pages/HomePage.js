import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';


const HomePage = (props) =>{

    const setting={
        arrows: false,
        Infinite:true,
        speed:1000,
        autoplayspeed:1500,
        fade:true,
        autoplay:true
    }



    return(
        <div className="galeria">
            <Slider {...setting}>
             <img src="imagenes/img01.jpg" alt="imgo1"></img>
             <img src="imagenes/img02.jpg" alt="imgo2"></img>
             <img src="imagenes/img03.jpg" alt="imgo3"></img>
             <img src="imagenes/img04.jpg" alt="imgo4"></img>
             <img src="imagenes/img05.jpg" alt="imgo5"></img>
             </Slider>
        </div>
    )
}



export default HomePage; 