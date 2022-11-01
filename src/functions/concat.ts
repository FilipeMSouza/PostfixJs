import {State} from '../utils/state'
import {Automaton} from '../utils/automaton'

export function concat(A: Automaton, B: Automaton){
  var qtd_A = A.state.length;
  var qtd_B = B.state.length;

  var NewInitialState = new State(0, true, false);
  var NewFinalState = new State(qtd_A + qtd_B + 1, false, true);

  let automaton = new Automaton(NewInitialState, [NewFinalState]);

  A.alphabet.map((letter)=>{
    automaton.setAlphabet(letter);
  })
  B.alphabet.map((letter)=>{
    automaton.setAlphabet(letter);
  })

  automaton.setAlphabet('&');

  automaton.createState(NewInitialState);
  A.transition.map((transition)=>{
    var symbol = transition.symbol;
    var indexFrom = transition.fromState.index;
    var indexTo = transition.toState.index;

    var from_State!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == indexFrom){
        from_State = automaton.state[i+1];
      }
    }

    var to_State!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == indexTo){
        to_State = automaton.state[i+1];
      }
    }
    automaton.createTransition(from_State, to_State, symbol);
  })

  B.transition.map((transition)=>{
    var symbol = transition.symbol;
    var indexFrom = transition.fromState.index;
    var indexTo = transition.toState.index;

    var from_State!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == indexFrom + qtd_A){
        from_State = automaton.state[i+1];
      }
    }

    var to_State!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == indexTo + qtd_B){
        to_State = automaton.state[i+1];
      }
    }
    automaton.createTransition(from_State, to_State, symbol);
  })


  var oldFinalStateA!: State;
  for(var i = 0; i < automaton.state.length; i++){
    if(automaton.state[i].index == qtd_A - 1){
      oldFinalStateA = automaton.state[i+1];
    }
  }

  var oldFinalStateB!: State;
  for(var i = 0; i < automaton.state.length; i++){
    if(automaton.state[i].index == qtd_A){
      oldFinalStateB = automaton.state[i+1];
    }
  }

  automaton.createTransition(oldFinalStateA, oldFinalStateB, '&')
  
  return automaton
}
