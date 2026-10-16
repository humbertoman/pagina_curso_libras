/* =========================================================================
   MÓDULO 3 — conteúdo
   Mídia (BunnyCDN, ImageKit, player de vídeo) e links mantidos como nos arquivos originais.
   As atividades usam o componente .atividade do motor (js/app.js): sem IDs fixos, sem globais.
   ========================================================================= */
(() => {
  const IK = 'https://ik.imagekit.io/a02tbgrjz/Gifs/';
  const BUNNY = 'https://gifscursopullzone.b-cdn.net/';
  const PLAYER_V = 'https://iframe.mediadelivery.net/embed/520267/';
  const PARAMS_V = '?autoplay=false&amp;loop=false&amp;muted=false&amp;preload=true';

  /* ---------- Peças reutilizáveis ---------- */
  const flip = (frente, src, alt = frente) =>
    `<div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>${frente}</p></div><div class="flipcard-back"><img src="${src}" alt="Sinal de ${alt}"></div></div></div>`;

  const FECHAR = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  const modal = (id, titulo, corpo) =>
    `<div id="${id}" class="modal"><div class="modal-caixa"><button type="button" class="modal-fechar" data-modal-fechar aria-label="Fechar">${FECHAR}</button><h3>${titulo}</h3>${corpo}</div></div>`;

  const CAMPO_TEXTO = '<input type="text" class="ativ-campo" placeholder="Digite sua resposta..." autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">';
  const qTexto = ({ resp, rotulo, antes = '', depois = '' }) =>
    `<div class="ativ-questao" data-resposta="${resp}">${antes}<label class="ativ-rotulo">${rotulo}</label>${depois}${CAMPO_TEXTO}</div>`;
  const qEscolha = ({ resp, pergunta, opcoes, linha = false, antes = '' }) =>
    `<div class="ativ-questao" data-resposta="${resp}">${antes}<fieldset class="ativ-grupo"><legend class="ativ-pergunta">${pergunta}</legend>` +
    `<div${linha ? ' class="ativ-opcoes-linha"' : ''}>${opcoes.map(([v, r]) => `<label class="ativ-opcao"><input type="radio" value="${v}"> ${r}</label>`).join('')}</div></fieldset></div>`;
  const qAssoc = ({ resp, src, opcoes }, i) =>
    `<div class="ativ-questao ativ-assoc" data-resposta="${resp}"><img class="ativ-midia" src="${src}" alt="Sinal ${i + 1}">` +
    `<select class="ativ-campo" data-embaralhar aria-label="Significado do sinal ${i + 1}"><option value="">Selecione...</option>${opcoes.map(([v, r]) => `<option value="${v}">${r}</option>`).join('')}</select></div>`;
  const atividade = ({ modo, titulo, instrucao, corpo, rotuloBotao }) =>
    `<div class="atividade" data-atividade="${modo}"${rotuloBotao ? ` data-rotulo-botao="${rotuloBotao}"` : ''}><h3 class="ativ-titulo">${titulo}</h3><p class="ativ-instrucao">${instrucao}</p>${corpo}</div>`;
  const associacao = (titulo, itens, opcoes) =>
    atividade({
      modo: 'lista', titulo, rotuloBotao: 'Verificar',
      instrucao: 'Escolha o significado de cada sinal e clique em <strong>Verificar</strong>.',
      corpo: `<div class="ativ-grade">${itens.map((it, i) => qAssoc({ ...it, opcoes }, i)).join('')}</div>`,
    });

  const duracao = (txt) => `<p class="duracao">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ${txt}
</p>`;

  /* ---------- Dados ---------- */
  const NUM_0_4 = [
    ['0', 'O.jpg?updatedAt=1761537311492'], ['1', '01.jpg?updatedAt=1761685268886'], ['2', '02.jpg?updatedAt=1761685268782'],
    ['3', '03.jpg?updatedAt=1761685268857'], ['4', '04.jpg?updatedAt=1761685268818'],
  ];
  const NUM_5_9 = [
    ['5', '05.jpg?updatedAt=1761685268653'], ['6', '06.jpg?updatedAt=1761685268637'], ['7', '07.jpg?updatedAt=1761685268859'],
    ['8', '08.jpg?updatedAt=1761685269112'], ['9', '09.jpg?updatedAt=1761685268718'],
  ];
  const LETRAS = [
    ['A', 'A.jpg?updatedAt=1761537311714'], ['B', 'B.jpg?updatedAt=1761537311896'], ['C', 'C.jpg?updatedAt=1761537311378'],
    ['Ç', '%C3%A7.gif?updatedAt=1761537336531'], ['D', 'D.jpg?updatedAt=1761537311683'], ['E', 'E.jpg?updatedAt=1761537311706'],
    ['F', 'F.jpg?updatedAt=1761537311568'], ['G', 'G.jpg?updatedAt=1761537311539'], ['H', 'H.gif?updatedAt=1761537336911'],
    ['I', 'I.jpg?updatedAt=1761537311442'], ['J', 'J.gif?updatedAt=1761537337629'], ['K', 'K.gif?updatedAt=1761537337133'],
    ['L', 'L.jpg?updatedAt=1761537311855'], ['M', 'M.jpg?updatedAt=1761537311769'], ['N', 'N.jpg?updatedAt=1761537310958'],
    ['O', 'O.jpg?updatedAt=1761537311492'], ['P', 'P.jpg?updatedAt=1761537311971'], ['Q', 'Q.jpg?updatedAt=1761537311695'],
    ['R', 'R.jpg?updatedAt=1761537311734'], ['S', 'S.jpg?updatedAt=1761537311750'], ['T', 'T.jpg?updatedAt=1761537311650'],
    ['U', 'U.jpg?updatedAt=1761537311728'], ['V', 'V.jpg?updatedAt=1761537311591'], ['W', 'w.jpg?updatedAt=1761685986092'],
    ['X', 'X.gif?updatedAt=1761537336868'], ['Y', 'Y.gif?updatedAt=1761537336911'], ['Z', 'Z.gif?updatedAt=1761537336827'],
  ];
  const VOCABULARIO = [
    ['APRENDER', 'aprender.gif'], ['CASA', 'casa.gif'], ['CERTO', 'certo.gif'], ['CONHECER', 'conhecer%20(2).gif'],
    ['DESCULPA', 'desculpa.gif'], ['ENTENDER', 'entender.gif'], ['GOSTAR-PRAZER', 'gostar_prazer.gif'], ['LIBRAS', 'libras.gif'],
    ['LIBRAS 2', 'libras2.gif'], ['NÃO-ENTENDER', 'nao_entender.gif'], ['NOME', 'nome.gif'], ['NÚMERO', 'numero.gif'],
    ['REPETIR', 'repetir.gif'], ['RG', 'rg.gif'], ['SABER', 'saber.gif'], ['SINAL', 'sinal.gif'],
    ['TAMBÉM', 'tambem.gif'], ['TELEFONE', 'telefone.gif'],
  ];
  const VOCABULARIO_EXTRA = [
    ['ERRADO', 'errado.gif'], ['HOMEM', 'homem.gif'], ['MULHER', 'mulher.gif'],
    ['NUNCA', 'nunca.gif'], ['OK', 'ok.gif'], ['PESSOA', 'pessoa.gif'],
  ];

  /* 3.1 — oito diálogos em vídeo vertical, cada um com a sua resposta */
  const DIALOGOS_NUMEROS = [
    ['c3c40de2-2e74-4eae-8c4d-2c3cd94a114b', '82996478231'],
    ['c9f43290-8b86-441a-a4b5-d5d070f19eac', '874'],
    ['c239e420-d760-4026-8bd3-dd4ee7de1613', '872105597'],
    ['8b0639d7-d779-49bd-ab3b-f3ae7a6e45fa', '15'],
    ['7fadf585-df8f-40b4-8790-25ff16617060', '64'],
    ['0ed1fa7a-1f4f-4102-b2c4-c4dc5df5340b', '56'],
    ['dd30298f-57ff-4877-965c-2f3368dff80d', '10'],
    ['3b2e46f6-c411-4e19-b5fc-028e42b8f63a', '2025817/13-97'],
  ];

  CURSO.registrarModulo({
    id: 'm3',
    paginas: [

      /* ---------------------------------------------------------------- */
      {
        id: 'introducao', codigo: '', titulo: 'Introdução ao Módulo 3', nivel: 0,
        html: `
<p>Você já compreendeu como a comunicação visuogestual opera através de gestos, uso do espaço e iconicidade. Agora é hora de expandir seu repertório com dois recursos fundamentais para qualquer interação em Libras: <strong>números e alfabeto manual</strong>.</p>
<p>Esses elementos são a base para situações práticas, como: solicitar documentos, registrar dados, confirmar senhas, informar valores, agendar datas e soletrar nomes. Dominar os números de 0 a 9 e o alfabeto manual permitirá que você conduza interações básicas com autonomia e precisão.</p>
<p>Além disso, boa parte dos sinais que compõem o léxico da Libras utilizam as configurações de mão do alfabeto e dos números em sua formação, o que torna esses recursos um facilitador na memorização de sinais.</p>
<p>Mais importante que decorar o A-Z / 0-9, vamos aprender os sinais de apoio essenciais: "NÃO-ENTENDI", "REPETE" e "DEVAGAR". Dominar essas ferramentas é um ótimo passo para uma interação funcional.</p>

<div class="card">
  <h3 class="card-titulo">Ao final deste módulo, você será capaz de:</h3>
  <ul class="lista-check">
    <li>Configurar as mãos para representar os algarismos de 0 a 9.</li>
    <li>Aplicar números em contextos reais: telefone, endereço, documentos, valores monetários.</li>
    <li>Reproduzir o alfabeto manual (datilologia) em frases curtas.</li>
  </ul>
</div>

${duracao('Tempo estimado: 2 horas')}`
      },

      /* ---------------------------------------------------------------- */
      {
        id: 'como-memoriza', codigo: '', titulo: 'Como você memoriza?', nivel: 0,
        html: `
<div class="card card-destaque">
  <h3 class="card-titulo">Como você memoriza?</h3>
  <p>Para você, qual é a sua maior dificuldade ao memorizar listas (seja em Libras, inglês ou num concurso)?</p>
  <p>Compartilhe uma técnica de estudo ou memorização que funciona para você (Ex: Aplicativos de flashcard como Anki, escrever à mão, criar associações visuais, etc.).</p>
  <div data-reflexao="m3-como-memoriza" data-rotulo="Sua resposta"></div>
</div>`
      },

      /* ---------------------------------------------------------------- */
      {
        id: '3-1', codigo: '3.1', titulo: 'Números (0 - 9)', nivel: 0,
        html: `
<p>Os números em Libras são expressos através de Configurações de Mão (CM) específicas, articuladas na altura do peito ou ombro, com a palma voltada para o interlocutor. Neste tópico, você aprenderá os algarismos de 0 a 9 e suas aplicações práticas em situações de atendimento: senhas, documentos, telefones, endereços e valores monetários.</p>

<aside class="destaque">
  <div>
    <p class="destaque-titulo">Atenção:</p>
    <p>Os números em Libras NÃO são idênticos aos numerais em outras línguas de sinais. Cada comunidade surda desenvolveu suas próprias convenções. No entanto, no Brasil, boa parte dos números podem parecer com os gestos que utilizamos aqui.</p>
  </div>
</aside>

<p>Há diferentes formas de sinalizar os números em Libras, mas aqui apresentaremos a mais próxima do que já costumamos utilizar nos gestos.</p>
<p>Para os números de 0 - 4, nem precisa fazer muito esforço.</p>

<div class="flipcard-container">
${NUM_0_4.map(([n, f]) => flip(n, IK + f, n)).join('\n')}
</div>

<p>Agora veja os números de 5 - 9. Observe que a maioria deles lembram a forma escrita desses números, concorda?</p>

<div class="flipcard-container">
${NUM_5_9.map(([n, f]) => flip(n, IK + f, n)).join('\n')}
</div>

<h2>Identifique o número sinalizado em cada diálogo abaixo e responda o quiz.</h2>
<p><em>(Tente identificar também os significados dos sinais, como por exemplo, o sinal de <strong>NÚMERO</strong>)</em></p>

${atividade({
  modo: 'passos',
  titulo: 'Quiz dos diálogos',
  instrucao: 'Assista a cada diálogo, digite o número mencionado e clique em <strong>Verificar</strong>.',
  corpo: DIALOGOS_NUMEROS.map(([id, resp], i) => qTexto({
    resp,
    rotulo: `Diálogo ${i + 1}: qual número foi sinalizado?`,
    depois: `<div class="embed-vertical"><iframe title="Diálogo ${i + 1}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen src="${PLAYER_V}${id}${PARAMS_V}"></iframe></div>`,
  })).join('\n'),
})}

