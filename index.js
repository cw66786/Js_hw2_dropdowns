const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach",
    g: 'gold'
};



const keySelector = document.getElementById("keys");
const valueSelector = document.getElementById("values");

keySelector.innerHTML = Object.keys(state).map(key => {
   
   return `<option value='${key}'>${key}</option>`
})


valueSelector.innerHTML = Object.values(state).map(value => {
   
    return `<option value='${value}'>${value}</option>`
 })


keySelector.addEventListener("change",()=>{
    valueSelector.value = state[keySelector.value];
})

valueSelector.addEventListener("change",()=>{
    keySelector.value = Object.keys(state).find(
        key => state[key] === valueSelector.value
      );
})