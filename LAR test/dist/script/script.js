const mainCheckout = document.getElementById('main-checkout');
const nameOne = document.getElementById('name_one');
const nameTwo = document.getElementById('name_two');
const dateOne = document.getElementById('date_one');
const dateTwo = document.getElementById('date_two');
const checkBoxOne = document.getElementById("checkbox-one");
const checkBoxTwo = document.getElementById("checkbox-two");

dateOne.addEventListener("click", () => {
window.localStorage.setItem("dateOne", dateOne.innerHTML);
window.localStorage.setItem("nameOne", nameOne.innerHTML);
});

dateTwo.addEventListener("click", () => {
window.localStorage.setItem("dateTwo", dateTwo.innerHTML);
window.localStorage.setItem("nameTwo", nameTwo.innerHTML);
});

document.getElementById("date_one-edit").addEventListener("click", () => {
    window.localStorage.setItem("dateOne", dateOne.innerHTML);
    dateOne.contentEditable = 'true';
    window.localStorage.setItem("nameOne", nameOne.innerHTML);
    nameOne.contentEditable = 'true';
});

document.getElementById("date_two-edit").addEventListener("click", () => {
    window.localStorage.setItem("dateTwo", dateTwo.innerHTML);
    dateTwo.contentEditable = 'true';
    window.localStorage.setItem("nameTwo", nameTwo.innerHTML);
    nameOne.contentEditable = 'true';
});

//deleting

document.getElementById("date_one-delete").addEventListener("click", () => {
    window.localStorage.removeItem("dateOne", dateOne.innerHTML);
    dateOne.innerHTML = localStorage.getItem("dateOne");
    window.localStorage.removeItem("nameOne", nameOne.innerHTML);
    nameOne.innerHTML = localStorage.getItem("nameTwo");
});

document.getElementById("date_two-delete").addEventListener("click", () => {
    window.localStorage.removeItem("dateTwo", dateTwo.innerHTML);
    dateTwo.innerHTML = localStorage.getItem("dateTwo");
    window.localStorage.removeItem("nameTwo", nameTwo.innerHTML);
    nameTwo.innerHTML = localStorage.getItem("nameTwo");
});

dateOne.innerHTML = localStorage.getItem("dateOne");
dateTwo.innerHTML = localStorage.getItem("dateTwo");
nameOne.innerHTML = localStorage.getItem("nameOne");
nameTwo.innerHTML = localStorage.getItem("nameTwo");

//checkboxes

checkBoxOne.addEventListener("click", () => {
    if(checkBoxOne.checked && mainCheckout.checked){
         document.getElementById('row-one').classList.add("hidden")
    }
});

checkBoxTwo.addEventListener("click", () => {
    if(checkBoxTwo.checked && mainCheckout.checked){
        document.getElementById('row-two').classList.add("hidden")
    }
});

mainCheckout.addEventListener("click", () => {
    if(checkBoxOne.checked && mainCheckout.checked){
        document.getElementById('row-one').classList.add("hidden")
    }
  
    if(checkBoxTwo.checked && mainCheckout.checked){
        document.getElementById('row-two').classList.add("hidden")
    }   
})

    
    