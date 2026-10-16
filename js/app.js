/* =========================================================================
   CURSO DE LIBRAS — MOTOR ÚNICO (HTML/CSS/JS puro, sem dependências)
   - Cada arquivo em /modulos chama CURSO.registrarModulo({...}).
   - Navegação por hash: #/m1/1-1  (funciona no GitHub Pages, Vercel e
     até abrindo o index.html direto do computador).
   - Componentes funcionam por classe/atributo, sem IDs fixos e sem
     variáveis globais: quantos acordeões, modais, flipcards e carrosséis
     houver na mesma página, cada um funciona de forma independente.
   ========================================================================= */
(() => {
  'use strict';

  /* ---------- Catálogo: os 5 módulos (os não inseridos aparecem "em breve") ---------- */
  const CATALOGO = [
    { id: 'm1', numero: 1, tema: 'm1' },
    { id: 'm2', numero: 2, tema: 'm2' },
    { id: 'm3', numero: 3, tema: 'm3' },
    { id: 'm4', numero: 4, tema: 'm4' },
    { id: 'm5', numero: 5, tema: 'm5' },
  ];
  const modulos = new Map();

  window.CURSO = {
    registrarModulo(modulo) {
      const base = CATALOGO.find(c => c.id === modulo.id) || {};
      modulos.set(modulo.id, { ...base, ...modulo });
    },
  };

  /* ---------- Armazenamento local (progresso do aluno neste navegador) ---------- */
  const PREFIXO = 'curso-libras:';
  const memoria = {
    ler(chave, padrao) {
      try { const v = localStorage.getItem(PREFIXO + chave); return v ? JSON.parse(v) : padrao; }
      catch { return padrao; }
    },
    gravar(chave, valor) {
      try { localStorage.setItem(PREFIXO + chave, JSON.stringify(valor)); } catch { /* modo privado etc. */ }
    },
    apagar(chave) { try { localStorage.removeItem(PREFIXO + chave); } catch { /* ignora */ } },
  };
  let visitados = new Set(memoria.ler('visitados', []));

  /* ---------- Atalhos de elementos ---------- */
  const $ = id => document.getElementById(id);
  let el = {};

  /* ---------- Utilidades ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const chaveDe = (m, p) => `${m.id}/${p.id}`;
  const rotaDe = (m, p) => `#/${m.id}/${p.id}`;

  function sequencia() {
    const lista = [];
    CATALOGO.forEach(c => {
      const m = modulos.get(c.id);
      if (m) m.paginas.forEach(p => lista.push({ modulo: m, pagina: p }));
    });
    return lista;
  }
  function progresso(m) {
    const total = m.paginas.length;
    const feitos = m.paginas.filter(p => visitados.has(chaveDe(m, p))).length;
    return { feitos, total };
  }
  function paginaDeEntrada(m) {
    const ultima = memoria.ler('ultima-' + m.id, null);
    return m.paginas.find(p => p.id === ultima) || m.paginas[0];
  }

  /* =======================================================================
     RENDERIZAÇÃO
     ======================================================================= */
  let primeiraRenderizacao = true;

  function renderizar() {
    const seq = sequencia();
    if (!seq.length) return;

    const [, mid, pid] = location.hash.match(/^#\/([^/]+)\/([^/]+)$/) || [];
    let idx = seq.findIndex(x => x.modulo.id === mid && x.pagina.id === pid);

    if (idx < 0) {
      // Rota inválida ou vazia: volta para onde o aluno parou (ou início do módulo pedido)
      const m = modulos.get(mid);
      let alvo;
      if (m) alvo = { modulo: m, pagina: paginaDeEntrada(m) };
      else {
        const ult = memoria.ler('ultima', null);
        alvo = (ult && seq.find(x => x.modulo.id === ult.m && x.pagina.id === ult.p)) || seq[0];
      }
      history.replaceState(null, '', rotaDe(alvo.modulo, alvo.pagina));
      idx = seq.indexOf(seq.find(x => x.modulo === alvo.modulo && x.pagina === alvo.pagina));
    }

    const { modulo, pagina } = seq[idx];

    limparPaginaAnterior();
    document.body.dataset.tema = modulo.tema;

    // Cabeçalho da página
    const sobretitulo = `Módulo ${modulo.numero}${pagina.codigo ? ' · Tópico ' + esc(pagina.codigo) : ''}`;
    el.cabecalho.innerHTML =
      `<p class="pagina-sobretitulo">${sobretitulo}</p><h1 class="pagina-titulo">${esc(pagina.titulo)}</h1>`;

    // Conteúdo + componentes
    el.pagina.innerHTML = pagina.html;
    iniciarComponentes(el.pagina);

    // Progresso
    visitados.add(chaveDe(modulo, pagina));
    memoria.gravar('visitados', [...visitados]);
    memoria.gravar('ultima', { m: modulo.id, p: pagina.id });
    memoria.gravar('ultima-' + modulo.id, pagina.id);

    renderizarAbas(modulo);
    renderizarSumario(modulo, pagina);
    renderizarRodape(seq, idx);

    el.topoTitulo.textContent = pagina.codigo ? `${pagina.codigo} ${pagina.titulo}` : pagina.titulo;
    document.title = `${pagina.titulo} · Módulo ${modulo.numero} · Curso de Libras`;
    const corTopo = getComputedStyle(document.body).getPropertyValue('--tema-ate').trim();
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', corTopo || '#0f172a');

    fecharSumario();
    window.scrollTo(0, 0);
    if (!primeiraRenderizacao) el.pagina.focus({ preventScroll: true });
    primeiraRenderizacao = false;
  }

  function renderizarAbas(atual) {
    el.abas.innerHTML = CATALOGO.map(c => {
      const m = modulos.get(c.id);
      if (!m) return `<span class="aba aba-indisponivel" aria-disabled="true">Módulo ${c.numero} <small>em breve</small></span>`;
      const ativo = m.id === atual.id;
      const { feitos, total } = progresso(m);
      return `<a class="aba${ativo ? ' aba-ativa' : ''}" href="${rotaDe(m, paginaDeEntrada(m))}"${ativo ? ' aria-current="true"' : ''}>Módulo ${c.numero} <small>${feitos}/${total}</small></a>`;
    }).join('');
    const ativa = el.abas.querySelector('.aba-ativa');
    if (ativa) el.abas.scrollLeft = ativa.offsetLeft - el.abas.clientWidth / 2 + ativa.offsetWidth / 2;
  }

  function renderizarSumario(m, atual) {
    const { feitos, total } = progresso(m);
    el.sumarioTitulo.textContent = m.titulo ? `Módulo ${m.numero} · ${m.titulo}` : `Módulo ${m.numero}`;
    el.progressoBarra.style.width = `${Math.round((feitos / total) * 100)}%`;
    el.progressoTexto.textContent = `${feitos} de ${total} tópicos visitados`;
    el.lista.innerHTML = m.paginas.map(p => {
      const visto = visitados.has(chaveDe(m, p));
      const eAtual = p.id === atual.id;
      const classes = ['topico', `nivel-${p.nivel || 0}`, eAtual && 'topico-atual', visto && 'topico-visto'].filter(Boolean).join(' ');
      return `<li><a class="${classes}" href="${rotaDe(m, p)}"${eAtual ? ' aria-current="page"' : ''}>` +
        `<span class="topico-marca" aria-hidden="true"></span>` +
        `<span>${p.codigo ? `<span class="topico-codigo">${esc(p.codigo)}</span>` : ''}${esc(p.titulo)}` +
        `${visto ? '<span class="sr-only"> (visitado)</span>' : ''}</span></a></li>`;
    }).join('');
  }

  function renderizarRodape(seq, idx) {
    const ant = seq[idx - 1], prox = seq[idx + 1], atual = seq[idx];
    const rotulo = (x, padrao) => x.modulo !== atual.modulo ? `Módulo ${x.modulo.numero}` : padrao;
    const botao = (x, classe, padrao) => x
      ? `<a class="nav-passo ${classe}" href="${rotaDe(x.modulo, x.pagina)}"><small>${rotulo(x, padrao)}</small><span>${esc(x.pagina.codigo ? x.pagina.codigo + ' ' + x.pagina.titulo : x.pagina.titulo)}</span></a>`
      : `<span class="nav-passo nav-vazio" aria-hidden="true"></span>`;
    el.rodape.innerHTML = `<div class="rodape-nav-linha">${botao(ant, 'nav-anterior', '← Anterior')}${botao(prox, 'nav-proximo', 'Próximo →')}</div>`;
  }

  /* =======================================================================
     SUMÁRIO (gaveta no celular)
     ======================================================================= */
  function abrirSumario() {
    el.sumario.classList.add('aberto');
    el.fundo.hidden = false;
    el.btnAbrir.setAttribute('aria-expanded', 'true');
    document.body.classList.add('travar-rolagem');
    el.lista.querySelector('.topico-atual')?.scrollIntoView({ block: 'center' });
    el.btnFechar.focus();
  }
  function fecharSumario() {
    if (!el.sumario.classList.contains('aberto')) return;
    el.sumario.classList.remove('aberto');
    el.fundo.hidden = true;
    el.btnAbrir.setAttribute('aria-expanded', 'false');
    if (!document.querySelector('.modal.aberto')) document.body.classList.remove('travar-rolagem');
  }

  /* =======================================================================
     COMPONENTES
     ======================================================================= */
  const temporizadores = [];
  const SETA = '<svg class="accordion-chevron" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';

  function limparPaginaAnterior() {
    temporizadores.splice(0).forEach(clearInterval);
    document.querySelectorAll('.modal.aberto').forEach(m => m.classList.remove('aberto'));
    document.body.classList.remove('travar-rolagem');
  }

  function iniciarComponentes(raiz) {
    // Acordeões: acessibilidade + seta injetada (não precisa repetir SVG no conteúdo)
    raiz.querySelectorAll('.accordion-header').forEach(h => {
      h.setAttribute('type', 'button');
      h.setAttribute('aria-expanded', 'false');
      if (!h.querySelector('.accordion-chevron')) h.insertAdjacentHTML('beforeend', SETA);
    });

    // Flipcards: viram com clique, toque, Enter ou Espaço
    raiz.querySelectorAll('.flipcard').forEach(card => {
      card.removeAttribute('onclick'); // remove o JS antigo embutido
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-pressed', 'false');
      const frente = card.querySelector('.flipcard-front')?.textContent.trim();
      if (frente) card.setAttribute('aria-label', `${frente} — toque para ver o sinal`);
    });

    // Carrosséis de GIFs (cada um com seu próprio estado)
    raiz.querySelectorAll('.gif-carousel').forEach(iniciarCarrossel);

    // Caixas de reflexão (texto salvo só neste aparelho)
    raiz.querySelectorAll('[data-reflexao]').forEach(iniciarReflexao);

    // Atividades (digitar, escolher, associar)
    raiz.querySelectorAll('.atividade').forEach(iniciarAtividade);

    // Tabelas: envolve em contêiner com rolagem horizontal
    raiz.querySelectorAll('table').forEach(t => {
      if (t.parentElement.classList.contains('tabela-rolagem')) return;
      const caixa = document.createElement('div');
      caixa.className = 'tabela-rolagem';
      t.replaceWith(caixa);
      caixa.appendChild(t);
    });

    // Imagens e iframes com carregamento preguiçoso
    raiz.querySelectorAll('img:not([loading])').forEach(i => i.setAttribute('loading', 'lazy'));
    raiz.querySelectorAll('iframe:not([loading])').forEach(f => f.setAttribute('loading', 'lazy'));

    // Links externos sempre em nova aba
    raiz.querySelectorAll('a[href^="http"]').forEach(a => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });

    // Pré-carrega o script do Tally só se a página tiver botão de Tally
    if (raiz.querySelector('[data-tally-popup]')) carregarTally().catch(() => {});
  }

  /* ---------- Acordeão ---------- */
  function alternarAcordeao(cab) {
    const corpo = cab.nextElementSibling;
    if (!corpo) return;
    const abrir = cab.getAttribute('aria-expanded') !== 'true';
    cab.setAttribute('aria-expanded', String(abrir));
    cab.classList.toggle('active', abrir);
    cab.parentElement?.classList.toggle('open', abrir);
    if (abrir) {
      corpo.style.maxHeight = corpo.scrollHeight + 'px';
      corpo.addEventListener('transitionend', () => {
        if (cab.getAttribute('aria-expanded') === 'true') corpo.style.maxHeight = 'none';
      }, { once: true });
    } else {
      corpo.style.maxHeight = corpo.scrollHeight + 'px';
      void corpo.offsetHeight; // força o navegador a registrar a altura antes de fechar
      corpo.style.maxHeight = '0px';
    }
  }

  /* ---------- Flipcard ---------- */
  function virarCard(card) {
    const virado = card.classList.toggle('flipped');
    card.setAttribute('aria-pressed', String(virado));
  }

  /* ---------- Carrossel ---------- */
  function iniciarCarrossel(carrossel) {
    const slides = [...carrossel.querySelectorAll('.carousel-slide')];
    if (!slides.length) return;
    let atual = 0;
    let timer = null;

    // Botões: aproveita os existentes (.prev/.next) ou cria
    let anterior = carrossel.querySelector('.prev');
    let proximo = carrossel.querySelector('.next');
    if (!anterior) { anterior = document.createElement('button'); anterior.className = 'prev'; anterior.innerHTML = '&#10094;'; carrossel.appendChild(anterior); }
    if (!proximo) { proximo = document.createElement('button'); proximo.className = 'next'; proximo.innerHTML = '&#10095;'; carrossel.appendChild(proximo); }
    [anterior, proximo].forEach(b => {
      b.removeAttribute('onclick');
      b.setAttribute('role', 'button');
      b.setAttribute('tabindex', '0');
    });
    anterior.setAttribute('aria-label', 'Anterior');
    proximo.setAttribute('aria-label', 'Próximo');

    // Pontos de navegação
    const pontos = document.createElement('div');
    pontos.className = 'carrossel-pontos';
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Ir para o item ${i + 1} de ${slides.length}`);
      b.addEventListener('click', () => { parar(); mostrar(i); });
      pontos.appendChild(b);
    });
    carrossel.after(pontos);

    function carregar(i) {
      const img = slides[i]?.querySelector('img[data-src]');
      if (img) { img.src = img.dataset.src; img.removeAttribute('data-src'); }
    }
    function mostrar(i) {
      atual = (i + slides.length) % slides.length;
      slides.forEach((s, n) => { s.classList.toggle('ativo', n === atual); s.style.display = ''; });
      [...pontos.children].forEach((p, n) => p.setAttribute('aria-current', String(n === atual)));
      carregar(atual);
      carregar((atual + 1) % slides.length);
    }
    function parar() { if (timer) { clearInterval(timer); timer = null; } }

    const acionar = (botao, passo) => {
      botao.addEventListener('click', e => { e.preventDefault(); parar(); mostrar(atual + passo); });
      botao.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); parar(); mostrar(atual + passo); }
      });
    };
    acionar(anterior, -1);
    acionar(proximo, 1);

    // Deslizar o dedo no celular
    let x0 = null;
    carrossel.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    carrossel.addEventListener('touchend', e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 40) { parar(); mostrar(atual + (dx < 0 ? 1 : -1)); }
    });

    // Avanço automático opcional: <div class="gif-carousel" data-autoplay="6000">
    const ms = Number(carrossel.dataset.autoplay) || 0;
    if (ms > 0) { timer = setInterval(() => mostrar(atual + 1), ms); temporizadores.push(timer); }

    mostrar(0);
  }

  /* ---------- Reflexão (substitui o fórum; sem servidor) ---------- */
  // Uso: <div data-reflexao="m2-tem-diferenca" data-rotulo="Sua resposta"></div>
  // O texto é salvo a cada tecla no localStorage deste navegador. O professor NÃO recebe.
  function iniciarReflexao(caixa) {
    const id = caixa.dataset.reflexao;
    const campoId = 'reflexao-' + id;
    const chave = 'reflexao-' + id;
    caixa.innerHTML =
      `<label class="reflexao-rotulo" for="${esc(campoId)}">${esc(caixa.dataset.rotulo || 'Sua resposta')}</label>` +
      `<textarea id="${esc(campoId)}" class="reflexao-campo" rows="5" placeholder="Escreva aqui..."></textarea>` +
      `<p class="reflexao-status" role="status" aria-live="polite"></p>`;
    const campo = caixa.querySelector('textarea');
    const status = caixa.querySelector('.reflexao-status');
    const aviso = 'Sua resposta fica salva só neste aparelho. O professor não a recebe.';
    campo.value = memoria.ler(chave, '');
    status.textContent = campo.value ? 'Resposta salva neste aparelho.' : aviso;
    campo.addEventListener('input', () => {
      if (campo.value.trim()) { memoria.gravar(chave, campo.value); status.textContent = 'Salvo neste aparelho.'; }
      else { memoria.apagar(chave); status.textContent = aviso; }
    });
  }

  /* ---------- Atividades: digitar, escolher e associar ----------
     <div class="atividade" data-atividade="lista">   → todas as questões + um botão "Verificar" geral
     <div class="atividade" data-atividade="passos">  → uma questão por vez, com setas e pontos
     Cada <div class="ativ-questao" data-resposta="certa|outra-aceita"> traz UM campo:
     texto (<input type="text">), lista (<select>) ou opções (<input type="radio">).
     Corrigidas no próprio aparelho; nada é enviado a servidor. */
  let seqAtividade = 0;
  const normalizar = s => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/\s+/g, '');

  function lerResposta(q) {
    const montada = q.querySelector('.ord-resposta');
    if (montada) return [...montada.children].map(b => b.dataset.id).join(',');
    const lista = q.querySelector('select');
    if (lista) return lista.value;
    if (q.querySelector('input[type="radio"]')) return q.querySelector('input[type="radio"]:checked')?.value || '';
    return q.querySelector('input[type="text"]')?.value || '';
  }
  function avaliarQuestao(q) {
    const resposta = normalizar(lerResposta(q));
    const fb = q.querySelector('.ativ-feedback');
    const escolha = !!q.querySelector('select, input[type="radio"]');
    const ordenar = !!q.querySelector('.ord-resposta');
    q.classList.remove('certa', 'errada', 'vazia');
    let estado;
    if (!resposta) { estado = 'vazia'; fb.textContent = ordenar ? '⚠️ Monte a sequência.' : escolha ? '⚠️ Escolha uma opção.' : '⚠️ Digite uma resposta.'; }
    else if ((q.dataset.resposta || '').split('|').some(r => normalizar(r) === resposta)) { estado = 'certa'; fb.textContent = '✅ Correto!'; }
    else { estado = 'errada'; fb.textContent = '❌ Incorreto. Tente de novo.'; }
    q.classList.add(estado);
    q.dataset.avaliada = resposta; // guarda o que foi corrigido (um simples "sair do campo" não apaga a correção)
    return estado;
  }
  function embaralharOpcoes(lista) {
    const [, ...resto] = [...lista.options]; // a primeira ("Selecione...") fica no topo
    for (let i = resto.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [resto[i], resto[j]] = [resto[j], resto[i]];
    }
    lista.append(...resto);
  }

  // Ordenar: toque num item para levá-lo à sequência; toque de novo para devolvê-lo ao banco
  function iniciarOrdenar(q) {
    const banco = q.querySelector('.ord-banco');
    const resposta = q.querySelector('.ord-resposta');
    if (!banco || !resposta) return;
    resposta.dataset.vazio = resposta.dataset.vazio || 'Toque nos itens para montar a sequência';
    const itens = [...banco.children];
    for (let i = itens.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [itens[i], itens[j]] = [itens[j], itens[i]];
    }
    banco.append(...itens);
    q.addEventListener('click', e => {
      const item = e.target.closest('.ord-item');
      if (!item || !q.contains(item)) return;
      (item.parentElement === banco ? resposta : banco).appendChild(item);
      q.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  function iniciarAtividade(ativ) {
    const n = ++seqAtividade;
    const questoes = [...ativ.querySelectorAll('.ativ-questao')];
    const total = questoes.length;
    if (!total) return;
    const passos = ativ.dataset.atividade === 'passos';
    let aoMudar = () => {};

    questoes.forEach((q, i) => {
      if (!q.querySelector('.ativ-feedback')) {
        const fb = document.createElement('p');
        fb.className = 'ativ-feedback';
        fb.setAttribute('role', 'status');
        fb.setAttribute('aria-live', 'polite');
        q.appendChild(fb);
      }
      q.querySelectorAll('input[type="radio"]').forEach(r => { r.name = `ativ-${n}-q${i}`; });
      const rotulo = q.querySelector('label.ativ-rotulo');
      const campo = q.querySelector('input[type="text"], select');
      if (rotulo && campo) { campo.id = `ativ-${n}-c${i}`; rotulo.htmlFor = campo.id; }
      q.querySelectorAll('select[data-embaralhar]').forEach(embaralharOpcoes);
      iniciarOrdenar(q);
      const limpar = () => {
        if (q.dataset.avaliada !== undefined && normalizar(lerResposta(q)) === q.dataset.avaliada) return;
        delete q.dataset.avaliada;
        q.classList.remove('certa', 'errada', 'vazia');
        q.querySelector('.ativ-feedback').textContent = '';
        aoMudar();
      };
      q.addEventListener('input', limpar);
      q.addEventListener('change', limpar);
    });

    const resultado = document.createElement('p');
    resultado.className = 'ativ-resultado';
    resultado.setAttribute('role', 'status');
    resultado.setAttribute('aria-live', 'polite');
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'ativ-verificar';
    botao.textContent = 'Verificar';

    if (!passos) {
      // Todas as questões de uma vez
      botao.classList.add('ativ-verificar-geral');
      botao.textContent = ativ.dataset.rotuloBotao || 'Verificar todas as respostas';
      botao.addEventListener('click', () => {
        const estados = questoes.map(avaliarQuestao);
        const certas = estados.filter(e => e === 'certa').length;
        resultado.textContent = estados.every(e => e === 'vazia')
          ? '⚠️ Responda pelo menos uma questão.'
          : `Você acertou ${certas} de ${total}${certas === total ? ' 🎉' : ''}`;
      });
      ativ.append(botao, resultado);
      return;
    }

    // Uma questão por vez
    let atual = 0;
    const iframes = questoes.map(q => q.querySelector('iframe'));
    iframes.forEach(f => { // vídeos só carregam quando a questão aparece (e param ao sair dela)
      if (f && f.getAttribute('src')) { f.dataset.src = f.getAttribute('src'); f.removeAttribute('src'); }
    });

    const pontos = document.createElement('div');
    pontos.className = 'ativ-pontos';
    questoes.forEach((_, k) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Ir para a questão ${k + 1} de ${total}`);
      b.addEventListener('click', () => ir(k, true));
      pontos.appendChild(b);
    });
    const nav = document.createElement('div');
    nav.className = 'ativ-nav';
    const seta = (rot, simbolo) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'ativ-seta';
      b.setAttribute('aria-label', rot);
      b.innerHTML = simbolo;
      return b;
    };
    const anterior = seta('Questão anterior', '&#10094;');
    const proxima = seta('Próxima questão', '&#10095;');
    nav.append(anterior, botao, proxima);
    ativ.append(pontos, nav, resultado);

    function placar() {
      const certas = questoes.filter(q => q.classList.contains('certa')).length;
      resultado.textContent = `Questão ${atual + 1} de ${total} · Acertos: ${certas}`;
      questoes.forEach((q, k) => {
        pontos.children[k].dataset.estado = q.classList.contains('certa') ? 'certa' : q.classList.contains('errada') ? 'errada' : '';
      });
    }
    function ir(k, rolar) {
      atual = Math.max(0, Math.min(total - 1, k));
      questoes.forEach((q, i) => {
        q.hidden = i !== atual;
        const f = iframes[i];
        if (!f) return;
        if (i === atual) { if (!f.getAttribute('src') && f.dataset.src) f.src = f.dataset.src; }
        else if (f.getAttribute('src')) f.removeAttribute('src');
      });
      [...pontos.children].forEach((p, i) => p.setAttribute('aria-current', String(i === atual)));
      anterior.disabled = atual === 0;
      proxima.disabled = atual === total - 1;
      placar();
      if (rolar && ativ.getBoundingClientRect().top < 0) ativ.scrollIntoView({ block: 'start' });
    }
    aoMudar = placar;

    const verificar = () => { avaliarQuestao(questoes[atual]); placar(); };
    botao.addEventListener('click', verificar);
    anterior.addEventListener('click', () => ir(atual - 1, true));
    proxima.addEventListener('click', () => ir(atual + 1, true));
    ativ.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target.matches?.('input[type="text"]')) { e.preventDefault(); verificar(); }
    });
    ir(0, false);
  }

  /* ---------- Modal / Pop-up ---------- */
  let focoAntesDoModal = null;
  function abrirModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    if (!modal.classList.contains('modal')) { modal.style.display = 'flex'; return; } // formato legado
    focoAntesDoModal = document.activeElement;
    modal.classList.add('aberto');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    document.body.classList.add('travar-rolagem');
    modal.querySelector('[data-modal-fechar]')?.focus();
  }
  function fecharModal(modal) {
    if (!modal) return;
    modal.classList.remove('aberto');
    if (!el.sumario.classList.contains('aberto')) document.body.classList.remove('travar-rolagem');
    focoAntesDoModal?.focus?.();
  }
  // Compatibilidade com os pop-ups de autor antigos (onclick="openAuthorPopup('id')")
  window.openAuthorPopup = abrirModal;
  window.closeAuthorPopup = (evento, id) => {
    const alvo = evento.target;
    if (alvo.classList.contains('author-popup-overlay') || alvo.classList.contains('author-close-btn')) {
      const p = document.getElementById(id);
      if (p) p.style.display = 'none';
    }
  };

  /* ---------- Tally (mantido no Plano B) ---------- */
  let promessaTally = null;
  function carregarTally() {
    if (window.Tally) return Promise.resolve();
    if (!promessaTally) {
      promessaTally = new Promise((ok, falha) => {
        const s = document.createElement('script');
        s.src = 'https://tally.so/widgets/embed.js';
        s.async = true;
        s.onload = ok;
        s.onerror = () => { promessaTally = null; falha(); };
        document.head.appendChild(s);
      });
    }
    return promessaTally;
  }
  function abrirTally(botao) {
    const id = botao.dataset.tallyPopup;
    carregarTally().then(() => {
      const opcoes = { layout: 'modal', width: 500 };
      if (botao.dataset.tallyEmojiText) {
        opcoes.emoji = { text: botao.dataset.tallyEmojiText, animation: botao.dataset.tallyEmojiAnimation || 'wave' };
      }
      window.Tally.openPopup(id, opcoes);
    }).catch(() => window.open(`https://tally.so/r/${id}`, '_blank', 'noopener'));
  }

  /* =======================================================================
     EVENTOS GLOBAIS (um único ouvinte para todos os componentes)
     ======================================================================= */
  function ligarEventos() {
    document.addEventListener('click', e => {
      const t = e.target;
      const cab = t.closest('.accordion-header');
      if (cab && el.pagina.contains(cab)) { alternarAcordeao(cab); return; }

      const card = t.closest('.flipcard');
      if (card && el.pagina.contains(card)) { virarCard(card); return; }

      const abrir = t.closest('[data-modal-abrir]');
      if (abrir) { e.preventDefault(); abrirModal(abrir.dataset.modalAbrir); return; }

      const fechar = t.closest('[data-modal-fechar]');
      if (fechar) { fecharModal(fechar.closest('.modal')); return; }
      if (t.classList?.contains('modal')) { fecharModal(t); return; } // clique no fundo escuro

      const tally = t.closest('[data-tally-popup]');
      if (tally) { e.preventDefault(); abrirTally(tally); }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        const modal = document.querySelector('.modal.aberto');
        if (modal) fecharModal(modal); else fecharSumario();
        return;
      }
      const card = e.target.closest?.('.flipcard');
      if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); virarCard(card); }
    });

    el.btnAbrir.addEventListener('click', abrirSumario);
    el.btnFechar.addEventListener('click', fecharSumario);
    el.fundo.addEventListener('click', fecharSumario);
    el.btnReiniciar.addEventListener('click', () => {
      if (!confirm('Apagar as marcações de tópicos visitados neste navegador?')) return;
      visitados = new Set();
      memoria.apagar('visitados');
      renderizar();
    });

    window.addEventListener('hashchange', renderizar);

    // Altura real do topo (muda com fonte/zoom) → usada no espaçamento da página
    const ajustarTopo = () => document.documentElement.style.setProperty('--h-topo', el.topo.offsetHeight + 'px');
    ajustarTopo();
    if ('ResizeObserver' in window) new ResizeObserver(ajustarTopo).observe(el.topo);
    else window.addEventListener('resize', ajustarTopo);
  }

  /* =======================================================================
     INÍCIO
     ======================================================================= */
  document.addEventListener('DOMContentLoaded', () => {
    el = {
      topo: $('topo'), topoTitulo: $('topo-titulo'), abas: $('abas-modulos'),
      sumario: $('sumario'), fundo: $('sumario-fundo'), lista: $('lista-topicos'),
      sumarioTitulo: $('sumario-titulo'), progressoBarra: $('progresso-barra'), progressoTexto: $('progresso-texto'),
      btnAbrir: $('btn-abrir-sumario'), btnFechar: $('btn-fechar-sumario'), btnReiniciar: $('btn-reiniciar'),
      cabecalho: $('cabecalho-pagina'), pagina: $('pagina'), rodape: $('rodape-nav'),
    };
    ligarEventos();
    renderizar();
  });
})();
