"use strict;"

class Hamburger {
    constructor(size, stuffing) { 
        this.size = size;
        this.stuffing = stuffing;
        this.price = '';
        this.calories = '';
    }
    getSize() {              // Узнать размер гамбургера 
        let size = 'big';
        const sizeBtns = document.querySelectorAll('.sizeBtn') 
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

    addStuffing() {
        let stuffing;
        const contentBtns = document.querySelectorAll('.contentBtn') 
        for (const contentBtn of contentBtns) {
            contentBtn.addEventListener('click', () => {
                if (contentBtn.classList.contains('cheese')) {
                    stuffing = "cheese";
                    console.log(stuffing);
                } else if (contentBtn.classList.contains('salad')) {
                    stuffing = "salad";
                    console.log(stuffing);
                } else {
                    stuffing = "potato";
                    console.log(stuffing);
                }
            });
        }
    }

    addRemoveTopping() {    // Добавить-удалить добавку 
        const toppingBtns = document.querySelectorAll('.toppingBtn');
        let topping = [];
        for (const toppingBtn of toppingBtns) {
            toppingBtn.addEventListener('click', () =>  {
                if (!toppingBtn.checked) {
                    if (toppingBtn.classList.contains('sauce')) {
                        topping = topping.filter(val => val !== "sauce");
                        console.log(topping);
                    } else if (toppingBtn.classList.contains('spice')) {
                        topping = topping.filter(val => val !== "spice");
                        console.log(topping);
                    } 
                } else {
                    if (toppingBtn.classList.contains('sauce')) {
                        topping[0] = 'sauce';
                        console.log(topping);
                    } else if (toppingBtn.classList.contains('spice')) {
                        topping[1] = 'spice';
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
hamburger.addStuffing()
hamburger.getSize()