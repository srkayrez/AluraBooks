let livros = []
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
get()


async function get(){
    const res = await fetch(endPointAPI);
    livros = await res.json();
    let desconto = aplicarDesconto(livros);
    showBooks(livros)
}