<p>Conseguiu identificar o significado de mais algum sinal nos vídeos sem buscar num glossário? Comece a anotar os sinais que está descobrindo.</p>
<p>Essa é a <strong>base</strong> para utilizar números. Para sinalizar números maiores, basta "soletrar" cada um dos números.<br>Há outras formas de sinalizar números maiores ou mesmo "contrações", mas vamos deixar esse conteúdo para outro momento.</p>`
      },

      /* ---------------------------------------------------------------- */
      {
        id: '3-2', codigo: '3.2', titulo: 'Alfabeto', nivel: 0,
        html: `
<p>A Datilologia, popularmente conhecida como Alfabeto Manual, é um dos recursos mais essenciais da Libras. Ela é usada em situações específicas, principalmente para "soletrar" palavras que não têm um sinal (como nomes próprios: "MARIA", "JOÃO") ou siglas ("RG", "CPF").</p>
<p>Este tópico é de memorização. Mas, mais importante do que decorar o A-Z, é aprender a usá-lo em uma conversa.</p>
<p>Além disso, você perceberá que aprender o alfabeto tem uma vantagem extra: muitos sinais em Libras usam a Configuração de Mão (CM) correspondente à letra inicial da palavra em português. Por exemplo, o sinal de REUNIÃO usa a letra 'R', o sinal de PROFESSOR usa a letra 'P', ALUNO usa a letra 'A', os sinais de DIA e DOMINGO, usam a letra 'D'. Dominar o alfabeto, portanto, acelera muito o seu aprendizado de vocabulário.</p>
<p>É normal e esperado que, no início, você não entenda uma soletração rápida. Por isso, junto com o alfabeto, vamos aprender o vocabulário de "sobrevivência" mais importante para o atendimento: "NÃO-ENTENDI", "REPETE" e "DEVAGAR".</p>

