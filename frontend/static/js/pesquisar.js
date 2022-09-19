const search = () =>{
    const searchbox = document.getElementById('barra_pesquisa').value.toUpperCase();
    const lista = document.getElementById('lista_para_busca');
    const listaItens = lista.getElementsByTagName('li');
    const listaItensNomes = lista.getElementsByTagName('p');

    for(var i=0; i<listaItensNomes.length; i++){
        let match = listaItens[i].getElementsByTagName('p')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchbox) > -1){
                listaItens[i].style.display = "";
            } else {
                listaItens[i].style.display = "none";
            }
        }
    }
}