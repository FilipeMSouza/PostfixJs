import { State } from "./state";
import { Transition } from "./transition";

export class Automaton {
  constructor(
    public initialState: State,
    public finalState: State[]
  ) {
    this.initialState = initialState;
    this.finalState = finalState;

  }
  public alphabet: string[] = [];
  public state:State[] = [];
  public transition: Transition[] = []




  public setAlphabet(str: string) {
    if (!this.alphabet.includes(str))
      this.alphabet.push(str);
  }

  public createState(state: State) {
    this.state.push(state);
  }

  public createTransition(fromState:State, toState:State, symbol:string){
    this.transition.push(new Transition(symbol, fromState, toState));
  }

  public Result(){
    var result: string[] = []

    this.transition.map((tr: Transition)=>{
      result.push(`(q${tr.fromState.index}, ${tr.symbol}) => [q${tr.toState.index}]`)
    })
    return result
  }
}