<aside class="destaque">
  <div>
    <p class="destaque-titulo">Atenção:</p>
    <p>Muitas pessoas pensam que para aprender Libras, basta aprender o alfabeto manual. Já deu pra perceber que não é bem assim, certo? A <strong>datilologia</strong> é apenas uma parte da língua. Há um léxico extenso de sinais a serem aprendidos.</p>
  </div>
</aside>

<hr>

<p>Vamos aprender as letras em Libras? Clique nas letras para ver o sinal.</p>

<button type="button" class="botao-modal" data-modal-abrir="m3-dica">Dica!</button>

<div class="flipcard-container compacto">
${LETRAS.map(([l, f]) => flip(l, IK + f, l)).join('\n')}
</div>

<hr>

<p>Conseguiu memorizar todas as letras? Percebeu que algumas letras se parecem ou compartilham da mesma configuração de mão, mudando apenas o movimento? Vamos ver se você acerta estas distinções no exercício abaixo.</p>

${atividade({
  modo: 'passos',
  titulo: 'Identifique as letras corretas',
  instrucao: 'Veja o sinal, escolha “1” ou “2” e depois clique em <strong>Verificar</strong>.',
  corpo: [
    ['H_K.gif', 'H', '1'], ['C_%C3%87.gif', 'Ç', '2'], ['I_J.gif', 'I', '2'], ['G_Q.gif', 'G', '1'], ['T_F.gif', 'T', '1'],
  ].map(([gif, letra, resp], i) => qEscolha({
    resp, linha: true,
    pergunta: `Qual a letra “${letra}”?`,
    opcoes: [['1', '1'], ['2', '2']],
    antes: `<img class="ativ-midia" src="${BUNNY}${gif}" alt="Dois sinais de letras, identificados como 1 e 2 (questão ${i + 1})">`,
  })).join('\n'),
})}

