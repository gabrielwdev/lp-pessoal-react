export default function Retangulo(props) {
  return (
    <>
      <li class="link-bloco">
        <a class="ancora-projeto" href="">
          <div class="bloco-dark">
            <h3 class="gradiente subtitulo-bloco">{props.subtitle}</h3>
            <h2 class="titulo-bloco-dark">{props.title}</h2>
            <p class="texto-bloco-dark">{props.text}</p>
          </div>
        </a>
      </li>
    </>
  );
}
