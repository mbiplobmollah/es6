const products = [
    {id: 1, name: 'iphone',color: 'black', price: 1200, brand: 'apple'},
    {id: 2, name: 'xiomi',color: 'gold', price: 100, brand: 'xiomi'},
    {id: 3, name: 'samsung',color: 'black', price: 200, brand: 'sam'},
    {id: 4, name: 'iphone',color: 'gold', price: 1100, brand: 'apple'},
    {id: 5, name: 'xiomi',color: 'black', price: 250, brand: 'xiomi'},
]


// const check = products.map(value => console.log(value))
 
// products.forEach(product => {
//     if(product.color === 'gold'){
//         console.log(product);
//     }
// })




// const newProducts = products.filter(product => product.price>1000)
// console.log(newProducts)


// const product = products.find(p=>p.id===4); 

// console.log(product)


const newProducts = products.filter(p => p.id !== 3)
console.log(newProducts)