import {State} from '../utils/state'
import {Automaton} from '../utils/automaton'

export function FKleene(automaton: Automaton){

  automaton.state.map((state) => {
    state.index+=1
  })

  var newInital = new State(0, true, false);
  var newFinal = new State(automaton.state.length+1, false, true);

  automaton.createState(newInital);
  automaton.createState(newFinal);
  automaton.setAlphabet('&');

  var oldInitial = automaton.initialState;
  var oldFinal = automaton.finalState[0];

  automaton.createTransition(newInital, oldInitial, '&');
  automaton.createTransition(newInital, newFinal, '&');
  automaton.createTransition(oldFinal, oldInitial, '&');
  automaton.createTransition(oldFinal, newFinal, '&');
  console.log(automaton)
  
  return automaton;
}

