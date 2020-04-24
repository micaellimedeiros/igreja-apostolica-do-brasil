import React from 'react';

import { LineTop, Container } from './styles';
import sobre from '../../assets/sobre.png';
import jblambeth from '../../assets/jblambeth.jpg';
import lambeths from '../../assets/lambeths.jpg';
import family from '../../assets/family.jpg';
import bishops from '../../assets/bishops.jpg';

export default function About() {
  return (
    <>
      <LineTop>
        <h1>SOBRE NÓS</h1>
      </LineTop>
      <Container>
        <img src={sobre} alt="Sobre nós" />
        <img className="jblambeth" src={jblambeth} alt="JB Lambeth" />
        <img className="lambeths" src={lambeths} alt="Lambeth" />
        <h4>
          JB Lambeth nasceu em Kilgore – Texas, no dia 13 de Agosto de 1932. Foi
          criado nos primeiros anos de vida na Primeira Igreja Pentecostal de
          Kilgore. Filho de Cleveland Lambeth e de Lottie Lambeth. Ele foi
          batizado em 1942 em Nome de Jesus Cristo pelo Pastor Taylor Ford e
          recebeu o Dom do Espírito Santo em 12 de Outubro de 1942, durante uma
          campanha evangelística da irmã Freeman. No dia 25 de Janeiro de 1952,
          ele se casou com Wanda Louise Mason, filha de James Winford Mason e
          Rena Kathrine Mason. O Bispo JB Lambeth frequentou o Seminário
          Apostólico em Tulsa, Oklahoma e também o Instituto Apostólico Bíblico
          em Santa Paula, Minessotta. Mais tarde, ele fez cursos de Pós
          Graduação em diversas faculdades em outras partes do mundo. Antes de
          tornar-se missionário no Brasil, ele e sua esposa, Wanda Louise
          Lambeth, formaram diversas congregações, como por exemplo: Bakerville,
          Tatum e Longview, todas no estado do Texas. Inicialmente, o Bispo J. B
          Lambeth pediu para ser enviado para a África, como missionário, mas
          havia diversos países daquele continente que não aceitavam
          missionários. Portanto, ante o pedido do Conselho Missionário,
          Organização Unicista a qual pertencia, ele concordou em vir para o
          Brasil, por (5) cinco anos. Depois, ficou impossível tirar o amor dele
          pelo Brasil e o Povo Brasileiro. O Bispo J. B Lambeth recusou todos os
          outros convites para trabalhar em outros países. O Brasil tornou-se
          sua Pátria. J. B Lambeth e sua esposa Wanda Louise e seu pequeno filho
          (hoje Presidente Nacional da Igreja Apostólica do Brasil) John Bradley
          Lambeth, nascido em Longview, Texas no dia 18 de julho de 1958
          Chegaram ao Brasil em 20 de Abril de 1960. Ao chegarem, em Porto
          Alegre, ninguém havia para recebê-los. Era tarde da noite e no
          desespero, sem saber falar a língua portuguesa e com o seu filho, eles
          começaram a orar. O único, no aeroporto, naquela noite que sabia falar
          inglês, trabalhava na torre de controle. Ele ajudou o casal com um
          táxi instruindo o motorista para achar um hotel para eles. Mas todos
          estavam cheios por causa de um grande jogo de futebol. Finalmente,
          após uma procura intensa que durou cerca de (2) duas horas, acharam
          aposentos no City Hotel. Através do Consulado Americano, foi possível
          encontrar um outro casal de missionários residentes na cidade, irmão
          Samuel Baker. Após seis meses a família Baker foi para a cidade de São
          Paulo e o Missionário J. B. Lambeth, esposa e o filho ficaram sozinhos
          na grande cidade de Porto Alegre, sem saber falar a língua portuguesa.
          Mas Deus os ajudou e o pequeno filho, John Bradley Lambeth aprendeu
          rápido falar português, e logo foi ajudando o seu pai e a mãe nos
          deveres do dia-a-dia. Sozinhos, mas com um grande chamado em seus
          corações A família Lambeth lançou-se ao trabalho evangelístico. E com
          grande sucesso diversas congregações foram abertas nos mais distantes
          pontos do Estado do Rio Grande do Sul: Passo Fundo, Porto Alegre,
          Alvorada, Canoas, Foram alguns desses lugares. Após (5) cinco anos,
          vencido o prazo estipulado, voltaram para os Estados Unidos para rever
          a família e amigos. Mais uma vez, enquanto aguardavam inspiração
          divina, o Bispo J. B Lambeth e família trabalharam em prol da obra de
          Deus no Estado do Texas, abrindo mais uma igreja, em Greenville. Em
          1969, sentindo o chamado pelo Brasil mais uma vez, o Bispo J. B
          Lambeth preparou as malas para voltar ao lugar do seu sentimento
          espiritual.{' '}
        </h4>
        <img className="family" src={family} alt="Família Lambeth" />
        <img className="bishops" src={bishops} alt="Bispos Lambeth" />
        <h4>
          Desta vez, ele começou e fundou a Igreja Apostólica do Brasil,
          inicialmente em Canoas, E logo se transferindo para Esteio. Aqui no
          Brasil, o casal Lambeth teve mais um filho: Robert Cleveland Lambeth,
          nascido em 13 de junho de 1971 em Porto Alegre. No dia 16 de dezembro
          de 2000, veio o reconhecimento oficial: o Bispo J. B. Lambeth foi
          agraciado pela Câmara Municipal de Vereadores de Esteio. com o Título
          de Cidadão Benemérito de Esteio, cidade sede da Igreja Apostólica do
          Brasil Bispo J. B Lambeth pode dizer: “Combati o bom combate, acabei a
          carreira, guardei a fé.”
        </h4>
      </Container>
    </>
  );
}
