import { darken } from 'polished'
import styled from 'styled-components'

export const Main = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  margin-top: 250px;
`

export const TextField = styled.input`
  width: 350px;
  background: ${darken(0.7, '#fff')};
  color: var(--text);
  margin-bottom:2rem;
  margin-left: 0.75rem;
  height: 2.5rem;
  border-radius: .4rem;
  border: .09rem solid var(--background);
  box-shadow: .1rem .2rem .2rem ${darken(0.8, '#fff')};
  text-align: center;
`

export const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Submit = styled.button`
  width: 50%;
  height: 2.5rem;
  border-radius: .4rem;
  border: none;
  color: var(--text);
  background: var(--pink-200);
  box-shadow: .1rem .2rem .2rem var(--pink-900);
`