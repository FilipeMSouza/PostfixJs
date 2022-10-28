import { Main } from "./styles";
import { InfixtoPostfix } from "./converter";

interface PosixContainerProps{ 
  expression: string;
}

export default function PosfixContainer({expression}:PosixContainerProps){

  var postfixResult = InfixtoPostfix(expression)
  return(
    <Main>
      <p>
        Posfix form: {postfixResult.st}
      </p>
    </Main>
  )
}