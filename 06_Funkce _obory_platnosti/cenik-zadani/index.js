const planNumber = Number(prompt('Vyber si plan:')) 

const selectPlan = (planNumber) => {
    let elem;

    if (planNumber === 1) {
        elem = document.querySelector("#plan1");
        elem.classList.toggle("plan--selected");
    } else if (planNumber === 2) {
        elem = document.querySelector("#plan2");
        elem.classList.toggle("plan--selected");
    } else if (planNumber === 3) {
        elem = document.querySelector("#plan3");
        elem.classList.toggle("plan--selected");
    } else {
      return "Takovyhle plan nemame."  
    }
};

console.log(selectPlan(planNumber));