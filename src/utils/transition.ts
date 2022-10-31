import { State } from "./state";

export class Transition{

  constructor(
    public  symbol: string,
    public  fromState: State,
    public  toState: State
  ){
    this.symbol = symbol;
    this.fromState = fromState;
    this.toState = toState;
  }
  
}