/* =========================================================================
   MÓDULO 2 — conteúdo
   Mídia, links e IDs do Tally/Lumi mantidos exatamente como nos arquivos originais.
   ========================================================================= */
CURSO.registrarModulo({
  id: 'm2',
  paginas: [

    /* ---------------------------------------------------------------- */
    {
      id: 'introducao', codigo: '', titulo: 'Introdução ao Módulo 2', nivel: 0,
      html: `
<p>Seja bem-vindo ao Módulo 2. Finalmente vamos começar a nossa prática!</p>
<p>No Módulo 1, vimos por que o acesso à Libras é um direito. Agora, vamos entender como essa comunicação funciona na prática.</p>
<p>Muitas pessoas sentem receio de interagir com um surdo por medo de "não saber os sinais" ou "pagar mico". O objetivo deste módulo é quebrar essa barreira.</p>
<p>Vamos mostrar que você já possui muitas das ferramentas necessárias para uma comunicação básica. Por ser uma língua visuogestual, a Libras utiliza recursos que são bastante familiares para a comunicação entre ouvintes do Brasil: os gestos, a apontação e a representação visual (iconicidade).</p>
<p>Vamos explorar como a gramática da Libras utiliza o espaço e a imagem de forma lógica. Você verá, por exemplo, que pronomes (EU, VOCÊ, ELE) são simples apontações, que não existe flexão de gênero (como "o" ou "a" no final das palavras) e que muitos verbos são direcionais (o próprio sinal já indica quem faz e quem recebe a ação).</p>
<p>Este módulo é o primeiro passo para você "pensar visualmente" e perceber que a comunicação com uma pessoa surda pode ser muito mais intuitiva do que parece.</p>

<div class="card">
  <h3 class="card-titulo">Ao final deste módulo, você será capaz de:</h3>
  <ul class="lista-check">
    <li>Diferenciar um Gesto de um Sinal (Spoiler: às vezes não tem diferença).</li>
    <li>Reconhecer a importância da Mímica (Ação Incorporada) como estratégia de comunicação emergencial.</li>
    <li>Compreender como a Apontação e o Uso do Espaço funcionam como elementos gramaticais em Libras (ex: pronomes).</li>
    <li>Identificar a Iconicidade como um facilitador no aprendizado de vocabulário.</li>
  </ul>
</div>

<p class="duracao">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  Tempo estimado: 2 horas
</p>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: 'tem-diferenca', codigo: '', titulo: 'Tem diferença?', nivel: 0,
      html: `
<div class="card card-destaque">
  <p>Antes de começar os tópicos, assista a este vídeo curto:</p>
</div>

<div class="video">
  <iframe src="https://www.youtube.com/embed/-SH3qLHvdRY" title="Vídeo: Tem diferença?" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="card">
  <p><strong>Após assistir, reflita e responda:</strong></p>
  <ol class="lista-numerada" style="margin-top:.85rem">
    <li>Você conseguiu entender a mensagem principal?</li>
    <li>Na sua opinião, qual a diferença entre o que você viu (mímica) e a Língua de Sinais?</li>
    <li>Existem semelhanças?</li>
  </ol>
  <div data-reflexao="m2-tem-diferenca" data-rotulo="Sua resposta"></div>
</div>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '2-1', codigo: '2.1', titulo: 'O papel do gesto e da mímica', nivel: 0,
      html: `
<p>No fórum, vimos que é possível entender muita coisa através da mímica (gestos), mesmo sem usar palavras, certo? Isso acontece porque os gestos e a mímica são umas das formas mais intuitivas e universais da comunicação humana.</p>
<p>Neste tópico, vamos explorar essa ferramenta. A Libras, por ser uma língua visuogestual, dá um lugar de destaque a estes recursos.</p>
<p>Vamos entender que alguns gestos se incorporam na língua, outros não. Também vamos mostrar como a mímica (que chamaremos de "Ação Incorporada") é uma estratégia de emergência valiosa. Mesmo sem saber Libras, usar o corpo para demonstrar uma ação (como "assinar" ou "digitar") pode resolver um problema de comunicação imediata.</p>

<aside class="destaque">
  <div>
    <p class="destaque-titulo" style="font-size:1.2rem">Gesto, mímica ou sinal</p>
    <h3>Gesto</h3>
    <p>É o movimento intuitivo, normalmente com uma configuração de mão específica e muitas vezes universal, que acompanha a fala ou a substitui. Ex: O gesto de "dinheiro", "legal", "mais ou menos". Alguns gestos são incorporados na Libras como sinais, como COMER, MAIS-OU-MENOS, TCHAU, BEIJO, BEBER</p>
    <h3>Mímica</h3>
    <p>Na linguística das línguas de sinais, chamamos de ação incorporada. É uma representação cênica. Você atua a ação. Ex: fazer a ação de empurrar alguém (sem ninguém por perto), ou fazer o movimento de dirigir um carro. A ação incorporada é um recurso utilizado por falantes de línguas de sinais, mas ela se alinha à estrutura gramatical e se integra aos sinais.</p>
    <h3>Sinal</h3>
    <p>É a "palavra" oficial da Libras. É um movimento específico, com formato de mão (Configuração de Mão) e local definidos, que foi <strong>convencionado</strong> pela comunidade surda.</p>
  </div>
</aside>

<p>No fim das contas, mesmo sem saber Libras, você pode usar esses recursos. Você não estará falando em Libras, mas estará se comunicando (o básico, pelo menos).</p>

<button type="button" class="botao-modal" data-modal-abrir="m2-exemplo-pratico">Exemplo prático</button>

<div id="m2-exemplo-pratico" class="modal">
  <div class="modal-caixa">
    <button type="button" class="modal-fechar" data-modal-fechar aria-label="Fechar">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <h3>Exemplo prático</h3>
    <p>Imagine que você precisa pedir para um aluno surdo 'PEGAR O LÁPIS' ou 'ABRIR O LIVRO'. Você ainda não sabe esses sinais.</p>
    <p>Ação Incorporada (Mímica): Faça o movimento claro de segurar um lápis e escrever no ar, ou o movimento de abrir um livro físico, olhando para o aluno e apontando para o material dele.</p>
    <p>Essa ação é compreensível e resolve a comunicação imediata. O gesto e a mímica são suas ferramentas de "primeiros socorros" na comunicação.</p>
  </div>
</div>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '2-1-1', codigo: '2.1.1', titulo: 'Quiz Gesto', nivel: 1,
      html: `
<p>Veja se consegue adivinhar o que é gesto e o que é sinal, nos exemplos abaixo (lembrando que alguns podem se enquadrar em ambas categorias).</p>

<div class="embed-lumi embed-lumi-alto">
  <iframe src="https://app.Lumi.education/run/FAdZ7G" title="Quiz: Gesto ou sinal?" allowfullscreen></iframe>
</div>
<p class="embed-alternativo"><a href="https://app.Lumi.education/run/FAdZ7G">Abrir a atividade em tela cheia ↗</a></p>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '2-2', codigo: '2.2', titulo: 'Apontação e Espaço: A Gramática Visual', nivel: 0,
      html: `
<p>No tópico anterior, vimos que gestos e mímicas são ferramentas de comunicação imediatas. Agora, vamos dar um passo além e entender como a Libras organiza sua gramática no espaço.</p>
<p>Se os gestos são a "intuição", o uso do espaço é a "lógica" da Libras.</p>
<p>No português, usamos muitas palavras pequenas (preposições, artigos, conjugações) para organizar uma frase. Em Libras, muito disso é resolvido visualmente usando o espaço à sua frente como um "tabuleiro" ou "tela 3D".</p>
<p>Duas das características mais práticas e fáceis de aprender são o uso da apontação (para pronomes) e a direcionalidade (para verbos). Na Libras você usa o espaço (e se envolve nele) para marcar e interagir com os referentes do texto.</p>

<hr>

<h2>Apontação como pronome</h2>

<p>Esta é uma das maiores simplificações para quem aprende Libras. Não há necessidade de decorar uma lista de palavras como "eu", "você", "ele", "ela", "meu", "seu", etc., nem de se preocupar com gênero (masculino/feminino).</p>
<p>Tudo é resolvido com o dedo indicador (apontação):</p>

<div class="card">
  <h3 class="card-titulo">Pronomes em Libras</h3>
  <ul style="list-style:disc; padding-left:1.25rem; display:grid; gap:.4rem">
    <li>EU: Apontar para o próprio peito.</li>
    <li>VOCÊ: Apontar para a pessoa com quem você fala.</li>
    <li>ELE / ELA / AQUILO: Apontar para a pessoa ou objeto (presente no momento ou não).</li>
  </ul>
</div>

<p>Caso a pessoa a quem o sinalizante se refere esteja presente, basta apontar para a pessoa.</p>

<hr>

<h2>Verbos direcionais</h2>

<p>Esta é outra característica "econômica" da Libras. Muitos verbos mudam de direção para mostrar quem faz a ação e quem a recebe. Você não precisa sinalizar "Eu pergunto para você"; o próprio movimento do verbo já diz isso. Veja os exemplos:</p>

<div class="gif-carousel">
  <div class="carousel-slide">
    <img src="https://gifscursopullzone.b-cdn.net/perguntar.gif" alt="Sinal de PERGUNTAR-VOCÊ">
    <div class="slide-title">PERGUNTAR-VOCÊ</div>
  </div>
  <div class="carousel-slide">
    <img src="https://gifscursopullzone.b-cdn.net/perguntar2.gif" alt="Sinal de PERGUNTAR-ELE">
    <div class="slide-title">PERGUNTAR-ELE</div>
  </div>
  <div class="carousel-slide">
    <img src="https://gifscursopullzone.b-cdn.net/perguntar_cada.gif" alt="Sinal de PERGUNTAR-CADA-UM">
    <div class="slide-title">PERGUNTAR-CADA-UM</div>
  </div>
</div>

<p>Agora, como você faria a expressão abaixo em Libras?<br><em>(A frase significa "Você me pergunta").</em></p>

<pre class="glosa">VOCÊ PERGUNTAR-EU.</pre>

<p>Veja abaixo os verbos <strong>AJUDAR</strong>, <strong>DAR</strong>, <strong>RESPONDER</strong>, <strong>MOSTRAR</strong> e <strong>AVISAR</strong> e tente flexionar os verbos pensando em quem executa a ação e quem é o alvo da ação. Por exemplo:</p>

<pre class="glosa">EU AJUDAR-VOCÊ
ELE AJUDAR-EU
VOCÊ DAR-EU
ELE AVISAR-EU</pre>

<button type="button" class="botao-tally" data-tally-popup="w7Bda0" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">Foi fácil? Comenta aqui.</button>

<hr>

<h2>Vocabulário</h2>

<div class="flipcard-container">
  <div class="flipcard"><div class="flipcard-inner">
    <div class="flipcard-front"><p>AVISAR</p></div>
    <div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/avisar.gif" alt="Sinal de AVISAR"></div>
  </div></div>
  <div class="flipcard"><div class="flipcard-inner">
    <div class="flipcard-front"><p>RESPONDER</p></div>
    <div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/responder.gif" alt="Sinal de RESPONDER"></div>
  </div></div>
  <div class="flipcard"><div class="flipcard-inner">
    <div class="flipcard-front"><p>DAR</p></div>
    <div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/dar-voce.gif" alt="Sinal de DAR"></div>
  </div></div>
  <div class="flipcard"><div class="flipcard-inner">
    <div class="flipcard-front"><p>MOSTRAR</p></div>
    <div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/mostrar.gif" alt="Sinal de MOSTRAR"></div>
  </div></div>
  <div class="flipcard"><div class="flipcard-inner">
    <div class="flipcard-front"><p>AJUDAR</p></div>
    <div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/ajudar.gif" alt="Sinal de AJUDAR"></div>
  </div></div>
</div>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '2-3', codigo: '2.3', titulo: 'Iconicidade: Vendo o Significado no Sinal', nivel: 0,
      html: `
<p>No Tópico 1, vimos o gesto na expressão humana. No Tópico 2, vimos como o espaço gramaticaliza relações sintáticas nas línguas de sinais. Agora, investigaremos uma das características mais fascinantes e mal compreendidas das línguas sinalizadas: a iconicidade.</p>
<p>A iconicidade refere-se à relação de semelhança entre a forma linguística e seu referente no mundo. Embora seja frequentemente citada como diferencial das línguas de sinais, é importante compreender que:</p>

<div class="card">
  <ol class="lista-numerada">
    <li>A iconicidade não é exclusiva das línguas de sinais;</li>
    <li>Todas as línguas de sinais combinam elementos icônicos e arbitrários;</li>
    <li>A percepção da iconicidade é influenciada pela experiência linguística e cultural do sinalizador (Taub, 2001; Perniss et al., 2010).</li>
  </ol>
</div>

<button type="button" class="botao-modal" data-modal-abrir="m2-dica">Dica!</button>

<p>Neste tópico, vamos treinar seu olhar para "ver" o significado nos sinais. Vamos também analisar como o formato da mão (Configuração de Mão) pode, muitas vezes, descrever o mundo.</p>

<hr>

<h2>Iconicidade x Arbitrariedade</h2>

<p>Na teoria semiótica de Peirce, um ícone é um signo que mantém relação de semelhança com seu objeto. Nas línguas de sinais, essa relação ocorre quando a estrutura fonológica do sinal (sua forma articulatória) evoca características visuais, espaciais ou motoras do referente.</p>
<p>A iconicidade não é uma propriedade binária (icônico vs. não-icônico), mas um continuum (Taub, 2001). Um sinal pode ser mais ou menos icônico</p>

<figure class="figura">
  <img src="https://ik.imagekit.io/a02tbgrjz/Gifs/iconic_gradiente.png?updatedAt=1761436749899" alt="Exemplo de sinais organizados do mais icônico ao mais arbitrário">
  <figcaption>Exemplo de grau de iconicidade.</figcaption>
</figure>

<p><button type="button" class="link-autor" data-modal-abrir="m2-stokoe">William Stokoe (1960)</button>, ao estabelecer que as línguas de sinais são línguas naturais, demonstrou que elas possuem estrutura fonológica (configuração de mão, locação, movimento, orientação e expressões não-manuais). Essa descoberta revelou que, mesmo em sinais aparentemente icônicos, há convencionalização linguística.</p>

<p><button type="button" class="link-autor" data-modal-abrir="m2-quadros">Quadros &amp; Karnopp (2004)</button> documentam que aproximadamente 60% dos sinais da Libras apresentam algum grau de motivação icônica, mas isso não significa que sejam transparentes para não-sinalizadores.</p>

<hr>

<p>Veja no exercício abaixo se você consegue relacionar a forma do sinal em Libras com o significado dele.</p>
<p>Ao mesmo tempo, pensa em quais estratégias semânticas você utilizou para fazer essa associação. Que lógica te ajudou a dar os palpites? <em>(Para fazer o exercício abaixo, não precisa fazer Login. Basta clicar no botão "Confirm")</em></p>

<div class="embed-lumi embed-lumi-alto">
  <iframe src="https://app.Lumi.education/run/4nN_tY" title="Exercício: relacione a forma do sinal ao significado" allowfullscreen></iframe>
</div>
<p class="embed-alternativo"><a href="https://app.Lumi.education/run/4nN_tY">Abrir a atividade em tela cheia ↗</a></p>

<div id="m2-dica" class="modal">
  <div class="modal-caixa">
    <button type="button" class="modal-fechar" data-modal-fechar aria-label="Fechar">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <h3>&#9432; Dica!</h3>
    <p>Procure fazer associações entre a forma (aparência) do sinal e o seu significado.</p>
  </div>
</div>

<div id="m2-stokoe" class="modal">
  <div class="modal-caixa" style="text-align:center">
    <button type="button" class="modal-fechar" data-modal-fechar aria-label="Fechar">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <h3 style="margin-right:0">William Stokoe (1919–2000)</h3>
    <img class="modal-foto" src="https://ik.imagekit.io/a02tbgrjz/Gifs/william-stokoe.jpg?updatedAt=1761435472543" alt="William Stokoe">
    <p>Considerado o pai da linguística das línguas de sinais. Foi o primeiro autor de impacto a tratar as línguas de sinais como línguas naturais, atribuindo a elas o mesmo status das línguas orais.</p>
  </div>
</div>

<div id="m2-quadros" class="modal">
  <div class="modal-caixa" style="text-align:center">
    <button type="button" class="modal-fechar" data-modal-fechar aria-label="Fechar">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <h3 style="margin-right:0">Quadros &amp; Karnopp</h3>
    <img class="modal-foto" src="https://ik.imagekit.io/a02tbgrjz/Gifs/ronice.png?updatedAt=1761435472881" alt="Ronice Quadros">
    <p>Ronice Quadros, professora da UFSC, é considerada um nome de peso na área de língua de sinais no Brasil e no mundo. Uma das pioneiras no estudo com Libras e uma das idealizadoras do curso de Letras-Libras no Brasil.</p>
  </div>
</div>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '2-3-1', codigo: '2.3.1', titulo: 'Classificadores em LS', nivel: 1,
      html: `
<p>Na linguística, o termo classificador refere-se a morfemas que categorizam referentes segundo características visuais, de forma, tamanho ou função (Supalla, 1982; Zwitserlood, 2012). Em Libras, as Configurações de Mão (CMs) frequentemente funcionam como <strong>classificadores descritivos</strong>.</p>
<p>Classificadores Descritivos representam a forma ou tamanho de objetos. Segundo Ferreira-Brito (1995), as CMs em Libras carregam informação semântica sobre o formato do referente.</p>

<p class="titulo-centro">Exemplos de como as CM descrevem formas</p>
<table>
  <thead>
    <tr><th scope="col">CM</th><th scope="col">Formato representado</th><th scope="col">Exemplos</th></tr>
  </thead>
  <tbody>
    <tr><td>Mão espalmada</td><td>Superfícies planas, amplas</td><td>MESA (plana), PAREDE (vertical), PORTA.</td></tr>
    <tr><td>Mão fechada com indicador apontado</td><td>Objetos finos, longos</td><td>PESSOA-EM-PÉ, POSTE, CANETA-CAINDO.</td></tr>
    <tr><td>Mão em C</td><td>Objetos cilíndricos, grossos, arredondados</td><td>COPO, GARRAFA, TUBO</td></tr>
    <tr><td>Mão em F (pinça: polegar + indicador)</td><td>Objetos pequenos, delicados</td><td>MOEDA, FLOR, PÍLULA</td></tr>
    <tr><td>Mão em V invertido</td><td>Duas pernas, pessoa</td><td>PESSOA-ANDANDO, PESSOA-SENTADA.</td></tr>
  </tbody>
</table>

<hr>

<h2>Alguns tipos de classificadores (CL)</h2>

<p>Para não sermos muito técnicos na explicação, vamos demonstrar 3 diferentes maneiras de você tentar descrever ou falar sobre um objeto. Observe que algumas maneiras são mais indicadas do que outras:</p>

<div class="cards-gif">
  <article class="card-gif">
    <h3>DESCRIÇÃO</h3>
    <div class="card-gif-img"><img src="https://gifscursopullzone.b-cdn.net/escova_dv.gif" alt="Escova de dentes sinalizada por descrição da forma"></div>
    <p>Você usa as mãos para descrever o tamanho e a forma do objeto. No caso, um objeto fino <em>(essa maneira não é a mais indicada para o exemplo)</em>. 👎</p>
  </article>
  <article class="card-gif">
    <h3>MANIPULAÇÃO</h3>
    <div class="card-gif-img"><img src="https://gifscursopullzone.b-cdn.net/escova_manipular.gif" alt="Escova de dentes sinalizada por manipulação"></div>
    <p>É o modo como você segura aquele objeto. Um martelo, por exemplo, você seguraria de outra forma, certo? 👍</p>
  </article>
  <article class="card-gif">
    <h3>INCORPORAÇÃO</h3>
    <div class="card-gif-img"><img src="https://gifscursopullzone.b-cdn.net/escova_incorporar.gif" alt="Escova de dentes sinalizada por incorporação"></div>
    <p>A mão vira o objeto. No caso, o dedo virou a escova de dentes. 👍</p>
  </article>
</div>

<p>Você já percebeu como os sinalizadores conseguem "contar histórias" fazendo as mãos se moverem no espaço como se fossem personagens de um filme? Esse é o poder dos classificadores. Esse recurso permite construir eventos espaciais complexos, combinando movimento, localização e interação entre referentes.</p>
<p>As mãos podem "virar" pessoas, animais ou objetos, permitindo que você crie cenas inteiras no espaço que chamamos de <strong>espaço neutro</strong>. É como se suas mãos fossem miniaturas animadas!</p>
<p>Note que uma mesma CM pode servir para mais de um tipo de entidade. Por exemplo, a CM usada para MOTO, pode ser usada para fazer referência a outros veículos menores, como BICICLETA, ou mesmo animais como RATO.</p>

<div class="gif-carousel">
  <div class="carousel-slide"><img src="https://ik.imagekit.io/a02tbgrjz/Gifs/andar1.gif?updatedAt=1761418257428" alt="Pessoa andando"><div class="slide-title">PESSOA ANDANDO</div></div>
  <div class="carousel-slide"><img src="https://ik.imagekit.io/a02tbgrjz/Gifs/andar.gif?updatedAt=1761418262688" alt="Pessoa andando, com outra configuração de mão"><div class="slide-title">PESSOA ANDANDO (CM diferente)</div></div>
  <div class="carousel-slide"><img src="https://ik.imagekit.io/a02tbgrjz/Gifs/andar_cruzar.gif?updatedAt=1761418263642" alt="Pessoas se cruzando"><div class="slide-title">PESSOAS SE CRUZANDO</div></div>
  <div class="carousel-slide"><img src="https://ik.imagekit.io/a02tbgrjz/Gifs/andar_animal.gif?updatedAt=1761418257486" alt="Animal andando"><div class="slide-title">ANIMAL ANDANDO</div></div>
  <div class="carousel-slide"><img src="https://ik.imagekit.io/a02tbgrjz/Gifs/andar2.gif?updatedAt=1761418250469" alt="Duas pessoas andando"><div class="slide-title">2 PESSOAS ANDANDO</div></div>
  <div class="carousel-slide"><img src="https://ik.imagekit.io/a02tbgrjz/Gifs/andar_carro.gif?updatedAt=1761418249871" alt="Carro andando"><div class="slide-title">CARRO ANDANDO</div></div>
  <div class="carousel-slide"><img src="https://ik.imagekit.io/a02tbgrjz/Gifs/andar_moto.gif?updatedAt=1761418246959" alt="Moto andando"><div class="slide-title">MOTO ANDANDO</div></div>
  <div class="carousel-slide"><img src="https://gifscursopullzone.b-cdn.net/andar_carro_cruzar.gif" alt="Carros se cruzando"><div class="slide-title">CARROS SE CRUZANDO</div></div>
</div>

<p>Agora imagina combinar vários desses elementos no espaço. Uma pessoa andando, um carro se aproximando, a pessoa pulando para o lado... Dá pra criar uma cena completa com várias ações, das mais simples às mais complexas.</p>
<p>Isso não é mímica — cada configuração de mão tem um significado e uma restrição gramatical específicos na Libras. É língua visuogestual estruturada, não apenas gestos aleatórios.</p>
<p>Agora vamos ver se você consegue criar uma cena usando as mãos em movimento no espaço. Veja a situação abaixo, escolha as CM certas e aplique os movimentos indicados.</p>

<div class="card">
  <h3 class="card-titulo">Crie a cena:</h3>
  <p>Uma pessoa caminha enquanto um carro se aproxima, resultando em colisão ou desvio — tudo expresso simultaneamente pelas duas mãos no espaço.</p>
</div>

<button type="button" class="botao-tally" data-tally-popup="w7BDla" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">Foi fácil? Comenta aqui.</button>

<hr>

<h2>Vocabulário</h2>

<div class="flipcard-container">
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Andar Pessoa (1)</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/andar.gif" alt="Sinal de ANDAR (pessoa)"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Andar Pessoa (2)</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/andar1.gif" alt="Sinal de ANDAR (pessoa, variação)"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Andar (Animal)</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/andar_animal.gif" alt="Sinal de ANDAR (animal)"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Andar (Carro)</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/andar_carro.gif" alt="Sinal de ANDAR (carro)"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Andar (Moto)</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/andar_moto.gif" alt="Sinal de ANDAR (moto)"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Casa/Morar</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/casa.gif" alt="Sinal de CASA/MORAR"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Comer</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/comer.gif" alt="Sinal de COMER"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Encontrar</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/encontrar1.gif" alt="Sinal de ENCONTRAR"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Falar</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/falar.gif" alt="Sinal de FALAR"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Livro</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/livro.gif" alt="Sinal de LIVRO"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Pensar</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/pensar.gif" alt="Sinal de PENSAR"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Telefone</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/telefone.gif" alt="Sinal de TELEFONE"></div></div></div>
  <div class="flipcard"><div class="flipcard-inner"><div class="flipcard-front"><p>Ver</p></div><div class="flipcard-back"><img src="https://gifscursopullzone.b-cdn.net/ver.gif" alt="Sinal de VER"></div></div></div>
</div>`
    },

    /* ---------------------------------------------------------------- */
    {
      id: '2-3-2', codigo: '2.3.2', titulo: 'Quiz CL', nivel: 1,
      html: `
<p>Encontre a Configuração de Mão (CM) que melhor representa a forma dos objetos e faça a associação entre eles.</p>

<div class="embed-lumi embed-lumi-alto">
  <iframe src="https://app.Lumi.education/run/GKN-U6" title="Quiz: Configuração de Mão e forma dos objetos" allowfullscreen></iframe>
</div>
<p class="embed-alternativo"><a href="https://app.Lumi.education/run/GKN-U6">Abrir a atividade em tela cheia ↗</a></p>`
    },

  ],
});
