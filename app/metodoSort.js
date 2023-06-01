let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPreco.addEventListener('click', filtroPreco)

function filtroPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    showBooks(livrosOrdenados);
}