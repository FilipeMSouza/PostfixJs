import { Main } from "./styles";
import { InfixtoPostfix } from "./converter";

interface PosixContainerProps{ 
  expression: string;
}

export default function PosfixContainer({expression}:PosixContainerProps){

  return(
    <Main>
      <p>
        Posfix form: {InfixtoPostfix(expression)}
      </p>
    </Main>
  )
}