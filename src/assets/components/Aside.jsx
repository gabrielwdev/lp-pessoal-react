import Retangulo from "./Bloco-retangular";

export default function Aside() {
  const blocosData = [
    {
      subtitle: "REPOSITÓRIO",
      title: "Visite meus repositórios",
      text: "Neste repositório do Git Hub você vai encontrar divesos projetos que eu desenvolvi colocando em prática meus conhecimentos",
    },
    {
      subtitle: "ESTUDOS",
      title: "Acompanhe meus estudos",
      text: "Clicando aqui você será direcionado para uma pequena parte do meu notion, lá você encontrará diversas anotações e estudos feitos por mim!",
    },
    {
      subtitle: "COMUNIDADE",
      title: "Tecnicos de hardware",
      text: "A comunidade técnicos de hardware é um projeto que desenvolvi com o intuito de disseminar, compartilhar conhecimento com quem já é da area e quem deseja entrar nela.",
    },
  ];

  return (
    <>
      <aside id="container-interativo" class="container-interativo-dark">
        <ul class="link-projetos">
          {/* <Retangulo
            subtitle="REPOSITÓRIO"
            title="Visite meus repositórios"
            text="Neste repositório do Git Hub você vai encontrar divesos projetos que eu desenvolvi colocando em prática meus conhecimentos"
          /> */}

          {blocosData.map(function (item) {
            return (
              <Retangulo
                subtitle={item.subtitle}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </ul>
      </aside>
    </>
  );
}
