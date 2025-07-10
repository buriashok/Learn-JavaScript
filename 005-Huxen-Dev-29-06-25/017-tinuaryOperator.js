/**
 * The ternary Operator in JavaScript is a concise way of writing conditional expressions.
 * It is the only JavaScript operator that takes three operands: a consition followed by a question mark (?),
 an expression to execute if the condition is true, followed by a colon(:), and an expression to execute if the condition is false.

 * condition ? expressionIfTrue : expressionIfFalse
 *
 */

 let password = 8;
 function passwordChecker(ps) {
    return ps === 8 ? `Strong Password` : "Password should be 8 characters.";
 }

 const res = passwordChecker(password);
 console.log(res);

