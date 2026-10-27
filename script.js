"use strict";

/* =====================================================================
   ÁREA DE PERSONALIZAÇÃO — escreva suas mensagens aqui
   ---------------------------------------------------------------------
   - Deixe "" em um campo que ainda não escreveu.
   - Use \n para quebrar linha dentro de um texto.
   - MODO_EDICAO: true  → campos vazios mostram um aviso com o identificador.
     Antes de presentear, troque para false (os avisos somem por completo).
   ===================================================================== */
const CONFIG = {
  MODO_EDICAO: true,
  MUSICA_ARQUIVO: "",              // ex.: "musica.mp3" (coloque o arquivo na mesma pasta)
  TITULO_SITE: "O céu que só existe porque você chegou"
};

const TEXTOS = {
  TEXTO_ABERTURA: "De todos os acasos da vida, você foi o meu favorito.",
  TITULO_CONSTELACAO: "Entre o acaso e tudo o que ainda vamos viver⭐",
  TEXTO_SIGNIFICADO_CONSTELACAO: `Às vezes eu fico pensando em como tudo começou e ainda acho maluco que eu tenha encontrado alguém que quero levar pra vida num evento de anime, de um jeito tão aleatório. Gosto de pensar que foi obra do destino, porque, entre tantas coisas que poderiam ter acontecido naquele dia, aconteceu justamente aquilo que trouxe você até mim. E, desde então, você fez até os dias mais comuns se tornarem especiais. Você me trouxe uma felicidade calma, um conforto que não sei explicar e a sensação de que posso simplesmente ser eu mesmo ao teu lado. Guardo com carinho nossas brincadeiras, a maldição da sinuca, as 100 DERROTAS NO UNO, o Family Style e, principalmente, o som da tua risada. Amo ver você feliz e perceber o carinho que coloca em cada presente, em cada gesto e em cada detalhe.

Você é diferente porque me escuta, tenta me entender, acredita em mim e me faz sentir amado. E quero que saiba que não precisa ser perfeita nem fazer algo extraordinário pra merecer meu amor. Quero estar contigo nos dias bons e nos difíceis, construir uma vida tranquila ao teu lado e continuar descobrindo novos motivos pra me apaixonar por você. É por isso que essa constelação significa tanto pra mim: cada estrela representa uma lembrança, uma descoberta ou um pedacinho da nossa história. Separadas, são apenas pontos; juntas, formam algo que só existe porque nós vivemos tudo isso. Meu amor, ainda temos tantas estrelas pra acrescentar, tantas memórias pra criar e tanta vida pra compartilhar. E, quando olho pra esse céu, não vejo apenas tudo o que aconteceu até aqui. Eu vejo tudo o que ainda podemos viver. ❤️`,
  CARTA_FINAL: `Minha vida, tem uma coisa que eu queria muito que você entendesse: você não faz ideia do quanto é importante pra mim. Às vezes, acho difícil explicar tudo o que sinto, porque parece que nenhuma palavra consegue colocar pra fora tudo o que existe aqui dentro. Mas espero que, de alguma forma, você consiga sentir isso em cada abraço, em cada beijo e em cada vez que eu olho pra você. Quero que você nunca precise duvidar do espaço que ocupa na minha vida, porque você não é só alguém que eu amo, é alguém com quem eu quero compartilhar a vida.

Eu sei que a gente ainda tem muito pra aprender, que nem todos os dias vão ser fáceis e que nós dois ainda vamos mudar muito com o tempo. Mas não quero conhecer apenas a versão de você que existe hoje. Quero conhecer a mulher que você vai se tornar, acompanhar teus sonhos, ouvir sobre tuas conquistas, te apoiar nos dias difíceis e estar presente nas pequenas coisas que talvez ninguém mais perceba. Quero que você tenha liberdade pra ser quem é comigo, sem medo de mostrar suas inseguranças ou de não estar bem. Você não precisa carregar tudo sozinha, pituchinha. Quero ser alguém com quem você sempre possa contar.

E, se tem algo que eu desejo pra nós, é que, mesmo depois de muito tempo, a gente continue escolhendo um ao outro. Que nunca percamos a vontade de conversar, demonstrar carinho, fazer pequenas surpresas ou rir juntos por motivos que só nós entendemos. Quero olhar pra você daqui a muitos anos e ainda sentir aquela felicidade de ter você perto de mim. Não sei exatamente como será nosso caminho, mas sei que quero descobrir cada pedacinho dele contigo. Afinal, há seis meses eu nem imaginava que aquela menina da Nerdest se tornaria alguém tão essencial pra mim. E hoje, se me perguntassem o que eu mais quero pro meu futuro, a resposta teria você em cada parte dele. ❤️`,
  FRASE_FINAL: "Se eu pudesse voltar naquele dia, procuraria você de novo.✨"
};

