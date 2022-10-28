import { useState } from "react";
import { Main, Result } from "../styles/home";
import InputContent from "../components/InputField";
import InfoContainer from "../components/infoContainer";
import InfixContainer from "../components/InfixContainer";
import PosfixContainer from "../components/PostfixContainer";
import { States } from "../components/states/idex";


export default function Home(){
  const [expression, setExpression] = useState<string>('');
  return (
    <>
      <Main>
        <InputContent expression={expression} setExpression={setExpression}/>
        <Result>
          <InfixContainer expression={expression}/>
          <PosfixContainer expression={expression}/>
        </Result>
        <States/>
        <InfoContainer/>
      </Main>
    </>
  )
}