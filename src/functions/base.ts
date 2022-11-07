import {State} from '../utils/state'
import {Automaton} from '../utils/automaton'

export function base(symbol:string){

  var q0 = new State(0, true, false);
  var qf = new State(1, false, true);

  var automaton;
  automaton = new Automaton(q0, [qf]);
  automaton.setAlphabet(symbol);
  automaton.createState(q0);
  automaton.createState(qf);

  automaton.createTransition(q0, qf, symbol);

  return automaton;
}