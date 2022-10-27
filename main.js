// traigo los elementos del html
let bill = document.querySelector(".inputs-section__bill-input")
let billNumber = parseInt(bill.value)
let people = document.querySelector(".inputs-section__people-input")
let peopleNumber = parseInt(people.value)
let btns = document.querySelectorAll(".btns__button")
let custom = document.querySelector(".btns-custom")




let tipResult = document.querySelector(".results__tip-value")
let totalResult = document.querySelector(".results__total-value")
let error = document.querySelector("span")

let reset = document.querySelector(".results-section__reset")



// All porque quiero seleccionar todos los que tengan esa clase
let tipValue;

btns.forEach(element =>{
    element.addEventListener("click", (e) =>{
        tipValue = parseInt(e.target.innerText.slice(0, -1));
        //agregar clase para marque donde se le dio click
        btns.forEach(element =>{
            element.classList.remove("btns__button--selected")
        })
        element.classList.add("btns__button--selected")
        // slice(0, -1) para que empiece a contar desde atras y me elimine el % del 5%, etc
        

        // console.log(tipValue);
        //calculo de tip amount
        calculateTip()

        //calculo del total


        
    })
})

//actualizando el bill 
bill.addEventListener("input", () =>{
    billNumber = parseFloat(bill.value)
    calculateTip()
})

//actualizando people
people.addEventListener("input", ( )=>{
    peopleNumber = parseInt(people.value)


    if (peopleNumber <= 0 || isNaN(peopleNumber) ){
        people.style.borderColor = "red"
        error.classList.add("alert")
    }else{
        people.style.borderColor = "hsl(172deg, 67%, 45%)"
        error.classList.remove("alert")
        calculateTip()
    }
    
})

//actualizando custom
custom.addEventListener("input", ()=>{
    
    tipValue = (parseFloat(custom.value))
    
    console.log(tipValue);
    console.log(custom.value);
    console.log(bill.value);

    

    calculateTip()

    
})

//actualizando el estilo de los botones con el custom

custom.addEventListener("click", ()=> {
    
    btns.forEach(element =>{
        element.classList.remove("btns__button--selected")
    })
    
})

//reinicia los valores
reset.addEventListener("click", ()=>{
    bill.value = 0
    billNumber = 0
    tipValue = 0
    
    tipResult.innerText = 0
    totalResult.innerText = 0

    people.value = 1
    custom.value = ""
    

    btns.forEach(element =>{
        element.classList.remove("btns__button--selected")
    }) 


})
function calculateTip(params) {
    if (!((tipValue == undefined) || isNaN(billNumber) || isNaN(tipValue))) {
        tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);
        console.log(billNumber);
        console.log(tipResult.innerText);

        totalResult.innerText = (((billNumber * tipValue / 100) + billNumber ) / peopleNumber).toFixed(2)
    }
    
    
}