const GRUPOS = {
  1: "Como tudo começou",
  2: "Pequenas coisas que amo em você",
  3: "Nossos primeiros momentos",
  4: "Mesmo nos dias difíceis"
};

/* Cada estrela = uma carta. Para ADICIONAR ou REMOVER estrelas, basta
   copiar ou apagar uma linha. x e y vão de 0 a 1 (posição no céu).
   O identificador (id) é só o nome do campo mostrado no modo edição. */
const ESTRELAS = [
  { id: "COMO_TUDO_COMECOU",   grupo: 1, x: .14, y: .62, titulo: "O nosso primeiro capítulo 🪐", texto: "Tudo começou no dia 27 de abril de 2026, às 18:14. Nunca vou esquecer essa data, porque foi quando começou uma das partes mais bonitas da minha vida. Naquele momento, eu nem imaginava que chegaríamos até aqui, vivendo tanta coisa juntos e construindo uma história tão nossa. ❤️" },

  { id: "PEQUENA_COISA_1",     grupo: 2, x: .33, y: .24, titulo: "Sua risada ❤️", texto: "Eu amo sua risada, minha pitucha. Ver você rindo daquele seu jeitinho é uma das coisas que mais me fazem perceber o quanto sou feliz contigo." },
  { id: "PEQUENA_COISA_2",     grupo: 2, x: .45, y: .44, titulo: "Seus presentes 🎁", texto: "Amo cada presente que você prepara pra mim, porque sei que, por trás de cada um, tem um pouquinho do tempo, do carinho e do amor que você sente por mim." },
  { id: "PEQUENA_COISA_3",     grupo: 2, x: .29, y: .50, titulo: "Nossas besteiras 🎱", texto: "A mizera da sinuca, as um millhão de derrotas no UNO. Amo que a gente tenha tantas lembranças bobas que, mesmo depois de muito tempo, ainda vão me fazer sorrir." },

  { id: "PRIMEIRO_MOMENTO_1",  grupo: 3, x: .62, y: .28, titulo: "Nosso cineminha 🎬", texto: "Sinto saudades dos nossos cineminhas de sábado. Eram momentos tão simples, mas que eu adorava viver contigo e que queria muito repetir." },
  { id: "PRIMEIRO_MOMENTO_2",  grupo: 3, x: .73, y: .54, titulo: "Comer contigo 🍣", texto: "Amo que até escolher alguma coisa pra comer pode virar um momento nosso. Quero conhecer lugares novos contigo e comidas tambiem, sempre com você ao meu lado." },
  { id: "PRIMEIRO_MOMENTO_3",  grupo: 3, x: .58, y: .70, titulo: "Flores 🌷", texto: "Sei o quanto você ama flores, e acho tão bonito isso em você. Não consigo passar por uma sem lembrar de você" },

  { id: "NOSSO_APOIO",         grupo: 4, x: .88, y: .36, titulo: "Seu porto seguro ❤️", texto: "Quero que você saiba que não precisa enfrentar tudo sozinha, minha vida. Quero estar contigo nos dias difíceis também, te ouvir e te lembrar que você sempre pode contar comigo." }
];

/* Rótulos da interface (não são mensagens românticas) */
const UI = {
  iniciar: "Começar", fechar: "Fechar", abrir: "Abrir lembrança",
  progresso: "estrelas descobertas", constelacao: "Ver nossa constelação",
  continuar: "Continuar", voltar: "Voltar ao céu", explorar: "Voltar a explorar o céu",
  musica: "Música"
};
/* ===================== FIM DA ÁREA DE PERSONALIZAÇÃO ===================== */


