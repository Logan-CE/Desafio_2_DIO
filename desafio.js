function classificarRanking(vitoria, derrota){
       
    let saldoRankeadas = vitoria - derrota
    let nivel = ""
       
       if(saldoRankeadas<=10){nivel = "Ferro"

}
        else if(saldoRankeadas>=11 && saldoRankeadas<= 20){nivel= "Bronze"} 
        else if(saldoRankeadas>=21 && saldoRankeadas<= 50){nivel= "Prata"} 
        else if(saldoRankeadas>=51 && saldoRankeadas<= 80){nivel= "Ouro"} 
        else if(saldoRankeadas>=81 && saldoRankeadas<= 90){nivel= "Diamante"} 
        else if(saldoRankeadas>=91 && saldoRankeadas<= 100){nivel= "Lendario"} 
        else if(saldoRankeadas>=101){nivel= "Imortal"} 

            console.log("O heroi tem saldo de " + saldoRankeadas + " vitorias e está no nivel " + nivel)

}

classificarRanking(75, 35)
 
