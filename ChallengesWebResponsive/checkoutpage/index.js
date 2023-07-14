function handleAdd(event){
    const pai = event.target.parentNode;
    const valorElement = pai.querySelector('span');
    const valorProduct = event.target.parentNode.parentNode.querySelector('div').querySelector('span').textContent
    const valorProductFormatted = Number(valorProduct.replace('$', ''))
    const total = document.getElementById('total')
    let totalFormatted = Number(total.textContent.replace('$', ''))
    let quantidade = valorElement.textContent;
    quantidade++
    totalFormatted  += valorProductFormatted
    valorElement.textContent = quantidade
    total.textContent = '$'+totalFormatted.toFixed(2)
}

function handleRemove(event){
    const pai = event.target.parentNode;
    const valorElement = pai.querySelector('span');
    let quantidade = valorElement.textContent;
    if(quantidade > 1){
        const valorProduct = event.target.parentNode.parentNode.querySelector('div').querySelector('span').textContent
        const valorProductFormatted = Number(valorProduct.replace('$', ''))
        const total = document.getElementById('total')
        let totalFormatted = Number(total.textContent.replace('$', ''))
        quantidade--
        totalFormatted  -= valorProductFormatted
        valorElement.textContent = quantidade
        total.textContent = '$'+totalFormatted.toFixed(2)
    }
}

function Submit(){
    var inputs = document.querySelectorAll(".section_input");
    var invalidos = [];
    for(a=0;a<inputs.length;a++){
        var campito = document.getElementById(inputs[a].id);
        campito.classList.remove("invalido");
    }

    for(i = 0; i < inputs.length;i++){
        if(inputs[i].value == ""){
            invalidos.push(inputs[i].id);
        }
    }

    if (invalidos.length > 0) {
        for(e=0;e<invalidos.length;e++){
            var campo = document.getElementById(invalidos[e]);
            campo.classList.add("invalido");
        }
        swal.fire("Error!", "Nem todos os campos foram preenchidos", "error");
    }else{
        swal.fire("Sucesso", "Todos os campos foram preenchidos", "success");
    }
}
