import { Main } from "./styles";


interface PosixContainerProps{ 
  expression: string;
}

export default function PosfixContainer({expression, }:PosixContainerProps){
  return(
    <Main>
      <p>
        Posfix form: {expression}
      </p>
    </Main>
  )
}