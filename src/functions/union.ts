import {State} from '../utils/state'
import {Automaton} from '../utils/automaton'

export function union(A: Automaton, B: Automaton){
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

  for(var i = 0; i < qtd_A + qtd_B; i++){
    automaton.createState(new State(i, false, false));
  }

  automaton.createState(NewFinalState);

  A.transition.map((t)=>{
    var symbol = t.symbol;
    var indexFrom = t.fromState.index;
    var indexTo = t.toState.index;

    var from_State!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == indexFrom + 1){
        from_State = automaton.state[i+1];
      }
    }

    var to_State!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == indexTo + 1){
        to_State = automaton.state[i+1];
      }
    }
    automaton.createTransition(from_State, to_State, symbol);
  })

  B.transition.map((t)=>{
    var symbol = t.symbol;
    var indexFrom = t.fromState.index;
    var indexTo = t.toState.index;

    var from_State!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == indexFrom + qtd_A + 1){
        from_State = automaton.state[i+1];
      }
    }

    var to_State!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == indexTo + qtd_A + 1){
        to_State = automaton.state[i+1];
      }
    }
    automaton.createTransition(from_State, to_State, symbol);
  })

  var initial_A!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == 1){
        initial_A = automaton.state[i+1];
      }
    }

    var initial_B!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == 1 + qtd_A){
        initial_B = automaton.state[i+1];
      }
    }
  var final_A!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == qtd_A){
        initial_A = automaton.state[i+1];
      }
    }

    var final_B!: State;
    for(var i = 0; i < automaton.state.length; i++){
      if(automaton.state[i].index == qtd_B + qtd_A){
        initial_B = automaton.state[i+1];
      }
    }

    automaton.createTransition(NewInitialState, initial_A, 'ε');
    automaton.createTransition(NewInitialState, initial_B, 'ε');
    automaton.createTransition(final_A, NewFinalState, 'ε');
    automaton.createTransition(final_B, NewFinalState, 'ε');


}