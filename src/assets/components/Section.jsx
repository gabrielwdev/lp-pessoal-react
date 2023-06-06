import Imagem from "./img/logo.png";

export default function Section() {
  return (
    <>
      <section class="container-principal-dark">
        <img class="foto" src={Imagem} alt="Paulo Gabriel" />
        <h1 class="titulo gradiente">Hi, I'm Paulo Gabriel.</h1>
        <p class="sobre-mim-dark">
          I study programming <br />I want to enter this area and add to this
          technological transformation that we are experiencing...
        </p>
        <ul class="redes-sociais">
          <li class="bloco-redes">
            <a class="redes" href="https://github.com/gabriel-bsm">
              Git Hub
            </a>
          </li>
          <li class="bloco-redes">
            <a
              class="redes"
              href="https://www.linkedin.com/in/paulo-gabriel-bom-sucesso-machado-592236230/"
            >
              LinkedIn
            </a>
          </li>
          <li class="bloco-redes">
            <a class="redes" href="https://www.instagram.com/paulogabrielbsm/">
              Instagram
            </a>
          </li>
          <li class="bloco-redes">
            <a class="redes" href="mailto:paulogabriel.bsm@gmail.com">
              E-mail
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