/* ---------- utilitários ---------- */
const $ = s => document.querySelector(s);
const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
const dormir = ms => new Promise(r => setTimeout(r, reduz ? 0 : ms));
const limitar = (v, a, b) => Math.min(b, Math.max(a, v));

function preencher(el, valor, id) {
  const ok = typeof valor === "string" && valor.trim() !== "";
  el.textContent = ok ? valor : (CONFIG.MODO_EDICAO ? "⟦ " + id + " — escreva aqui ⟧" : "");
  el.classList.toggle("vazio", !ok);
  el.hidden = el.textContent === "";
}

/* ---------- textos fixos ---------- */
document.title = CONFIG.TITULO_SITE;
$("#titulo-site").textContent = CONFIG.TITULO_SITE;
preencher($("#texto-abertura"), TEXTOS.TEXTO_ABERTURA, "TEXTO_ABERTURA");
$("#btn-iniciar").textContent = UI.iniciar;
$("#btn-constelacao").textContent = UI.constelacao;
$("#carta-fechar").textContent = UI.fechar;
$("#const-continuar").textContent = UI.continuar;
$("#const-voltar").textContent = UI.voltar;
$("#final-voltar").textContent = UI.explorar;

/* ---------- céu arrastável ---------- */
const ceu = $("#ceu"), mundo = $("#mundo"), linhas = $("#linhas");
let W = 0, H = 0, pan = { x: 0, y: 0 }, drag = null, moveu = false;
const visitadas = [];
let pendente = null, ultimoFoco = null;

const limites = () => ({ minX: Math.min(0, innerWidth - W), minY: Math.min(0, innerHeight - H) });
const resistir = (v, min, max) => v > max ? max + (v - max) * .25 : v < min ? min + (v - min) * .25 : v;

function aplicar(x, y, suave) {
  pan.x = x; pan.y = y;
  mundo.style.transition = suave ? "transform .6s cubic-bezier(.2,.8,.2,1)" : "none";
  mundo.style.transform = "translate3d(" + x + "px," + y + "px,0)";
}
function assentar(suave) {
  const l = limites();
  aplicar(limitar(pan.x, l.minX, 0), limitar(pan.y, l.minY, 0), suave);
}

ESTRELAS.forEach((e, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "estrela";
  b.style.setProperty("--dur", (2.4 + Math.random() * 2.6).toFixed(1) + "s");
  b.style.setProperty("--atraso", (-Math.random() * 4).toFixed(1) + "s");
  b.setAttribute("aria-label", UI.abrir + ": " + (e.titulo || "estrela " + (i + 1)));
  b.addEventListener("click", () => { if (moveu) { moveu = false; return; } abrir(e); });
  b.addEventListener("focus", () => {
    if (b.matches(":focus-visible")) {
      const l = limites();
      aplicar(limitar(innerWidth / 2 - e.x * W, l.minX, 0), limitar(innerHeight / 2 - e.y * H, l.minY, 0), true);
    }
  });
  mundo.append(b);
  e.el = b;
});

function medir(centralizar) {
  W = Math.max(innerWidth * 1.9, 1300);
  H = Math.max(innerHeight * 1.5, 820);
  mundo.style.width = W + "px"; mundo.style.height = H + "px";
  linhas.setAttribute("viewBox", "0 0 " + W + " " + H);
  ESTRELAS.forEach(e => { e.el.style.left = e.x * W + "px"; e.el.style.top = e.y * H + "px"; });
  if (centralizar) aplicar((innerWidth - W) / 2, (innerHeight - H) / 2, false);
  else assentar(false);
  linhas.innerHTML = "";
  for (let i = 1; i < visitadas.length; i++) addLinha(visitadas[i - 1], visitadas[i], false);
}

function addLinha(a, b, animar) {
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  p.setAttribute("d", "M" + a.x * W + " " + a.y * H + "L" + b.x * W + " " + b.y * H);
  p.setAttribute("pathLength", "1");
  p.setAttribute("class", "linha " + (animar && !reduz ? "anima" : "pronta"));
  linhas.append(p);
}

