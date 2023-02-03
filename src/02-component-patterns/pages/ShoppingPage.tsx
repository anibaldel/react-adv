import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';



export const ShoppingPage = () => {

  const {onProductCountChange, shoppingCart} = useShoppingCart();
  
  return (
    <div >
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {/* <ProductCard product={ product1 } className='bg-dark text-white'>
              <ProductCard.Image className="custom-image"/>
              <ProductCard.Title title={'cafe'} className="text-bold"/>
              <ProductButtons className="custom-buttons"/>
            </ProductCard> */}
            {
              products.map(product=>(
                <ProductCard 
                  product={ product }
                  className='bg-dark text-white'
                  key={product.id}
                  // onChange={ (evento)=>onProductCountChange(evento) }
                  onChange={ onProductCountChange }
                  value= { shoppingCart[product.id]?.count || 0 }

                >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
                  <ProductTitle className="text-bold"/>
                  <ProductButtons className="custom-buttons"/>
                </ProductCard>
              ))
            }
        </div>
        <div className='shopping-cart'>
          {
            Object.entries(shoppingCart).map(([key, product])=> (
            <ProductCard 
            key={key}
              product={ product }
              className='bg-dark text-white'
              style={{ width: '100px'}}
              onChange={ onProductCountChange }
              value= { product.count }

            >
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
              <ProductButtons 
                className="custom-buttons"
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            </ProductCard>
            ))
          }
        </div>

    </div>
  )
}
