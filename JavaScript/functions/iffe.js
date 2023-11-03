// Immediately Invoked Function Expressions (IIFE)

// (fun_defination)(fun_call);

(function test(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('ram');
