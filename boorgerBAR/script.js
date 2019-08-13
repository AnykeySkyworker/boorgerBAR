'use strict';

class Hamburger {
    
    constructor(size, stuffing, topping, price, calories)  { 
        this.size = size;
        this.stuffing = stuffing;
        this.topping = topping;
        this.price = price;
        this.calories = calories;
        this.calculatePrice(topping, stuffing, size);
    }
    
    getSize() {       // Узнать размер       
        let size = 'big';
        this.size = size;
        const sizeBtns = document.querySelectorAll('.sizeBtn') 
        for (const sizeBtn of sizeBtns) {
            sizeBtn.addEventListener('click', () => {
                if (sizeBtn.classList.contains('big')) {
                    size = "big";
                    this.size = size;
                    console.log(size);
                    console.log(this.size);
                } else {
                    size = "small";
                    this.size = size;
                    console.log(size);
                    console.log(this.size);
                }
            });
        }
    }

    addStuffing() {      // Добавить начинку
        let stuffing = 'cheese';
        this.stuffing = stuffing;
        const contentBtns = document.querySelectorAll('.contentBtn') 
        for (const contentBtn of contentBtns) {
            contentBtn.addEventListener('click', () => {
                if (contentBtn.classList.contains('cheese')) {
                    stuffing = "cheese";
                    this.stuffing = stuffing;
                    console.log(stuffing);
                    console.log(this.stuffing);
                } else if (contentBtn.classList.contains('salad')) {
                    stuffing = "salad";
                    this.stuffing = stuffing;
                    console.log(stuffing);
                    console.log(this.stuffing);
                } else {
                    stuffing = "potato";
                    this.stuffing = stuffing;
                    console.log(stuffing);
                    console.log(this.stuffing);
                }
            });
        }
    }

    addRemoveTopping() {    // Добавить-удалить добавку 
        let topping = ["sauce"];
        this.topping = topping;
        const toppingBtns = document.querySelectorAll('.toppingBtn');
        for (const toppingBtn of toppingBtns) {
            toppingBtn.addEventListener('click', () =>  {
                if (!toppingBtn.checked) {
                    if (toppingBtn.classList.contains('sauce')) {
                        topping = topping.filter(val => val !== 'sauce');
                        this.topping = topping;
                        console.log(topping);
                        console.log(this.topping);
                    } else if (toppingBtn.classList.contains('spice')) {
                        topping = topping.filter(val => val !== 'spice');
                        this.topping = topping;
                        console.log(topping);
                        console.log(this.topping);
                    } 
                } else {
                    if (toppingBtn.classList.contains('sauce')) {
                        topping.unshift('sauce');
                        this.topping = topping;
                        console.log(topping);
                        console.log(this.topping);
                    } else if (toppingBtn.classList.contains('spice')) {
                        topping.push('spice');
                        this.topping = topping;
                        console.log(topping);
                        console.log(this.topping);
                    }                
                }                
            });            
        }
    }
   
    calculatePrice(topping, stuffing, size) { 
        const btnCalcPrice = document.querySelector('.calcPrice');
        let price = 0;

        this.addRemoveTopping();
        this.addStuffing();
        this.getSize();
      
        btnCalcPrice.addEventListener('click', () => {
       
            if (this.size == 'big') {price += 100;} 
            else if (this.size == 'small') {price += 50;}

            if (this.stuffing == 'cheese') {price += 10;}
            else if (this.stuffing == 'salad') {price += 20;}
            else if (this.stuffing == 'potato') {price += 15;}

            if (this.topping.join('') == ['sauce'].join('')) {price += 20;}
            else if (this.topping.join('') == ["spice"].join('')) {price += 15;}
            else if (this.topping.join('') == ["sauce", "spice"].join('')) {price += 35;}
            this.price = price;

            document.querySelector('.display').innerHTML = `цена: ${price}р.`
            console.log(price);
            console.log(this.price);
            price = 0;
            this.price = price;

        });
    }
   
}

let hamburger = new Hamburger();

