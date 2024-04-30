import Polos from './data/polos.json';

const Single = () => {

    const currentRoute = window.location.pathname;
    const polos = Polos.find(it => currentRoute.includes(it.slug))
    
    return (<>
        <h1>{polos.name}</h1>
        <hr></hr>
        <img src={polos.picture}></img>
        <center><p>{polos.description}</p></center>
    </>);
}

export default Single;