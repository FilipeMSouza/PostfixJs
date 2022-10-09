import { Main } from "./styles";
import { InfixtoPostfix } from "./converter";

interface PosixContainerProps{ 
  expression: string;
  alphabetHandler: string[];
}

export default function PosfixContainer({expression, alphabetHandler}:PosixContainerProps){

  var postfixResult = InfixtoPostfix(expression)
  for (var i = 0; i < postfixResult.alphabet.length; i++){
    alphabetHandler[i] = postfixResult.alphabet[i]
  }
  return(
    <Main>
      <p>
        Posfix form: {postfixResult.st}
      </p>
    </Main>
  )
}