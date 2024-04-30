import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);

const polos = [
  {
        name: "polo 1",
        slug: "polo-1",
        description: "Sudadera verde oscuro con un cuello estilo polo de color blanco. Tiene un texto estampado que dice PEANUTS ATHLETIC CLUB en letras blancas",
        picture: "https://hmperu.vtexassets.com/arquivos/ids/4178345-600-900?v=638387495980070000&width=600&height=900&aspect=true"
  },

  {
        name: "polo 2",
        slug: "polo-2",
        description: "Sudadera de color crema o blanca con un cuello estilo polo. Tiene un estampado de un perro de raza bulldog de color negro en el lado izquierdo del pecho.",
        picture: "https://hmperu.vtexassets.com/arquivos/ids/4245761-600-900?v=638420365518100000&width=600&height=900&aspect=true"
  },

  {
        name: "polo 3",
        slug: "polo-3",
        description: "Se trata de una sudadera negra con capucha y bolsillo tipo canguro en la parte frontal. Tiene un parche rectangular estampado que dice Formula 1 y otro parche circular rojo con el texto F1 en el pecho. También presenta un pequeño estampado de bandera a cuadros en la parte inferior trasera.",
        picture: "https://hmperu.vtexassets.com/arquivos/ids/3944547-600-900?v=638321962462900000&width=600&height=900&aspect=true"
  },
];

const Carrusel = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate("/detalle/" + slug);
  }
  
  return (
    <Carousel>
      {polos.map(item => (
        <Carousel.Item key={item.slug} onClick={() => handleClick(item.slug)}>
          <img className='w-100 dark-image' src={item.picture} alt={item.name} />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button className="btn btn-primary">Ver detalle</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;
