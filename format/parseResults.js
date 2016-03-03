module.exports = (products) => {
  return new Promise((resolve, reject) => {
      resolve(
          products.map((productRes) => {
            var product = productRes._source;
            return { 
                id: product.sku, 
                name: product.title, 
                price: product.price, 
                size: product.containerSize,
                description: product.aroma,
                food: parseFood(product),
                url: product.url 
              }
          })
      )
  });
}


function parseFood(product) {
  if (!product.foodPairings) return '';
  
  return product.foodPairings.join(',');
}