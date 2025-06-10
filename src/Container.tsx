import {useState} from "react"
interface ContainerProps{
nome:string
}
function Container(props:ContainerProps){
const [contador,setContador] = useState(0)
function mudar(){
setContador(20)
console.log(contador)
}
return(
 <>
<h1>{props.nome}</h1>
Valor contador:{contador}
<button onClick={mudar}>Mudar</button>
</>
 )
}
export default Container
