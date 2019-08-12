"use strict;"

class Hamburger {
    constructor(size, stuffing) { 
        this.size = size;
        this.stuffing = stuffing;
        this.price = '';
        this.calories = '';
    }
    getSize() {              // Узнать размер гамбургера 
        const sizeBtns = document.querySelectorAll('.sizeBtn') 
        let size = 'big';
        for (const sizeBtn of sizeBtns) {
            sizeBtn.addEventListener('click', () => {
                if (sizeBtn.classList.contains('big')) {
                    size = "big";
                    console.log(size);
                } else {
                    size = "small";
                    console.log(size);
                }
            });
        }
    }

    addRemoveTopping() {    // Добавить-удалить добавку 
        const contentBtns = document.querySelectorAll('.contentBtn');
        let topping = [];
        for (const contentBtn of contentBtns) {
            contentBtn.addEventListener('click', () =>  {
                if (!contentBtn.checked) {
                    if (contentBtn.classList.contains('cheese')) {
                        topping = topping.filter(val => val !== "cheese");
                        console.log(topping);
                    } else if (contentBtn.classList.contains('salad')) {
                        topping = topping.filter(val => val !== "salad");
                        console.log(topping);
                    } else if (contentBtn.classList.contains('potato')) {
                        topping = topping.filter(val => val !== "potato");
                        console.log(topping);
                    }
                } else {
                    if (contentBtn.classList.contains('cheese')) {
                        topping[0] = 'cheese';
                        console.log(topping);
                    } else if (contentBtn.classList.contains('salad')) {
                        topping[1] = 'salad';
                        console.log(topping);
                    } else if (contentBtn.classList.contains('potato')) {
                        topping[2] = 'potato';
                        console.log(topping);
                    }                    
                }                
            });            
        }
        this.stuffing = topping;
    }
   
    getStuffing() {          // Узнать начинку гамбургера 
    
    }
    calculatePrice() {       // Узнать цену 
    
    }
    calculateCalories() {    // Узнать калорийность 
    
    }
  }

let hamburger = new Hamburger;

hamburger.addRemoveTopping()
hamburger.get()