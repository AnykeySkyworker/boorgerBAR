'use strict';

class Hamburger {
    
    constructor(size, stuffing, topping, price, calories)  { 
        this.size = size;
        this.stuffing = stuffing;
        this.topping = topping;
        this.price = price;
        this.calories = calories;
    }
    
    getSize(size) {              
        // let size;
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
        return this.size = size;
    }

    addStuffing(stuffing) {
        // let stuffing;
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
        return this.stuffing = stuffing;
    }

    addRemoveTopping(topping) {    // Добавить-удалить добавку 
        topping = [];
        const toppingBtns = document.querySelectorAll('.toppingBtn');
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
                        topping.unshift('sauce');
                        console.log(topping);
                    } else if (toppingBtn.classList.contains('spice')) {
                        topping.push('spice');
                        console.log(topping);
                    }                
                }                
            });            
        }
        return this.topping = topping;
    }
   
    calculatePrice(price, topping, stuffing, size) { 
        const btnCalcPrice = document.querySelector('.calcPrice');
        price = 0;
        btnCalcPrice.addEventListener('click', () => {
       
            if (this.size == 'big') {price += 100;} 
            else if (this.size == 'small') {price += 50;}

            if (this.stuffing == 'cheese') {price += 10;}
            else if (this.stuffing == 'salad') {price += 20;}
            else if (this.stuffing == 'potato') {price += 15;}

            if (this.topping == ['sauce']) {price += 20;}
            else if (this.topping == ["spice"]) {price += 15;}
            else if (this.topping == ["sauce", "spice"]) {price += 35;}
            console.log(price);
            return this.price;

        });
    }
   
}

let hamburger = new Hamburger(size, stuffing, topping, price, calories);

hamburger.addRemoveTopping()
hamburger.addStuffing()
hamburger.getSize()
hamburger.calculatePrice()