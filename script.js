function verificarSigno() {

   // pegando os elementos da pagina
   let nome = document.getElementById('txt-nome').value;
   let dia = Number(document.getElementById('dia').value);
   let mes = Number(document.getElementById('mes').value);
   let cardSigno = document.getElementById('card-signo');

   
   if (dia > 31 || dia <= 0 || dia == NaN) {
      alert('Data inesistente no caléndario!');
      dia = '';

   } else if (mes > 12 || mes < 1 || mes == NaN) {
      alert('Data inesistente no caléndario!');
      mes = '';

   } else {
      // limpar div para receber o novo conteudo
      cardSigno.textContent = '';

      // informacoes dos signos
      let signos = [
         {
            dataInicio: 21,
            mesInicio: 03,
            dataFim: 19,
            mesfim: 04,
            signoNome: 'Áries',
            descricao: 'Quem tem sol em Áries costuma viver no agora. Além de possuir um grande prazer em existir, ação e decisão também podem ser algumas de suas marcas. A liderança é uma característica forte no signo, que pode ser usada para o empreendedorismo.'
         },
         {
            dataInicio: 20,
            mesInicio: 04,
            dataFim: 20,
            mesfim: 05,
            signoNome: 'Touro',
            descricao: 'Quem tem sol em Touro costuma não abrir mão do que traz conforto e bem-estar, mas pode ter a possessividade em evidência. O signo preza pela beleza física e pela gula. A satisfação de Touro vem do contato com todos os cinco sentidos.'
         },
         {
            dataInicio: 21,
            mesInicio: 05,
            dataFim: 21,
            mesfim: 06,
            signoNome: 'Gêmeos',
            descricao: 'Quem tem sol em Gêmeos costuma apreciar novas ideias, novos lugares e novas pessoas. Gêmeos tem carisma de sobra e tende a fazer amigos com muita facilidade. A superficialidade e a inconsequência também podem ser algumas das marcas do signo.'
         },
         {
            dataInicio: 22,
            mesInicio: 06,
            dataFim: 22,
            mesfim: 07,
            signoNome: 'Câncer',
            descricao: 'Quem nasce com o sol no signo de Câncer pode se identificar com características como a sensibilidade e o carinho. Um canceriano ou canceriana típicos costumam ter uma ótima intuição, além de um forte vínculo com seus familiares. A busca constante por segurança também é uma característica do signo de câncer.'
         },
         {
            dataInicio: 23,
            mesInicio: 07,
            dataFim: 22, 
            mesfim: 08,
            signoNome: 'Leão',
            descricao: 'Quem nasce com o sol no signo Leão pode se identificar com características como a criatividade e a coragem. Sabe aquela galera com a autoestima lá em cima? Provavelmente tem Leão signo forte no mapa. A generosidade e o otimismo também podem ser bem presentes.'
         },
         {
            dataInicio: 23,
            mesInicio: 08,
            dataFim: 22,
            mesfim: 09,
            signoNome: 'Virgem',
            descricao: 'Quem nasce com o Sol no signo Virgem pode se identificar com características como a objetividade e a organização. Virginianas e virginianos típicos costumam buscar constantemente a perfeição e identificar facilmente detalhes que passam despercebidos por todos os outros, essa é uma das características de Virgem mais admiradas.'
         },
         {
            dataInicio: 23,
            mesInicio: 09,
            dataFim: 22,
            mesfim: 10,
            signoNome: 'Libra',
            descricao: 'Quem nasce com o sol no signo Libra, em geral, se identifica com características como a cortesia, a delicadeza e a busca constante pelo equilíbrio. Librianas e librianos típicos adoram viver relacionamentos e tendem a ter um pouco de dificuldade para tomar decisões.'
         },
         {
            dataInicio: 23,
            mesInicio: 10,
            dataFim: 21,
            mesfim: 11,
            signoNome: 'Escorpião',
            descricao: 'Quem nasce com o sol no signo Escorpião pode se identificar com características como a intensidade e o poder de transformação. Escorpianas e escorpianos típicos costumam ser bastante passionais e muito generosos. O espírito de detetive e o sexto sentido afiado também são bem marcantes em quem tem escorpião forte no mapa também.'
         },
         {
            dataInicio: 22,
            mesInicio: 11,
            dataFim: 21,
            mesfim: 12,
            signoNome: 'Sagitário',
            descricao: 'Quem tem sol em Sagitário costuma ser viajante, sua casa é o mundo inteiro. O signo viaja muito também em sua própria mente. Não tente aprisionar Sagitário de nenhuma forma, ele não aceita limites. Otimista e jovial, pode ter exageros e uma dose de deboche.'
         },
         {
            dataInicio: 22,
            mesInicio: 12,
            dataFim: 19,
            mesfim: 01,
            signoNome: 'Capricórnio',
            descricao: 'Quem tem Sol em Capricórnio pode se identificar com virtudes como persistência e responsabilidade. Capricórnio signo costuma ter metas bem definidas e noção dos seus limites. A relação próxima com o trabalho também pode ser uma característica de capricórnio bem marcante.'
         },
         {
            dataInicio: 20,
            mesInicio: 01,
            dataFim: 18,
            mesfim: 02,
            signoNome: 'Aquário',
            descricao: 'Um aquariano ou uma aquariana pode se identificar com características como o desejo de inovar e a independência. Sabe aquela galera diferentona? São eles. Aquário signo costuma ser bastante idealista e seus nativos prezam por experiências que trazem liberdade. Podem ter posturas consideradas radicais e é bem comum o aquariano ser o "do contra" da turma.'
         },
         {
            dataInicio: 19,
            mesInicio: 02,
            dataFim: 20,
            mesfim: 03,
            signoNome: 'Peixes',
            descricao: 'Quem nasce com o sol no signo de Peixes pode se identificar com virtudes como a sensibilidade e a intuição. Piscianos e piscianas típicos costumam ser bastante solidários e muitas vezes têm uma forte conexão com a espiritualidade. Por serem bastante sonhadores, se iludir com certa facilidade também é uma característica de Peixes.'
         }
      ]

      // criando elementos para receber os valores do usuario
      let txtNome = document.createElement('h5');
      txtNome.textContent = `${nome}`;

      let txtSub = document.createElement('h2');
      let paragrafo = document.createElement('p');

      // verificando o periodo da data para saber qual signo será e adicionando as informacoes nos elementos criados
      if (dia >= 21  && mes == 03 || dia <= 19 && mes == 04) {
         txtSub.textContent = `${signos[0].signoNome}`;
         paragrafo.textContent = `${signos[0].descricao}`;

      } else if (dia >= 20  && mes == 04 || dia <= 20 && mes == 05) {
         txtSub.textContent = `${signos[1].signoNome}`;
         paragrafo.textContent = `${signos[1].descricao}`;

      } else if (dia >= 21  && mes == 05 || dia <= 21 && mes == 06){
         txtSub.textContent = `${signos[2].signoNome}`;
         paragrafo.textContent = `${signos[2].descricao}`;

      } else if (dia >= 22  && mes == 06 || dia <= 22 && mes == 07) {
         txtSub.textContent = `${signos[3].signoNome}`;
         paragrafo.textContent = `${signos[3].descricao}`;

      } else if (dia >= 23  && mes == 07 || dia <= 22 && mes == 08) {
         txtSub.textContent = `${signos[4].signoNome}`;
         paragrafo.textContent = `${signos[4].descricao}`;

      } else if (dia >= 23  && mes == 08 || dia <= 22 && mes == 09) {
         txtSub.textContent = `${signos[5].signoNome}`;
         paragrafo.textContent = `${signos[5].descricao}`;

      } else if (dia >= 23  && mes == 09 || dia <= 22 && mes == 10) {
         txtSub.textContent = `${signos[6].signoNome}`;
         paragrafo.textContent = `${signos[6].descricao}`;

      } else if (dia >= 23  && mes == 10 || dia <= 21 && mes == 11) {
         txtSub.textContent = `${signos[7].signoNome}`;
         paragrafo.textContent = `${signos[7].descricao}`;

      } else if (dia >= 22  && mes == 11 || dia <= 21 && mes == 12) {
         txtSub.textContent = `${signos[8].signoNome}`;
         paragrafo.textContent = `${signos[8].descricao}`;

      } else if (dia >= 22  && mes == 12 || dia <= 19 && mes == 01) {
         txtSub.textContent = `${signos[9].signoNome}`;
         paragrafo.textContent = `${signos[9].descricao}`;

      } else if (dia >= 20  && mes == 01 || dia <= 18 && mes == 02) {
         txtSub.textContent = `${signos[10].signoNome}`;
         paragrafo.textContent = `${signos[10].descricao}`;

      } else if (dia >= 19  && mes == 02 || dia <= 20 && mes == 03) {
         txtSub.textContent = `${signos[11].signoNome}`;
         paragrafo.textContent = `${signos[11].descricao}`;
      }

      // colocando os resultados na div para ser exibido
      cardSigno.appendChild(txtNome);
      cardSigno.appendChild(txtSub);
      cardSigno.appendChild(paragrafo);
   }
}
