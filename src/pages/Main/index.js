import React from 'react';

import { LineTop, Container, Batismo, Unicidade, Santidade } from './styles';
import batismo from '../../assets/batismo.png';
import batismotitulo from '../../assets/batismo-titulo.png';
import unicidade from '../../assets/unicidade.png';
import unicidadetitulo from '../../assets/unicidade-titulo.png';
import santidade from '../../assets/santidade.png';
import santidadetitulo from '../../assets/santidade-titulo.png';

export default function Main() {
  return (
    <>
      <LineTop>
        <h1>NO QUE CREMOS</h1>
      </LineTop>
      <Container>
        <Batismo>
          <img className="top" src={batismotitulo} alt="batismo-titulo" />
          <img className="side" src={batismo} alt="batismo" />
          <h3>
            “Respondeu-lhes Pedro: Arrependei-vos, e cada um de vós seja
            batizado em nome de Jesus Cristo para remissão dos vossos pecados, e
            recebereis o dom do Espírito Santo” (Atos 2:38).
          </h3>
          <p>
            O Batismo deve ser feito em NOME, como o próprio Senhor ensinou; e
            esse nome é JESUS CRISTO. O Batismo é para a Salvação, e JESUS
            CRISTO é o único Salvador. Por isso, devemos batizar neste precioso
            NOME. Os discípulos, ao ouvirem o Senhor Jesus dizendo “ide,
            batizando-os em nome do Pai, e do Filho, e do Espírito Santo” (Mt
            28:19), foram e batizaram “em nome do Senhor Jesus” (At 2:38). Os
            Apóstolos sabiam que o seu maravilhoso Mestre era o Pai, pois
            conheciam a profecia de Isaías 9:6; sabiam que Ele era o Filho
            (Mateus 16:16); sabiam que Ele mesmo era o Espírito Santo (João
            14:17~18 e 2Coríntios 3:17). Mateus e outros discípulos se
            levantaram em sinal de apoio a Pedro, quando este, cheio do Espírito
            Santo disse: “Arrependei-vos, e cada um de vós seja batizado em nome
            de Jesus CRISTO”. Pai não é nome; nem Filho; nem Espírito Santo. O
            NOME é JESUS.
          </p>
        </Batismo>

        <Unicidade>
          <img className="top" src={unicidadetitulo} alt="unicidade-titulo" />
          <img className="side" src={unicidade} alt="unicidade" />
          <h3>
            Podemos confirmar que existe um único e Todo-Poderoso Deus. E é
            impossível que Deus minta (Tito 1:2), o que nos conduz à certeza de
            que não existe outro Deus.
          </h3>
          <p>
            Este único Deus teve um único filho, que recebeu o nome de JESUS, e
            este foi o Cristo. A palavra “Cristo” significa “ungido”, e o Senhor
            Jesus é o Cristo porque Ele recebeu a unção do Pai. E sendo filho
            único de Deus (unigênito), era ao mesmo tempo o primeiro filho
            (primogênito) de sua mãe, Maria, porque ela, depois do nascimento
            dEle, teve outros filhos com seu esposo José (João 1:14: E o verbo
            se fez carne, e habitou entre nós, e vimos a sua glória, como a
            glória do unigênito do Pai, cheio de graça e de verdade). Veja
            também João 1:18. Este único Deus teve um único filho, que recebeu o
            nome de JESUS, e este foi o Cristo. A palavra “Cristo” significa
            “ungido”, e o Senhor Jesus é o Cristo porque Ele recebeu a unção do
            Pai. E sendo filho único de Deus (unigênito), era ao mesmo tempo o
            primeiro filho (primogênito) de sua mãe, Maria, porque ela, depois
            do nascimento dEle, teve outros filhos com seu esposo José (João
            1:14: E o verbo se fez carne, e habitou entre nós, e vimos a sua
            glória, como a glória do unigênito do Pai, cheio de graça e de
            verdade). Veja também João 1:18.
          </p>
        </Unicidade>

        <Santidade>
          <img className="top" src={santidadetitulo} alt="santidade-titulo" />
          <img className="side" src={santidade} alt="santidade" />
          <h3>
            Santidade é a pureza perfeita de Deus, que não tem mancha alguma de
            pecado. Na Bíblia, santidade também pode significar a dedicação a
            Deus, se afastando da impureza do pecado. Todo crente é chamado para
            ser santo.
          </h3>
          <p>
            As vestes revelam mais o nosso interior do que cobrem o nosso corpo.
            Elas falam tanto quanto demonstram. Elas mostram nossos valores mais
            do que simbolizam nossa cultura. Se o nosso corpo deve ser usado em
            santifi cação e honra, então, devemos ser criteriosos na maneira de
            nos vestirmos. Usar roupas com a intenção de defraudar alguém, ou
            seja, despertar em outrem um desejo que não possa ser legitimamente
            satisfeito, é um pecado contra Deus e contra o próximo. Devemos nos
            vestir com modéstia e com decência. Devemos nos vestir para a glória
            de Deus e não para despertar olhares cheios de cobiça.
          </p>
        </Santidade>
      </Container>
    </>
  );
}