<hr>

<p>Além de muitos sinais da Libras utilizarem configurações de mão que correspondem à primeira letra da palavra escrita, existe também o que chamamos de <strong>sinal soletrado</strong>.</p>
<p>Um sinal soletrado é aquele que se originou da soletração manual de uma palavra, mas que, com o uso frequente, passou a ser produzido de forma mais fluida e integrada, adquirindo características próprias do <strong>sistema fonológico da Libras</strong>. Assim, ele deixa de ser uma simples sequência de letras e passa a funcionar como um <strong>sinal lexicalizado</strong> dentro da língua.</p>
<p>No exercício abaixo, o desafio será você identificar o significado dos sinais soletrados, reconhecendo como a soletração original se transformou em um sinal mais fluido e integrado à Libras.</p>

${atividade({
  modo: 'passos',
  titulo: 'Desafio — Identifique o significado do sinal soletrado',
  instrucao: 'Digite sua resposta e clique em <strong>Verificar</strong>.',
  corpo: ['bar', 'maio', 'pai', 'nunca', 'oi', 'ok'].map((palavra, i) => qTexto({
    resp: palavra,
    rotulo: 'Que palavra foi soletrada?',
    antes: `<img class="ativ-midia" src="${BUNNY}${palavra}.gif" alt="Sinal soletrado ${i + 1}">`,
  })).join('\n'),
})}

