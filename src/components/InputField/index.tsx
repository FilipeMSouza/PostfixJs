import { ChangeEvent } from "react";
import { Form, Main, Submit, TextField } from "./styles";

interface InputContentProps{
  expression: string
  setExpression: (value: string) => void;
}

export default function InputContent({expression, setExpression}:InputContentProps){
  
  var teste: string;
  const handleInput = ( info:string ) => {
    setExpression(info);
  };
  return(
    <Main>
      <Form>
        <TextField
          placeholder="insert here your expression but between ()"
          onChange={(e)=>{
            teste = e.target.value;
          }}
        />
        <Submit onClick={()=>{
          handleInput(teste)
        }}>
          Submit
        </Submit>
      </Form>
    </Main>
  )
}  