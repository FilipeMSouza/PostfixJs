import { useState } from "react";
import { Main, Result } from "../styles/home";
import InputContent from "../components/InputField";
import { InfixtoPostfix } from "../functions/converter";
import InfixContainer from "../components/InfixContainer";
import PosfixContainer from "../components/PostfixContainer";
import { AutomatonResult } from "../components/Automaton/idex";


export default function Home(){
  const [expression, setExpression] = useState<string>('');
  var result = InfixtoPostfix(expression);
  
  return (
    <>
      <Main>
        <InputContent expression={expression} setExpression={setExpression}/>
        <Result>
          <InfixContainer expression={expression}/>
          <PosfixContainer expression={result.st}/>
        </Result>
        {/* <AutomatonResult expression={result.postfix}/> */}
      </Main>
    </>
  )
}