/* =========================================================================
   MÓDULO 1 — conteúdo
   Cada página: id (usado na URL), codigo (ex.: "1.1"), titulo, nivel
   (0 = tópico, 1 = subtópico) e html (só o conteúdo, sem <head>/scripts).
   Componentes disponíveis: ver comentários em css/app.css.
   ========================================================================= */
CURSO.registrarModulo({
  id: 'm1',
  paginas: [

    /* ---------------------------------------------------------------- */
    {
      id: 'introducao', codigo: '', titulo: 'Introdução ao Módulo 1', nivel: 0,
      html: `
<p>Para iniciar nossa jornada no aprendizado de Libras, precisamos primeiro ajustar nossa perspectiva sobre o que é a surdez. Historicamente, a surdez foi (e ainda é, em muitos contextos) vista exclusivamente pelo <strong>modelo clínico-patológico:</strong> a deficiência, a falta da audição, algo a ser "corrigido" ou "consertado". Neste módulo, vamos desafiar essa visão.</p>
<p>Ancorados no modelo sociocultural, apresentaremos a surdez como uma <strong>diferença</strong> linguística, cultural e identitária. Abordaremos como conceitos de "normalidade" são construções sociais que historicamente excluíram grupos, incluindo pessoas com deficiência.</p>
<p>Finalmente, entender por que a surdez é vista como uma diferença nos permite compreender a base dos direitos legais da comunidade surda, que tratam do acesso à comunicação, incluindo o papel dos tradutores e intérpretes de Libras.</p>

<div class="card">
  <h3 class="card-titulo">Ao final deste módulo, você será capaz de:</h3>
  <ul class="lista-check">
    <li>Diferenciar o "modelo clínico" (surdez como deficiência) do "modelo sociocultural" (surdez como diferença).</li>
    <li>Analisar como a definição de "normalidade" impacta a percepção social sobre a deficiência.</li>
    <li>Identificar os principais equívocos relacionados à pessoa surda e à Língua de Sinais.</li>
    <li>Reconhecer a importância da Libras para o desenvolvimento linguístico e social da pessoa surda.</li>
    <li>Listar os principais marcos legais que garantem o direito à comunicação da comunidade surda no Brasil.</li>
  </ul>
</div>

<p class="duracao">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  Tempo estimado: 2 horas
</p>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: 'reflexao-inicial', codigo: '', titulo: 'O que você pensa sobre isso?', nivel: 0,
      html: `
<div class="card card-destaque">
  <p>Antes de iniciarmos os estudos deste módulo, queremos saber sua opinião sincera:</p>
  <p><strong>Você acha possível que a surdez possa deixar de ser vista socialmente como uma deficiência para ser vista como uma diferença linguística? Por quê?</strong></p>
  <p class="nota"><em>(Não existe resposta "certa" ou "errada" neste momento. Queremos apenas entender sua percepção inicial sobre o tema. Seja honesto!)</em></p>
</div>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '1-1', codigo: '1.1', titulo: 'Deficiência x Diferença', nivel: 0,
      html: `
<p>No fórum anterior, exploramos nossas percepções iniciais sobre a surdez. Agora, vamos aprofundar esse debate.</p>
<p>Historicamente, a visão dominante sobre a surdez é a do <strong>modelo clínico-patológico</strong>. Nessa perspectiva, a surdez é entendida como uma "falta" auditiva, uma patologia que precisa ser "corrigida" ou "consertada" para que a pessoa se aproxime de um padrão "normal" (o ouvinte).</p>
<p>Os textos de apoio deste tópico (sobre a "invenção da normalidade" e a biopolítica) irão demonstrar como a própria ideia de "normal" é uma construção social, historicamente utilizada para justificar a exclusão de grupos que fogem à regra.</p>
<p>Em contraponto a essa visão, apresentaremos o <strong>modelo sociocultural</strong>. Esta abordagem, defendida por ativistas e acadêmicos, entende a surdez não como uma deficiência, mas como uma diferença linguística e cultural.</p>

<hr>

<p>Para entender a base do modelo sociocultural, assista à palestra <strong>Deficiência e Diferenças</strong>, da médica e ativista <strong>Izabel Maior</strong>.</p>

<h2>Deficiência e Diferenças</h2>
<div class="video">
  <iframe src="https://www.youtube.com/embed/jQKD5mIMJsM" title="Palestra Deficiência e Diferenças — Izabel Maior" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="card">
  <h3 class="card-titulo">Enquanto assiste, reflita (questões norteadoras):</h3>
  <ol class="lista-numerada">
    <li>O que a palestrante quer dizer com "a deficiência não está na pessoa, mas na sociedade"?</li>
    <li>Como o conceito de "barreira" (arquitetônica, atitudinal, comunicacional) é fundamental para o modelo social?</li>
    <li>Como podemos aplicar essa ideia (do modelo social) especificamente à comunidade surda no contexto do atendimento ao público?</li>
  </ol>
</div>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '1-1-1', codigo: '1.1.1', titulo: 'Leitura complementar', nivel: 1,
      html: `
<p>Os textos a seguir são fundamentais para entender a base teórica que critica o modelo clínico e sustenta o modelo social.</p>

<a class="card-link" href="https://drive.google.com/file/d/1uDL3CvbVLv-Oathd7WRhfZ-kOhZMXZwy/view?usp=sharing">
  <span class="card-link-corpo">
    <span class="card-link-titulo">A invenção e a exclusão da alteridade "deficiente" a partir dos significados da normalidade</span>
    <span class="card-link-texto"><strong>Foco da leitura:</strong> preste atenção em como os autores argumentam que a "normalidade" é um conceito historicamente construído (uma "invenção") e como isso serviu para justificar a exclusão de Pessoas com Deficiência.</span>
    <span class="card-link-acao">Abrir texto ↗</span>
  </span>
</a>

<a class="card-link" href="https://drive.google.com/file/d/1ehjjapRYFu2zjU11rYiC19jPUAplRMBR/view?usp=sharing">
  <span class="card-link-corpo">
    <span class="card-link-titulo">Capítulo 4: A biopolítica nos estudos sobre pessoas com deficiência</span>
    <span class="card-link-texto"><strong>Foco da leitura:</strong> observe como o poder (biopolítica) atua sobre os corpos, definindo quem é "apto" ou "capaz". Isso nos ajuda a entender por que a visão clínica da surdez (como corpo "defeituoso") foi tão dominante.</span>
    <span class="card-link-acao">Abrir texto ↗</span>
  </span>
</a>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '1-1-2', codigo: '1.1.2', titulo: 'Glossário', nivel: 1,
      html: `
<div class="acordeao">
  <div class="acordeao-item">
    <button class="accordion-header">Modelo Clínico-Patológico</button>
    <div class="accordion-content"><div class="acordeao-corpo">
      <p>Abordagem que vê a deficiência (e a surdez) como uma doença, um problema biológico individual que precisa ser tratado, curado ou corrigido.</p>
    </div></div>
  </div>
  <div class="acordeao-item">
    <button class="accordion-header">Modelo Sociocultural</button>
    <div class="accordion-content"><div class="acordeao-corpo">
      <p>Abordagem que entende a deficiência como o resultado da interação entre a pessoa (com sua limitação) e as barreiras impostas pela sociedade (sejam elas atitudinais, arquitetônicas ou de comunicação). A "deficiência" está na barreira social, não no indivíduo.</p>
    </div></div>
  </div>
  <div class="acordeao-item">
    <button class="accordion-header">Ouvintismo</button>
    <div class="accordion-content"><div class="acordeao-corpo">
      <p>Termo usado pela comunidade surda para descrever a opressão ou preconceito (similar ao racismo ou sexismo) exercido por ouvintes sobre surdos, baseado na supervalorização da audição e da língua oral.</p>
    </div></div>
  </div>
</div>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '1-2', codigo: '1.2', titulo: 'Surdez e linguagem', nivel: 0,
      html: `
<p>No Tópico 1, estabelecemos que a surdez pode ser vista como uma diferença sociocultural, e não apenas uma "falta" biológica. Mas o que fundamenta essa cultura? A resposta é: <strong>a Língua</strong>.</p>
<p>Neste tópico, vamos mergulhar na relação fundamental entre a surdez e a linguagem.</p>
<p>Começaremos entendendo, com base no texto de apoio, os conceitos básicos de audição e os diferentes tipos e graus de surdez (a parte clínica). Faremos isso não para focar na patologia, mas para entender exatamente como a ausência da audição impacta o canal de aquisição de linguagem mais comum (a fala) e por que isso torna um canal visual tão essencial.</p>
<p>Em seguida, vamos derrubar os mitos mais comuns que cercam a pessoa surda e a Libras. Vamos esclarecer por que "surdo-mudo" é um termo incorreto, por que a Libras não atrapalha o aprendizado do português e por que a <strong>oralização</strong> (o treino da fala) é um método, e não uma "cura" ou a única solução.</p>

<hr>

<h2>Audição, surdez e linguagem</h2>
<p>Este texto apresenta os conceitos fundamentais para entender a surdez do ponto de vista clínico (audiológico) e seu impacto direto na aquisição da linguagem oral.</p>

<a class="card-link" href="https://drive.google.com/file/d/1_KmasBoIr9UCalZGSdRsHou7o9v0C0M8/view?usp=sharing">
  <span class="card-link-corpo">
    <span class="card-link-titulo">Introdução à audição e surdez</span>
    <span class="card-link-texto">Tradução livre do cap. 1 do livro Peter V. Paul, Gail M. Whitelaw — <em>Hearing and Deafness: An Introduction for Health and Education Professionals</em> (2010)</span>
    <span class="card-link-acao">Abrir texto ↗</span>
  </span>
</a>

<div class="card">
  <h3 class="card-titulo">Foco na leitura (questões norteadoras):</h3>
  <ol class="lista-numerada">
    <li>Qual é a diferença entre Língua (um sistema complexo, como a Libras) e Linguagem (a capacidade humana de se comunicar)?</li>
    <li>Por que a aquisição de uma primeira língua (seja ela oral ou de sinais) é tão crítica nos primeiros anos de vida?</li>
    <li>Quais são os principais mitos sobre a surdez e a oralidade que o texto ajuda a desconstruir?</li>
  </ol>
</div>

<hr>

<p>As informações abaixo são <strong>FATO</strong> ou <strong>FAKE</strong>? Vamos ver se você consegue acertar?</p>
<div class="embed-lumi">
  <iframe src="https://app.Lumi.education/run/f24iYv" title="Atividade: Fato ou Fake" allowfullscreen></iframe>
</div>
<p class="embed-alternativo"><a href="https://app.Lumi.education/run/f24iYv">Abrir a atividade em tela cheia ↗</a></p>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '1-2-1', codigo: '1.2.1', titulo: 'Glossário', nivel: 1,
      html: `
<div class="acordeao">
  <div class="acordeao-item">
    <button class="accordion-header">Oralismo</button>
    <div class="accordion-content"><div class="acordeao-corpo">
      <p>Filosofia educacional que defende o ensino da pessoa surda focado exclusivamente na língua oral (fala e leitura labial), muitas vezes proibindo o uso da Língua de Sinais.</p>
    </div></div>
  </div>
  <div class="acordeao-item">
    <button class="accordion-header">Bilinguismo (para Surdos)</button>
    <div class="accordion-content"><div class="acordeao-corpo">
      <p>Abordagem educacional que defende o ensino em duas línguas: a Língua de Sinais (Libras, como L1) e a língua majoritária do país (Português, como L2, na modalidade escrita).</p>
    </div></div>
  </div>
  <div class="acordeao-item">
    <button class="accordion-header">Implante Coclear (IC)</button>
    <div class="accordion-content"><div class="acordeao-corpo">
      <p>Dispositivo eletrônico de alta tecnologia que estimula diretamente o nervo auditivo, permitindo que alguns tipos de surdos (especialmente os que perderam a audição depois de aprender a falar ou crianças muito pequenas) possam ter sensações auditivas. Não "restaura" a audição normal.</p>
    </div></div>
  </div>
</div>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '1-3', codigo: '1.3', titulo: 'Acesso à comunicação', nivel: 0,
      html: `
<p>Nos tópicos anteriores, estabelecemos que a surdez é uma diferença sociocultural e pode não ser vista como uma doença. Também vimos que a Libras é uma língua completa como outra qualquer (e não um código).</p>
<p>A consequência lógica dessa mudança de perspectiva é o reconhecimento de que o acesso à informação por meio dessa língua é um direito.</p>
<p>Neste tópico, vamos conhecer os principais marcos legais que garantem esse direito no Brasil. Para você, servidor, esta é a base legal que fundamenta a sua capacitação e orienta o seu dever no atendimento.</p>
<p>Vamos focar em por que essas leis existem, o que elas garantem e, principalmente, como elas regulamentam o papel do profissional Tradutor e Intérprete de Libras (TILS), que é o principal agente garantidor desse acesso nos espaços públicos.</p>

<hr>

<p>Não é preciso decorar os artigos das leis, mas sim entender o que elas garantem. Abaixo está um resumo dos documentos mais importantes:</p>

<div class="acordeao">
  <div class="acordeao-item">
    <button class="accordion-header">Lei de Libras (Lei nº 10.436/2002)</button>
    <div class="accordion-content"><div class="acordeao-corpo">
      <p>É a lei que reconhece a Língua Brasileira de Sinais (Libras) como meio legal de comunicação e expressão no Brasil. Ela dá status de língua à Libras. É o que oficializa a Libras, tirando-a da marginalidade (onde era vista como "mímica" ou "gestos").</p>
    </div></div>
  </div>
  <div class="acordeao-item">
    <button class="accordion-header">Decreto de Libras (Decreto nº 5.626/2005)</button>
    <div class="accordion-content"><div class="acordeao-corpo">
      <p>É o documento que regulamenta a Lei de Libras (diz como ela deve ser aplicada). Este é o mais importante para o nosso curso. É ele que obriga os órgãos públicos a garantir o atendimento e o acesso à pessoa surda. É este decreto que exige a presença de intérpretes em repartições e a capacitação de servidores.</p>
    </div></div>
  </div>
  <div class="acordeao-item">
    <button class="accordion-header">Lei do Intérprete (Lei nº 14.704/2023)</button>
    <div class="accordion-content"><div class="acordeao-corpo">
      <p>É a lei que regulamenta a profissão de Tradutor e Intérprete de Libras (TILS). Ela define que o intérprete é um profissional qualificado, com formação específica. Isso o diferencia de um "voluntário" ou "familiar". Ele tem deveres éticos, como a neutralidade e o sigilo, que serão discutidos abaixo.</p>
    </div></div>
  </div>
  <div class="acordeao-item">
    <button class="accordion-header">Lei da Acessibilidade (Lei nº 10.098/2000)</button>
    <div class="accordion-content"><div class="acordeao-corpo">
      <p>Uma lei mais ampla sobre acessibilidade (rampas, elevadores, etc.). Esta lei é crucial porque ela foi uma das primeiras a definir "acessibilidade" como a quebra de "barreiras na comunicação". Ela proíbe obstáculos que impeçam ou dificultem a expressão ou o recebimento de mensagens, o que se aplica diretamente ao atendimento de surdos.</p>
    </div></div>
  </div>
</div>

<hr>

<p>Quando um intérprete (TILS) estiver presente no atendimento, seja ele presencial ou por uma central de vídeo, o servidor deve entender alguns pontos importantes:</p>

<ol class="passos">
  <li><strong>O intérprete é uma PONTE, não o destino</strong><span>O seu atendimento é para a pessoa surda. Fale olhando para o surdo, não para o intérprete.</span></li>
  <li><strong>Use a segunda pessoa</strong><span>Não diga ao intérprete "Pergunte a ele qual o nome dele". Diga diretamente ao surdo (olhando para ele): "Qual é o seu nome?". O intérprete fará a tradução.</span></li>
  <li><strong>Não desconfie</strong><span>O TILS é um mediador. Se um surdo falar em Libras, o TILS falará em português para a sua compreensão. A fala continua sendo da pessoa surda, não do intérprete. Lembre-se: ele é uma ponte.</span></li>
</ol>

<aside class="destaque">
  <div>
    <p class="destaque-titulo">Não tem intérprete na minha instituição. E agora?</p>
    <p>Em Alagoas, temos a Central de Intérpretes de Libras (CIL), responsável por oferecer atendimento presencial ou remoto, através do WhatsApp <a href="https://wa.me/5582988676430">(82) 98867-6430</a> ou pelo e-mail <a href="mailto:cil@secdef.al.gov.br">cil@secdef.al.gov.br</a>. Você pode acionar, caso precise.</p>
  </div>
</aside>`
    },

  ],
});
