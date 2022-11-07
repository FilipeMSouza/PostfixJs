import { base } from '../../functions/base';
import { concat } from '../../functions/concat';
import { union } from '../../functions/union';
import { FKleene } from '../../functions/fKleene';

export function AutomatonAlgorithm(expression: string[]) {
  let automatonList: any[] = []
  var element = ''

  for (let i = 0; i < expression.length; i++) {
    element = expression[i]
    if (element == '*') {
      var a = automatonList[0];
      FKleene(a);
    }

    else if (element == '+') {
      var a = automatonList[0];
      var b = automatonList[1];

      var resUnion = union(a, b);

      automatonList.pop();
      automatonList.pop();
      automatonList.push(resUnion);
    }

    else if (element == '.') {
      var a = automatonList[0];
      var b = automatonList[1];

      var resConcat = concat(a, b);

      automatonList.pop();
      automatonList.pop();
      automatonList.push(resConcat);
    }

    else {
      automatonList.push(base(element));
    }
  }
  return automatonList;
};