/* arrastar com mouse ou toque */
ceu.addEventListener("pointerdown", e => {
  if (e.target.closest("#hud")) return;
  drag = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
  moveu = false;
});
addEventListener("pointermove", e => {
  if (!drag) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  if (!moveu && Math.hypot(dx, dy) > 6) { moveu = true; ceu.classList.add("arrastando"); }
  if (!moveu) return;
  const l = limites();
  aplicar(resistir(drag.px + dx, l.minX, 0), resistir(drag.py + dy, l.minY, 0), false);
});
function soltar() {
  if (!drag) return;
  drag = null; ceu.classList.remove("arrastando");
  assentar(true);
}
addEventListener("pointerup", soltar);
addEventListener("pointercancel", soltar);

/* ---------- cartas ---------- */
const carta = $("#carta");
function atualizar() {
  $("#progresso").textContent = visitadas.length + " de " + ESTRELAS.length + " " + UI.progresso;
}
function abrir(e) {
  ultimoFoco = document.activeElement;
  $("#carta-grupo").textContent = GRUPOS[e.grupo] || "";
  preencher($("#carta-titulo"), e.titulo, "TITULO_" + e.id);
  preencher($("#carta-texto"), e.texto, "TEXTO_" + e.id);
  if (!visitadas.includes(e)) {
    visitadas.push(e); pendente = e;
    e.el.classList.add("visitada");
    atualizar();
  }
  carta.classList.add("aberta");
  carta.setAttribute("aria-hidden", "false");
  $("#carta-fechar").focus({ preventScroll: true });
}
function fecharCarta() {
  if (!carta.classList.contains("aberta")) return;
  carta.classList.remove("aberta");
  carta.setAttribute("aria-hidden", "true");
  if (pendente && visitadas.length > 1) {
    const ant = visitadas[visitadas.length - 2], atual = pendente;
    setTimeout(() => addLinha(ant, atual, true), 350);
  }
  pendente = null;
  if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus({ preventScroll: true });
}
$("#carta-fechar").addEventListener("click", fecharCarta);
carta.addEventListener("click", e => { if (e.target === carta) fecharCarta(); });

/* ---------- fundo: estrelas, partículas, profundidade ---------- */
const cv = $("#fundo"), cx = cv.getContext("2d");
let cw = 0, ch = 0, dpr = 1, fundo = [], particulas = [];
let vel = 1, velAlvo = 1, intro = reduz ? 1 : 0, ultimo = 0;

function criarFundo() {
  dpr = Math.min(devicePixelRatio || 1, 2);
  cw = innerWidth; ch = innerHeight;
  cv.width = cw * dpr; cv.height = ch * dpr;
  cx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const n = Math.min(260, Math.round(cw * ch / 8000));
  fundo = Array.from({ length: n }, (_, i) => ({
    x: Math.random() * cw, y: Math.random() * ch, r: .3 + Math.random() * 1.2,
    f: Math.random() * 6.28, v: .5 + Math.random() * 1.6, z: .1 + Math.random() * .7,
    cor: Math.random() < .25 ? "242,200,121" : "246,241,231", ap: i / n
  }));
  particulas = Array.from({ length: Math.min(55, Math.round(cw / 14)) }, () => ({
    x: Math.random() * cw, y: Math.random() * ch, r: .6 + Math.random() * 1.5,
    vx: (Math.random() - .5) * .15, vy: -.04 - Math.random() * .16, f: Math.random() * 6.28
  }));
}

function quadro(t) {
  const dt = Math.min(50, t - ultimo || 16); ultimo = t;
  intro = Math.min(1, intro + dt / 7000);
  vel += (velAlvo - vel) * .015;
  cx.clearRect(0, 0, cw, ch);
  for (const s of fundo) {
    const a = limitar((intro - s.ap * .85) * 6, 0, 1);
    if (!a) continue;
    const tw = reduz ? .8 : .55 + .45 * Math.sin(t / 1000 * s.v * (.4 + vel * .6) + s.f);
    const x = (((s.x + pan.x * s.z * .25) % cw) + cw) % cw;
    const y = (((s.y + pan.y * s.z * .25) % ch) + ch) % ch;
    cx.fillStyle = "rgba(" + s.cor + "," + (tw * a).toFixed(3) + ")";
    cx.beginPath(); cx.arc(x, y, s.r, 0, 6.283); cx.fill();
    if (s.r > 1.1) { cx.fillStyle = "rgba(" + s.cor + "," + (tw * a * .15).toFixed(3) + ")"; cx.beginPath(); cx.arc(x, y, s.r * 3.5, 0, 6.283); cx.fill(); }
  }
  for (const p of particulas) {
    if (!reduz) {
      p.x += p.vx * vel * dt / 16; p.y += p.vy * vel * dt / 16;
      if (p.y < -5) p.y = ch + 5; if (p.x < -5) p.x = cw + 5; if (p.x > cw + 5) p.x = -5;
    }
    const a = limitar((intro - .3) * 2, 0, 1) * (.25 + .25 * Math.sin(t / 1500 + p.f));
    cx.fillStyle = "rgba(242,200,121," + a.toFixed(3) + ")";
    cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.283); cx.fill();
  }
  requestAnimationFrame(quadro);
}

