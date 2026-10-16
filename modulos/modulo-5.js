/* =========================================================================
   MÓDULO 5 — conteúdo (Fechamento)
   Mídia (BunnyCDN e player de vídeo) mantida como nos arquivos originais.
   Atividades usam o componente .atividade do motor (js/app.js): sem IDs fixos, sem globais.
   ========================================================================= */
(() => {
  const BUNNY = 'https://gifscursopullzone.b-cdn.net/';
  const PLAYER = 'https://player.mediadelivery.net/embed/520267/';

  /* ---------- Peças reutilizáveis ---------- */
  // Gabarito: GIF na frente, palavra no verso
  const flipInverso = (palavra, arquivo) =>
    `<div class="flipcard inverso"><div class="flipcard-inner"><div class="flipcard-front"><img src="${BUNNY}${arquivo}" alt="Sinal a ser identificado"></div><div class="flipcard-back"><p>${palavra}</p></div></div></div>`;
  const flip = (frente, src, alt) =>
    `<div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>${frente}</p></div><div class="flipcard-back"><img src="${src}" alt="${alt}"></div></div></div>`;

  const CAMPO_TEXTO = '<input type="text" class="ativ-campo" placeholder="Digite sua resposta..." autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">';
  const qTexto = ({ resp, rotulo, antes = '', depois = '' }) =>
    `<div class="ativ-questao" data-resposta="${resp}">${antes}<label class="ativ-rotulo">${rotulo}</label>${depois}${CAMPO_TEXTO}</div>`;
  const qEscolha = ({ resp, pergunta, opcoes }) =>
    `<div class="ativ-questao" data-resposta="${resp}"><fieldset class="ativ-grupo"><legend class="ativ-pergunta">${pergunta}</legend>` +
    `<div>${opcoes.map(([v, r]) => `<label class="ativ-opcao"><input type="radio" value="${v}"> ${r}</label>`).join('')}</div></fieldset></div>`;
  const qAssoc = ({ resp, src }, i, opcoes) =>
    `<div class="ativ-questao ativ-assoc" data-resposta="${resp}"><img class="ativ-midia" src="${src}" alt="Sinal ${i + 1}">` +
    `<select class="ativ-campo" data-embaralhar aria-label="Significado do sinal ${i + 1}"><option value="">Selecione...</option>${opcoes.map(([v, r]) => `<option value="${v}">${r}</option>`).join('')}</select></div>`;
  const atividade = ({ modo, titulo, instrucao, corpo, rotuloBotao }) =>
    `<div class="atividade" data-atividade="${modo}"${rotuloBotao ? ` data-rotulo-botao="${rotuloBotao}"` : ''}><h3 class="ativ-titulo">${titulo}</h3><p class="ativ-instrucao">${instrucao}</p>${corpo}</div>`;
  const associacao = (titulo, instrucao, itens, opcoes) =>
    atividade({
      modo: 'lista', titulo, instrucao, rotuloBotao: 'Verificar',
      corpo: `<div class="ativ-grade">${itens.map((it, i) => qAssoc({ ...it, src: BUNNY + it.gif }, i, opcoes)).join('')}</div>`,
    });
  const video = (id, titulo, extra = '') =>
    `<div class="video"><iframe src="${PLAYER}${id}${extra}" title="${titulo}" loading="lazy" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`;


  CURSO.registrarModulo({
    id: 'm5',
    paginas: [

      /* ---------------------------------------------------------------- */
      {
        id: 'introducao', codigo: '', titulo: 'Módulo 5 - Fechamento', nivel: 0,
        html: `
<p>Este vídeo de encerramento foi gravado originalmente para um curso de formação de servidores da área jurídica. Embora o cenário apresente termos como "Juiz" e "Advogado", o objetivo aqui é que você observe a dinâmica da interação e o uso do TILS (Tradutor e Intérprete de Libras). A lógica de acolhimento e a estrutura dos sinais são exatamente as mesmas que você encontrará na secretaria de uma escola ou em uma reunião de pais. Foque na comunicação, não no cenário.</p>
<p>Abaixo temos um vídeo de um atendimento real e complexo. Se você assistir agora, talvez entenda pouco. Nosso objetivo neste módulo é 'desmontar' esse vídeo. Vamos estudar cada parte dele para que, no final, você compreenda 100% do que aconteceu.</p>

${video('140e5850-9286-4926-8a03-cdee56b1cd80', 'Simulação de atendimento completa')}

<p><strong>Contextualização:</strong> O vídeo começa com o Surdo chegando e tendo uma barreira. Para entender essa parte, você precisa dos sinais abaixo. Alguns deles já foram vistos previamente. Tente lembrar o significado desses sinais e encontre o significado dos demais por eliminação. Use o contexto como pista.</p>

${associacao('Atividade — Associe o sinal ao significado correto', 'Escolha o significado de cada sinal e clique em <strong>Verificar</strong>.', [
  { resp: 'advogado', gif: 'advogado.gif' },
  { resp: 'juiz', gif: 'juiz.gif' },
  { resp: 'tils', gif: 'tils.gif' },
  { resp: 'duvida', gif: 'duvida.gif' },
  { resp: 'combinar', gif: 'combinar.gif' },
  { resp: 'saber', gif: 'saber.gif' },
  { resp: 'libras', gif: 'libras2.gif' },
  { resp: 'dificil', gif: 'dificil.gif' },
], [['advogado', 'advogado'], ['juiz', 'juiz'], ['tils', 'TILS (intérprete)'], ['duvida', 'dúvida'], ['combinar', 'combinar'], ['saber', 'saber'], ['libras', 'Libras'], ['dificil', 'difícil']])}

<p class="duracao">Veja as cenas divididas nas próximas páginas →</p>`
      },

      /* ---------------------------------------------------------------- */
      {
        id: 'cena-1', codigo: '', titulo: 'Cena 1', nivel: 0,
        html: `
<p>Reveja a <strong>primeira cena</strong> da simulação e, na sequência, responda às perguntas.</p>

${video('00f2d25f-b0ad-47d6-bf40-37ddfc5788b7', 'Cena 1')}

<p>Quais são os <strong>verbos</strong> que aparecem nessa cena? Associe os verbos que aparecem ao contexto relacionado.</p>

${associacao('Atividade — Associe o sinal ao contexto correto presente na Cena 1', 'O sinal apresentado está na posição [...]. Escolha a alternativa que condiz com a sequência do vídeo.', [
  { resp: 'querer', gif: 'querer.gif' },
  { resp: 'falar', gif: 'falar.gif' },
  { resp: 'esperar', gif: 'esperar.gif' },
  { resp: 'sentar', gif: 'sentar.gif' },
  { resp: 'marcar', gif: 'combinar.gif' },
  { resp: 'precisar', gif: 'precisar.gif' },
  { resp: 'pedir', gif: 'pedir.gif' },
  { resp: 'saber', gif: 'saber.gif' },
], [
  ['falar', 'Oi! 👍! pode [...]'], ['saber', 'ela [...] libras?'], ['precisar', '[...] Intérprete'],
  ['pedir', 'Ok, eu [...] 👍 problema não.'], ['marcar', '[...] juiz'], ['esperar', '[...] um pouquinho'],
  ['querer', '[...] ajuda'], ['sentar', 'pode [...] ali e esperar um pouco'],
])}

${atividade({
  modo: 'passos',
  titulo: 'Atividade — Verificação de Vocabulário',
  instrucao: 'Responda com base na cena e clique em <strong>Verificar</strong>.',
  corpo: [
    qEscolha({ resp: 'juiz', pergunta: '1. O usuário surdo veio encontrar quem?', opcoes: [['advogada', 'A advogada'], ['juiz', 'O juiz'], ['interprete', 'O intérprete']] }),
    qEscolha({ resp: 'sem-interprete', pergunta: '2. Qual o problema ocorre?', opcoes: [['juiz-faltou', 'O juiz faltou'], ['sem-interprete', 'Não tem intérprete'], ['advogada-nao-vem', 'A advogada não vem']] }),
    qEscolha({ resp: 'cha', pergunta: '3. Diante do problema, o atendente tenta humanizar o atendimento e acalmar o usuário. Aqui, ele oferece coisas para beber e pede para ele aguardar. O que o usuário aceita?', opcoes: [['cha', 'Chá'], ['agua', 'Água'], ['cafe', 'Café']] }),
  ].join('\n'),
})}

<p>Assista à <strong>cena 1</strong> mais uma vez e tente identificar o significado do sinal abaixo:</p>

<div class="flipcard-container">
${flip('?', BUNNY + 'problema.gif', 'Sinal a ser identificado')}
</div>

${atividade({
  modo: 'lista',
  titulo: 'Qual o significado do sinal?',
  instrucao: 'Digite sua resposta e clique em <strong>Verificar</strong>.',
  rotuloBotao: 'Verificar',
  corpo: qTexto({ resp: 'Problema', rotulo: 'Significado do sinal' }),
})}

<h2>Gabarito da atividade de associação</h2>

<div class="flipcard-container">
${[['QUERER', 'querer.gif'], ['FALAR', 'falar.gif'], ['ESPERAR', 'esperar.gif'], ['SENTAR', 'sentar.gif'], ['MARCAR', 'combinar.gif'], ['PRECISAR', 'precisar.gif'], ['PEDIR', 'pedir.gif'], ['SABER', 'saber.gif']].map(([t, f]) => flipInverso(t, f)).join('\n')}
</div>

<p class="duracao">Veja a próxima cena na próxima página →</p>`
      },

      /* ---------------------------------------------------------------- */
      {
        id: 'cena-2', codigo: '', titulo: 'Cena 2', nivel: 0,
        html: `
<p>Reveja a <strong>segunda cena</strong> da simulação e, na sequência, responda às perguntas.</p>

${video('f72cf78d-b19f-4dde-94ef-cd9c32e80579', 'Cena 2')}

<p><strong>Contextualização:</strong> Não tem intérprete físico no local. A solução encontrada foi tecnológica: usar a Central de Intérpretes via celular.</p>

${atividade({
  modo: 'lista',
  titulo: 'Para começar, responda:',
  instrucao: 'Digite sua resposta e clique em <strong>Verificar</strong>.',
  rotuloBotao: 'Verificar',
  corpo: qTexto({ resp: '82993016118', rotulo: 'Qual o número da central de intérprete de Libras, informado pelo atendente?' }),
})}

${associacao('Atividade — Encontre o significado de cada sinal', 'Escolha o significado de cada sinal e clique em <strong>Verificar</strong>.', [
  { resp: 'denada', gif: 'nada.gif' },
  { resp: 'whatsapp', gif: 'whatsapp.gif' },
  { resp: 'conseguir', gif: 'conseguir.gif' },
  { resp: 'obrigado', gif: 'obrigado.gif' },
  { resp: 'coisas', gif: 'coisas.gif' },
  { resp: 'precisar', gif: 'precisar.gif' },
], [['whatsapp', 'Whatsapp'], ['conseguir', 'Conseguir'], ['coisas', 'Coisas'], ['precisar', 'Precisar'], ['denada', 'De nada!'], ['obrigado', 'Obrigado!']])}

<p class="duracao">Finalização →</p>`
      },

      /* ---------------------------------------------------------------- */
      {
        id: 'fechamento', codigo: '', titulo: 'Fechamento', nivel: 0,
        html: `
<p>Chegamos ao final dos módulos.<br>Quero parabenizar você pela dedicação e por ter chegado até aqui.</p>

<div class="card">
  <h3 class="card-titulo">Vamos relembrar sua jornada?</h3>
  <ul class="lista-check">
    <li><strong>Você desconstruiu mitos:</strong> Aprendeu que a surdez é uma diferença, não apenas uma deficiência, e que o termo correto é "Surdo" (Módulo 1).</li>
    <li><strong>Você percebeu a lógica:</strong> Viu que a Libras é visual, usa o espaço e a iconicidade, e não é mímica (Módulo 2).</li>
    <li><strong>Você ganhou ferramentas:</strong> Aprendeu o Alfabeto, os Números e a pedir para sinalizar "Devagar" e outras expressões esclarecedoras (Módulo 3).</li>
    <li><strong>Você aprendeu a acolher:</strong> Sabe dizer "Bom dia", se apresentar e perguntar "O que você precisa?" e a fazer outras perguntas (Módulo 4).</li>
    <li><strong>Você aprendeu a resolver:</strong> Entende sinais como "documento", "identidade" e sabe a hora certa de chamar o TILS (Módulos 4 e 5).</li>
  </ul>
</div>

<p>Talvez você ainda não se sinta fluente em Libras. E está tudo bem. Em 50 horas, ninguém se torna intérprete.</p>
<p>O objetivo deste curso foi tirar o medo do "primeiro contato". Agora, quando um usuário surdo chegar ao seu setor, você não vai mais congelar. Você vai saber olhar nos olhos, fazer um sinal de "Oi", perguntar o nome e buscar uma forma de ajudar.</p>
<p>Isso é acolhimento humanizado e de qualidade.</p>

<div class="card card-destaque">
  <h3 class="card-titulo">"Acessibilidade não é apenas sobre arquitetura ou leis. É sobre atitude."</h3>
</div>

<p>A comunicação é um direito de todos!</p>
<p>Espero que este curso tenha plantado uma semente e que você continue buscando aprender Libras. A comunidade surda ganha um aliado, e o serviço público ganha um profissional mais completo.</p>

<p style="text-align:right"><strong>Um abraço,</strong><br><strong>Humberto Meira Neto</strong></p>

<figure class="figura"><img src="${BUNNY}palmas_boneca.gif" alt="Boneco aplaudindo" style="max-width:25rem;margin:0 auto"></figure>`
      },

    ]
  });
})();
