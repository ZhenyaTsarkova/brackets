module.exports = function check(str, bracketsConfig) {
   let openStack = [];
   let closeStack = [];
   let equalStack = [];
   bracketsConfig.forEach(el => {
      if (str.includes(el[0]) && !str.includes(el[1])) { k++ }
      if (el[0] === el[1]) {
         if (str.includes(el[0])) {
            let stack = [];
            for (let i = 0; i < str.length; i++) {
               if (str[i] === el[0]) {
                  stack.push(i)
               }
            }
            equalStack.push(stack)
         }
      } else {
         if (str.includes(el[0])) {
            let stack = [];
            for (let i = 0; i < str.length; i++) {
               if (str[i] === el[0]) {
                  stack.push(i)
               }
            }
            openStack.push(stack);
         }
         if (str.includes(el[1])) {
            let stack = [];
            for (let i = 0; i < str.length; i++) {
               if (str[i] === el[1]) {
                  stack.push(i)
               }
            }
            closeStack.push(stack);
         }
      }
   })
   if (equalStack.length > 1) {
      for (let k = 0; k < equalStack.length; k++) {
         if (equalStack[k].length % 2 !== 0) { return false }
         else {
            for (let s = 0; s < equalStack[k].length; s++) {
               if ((equalStack[k][s + 1] - equalStack[k][s]) % 2 === 0) {
                  if (s % 2 === 0) { return false }
               }
            }
         }
      }
   }
   for (let i = 0; i < openStack.length; i++) {
      if (openStack[i].length !== closeStack[i].length) { return false }
      else {
         for (let j = 0; j < openStack[i].length; j++) {
            if (openStack[i][j] > closeStack[i][j]) { return false }
            else {
               if ((closeStack[i][j] - openStack[i][j]) % 2 === 0) {
                  if (closeStack[i].length === 1) { return false }
                  else if (closeStack[i][j + 1] < openStack[i][j]) { return false }
               }
            }
         }
      }
   }
   return true;
}