/* ---------- constelação e final ---------- */
const sec = $("#const"), svg = $("#const-svg");
let rodada = 0;
const blocoC = $("#const-bloco"), blocoF = $("#final-bloco");

async function revelar() {
  const id = ++rodada, vivo = () => id === rodada;
  fecharCarta();
  preencher($("#const-titulo"), TEXTOS.TITULO_CONSTELACAO, "TITULO_CONSTELACAO");
  preencher($("#const-texto"), TEXTOS.TEXTO_SIGNIFICADO_CONSTELACAO, "TEXTO_SIGNIFICADO_CONSTELACAO");
  svg.classList.remove("acesa", "luz");
  svg.querySelectorAll(".no,.seg").forEach(n => n.classList.remove("on"));
  [blocoC, blocoF].forEach(b => b.classList.remove("vis"));
  sec.classList.remove("final");
  document.body.classList.add("const-aberta");
  sec.classList.add("ativa");
  velAlvo = .6;
  await dormir(1500);
  const nos = [...svg.querySelectorAll(".no")], segs = [...svg.querySelectorAll(".seg")];
  for (let i = 0; i < nos.length; i++) {
    if (!vivo()) return;
    nos[i].classList.add("on"); await dormir(550);
    if (segs[i]) { segs[i].classList.add("on"); await dormir(1100); }
  }
  if (!vivo()) return;
  svg.classList.add("acesa", "luz");
  await dormir(2800);
  if (!vivo()) return;
  blocoC.classList.add("vis");
  $("#const-continuar").focus({ preventScroll: true });
}

function sairConst() {
  rodada++;
  sec.classList.remove("ativa");
  document.body.classList.remove("const-aberta");
  velAlvo = .5;
}

$("#btn-constelacao").addEventListener("click", revelar);
$("#const-voltar").addEventListener("click", sairConst);
$("#final-voltar").addEventListener("click", sairConst);
$("#const-continuar").addEventListener("click", () => {
  preencher($("#carta-final"), TEXTOS.CARTA_FINAL, "CARTA_FINAL");
  preencher($("#frase-final"), TEXTOS.FRASE_FINAL, "FRASE_FINAL");
  blocoC.classList.remove("vis");
  sec.classList.add("final");
  document.body.classList.add("calmo");
  velAlvo = .3;
  blocoF.classList.add("vis");
  $("#final-voltar").focus({ preventScroll: true });
  sec.scrollTop = 0;
});

/* ---------- início, teclado, música ---------- */
$("#btn-iniciar").addEventListener("click", () => {
  $("#abertura").classList.remove("ativa");
  ceu.classList.add("ativa");
});
addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (carta.classList.contains("aberta")) fecharCarta();
  else if (sec.classList.contains("ativa")) sairConst();
});

if (CONFIG.MUSICA_ARQUIVO) {
  const audio = new Audio(CONFIG.MUSICA_ARQUIVO);
  audio.loop = true;
  const bm = $("#btn-musica");
  const rotulo = () => { bm.textContent = UI.musica + ": " + (audio.paused ? "desligada" : "ligada"); bm.setAttribute("aria-pressed", String(!audio.paused)); };
  bm.hidden = false; rotulo();
  bm.addEventListener("click", () => { (audio.paused ? audio.play().catch(() => {}) : audio.pause()); setTimeout(rotulo, 100); });
}

/* ---------- arranque ---------- */
atualizar();
criarFundo();
medir(true);
addEventListener("resize", () => { criarFundo(); medir(false); });
requestAnimationFrame(quadro);
