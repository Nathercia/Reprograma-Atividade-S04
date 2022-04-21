//| Exemplo 05 | Descrição |
//| --- | --- |
//| `Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6 


let resultado = 1
let fatorial = 7
let texto = `${fatorial}`

for(i = fatorial ; i >= 1; i--){ 
  
  if(i != 1){
    texto += ` X ${i - 1}`
  }  
  
  resultado *= i
}

console.log(`Fatorial de ${fatorial}!: ${texto} = ${resultado}`)















