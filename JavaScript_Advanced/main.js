// Revisiting scopes (nested functions)
// Lexical Scoping - how JS resolves the scope of a variable, the variables "look up" till the global scope.

// Just keep this in mind - nested functions have access to variables in their own scope & the outer scope!

let a = 10
function outer() {
    let b = 20
    function inner() {
        let c = 30
        console.log(a, b, c)
    }
    inner()
}

outer()