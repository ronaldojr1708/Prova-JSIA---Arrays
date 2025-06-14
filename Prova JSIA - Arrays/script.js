const listaCompras = [];

const inputAdicionar = document.getElementById("inputAdicionar");
const btnAdicionar = document.getElementById("btnAdicionar");

const inputRemover = document.getElementById("inputRemover");
const btnRemover = document.getElementById("btnRemover");

const inputAtualizarIndice = document.getElementById("inputAtualizarIndice");
const inputAtualizarValor = document.getElementById("inputAtualizarValor");
const btnAtualizar = document.getElementById("btnAtualizar");

const btnExibir = document.getElementById("btnExibir");
const ulListaCompras = document.getElementById("listaCompras");

function atualizarExibicao() {
  ulListaCompras.innerHTML = ""; 

  listaCompras.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index}: ${item}`;
    ulListaCompras.appendChild(li);
  });

  if (listaCompras.length === 0) {
    ulListaCompras.innerHTML = "<li>A lista está vazia.</li>";
  }
}

btnAdicionar.addEventListener("click", () => {
  const item = inputAdicionar.value.trim();

  if (item) {
    listaCompras.push(item);
    alert(`Item "${item}" adicionado!`);
    inputAdicionar.value = "";
    atualizarExibicao();
  } else {
    alert("Digite um item válido para adicionar.");
  }
});

btnRemover.addEventListener("click", () => {
  const indice = Number(inputRemover.value);

  if (
    !isNaN(indice) &&
    indice >= 0 &&
    indice < listaCompras.length
  ) {
    const removido = listaCompras.splice(indice, 1);
    alert(`Item "${removido[0]}" removido!`);
    inputRemover.value = "";
    atualizarExibicao();
  } else {
    alert("Índice inválido para remoção.");
  }
});

btnAtualizar.addEventListener("click", () => {
  const indice = Number(inputAtualizarIndice.value);
  const novoValor = inputAtualizarValor.value.trim();

  if (
    !isNaN(indice) &&
    indice >= 0 &&
    indice < listaCompras.length &&
    novoValor
  ) {
    listaCompras[indice] = novoValor;
    alert(`Item no índice ${indice} atualizado para "${novoValor}"!`);
    inputAtualizarIndice.value = "";
    inputAtualizarValor.value = "";
    atualizarExibicao();
  } else {
    alert("Índice ou novo valor inválidos para atualização.");
  }
});

btnExibir.addEventListener("click", () => {
  atualizarExibicao();
});
