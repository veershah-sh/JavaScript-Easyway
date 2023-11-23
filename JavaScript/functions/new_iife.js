// Immediately Invoked Function Expressions (IIFE)

// (fun_defination)(fun_call)


(function t1(n){
        console.log(`This is IIFE ${n}`);
    }
)(10);

(function t2(){
    console.log(`This is IIFE 2`);
}
)();