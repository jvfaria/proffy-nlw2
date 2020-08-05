import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem = () => {
  return (
    <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/55673786?s=400&u=cd17038ac765c9c71c500c596ee6e56c552d6434&v=4" alt="" />
            <div>
              <strong>João Vitor</strong>
              <span>Tecnologia</span>
            </div>
          </header>
          <p>
            Estudante e estusiasta de tecnologia, comprometido e focado em
            aprender novas tecnologias e poder ensinar o que aprendi para quem se
            interesse pelo assunto.
            </p>
          <footer>
            <p>
              Preço/hora:
                <strong>R$ 15,00</strong>
            </p>
            <button type="button">

              <img src={whatsappIcon} alt="" />
              <span>Entrar em contato</span>
            </button>
          </footer>
        </article>
      </main>
  )
}

export default TeacherItem;