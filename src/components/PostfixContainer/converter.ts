// Created an empty array
var stackarr: string[] = [];

// Variable topp initialized with -1
var topp = -1;

// Push function for pushing
// elements inside stack
function push(e:any) {
	topp++;
	stackarr[topp] = e;
}

// Pop function for returning top element
function pop() {
	if (topp == -1)
		return 0;
	else {
		var popped_ele = stackarr[topp];
		topp--;
		return popped_ele;
	}
}

// Function to check whether the passed
// character is operator or not
function operator(op:string) {
	if (op == '+' || op == '*' ||
      op == '.' || op == '(' || 
      op == ')' ){
		return true;
	}
	else
		return false;
}

// Function to return the precedency of operator
function precedency(char:string) {
  if (char == '+') {
		return 1;
	}
	else if (char == '.') {
		return 2;
	}
	else if (char == '*') {
		return 3;
	}
	else
		return 0;
}

function stringify(str:string){
  var treatedString:string[] = []
  var temp=0
  for(var i = 0; i < str.length; i++){
    if(str[i]== '\\'){
      treatedString[temp] = str[i]+str[i+1];
      temp++
      i += 1;
      continue
    }
    treatedString[temp] = str[i];
    temp++
  }
  return treatedString
}


// Function to convert Infix to Postfix
export function InfixtoPostfix(expression:string) {

	// Postfix array created
	var postfix = [];
	var temp = 0;
  var ret:string[]= []
	push('@');
  var previous = '';
  var dot = '.';
  ret = stringify(expression)

	  //Iterate on infix string
    for (var i = 0; i < ret.length; i++) {
      var element = ret[i];
      // Checking whether operator or not
      if (operator(element)) {
        if (element == ')') {
          while (stackarr[topp] != "(") {
          postfix[temp++] = pop();
				}
				pop();
			}
      
			// Checking whether element is ( or not
			else if (element == '(') {
        push(element);
			}
      
			else if (precedency(element) > precedency(stackarr[topp])) {
        push(element);
			}
			else {
        while (precedency(element) <=
        precedency(stackarr[topp]) && topp > -1) {
          postfix[temp++] = pop();
				}
				push(element);
			}
		}
		else {
      if (i>0){
        previous = expression[i-1];
        if(!operator(previous)){
          push(dot);
        }
      }
      postfix[temp++] = element;
		}
	}
  
	// Adding character until stackarr[topp] is @
	while (stackarr[topp] != '@') {
    postfix[temp++] = pop();
	}

	// String to store postfix expression
	var st = "";
	for (var i = 0; i < postfix.length  ; i++)
    st += postfix[i];

  console.log('here', st);
	return {st};
}