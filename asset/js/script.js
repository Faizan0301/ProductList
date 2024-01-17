var products = [
    { imag: 'Watch', name: 'Watch', dic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum illum fugiat nobis, corrupti quod.', price: '$99' },
    { imag: 'Bodyband', name: 'Bodyband', dic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum illum fugiat nobis, corrupti quod.', price: '$199' },
    { imag: 'Elv', name: 'Elv', dic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum illum fugiat nobis, corrupti quod.', price: '$149' },
    { imag: 'ISILER', name: 'ISILER', dic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum illum fugiat nobis, corrupti quod.', price: '$19' },
    { imag: 'Portronics', name: 'Portronics', dic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum illum fugiat nobis, corrupti quod.', price: '$399' },
    { imag: 'STRIFF', name: 'STRIFF', dic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum illum fugiat nobis, corrupti quod.', price: '$179' },
    { imag: 'Ganesh', name: 'Ganesh', dic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum illum fugiat nobis, corrupti quod.', price: '$299' },
    { imag: 'SUPER TOY', name: 'NaSUPER TOYme', dic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum illum fugiat nobis, corrupti quod.', price: '$999' }
]
var list = "";
products.forEach((product) => {
    list += `<div class="col-3">
                <div class="card mb-3">
                    <img src="asset/images/${product.imag}.jpg" class="card-img-top object-fit-contain" height="200px" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.dic}</p>
                        <h6>${product.price}</h6>
                    </div>
                </div>
            </div>`
});
document.getElementById('product-list').innerHTML = list;