/* =========================================================================
   MÓDULO 4 — conteúdo
   Mídia (BunnyCDN, player de vídeo, Lumi, YouTube) mantida como nos arquivos originais.
   Atividades usam o componente .atividade do motor (js/app.js): sem IDs fixos, sem globais.
   ========================================================================= */
(() => {
  const BUNNY = 'https://gifscursopullzone.b-cdn.net/';
  const PLAYER = 'https://player.mediadelivery.net/embed/520267/';
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
  const qAssoc = ({ resp, src }, i, opcoes) =>
    `<div class="ativ-questao ativ-assoc" data-resposta="${resp}"><img class="ativ-midia" src="${src}" alt="Sinal ${i + 1}">` +
    `<select class="ativ-campo" data-embaralhar aria-label="Significado do sinal ${i + 1}"><option value="">Selecione...</option>${opcoes.map(([v, r]) => `<option value="${v}">${r}</option>`).join('')}</select></div>`;

  // Ordenar: itens de texto ['id','Rótulo'] ou de sinal ['id','arquivo.gif','Nome do sinal']
  const itemOrd = ([id, a, b]) => b
    ? `<button type="button" class="ord-item sinal" data-id="${id}"><img src="${BUNNY}${a}" alt="Sinal de ${b}"></button>`
    : `<button type="button" class="ord-item" data-id="${id}">${a}</button>`;
  const qOrdenar = ({ resp, titulo, antes = '', itens }) =>
    `<div class="ativ-questao ativ-ordenar" data-resposta="${resp.join(',')}">${antes}<p class="ord-titulo">${titulo}</p>` +
    `<div class="ord-banco">${itens.map(itemOrd).join('')}</div><p class="ord-rotulo">Sua sequência</p><div class="ord-resposta" aria-live="polite"></div></div>`;

  const atividade = ({ modo, titulo, instrucao, corpo, rotuloBotao }) =>
    `<div class="atividade" data-atividade="${modo}"${rotuloBotao ? ` data-rotulo-botao="${rotuloBotao}"` : ''}><h3 class="ativ-titulo">${titulo}</h3><p class="ativ-instrucao">${instrucao}</p>${corpo}</div>`;
  const associacao = (titulo, itens, opcoes) =>
    atividade({
      modo: 'lista', titulo, rotuloBotao: 'Verificar',
      instrucao: 'Escolha o significado de cada sinal e clique em <strong>Verificar</strong>.',
      corpo: `<div class="ativ-grade">${itens.map((it, i) => qAssoc(it, i, opcoes)).join('')}</div>`,
    });

  const duracao = (txt) => `<p class="duracao">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ${txt}
</p>`;

  const cards = (lista) => `<div class="flipcard-container">\n${lista.map(([t, f]) => flip(t, BUNNY + f, t)).join('\n')}\n</div>`;

  /* ---------- Dados ---------- */
  const CUMPRIMENTOS = [
    ['BOM DIA', 'bomdia.gif'], ['BOA TARDE', 'boatarde.gif'], ['BOA NOITE', 'boanoite.gif'], ['OI', 'oi.gif'],
    ['TUDO BOM', 'tudo_bom.gif'], ['OBRIGADO', 'obrigado.gif'], ['NADA / DE NADA', 'nada.gif'],
  ];
  const SINAIS_ENCONTRO = [
    ['SURDO', 'surdo.gif'], ['OUVINTE', 'ouvinte.gif'], ['SINAL', 'sinal.gif'], ['LIBRAS 1', 'libras.gif'],
    ['LIBRAS 2', 'libras2.gif'], ['SABER', 'saber.gif'], ['APRENDER', 'aprender.gif'],
  ];
  const INTERROGATIVOS = [
    ['O QUE', 'o_que.gif'], ['ONDE', 'onde.gif'], ['PORQUE', 'porque.gif'],
    ['QUANDO', 'quando.gif'], ['QUANTOS', 'quantos.gif'], ['QUEM', 'quem.gif'],
  ];
  const VOCABULARIO = [
    ['ÁGUA', 'agua.gif'], ['APRENDER', 'aprender.gif'], ['BANHEIRO', 'banheiro.gif'], ['BOA NOITE', 'boanoite.gif'],
    ['BOA TARDE', 'boatarde.gif'], ['BOM DIA', 'bomdia.gif'], ['CONHECER', 'conhecer.gif'], ['DIFÍCIL', 'dificil.gif'],
    ['ELEVADOR', 'elevador.gif'], ['FALAR', 'falar.gif'], ['GOSTAR-PRAZER', 'gostar_prazer.gif'], ['IR', 'ir.gif'],
    ['LEGAL', 'legal.gif'], ['LIBRAS', 'libras.gif'], ['LIBRAS 2', 'libras2.gif'], ['NADA', 'nada.gif'],
    ['NÃO TER', 'nao_ter.gif'], ['NOITE', 'noite.gif'], ['NOME', 'nome.gif'], ['OBRIGADO', 'obrigado.gif'],
    ['OI', 'oi.gif'], ['OK', 'ok.gif'], ['OUVINTE', 'ouvinte.gif'], ['PODER', 'poder.gif'],
    ['PRECISAR', 'precisar.gif'], ['PROBLEMA', 'problema.gif'], ['QUERER', 'querer.gif'], ['SABER', 'saber.gif'],
    ['SINAL', 'sinal.gif'], ['SURDO', 'surdo.gif'], ['TAMBÉM', 'tambem.gif'], ['TARDE', 'tarde.gif'],
    ['TER', 'ter.gif'], ['TRABALHAR', 'trabalhar.gif'], ['TUDO BOM', 'tudo_bom.gif'], ['WHATSAPP', 'whatsapp.gif'],
  ];
  const VOCABULARIO_EXTRA = [
    ['CAFÉ', 'cafe.gif'], ['ESTUDAR', 'estudar.gif'], ['FÁCIL', 'facil.gif'], ['MANHÃ', 'manha.gif'], ['NÃO SEI', 'nao_sei.gif'],
  ];

  /* 4.3 — cinco vídeos verticais, cada um com o seu destino */
  const DESTINOS = [
    ['bf9c1239-9da9-4138-8a80-eb05bb5cfb27', 'Copa'],
    ['e7c19223-33f8-4ab8-87a0-ec2fdc47a217', 'Sala do juiz'],
    ['d53e3f25-fe89-4cae-9fc0-63a6a651cb5b', 'Banheiro'],
    ['0563833e-483e-44f0-9c54-c177e4a00b52', 'Sala de espera'],
    ['13d4368f-1567-4517-b402-ef735d741b8c', 'Sala de reuniões'],
  ];

  /* Bloco "GIF + legenda em glosa + observações" da página 4.2 */
  const exemplo = (gif, glosa, traducao, notas) => `
<figure class="figura"><img src="${BUNNY}${gif}" alt="Exemplo em Libras: ${traducao}"></figure>
<p class="titulo-centro">${glosa}<br>(<em>${traducao}</em>)</p>
<div class="card">
  <ol class="lista-numerada">
${notas.map(n => `    <li>${n}</li>`).join('\n')}
  </ol>
</div>`;

  CURSO.registrarModulo({
    id: 'm4',
    paginas: [

      /* ---------------------------------------------------------------- */
      {
        id: 'introducao', codigo: '', titulo: 'Introdução ao Módulo 4', nivel: 0,
        html: `
<p>Você já ajustou sua percepção (M1), entendeu a lógica visual (M2) e aprendeu as ferramentas (M3: Números e Alfabeto). Agora, vamos juntar tudo isso para iniciar seu primeiro diálogo.</p>
<p>Este módulo é sobre acolhimento e triagem. O objetivo não é ter uma conversa fluente, mas sim "abrir a porta" de forma humana e entender o básico da demanda do usuário surdo.</p>
<p>Vamos aprender o vocabulário social (saudações), como lidar com necessidades básicas (água, banheiro) e, o mais importante, como fazer as perguntas de triagem (Interrogativos como "O QUE?", "QUAL?", "QUEM?") que permitirão direcionar o atendimento.</p>

<div class="card">
  <h3 class="card-titulo">Ao final deste módulo, você será capaz de:</h3>
  <ul class="lista-check">
    <li>Utilizar saudações básicas (Bom dia, Oi, Obrigado) em Libras.</li>
    <li>Apresentar-se</li>
    <li>Usar expressões de cortesia (obrigado, desculpa, por favor)</li>
    <li>Fazer perguntas em Libras</li>
  </ul>
</div>

${duracao('Tempo estimado: 2 horas')}`
      },

      /* ---------------------------------------------------------------- */
      {
        id: 'apresentacao', codigo: '', titulo: 'Hora de falar em Libras!', nivel: 0,
        html: `
<div class="card card-destaque">
  <h3 class="card-titulo">Hora de falar em Libras!</h3>
  <p><em>Primeiro veja o conteúdo completo deste módulo, depois realize esta tarefa</em></p>
  <p>Vamos nos apresentar em Libras. Uma apresentação simples, com as seguintes informações:</p>
  <ol class="lista-numerada">
    <li>Usar uma saudação</li>
    <li>Dizer o nome</li>
    <li>Dizer se é surdo ou ouvinte</li>
    <li>Dizer onde mora</li>
    <li>Dizer onde trabalha</li>
    <li>Dizer o telefone do seu trabalho (pode inventar)</li>
    <li>Dizer "Eu gosto de..." (diga o que gosta com gesto ou sinal)</li>
    <li>Dizer "prazer em conhecer" e se despedir</li>
  </ol>
</div>

<h2>Como fazer?</h2>

<ol class="passos">
  <li><strong>Planeje sua gravação</strong><span>Estude como sinalizar cada informação. Faça testes antes de gravar.</span></li>
  <li><strong>Grave o vídeo</strong><span>Apoie seu celular na horizontal ou peça a alguém para te gravar. Procure uma boa iluminação e enquadramento para que as mãos fiquem sempre visíveis. Tente gravar numa única tomada, para não precisar editar.</span></li>
  <li><strong>Poste no youtube</strong><span>Se não tem um canal no youtube, crie um e na sequência poste seu vídeo em modo "não listado".<br><em>(Mais abaixo deixo um tutorial explicando como postar vídeo no youtube)</em></span></li>
  <li><strong>Copie o link do vídeo</strong><span>Copie o link do vídeo que você postou no youtube.</span></li>
  <li><strong>Guarde o link</strong><span>Cole o link na caixa de texto mais abaixo, para não perdê-lo.</span></li>
</ol>

<a class="card-link" href="https://youtu.be/Pblg2VDtRtw">
  <span class="card-link-corpo">
    <span class="card-link-titulo">Tutorial: como postar no youtube?</span>
    <span class="card-link-acao">Abrir ↗</span>
  </span>
</a>

<h2>Veja um modelo de apresentação abaixo:</h2>

<div class="embed-retrato">
  <iframe src="${PLAYER}a3256824-c665-40de-bc5f-ea493c1b6142" title="Modelo de apresentação em Libras" loading="lazy" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

<div class="card card-destaque">
  <h3 class="card-titulo">Seu vídeo</h3>
  <p>Cole aqui o link do vídeo que você postou (ele fica salvo somente neste aparelho).</p>
  <div data-reflexao="m4-apresentacao" data-rotulo="Link do seu vídeo"></div>
</div>

<p><strong>Após assistir, se estiver estudando em grupo, comente o vídeo dos seus colegas.</strong></p>`
      },

      /* ---------------------------------------------------------------- */
      {
        id: '4-1', codigo: '4.1', titulo: 'Saudações', nivel: 0,
        html: `
<p>No Módulo 3, você aprendeu a perguntar o NOME e a gerenciar a soletração (REPETE, DEVAGAR, NÃO-ENTENDER). Agora, vamos adicionar a camada social a essa interação.</p>
<p>Este tópico é sobre "abrir a porta": como ser educado, gentil e como se identificar. Aprenderemos as saudações básicas (BOM DIA, BOA TARDE) e as gentilezas (OBRIGADO).</p>
<p>Mais importante, vamos aprender o vocabulário de identidade: como dizer que você é OUVINTE, que o usuário é SURDO, e a frase-chave de todo este curso: "ESTOU APRENDENDO LIBRAS".</p>

<hr>

${atividade({
  modo: 'passos',
  titulo: 'Exercício',
  instrucao: 'Cada página traz uma questão diferente. Escolha e ordene as palavras, tentando identificar os significados dos sinais. Na sequência, clique em <strong>Verificar</strong>.',
  corpo: [
    qOrdenar({
      resp: ['eu', 'gosto', 'de', 'aprender', 'libras'],
      titulo: 'Escolha e ordene as palavras de acordo com a frase:',
      antes: `<img class="ativ-midia" src="${BUNNY}eu_gosto_aprender_libras.gif" alt="Frase sinalizada em Libras (questão 1)">`,
      itens: [['eu', 'Eu'], ['libras', 'Libras'], ['estudar', 'estudar'], ['gosto', 'gosto'], ['quero', 'quero'], ['brincar', 'brincar'], ['de', 'de'], ['aprender', 'aprender']],
    }),
    qOrdenar({
      resp: ['oi', 'bom', 'dia', 'qual', 'seu', 'nome'],
      titulo: 'Escolha e ordene as palavras:',
      antes: `<img class="ativ-midia" src="${BUNNY}oi_bomdia_nome.gif" alt="Frase sinalizada em Libras (questão 2)">`,
      itens: [['bom', 'Bom/boa'], ['meu', 'Meu'], ['qual', 'Qual'], ['oi', 'Oi'], ['seu', 'Seu'], ['nome', 'Nome'], ['tarde', 'Tarde'], ['dia', 'Dia'], ['tudo', 'Tudo']],
    }),
  ].join('\n'),
})}

<hr>

<h2>Cumprimentos</h2>

${cards(CUMPRIMENTOS)}

<p>Mais alguns sinais importantes nesse primeiro encontro:</p>

${cards(SINAIS_ENCONTRO)}

<hr>

<h2>Diálogo 3</h2>

<p>Assista ao diálogo abaixo e responda às perguntas inseridas no próprio vídeo (basta clicar no ícone que irá aparecer no momento da pergunta).</p>

<div class="embed-lumi embed-lumi-alto">
  <iframe src="https://app.Lumi.education/run/4GY5CF" title="Diálogo 3" allowfullscreen></iframe>
</div>
<p class="embed-alternativo"><a href="https://app.Lumi.education/run/4GY5CF">Abrir a atividade em tela cheia ↗</a></p>

<p>Assista ao <strong>Diálogo 3</strong> mais uma vez e tente identificar o significado do sinal abaixo:</p>

<div class="flipcard-container">
${flip('?', BUNNY + 'querer.gif', 'o sinal a ser identificado')}
</div>

${atividade({
  modo: 'lista',
  titulo: 'Qual o significado do sinal?',
  instrucao: 'Digite sua resposta e clique em <strong>Verificar</strong>.',
  rotuloBotao: 'Verificar',
  corpo: qTexto({ resp: 'Querer', rotulo: 'Significado do sinal' }),
})}

<button type="button" class="botao-modal" data-modal-abrir="m4-gabarito-querer">Gabarito</button>

${modal('m4-gabarito-querer', 'Gabarito', '<p>Resposta: Querer</p>')}`
      },

      /* ---------------------------------------------------------------- */
      {
        id: '4-2', codigo: '4.2', titulo: 'Interrogativas', nivel: 0,
        html: `
<p>Já sabemos dizer "Oi" e "Bom dia". Mas para fazer a interação inicial e descobrir o que a pessoa precisa, precisamos fazer perguntas.</p>
<p>Em Libras, a gramática da pergunta é um pouco diferente do português. Não basta saber o sinal de "QUAL" ou "ONDE". O segredo está em três regras de ouro:</p>

<ol class="passos">
  <li><strong>Expressão facial</strong><span>O ponto de interrogação está no seu rosto.</span></li>
  <li><strong>Economia</strong><span>Menos sinais pode significar mais sentido.</span></li>
  <li><strong>Posição</strong><span>A pergunta em si normalmente vai para o final da frase.</span></li>
</ol>

<p>Vamos dominar essas regras para que você se sinta seguro ao perguntar "O que você precisa?" ou "posso ajudar?".</p>

<hr>

<p>No português, usamos muitas palavras para ser educados: "Por favor, você poderia me dizer qual é o seu nome?".</p>
<p>Em Libras, o foco é direto e visual. Muitas vezes, o próprio pronome interrogativo (QUAL, O QUE) é dispensável se o contexto já deixa claro que é uma pergunta.</p>

<div class="card">
  <h3 class="card-titulo">Expressão facial</h3>
  <ul class="lista-check">
    <li>Sobrancelhas franzidas (para perguntas de "O que/Quem").</li>
    <li>Sobrancelhas levantadas (para perguntas de "Sim/Não").</li>
    <li>Cabeça levemente projetada para frente.</li>
  </ul>
</div>

<h2>Exemplos</h2>
${exemplo('voce_nome.gif', 'VOCÊ NOME?', 'Qual o seu nome?', [
  'Expressão de pergunta acontece, principalmente, no momento do sinal NOME. Mas pode ser distribuída na frase inteira.',
  'O sinal QUAL existe, mas aqui ele é desnecessário.',
])}
${exemplo('voce_idade.gif', 'VOCÊ IDADE?', 'Quantos anos você tem?', [
  'Expressão de pergunta acontece, principalmente, no momento do sinal IDADE. Mas pode ser distribuída na frase inteira.',
  'Existe sinal para QUANTOS e ANOS, mas não se usa nesse caso.',
])}
${exemplo('interprete_cade.gif', 'INTÉRPRETE CADÊ?', 'Tem intérprete?', [
  'Aqui bastava usar o sinal <strong>INTÉRPRETE + Expressão facial interrogativa</strong> que o sentido estaria posto.',
  'Em português, poderíamos traduzir essa frase de diferentes maneiras: E o intérprete? cadê o intérprete? Onde está o intérprete? No fim, todas dizem a mesma coisa.',
])}

<hr>

<p>Quando precisamos usar o pronome interrogativo (ONDE, QUEM, O-QUE), onde ele fica na frase? Coloque a pergunta no <strong>FINAL</strong> da frase.</p>
<p>Por quê? É difícil manter a "cara de pergunta" durante uma frase inteira. Se você deixa a palavra interrogativa para o final, você concentra a expressão nela. Isso deixa sua sinalização mais clara e menos cansativa, principalmente se sua frase for longa.</p>

<h2>Exemplo</h2>
${exemplo('voce_mora_onde.gif', 'VOCÊ CASA ONDE?', 'Onde você mora?', [
  'Observe que neste exemplo a expressão facial muda exatamente no sinal <strong>ONDE</strong>.',
  'Veja que o sinal CASA pode ser substantivo ou verbo, depende do contexto. Aqui virou o verbo MORAR',
])}

<button type="button" class="botao-modal" data-modal-abrir="m4-sanduiche">Observação</button>

${atividade({
  modo: 'passos',
  titulo: 'Exercício',
  instrucao: 'Leia a frase em português e toque nos sinais para montar a frase em Libras na ordem correta. Depois clique em <strong>Verificar</strong>.',
  corpo: [
    qOrdenar({
      resp: ['voce', 'querer', 'oque'],
      titulo: 'Frase em português: “O que você quer?”',
      itens: [['voce', 'voce.png', 'VOCÊ'], ['querer', 'querer.gif', 'QUERER'], ['oque', 'o_que.gif', 'O-QUE'], ['qual', 'qual.gif', 'QUAL'], ['precisar', 'precisar.gif', 'PRECISAR']],
    }),
    qOrdenar({
      resp: ['whatsapp', 'ter'],
      titulo: 'Frase em português: “Você tem WhatsApp?”',
      itens: [['whatsapp', 'whatsapp.gif', 'WHATSAPP'], ['ter', 'ter.gif', 'TER/TEM'], ['telefone', 'telefone.gif', 'TELEFONE'], ['numero', 'numero.gif', 'NÚMERO'], ['oque', 'o_que.gif', 'O-QUE']],
    }),
    qOrdenar({
      resp: ['problema', 'oque'],
      titulo: 'Frase em português: “Qual é o problema?”',
      itens: [['problema', 'problema.gif', 'PROBLEMA'], ['oque', 'o_que.gif', 'O-QUE'], ['onde', 'onde.gif', 'ONDE'], ['ter', 'ter.gif', 'TER']],
    }),
    qOrdenar({
      resp: ['agua', 'onde'],
      titulo: 'Frase em português: “Onde tem água?”',
      itens: [['agua', 'agua.gif', 'ÁGUA'], ['onde', 'onde.gif', 'ONDE'], ['ter', 'ter.gif', 'TER'], ['qual', 'qual.gif', 'QUAL'], ['oque', 'o_que.gif', 'O-QUE'], ['beber', 'beber.gif', 'BEBER']],
    }),
  ].join('\n'),
})}

${modal('m4-sanduiche', 'O Sanduíche', '<p>Às vezes, para dar ênfase, podemos repetir a partícula interrogativa no começo e no fim da frase.<br>Ex: ONDE VOCÊ TRABALHAR ONDE?</p>')}`
      },

      /* ---------------------------------------------------------------- */
      {
        id: '4-3', codigo: '4.3', titulo: 'Necessidades e localidades', nivel: 0,
        html: `
<p>Você já viu como cumprimentar e dizer que está aprendendo Libras, bem como usar algumas expressões esclarecedoras.</p>
<p>Agora, vamos lidar com as necessidades mais comuns em um espaço público. O usuário pode precisar de algo mais básico, como ir ao banheiro, beber água ou simplesmente aguardar a chegada do intérprete de Libras.</p>
<p>Vamos aproveitar e por em prática o uso da espacialidade/direcionalidade e aprender mais alguns sinais básicos que podem ser úteis.</p>

<hr>

<p>Você já deve ter precisado ensinar a direção de algum local para um desconhecido. Numa hora assim, é bastante comum usarmos os gestos para dizer "siga em frente", "vira à direita", etc.</p>
<p>Aqui a ideia é a mesma. Usar as mãos e a nossa noção do espaço para indicar direções, sem segredos. Vamos testar o seu senso de direção visuogestual?</p>
<p>Primeiro veja o mapa abaixo e registre os diferentes setores nele identificados. Se puder olhar o mapa em outro dispositivo, melhor.</p>

<figure class="figura"><img src="${BUNNY}Mapinha.png" alt="Mapa com os setores do prédio"></figure>

<p>Agora veja a sinalização dos vídeos abaixo e encontre o destino indicado. <em>Considere que todas as informações estão sendo dadas na <strong>recepção</strong></em>.</p>

${atividade({
  modo: 'passos',
  titulo: 'Qual é o destino indicado?',
  instrucao: 'Veja cada vídeo, digite o local de destino indicado (ex.: Copa, Sala do juiz...) e clique em <strong>Verificar</strong>.',
  corpo: DESTINOS.map(([id, resp], i) => qTexto({
    resp,
    rotulo: `Vídeo ${i + 1}: qual é o destino?`,
    depois: `<div class="embed-vertical"><iframe title="Vídeo ${i + 1}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen src="${PLAYER}${id}${PARAMS_V}"></iframe></div>`,
  })).join('\n'),
})}

<hr>

<p>Vamos ver se você encontrou o significado dos sinais abaixo.</p>

${associacao('Atividade — Associe o sinal ao significado correto', [
  { resp: 'banheiro', src: BUNNY + 'banheiro.gif' },
  { resp: 'esperar', src: BUNNY + 'esperar.gif' },
  { resp: 'agua', src: BUNNY + 'agua.gif' },
  { resp: 'onde', src: BUNNY + 'onde.gif' },
  { resp: 'sala', src: BUNNY + 'sala.gif' },
  { resp: 'elevador', src: BUNNY + 'elevador.gif' },
], [['banheiro', 'banheiro'], ['esperar', 'esperar'], ['agua', 'água'], ['onde', 'onde'], ['sala', 'sala'], ['elevador', 'elevador']])}`
      },

      /* ---------------------------------------------------------------- */
      {
        id: '4-4', codigo: '4.4', titulo: 'Vocabulário', nivel: 0,
        html: `
<h2>Pronomes interrogativos</h2>

${cards(INTERROGATIVOS)}

<h2>Vocabulário geral</h2>

${cards(VOCABULARIO)}

<h2>Vocabulário extra</h2>

${cards(VOCABULARIO_EXTRA)}`
      },

    ]
  });
})();
