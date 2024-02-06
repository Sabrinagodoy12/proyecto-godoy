const cart = new Cart ();

cartCount.innerText = cart.getCount();

class Cart {
    constructor (list = []){
        this.cart = list;
        console.log ('Hola desde el constructor')
    }

    addToCart (product){
        this.cart.push (product);

        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    getProducts (){
        return this.cart;
    }

    getCount (){
          return this.cart.length;
    }
    getSum (){
        return 0;
    }
}