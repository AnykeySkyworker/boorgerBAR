'use strict';

class Hamburger {
    
    constructor(size, stuffing, topping, price)  { 
        this.size = size;
        this.stuffing = stuffing;
        this.topping = topping;
        this.price = price;
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
                } else {
                    size = "small";
                    this.size = size;
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
                } else if (contentBtn.classList.contains('salad')) {
                    stuffing = "salad";
                    this.stuffing = stuffing;
                } else {
                    stuffing = "potato";
                    this.stuffing = stuffing;
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
                    } else if (toppingBtn.classList.contains('spice')) {
                        topping = topping.filter(val => val !== 'spice');
                        this.topping = topping;
                    } 
                } else {
                    if (toppingBtn.classList.contains('sauce')) {
                        topping.unshift('sauce');
                        this.topping = topping;
                    } else if (toppingBtn.classList.contains('spice')) {
                        topping.push('spice');
                        this.topping = topping;
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

            price = 0;
            this.price = price;
        });
    }

}

let hamburger = new Hamburger();

