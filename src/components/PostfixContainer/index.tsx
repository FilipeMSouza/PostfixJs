import { Main } from "./styles";
import { InfixtoPostfix } from "./converter";

interface PosixContainerProps{ 
  expression: string;
}

export default function PosfixContainer({expression}:PosixContainerProps){

  var teste = InfixtoPostfix(expression)
  console.log(teste)
  return(
    <Main>
      <p>
        Posfix form: {teste.st}
      </p>
    </Main>
  )
}