<div class="card">
  <h3 class="card-titulo">Para fixar melhor:</h3>
  <ol class="lista-numerada">
    <li>Aprenda a soletrar seu nome e o de outras pessoas próximas.</li>
    <li>Use a <strong>iconicidade</strong> a seu favor. Observe se há semelhança entre a forma da escrita e a CM.</li>
    <li>Use os quizzes deste módulo para praticar.</li>
  </ol>
</div>

<button type="button" class="botao-modal" data-modal-abrir="m3-gabarito">Gabarito</button>

${modal('m3-dica', '&#9432; Dica!', '<p>Depois de memorizar o alfabeto, tente fazer um teste: verifique se lembra o sinal daquela letra antes mesmo de virar o card.</p>')}
${modal('m3-gabarito', 'Gabarito do Desafio', '<p>Respostas: bar, maio, pai, nunca, oi, ok</p>')}`
      },

      /* ---------------------------------------------------------------- */
      {
        id: '3-2-1', codigo: '3.2.1', titulo: 'Contextualizando (Diálogo 1)', nivel: 1,
        html: `
<p>Agora, vamos ver o alfabeto e o vocabulário de apoio em ação nos recursos abaixo.</p>

<h2>Diálogo 1</h2>

<div class="video">
  <iframe src="https://player.mediadelivery.net/embed/520267/bff945fd-1be3-4401-96ef-00b0c6e57f1b?autoplay=true&amp;loop=false&amp;muted=true&amp;preload=true&amp;responsive=true" title="Diálogo 1" loading="lazy" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
</div>

${atividade({
  modo: 'lista',
  titulo: 'Atividade de compreensão',
  instrucao: 'Digite a resposta para cada pergunta e clique em <strong>Verificar</strong>.',
  corpo: [
    qTexto({ resp: 'Pedro', rotulo: '1. Qual o nome do rapaz do vídeo?' }),
    qTexto({ resp: 'Paulo', rotulo: '2. A garota do vídeo entendeu o nome do rapaz errado. Qual nome ela pensou ter visto?' }),
    qTexto({ resp: 'Telma', rotulo: '3. Qual o nome dela?' }),
  ].join('\n'),
})}

<p>Além das letras, observamos alguns sinais que aparecem no vídeo. Consegue adivinhar o significado desses sinais? Tente fazer isso sem olhar a resposta abaixo.</p>
<p>Agora vamos verificar se você acertou:</p>

