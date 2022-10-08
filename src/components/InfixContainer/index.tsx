import { Main } from "./styles";

interface InfixContainerProps{ 
  expression: string;
}

export default function InfixContainer({expression}:InfixContainerProps){
  return(
    <Main>
      <p>
        Infix form: {expression}
      </p>
    </Main>
  )
}