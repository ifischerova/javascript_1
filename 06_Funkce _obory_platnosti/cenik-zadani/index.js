const planNumber = Number(prompt('Vyber si plan:')) 

const selectPlan = (planNumber) => {
    let elem = document.querySelector("#plan1"); 
    elem.classList.remove("plan--selected");

    if (planNumber >= 1 && planNumber <=3) {
        elem = document.querySelector(`#plan${planNumber}`);
        elem.classList.toggle("plan--selected");   
    } else {
        return "Takovyhle plan nemame."  
    };
};

console.log(selectPlan(planNumber));

