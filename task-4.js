const products = [
    { name: 'Product A', price: 100 },
    { name: 'Product B', price: 50 },
    { name: 'Product C', price: 75 },
  ];
  
  const sortedProducts = products.sort((a, b) => a.price - b.price);
  
  console.log(sortedProducts);
  