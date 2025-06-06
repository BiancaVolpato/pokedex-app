import React, { useEffect } from 'react'
import pokedexicon from '../images/pokedexicon.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='pokemon-details-container'>
      <div className="pokedex-title">        
        <img src={pokedexicon} alt=""/>
        <h1>Pokédex</h1>
      </div>
      <div className="full-pokemon-container">
        <button onClick={() => navigate('/pokedex')}>
          <i className='bx bxs-chevron-left bx-xs'></i>
        </button>
        <div className="pokemon-details-card not-found-card">
          <h2>Pokémon não encontrado. Veja se escreveu corretamente. :)</h2>
        </div>
      </div>
      <div className="pokedex__footer">
      <ul className="footer__social-media">
                <li><a className="footer__link" href="https://www.linkedin.com/in/bianca-volpato-894229303/" target='_blank'> <i className='bx bxl-linkedin'></i> @Bianca Volpato</a>
                </li>
                <br></br>
                  <li>
                  <a className="footer__link" href="hhttps://github.com/BiancaVolpato" target='_blank'>
                  <i className='bx bxl-github'></i> @BiancaVolpato</a>          
                  </li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;