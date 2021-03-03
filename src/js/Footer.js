import React from 'react';
import logo from '../img/rs_school_js.svg';

const footer = {
  author: {
    name: 'Valimisael',
    link: 'https://github.com/Valimisael',
  },
  logo: {
    img: logo,
    alt: 'RSSchool JS',
    link: 'https://rs.school/js/',
  },
  year: '2021',
}

class Footer extends React.Component {
  render() {
    return(
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__autor'>
            <a href={footer.author.link} target='_blank'>@{footer.author.name}</a>
          </div>
          <div className='footer__logo'>
            <a href={footer.logo.link} target='_blank'>
              <img src={footer.logo.img} alt={footer.logo.alt} />
            </a>
          </div>
          <div className='footer__year'>&copy;{footer.year}</div>
        </div>
      </footer>
    )
  }
}

export default Footer;