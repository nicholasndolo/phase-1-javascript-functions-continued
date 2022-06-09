// code your solution here
function saturdayFun(hobby="roller-skate"){
    return`This Saturday, I want to ${hobby}!`
}
saturdayFun()

const mondayWork = function(plan = "go to the office"){
    return `This Monday, I will ${plan}.`
}
mondayWork()
 
function wrapAdjective(msg = "*"){
    return function innerFunction(message = "special"){
        return `You are ${msg}${message}${msg}!`
    }

    let result = wrapAdjective('*')
    let emphatic = result("a hard worker")

}
