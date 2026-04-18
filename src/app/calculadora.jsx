"use client"
import { useState } from "react"
export default function Calculadora(){ 

        const [valorAtual,setValorAtual] = useState("");
        const [valorAnterior,setValorAnterior] = useState(null);
        const [operador,setOperador] = useState(null);
  
       
        const operadores = ["+","-","/","x"]
      
        function startValue(value){
             if(value === "="){
                return calcular()
             }
             else if(value === "RESET"){
                setValorAtual("");
                setValorAnterior(null)
                setOperador(null)
             }
             else if(value === "DEL"){
                setValorAtual((prev) => prev.length > 0 ? prev.slice(0, -1) : "");
             }
             else if(operadores.includes(value)){
               addOperador(value)
             }

             
             else{
                addNumero(value)
                console.log(value)
             }
        }
         
        function addNumero(numero){
            setValorAtual((prev) => prev + numero)
        }
        function addOperador(op){
            if(valorAtual === "") return;
            
            setValorAnterior(parseFloat(valorAtual));
            setOperador(op);
            setValorAtual("");
        }
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
             setValorAnterior(null);
             setOperador(null)
        }
      const valores = ["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","x","RESET","="]
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
    return(
        <main className="flex flex-col gap-3 w-100 h-130 m-auto shadow-md shadow-gray-500 p-4 rounded-md">
            <input className="border border-gray-500 text-2xl bg-gray-900 text-gray-300 font-semibold focus:outline-none p-5 rounded-md" type="text" placeholder="0" value={valorAtual}/>
            <section className="grid grid-cols-4 gap-1 h-full mt-5">
                {valores.map((e)=>(
                    <button onClick={()=> startValue(e)} className={`text-3xl  rounded-sm ${colors(e)}`}>{e}</button>
                ))}
            </section>
        </main>
    )
}