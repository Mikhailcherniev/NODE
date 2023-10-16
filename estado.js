let estado = function (a){
    
    if (a =="sp" || a =="rj"){
        return "Acesso concedido"
    } else{
        return "Acesso negado"
    }
}

module.export = estado