
const btn = document.querySelectorAll('.btn')

btn.forEach(btn => btn.addEventListener('click', filtro))

function filtro(){
    const elementoBTN = document.getElementById(this.id)
    const categoria = elementoBTN.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorQuantidade() : filtrarPorCategoria(categoria)
        console.table(livrosFiltrados) 
        showBooks(livrosFiltrados)

        if (categoria == 'disponivel'){
            const valorDeTodosOsLivros = calcularTotalDisponiveis(livrosFiltrados)
            console.log(valorDeTodosOsLivros)
            mostrarValorTotal(valorDeTodosOsLivros)
        }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorQuantidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function mostrarValorTotal(total){
    valorTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${total.toFixed(2)}</span></p>
    </div>
    `
}