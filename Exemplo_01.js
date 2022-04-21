//| Exemplo 01 | Descrição |
//| --- | --- |
//| `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console conforme instruções:
//a) números de 1 a 50
//b) quando chegar no número 25 interrompa a instrução e pare o loop
//c) quando chegar no número 10 pule a instrução|

//a)
for(let i = 1; i<=50; i++) {   
 console.log(i)
}

//b)
for(let contador = 1; contador<=50; contador++) {   

  if(contador == 10){
    continue
    }   
  console.log(contador)
}

//c)
for(let interador = 1; interador<=50; interador++) {   

    if(interador >= 25) {
      break
    }  
  console.log(interador)
}