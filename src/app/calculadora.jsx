"use client"
import { useState } from "react"
export default function Calculadora(){ 

        const [valorAtual,setValorAtual] = useState("");
        const [valorAnterior,setValorAnterior] = useState(null);
        const [operador,setOperador] = useState(null);
        const [calculo, setCalculo]= useState("")
  
       
        const operadores = ["+","-","/","x"]
      

        // função para cada botao
        function startValue(value){  
            //Caso o botao for = vai fazer o cálculo
             if(value === "="){
                return calcular()
             }
             // Ou se o RESET vai apagar tudo
             else if(value === "RESET"){
                setValorAtual("");
                setValorAnterior(null)
                setOperador(null)
                setCalculo("")
             }
             // Ou se o botao for o . vai verificar se o botao foi clicado duas vezes, se nao vai chamar a funçao displayCalc() que verifica e trabalha a logica do botao .
             else if(value === "."){
              if(valorAtual.includes(value)) return;
             displayCalc(value)
             }
             // Ou se o botao clicado for o DEL apaga o ultimo caracter quando clicado
             else if(value === "DEL"){
                setValorAtual((prev) => prev.length > 0 ? prev.slice(0, -1) : "");
                setCalculo((prev) => prev.length > 0 ? prev.slice(0, -1) : "");
             }

             // Ou se o botao clicado for um operador, trabalha a logica dele
             else if(operadores.includes(value)){
                  
              if(calculo.slice(-1) === value ) return;

              if(calculo.slice(-1) === "."){
              setCalculo((prev)=>prev.slice(0,-1))
            }

           
              addOperador(value);
              displayCalc(value)
              
             }

              // Caso contrario o botao vai ser um numero
             else{
                addNumero(value)
                displayCalc(value)
                
             }
           
        }
          // Funçao que trabalha a logica do calculo que esta exibindo na tela

        function displayCalc(value){
 
          const ultimoCaracter = calculo.slice(-1);
          const ehOperadorAtual = operadores.includes(value);
          const ultimoEhOperador = operadores.includes(ultimoCaracter);
    
          if(calculo === "" && ehOperadorAtual) return;

          if(ehOperadorAtual && ultimoEhOperador){
     
            setCalculo((prev)=>prev.slice(0,-1) + value);
            console.log(operador)
          
          }
          else if(value === "."){
            
            if(operadores.includes(ultimoCaracter)){
              console.log("Ultimo operador substituido pelo .")
              setCalculo((prev)=>prev.slice(0,-1) + value)
              setValorAtual(value);
              return;
              
            }
            else{
              setCalculo((prev)=>prev + value);
              setValorAtual((prev)=>prev + value)
            }
            
          }
         
          else{
            setCalculo((prev)=>prev + value)
          }
        
        }
         
        function addNumero(numero){
            setValorAtual((prev) => prev + numero)
        }


  // Função que trabalha a logica dos operadores
function addOperador(op) {
  
  // Se não existe número digitado, não faz nada
  if (valorAtual === "" && valorAnterior === null) return;

  // Se o usuário digitou outro operador,
  // apenas substitui o operador anterior
  if (valorAtual === "" && valorAnterior !== null) {
    setOperador(op);
    return;
  }

  // Se já existe uma operação pendente,
  // calcula o resultado intermediário
  if (valorAnterior !== null && valorAtual !== "") {
    const atual = parseFloat(valorAtual);
    let resultado;

    switch (operador) {
      case "-":
        resultado = valorAnterior - atual;
        break;

      case "/":
        resultado = atual !== 0
          ? valorAnterior / atual
          : "Erro";
        break;

      case "x":
        resultado = valorAnterior * atual;
        break;

      case "+":
        resultado = valorAnterior + atual;
        break;

      default:
        resultado = atual;
    }

    setValorAnterior(resultado);
    setValorAtual("");
    setOperador(op);
    return;
  }

  // Primeiro operador digitado
  setValorAnterior(parseFloat(valorAtual));
  setOperador(op);
  setValorAtual("");
}
  // função que é chamada quando clica em =

        function calcular(){

          if(valorAnterior === null || valorAtual === "")return;
            const atual = parseFloat(valorAtual)
             let resultado;
             switch(operador){
                case "+":
                  resultado = valorAnterior + atual;
                  break;
                case "-":
                  resultado = valorAnterior - atual;
                  break;
                case "/":
                  resultado = atual !== 0?valorAnterior / atual:"Erro";
                  break;
                case "x":
                  resultado = valorAnterior * atual;
                  break;
             }
             setValorAtual(String(resultado));
             setCalculo(String(resultado));
             setValorAnterior(null);
             setOperador(null)
        }

        //Nomes dos botoes

      const valores = ["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","x","RESET","="]

      //Função que coloca cores especificas para os botoes específico
    function colors(c){
        switch(c){
            case "DEL":
              return "bg-[#3b4664] text-white";
              break;
            case "RESET":
              return "bg-[#3b4664] col-span-2 text-white";
              break;
            case "=":
              return "bg-orange-500 col-span-2 text-white";
              break;
           default: return "bg-gray-300 text-gray-900";
        }
    }

    // Interface/Layout
    return(
        <main className="flex flex-col gap-3 w-100 h-130 m-auto shadow-md shadow-gray-500 p-4 rounded-md">
            <input readOnly className="border text-right border-gray-500 text-2xl bg-gray-900 text-gray-300 font-semibold focus:outline-none p-5 rounded-md" type="text" placeholder="0" value={calculo}/>
            <section className="grid grid-cols-4 gap-1 h-full mt-5">
                {valores.map((e)=>(
                    <button key={e} onClick={()=> startValue(e)} className={`text-3xl  rounded-sm ${colors(e)}`}>{e}</button>
                ))}
            </section>
        </main>
    )
}