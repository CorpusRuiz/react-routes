import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <h2>Bienvenido a mi portfolio</h2>
            <nav className='navbar'>
                <Link to="/projects">Proyectos</Link>
                <Link to="/resume"> Formación y experiencia laboral</Link>
            </nav>
        </>
    )
}

export default Home;