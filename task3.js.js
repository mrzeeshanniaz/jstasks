const isValid = (strExpression) => {

    const charArray = strExpression.replace(/\s/g, '').split('');
    const bracketsArray = charArray.filter(char => char === '(' || char === ')' || char === '{' || char === '}' || char === '[' || char === ']');
    const brktStr = bracketsArray.join('');
    
  const stack = [];
  
  for (let i = 0; i < brktStr.length; i += 1) {
    const top = stack[stack.length - 1];
    if (brktStr[i] === '(' || brktStr[i] === '{' || brktStr[i] === '[') {
      stack.push(brktStr[i]);
    } else if (brktStr[i] === ')' && top === '(' && stack.length !== 0) {
      stack.pop();
    } else if (brktStr[i] === ']' && top === '[' && stack.length !== 0) {
      stack.pop();
    } else if (brktStr[i] === '}' && top === '{' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }
  
  return stack.length === 0;
};


isValid("()()")