const products = [
    { name: 'Футболка', price: 200 },
    { name: 'Штани', price: 500 },
    { name: 'Кофта', price: 350 },
    { name: 'Шапка', price: 150 },
    { name: 'Шкарпетки', price: 50 },
  ];
  
  function filterProductsByPrice(arr, price) {
    return arr.filter(product => product.price <= price);
  }

  function applyDiscount(products) {
    return products.map(product => {
      return {
        name: product.name,
        price: product.price * 0.9 
      }
    });
  }
  
  const filteredProducts = filterProductsByPrice(products, 300);
  
  const discountedProducts = applyDiscount(filteredProducts);
  
  console.log(discountedProducts);
  