${associacao('Atividade — Associe o sinal ao significado correto', [
  { resp: 'conhecer', src: IK + 'conhecer.gif?updatedAt=1761418263727' },
  { resp: 'tambem', src: IK + 'tambem.gif?updatedAt=1761344643504' },
  { resp: 'prazer/gostar', src: IK + 'gostar_prazer.gif?updatedAt=1761344639277' },
  { resp: 'nome', src: IK + 'nome.gif?updatedAt=1761344626594' },
  { resp: 'certo', src: IK + 'certo.gif?updatedAt=1761418264205' },
], [['nome', 'nome'], ['conhecer', 'conhecer'], ['certo', 'certo'], ['prazer/gostar', 'prazer/gostar'], ['tambem', 'também']])}`
      },

      /* ---------------------------------------------------------------- */
      {
        id: '3-2-2', codigo: '3.2.2', titulo: 'Diálogo 2', nivel: 1,
        html: `
<p>Quando não entendemos algum sinal ou soletração, utilizamos algumas expressões chamadas de <em>Clarifiers</em> ou Esclarecedoras, por exemplo:</p>

<pre class="glosa">DESCULPA, NÃO ENTENDI.
PODE REPETIR?
FALA DEVAGAR, OBRIGADO.
QUE SINAL É ESSE?
COMO SE DIZ ISSO EM LIBRAS?</pre>

<p>Você pode consultar essas e mais algumas expressões no link abaixo:</p>

<a class="card-link" href="https://rattle-iguana-3e2.notion.site/Express-es-Esclarecedoras-551974e4b4f34aaf8fd4e380f7579d15">
  <span class="card-link-corpo">
    <span class="card-link-titulo">Expressões esclarecedoras</span>
    <span class="card-link-texto">Recorte da Coleção "Libras em 150 sinais".</span>
    <span class="card-link-acao">Abrir ↗</span>
  </span>
</a>

<p>Vamos assistir a mais um diálogo em Libras. Tente compreender o nome soletrado e os sinais que aparecem nesse contexto.</p>

<h2>Diálogo 2</h2>

<div class="video">
  <iframe src="https://player.mediadelivery.net/embed/520267/da19a4ef-b611-4254-b8ea-01f810c4a414" title="Diálogo 2" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

${atividade({
  modo: 'passos',
  titulo: 'Atividade de compreensão',
  instrucao: 'Cada questão traz um tipo de resposta diferente. Responda e clique em <strong>Verificar</strong>.',
  corpo: [
    qTexto({ resp: 'Habelardo', rotulo: 'Qual o nome do rapaz?' }),
    qEscolha({
      resp: 'obrigado', pergunta: 'Qual desses sinais <strong>NÃO</strong> aparece no vídeo?',
      opcoes: [['legal', 'LEGAL'], ['obrigado', 'OBRIGADO'], ['não-entender', 'NÃO-ENTENDER'], ['repetir', 'REPETIR'], ['desculpa', 'DESCULPA']],
    }),
  ].join('\n'),
})}

<p>Mais alguns sinais que aparecem nesse vídeo (diálogo 2). Consegue adivinhar o significado desses sinais? Tente fazer isso sem olhar a resposta abaixo.</p>
<p>Agora vamos verificar se você acertou:</p>

${associacao('Atividade — Associe o sinal ao significado correto', [
  { resp: 'calma', src: BUNNY + 'calma.gif' },
  { resp: 'libras', src: BUNNY + 'libras.gif' },
  { resp: 'nao_entender', src: BUNNY + 'nao_entender.gif' },
  { resp: 'aprender', src: BUNNY + 'aprender.gif' },
  { resp: 'saber', src: BUNNY + 'saber.gif' },
  { resp: 'devagar', src: BUNNY + 'devagar.gif' },
], [['calma', 'calma'], ['libras', 'Libras'], ['nao_entender', 'não entendi'], ['aprender', 'aprender'], ['saber', 'saber'], ['devagar', 'devagar']])}`
      },

      /* ---------------------------------------------------------------- */
      {
        id: '3-3', codigo: '3.3', titulo: 'Vocabulário', nivel: 0,
        html: `
<div class="flipcard-container">
${VOCABULARIO.map(([t, f]) => flip(t, BUNNY + f, t)).join('\n')}
</div>

<h2>Vocabulário extra</h2>

<div class="flipcard-container">
${VOCABULARIO_EXTRA.map(([t, f]) => flip(t, BUNNY + f, t)).join('\n')}
</div>`
      },

    ]
  });
})();
