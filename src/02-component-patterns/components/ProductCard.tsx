import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

export interface Props {
    product: Product
    // children?: React.ReactElement | React.ReactElement[];
    children: (args: ProductCardHandlers)=> JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs)=> void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCounter, isMaxCountReached, reset } 
        = useProduct({ onChange, product, value, initialValues });
    // console.log(initialValues)
    return (
    <Provider value={{
        counter,
        increaseBy,
        product,
        maxCounter
    }}>
        <div 
            className={ `${styles.productCard} ${className}` }
            style={ style }
        >
            { children({
                count: counter,
                isMaxCountReached,
                maxCount: initialValues?.maxCount,
                product,

                increaseBy,
                reset

            }) }
            
            {/* <ProductImage img = {product.img}/>
            <ProductTitle title = {product.title} />
            <ProductButtons counter = {counter} increaseBy={increaseBy} />      */}
        </div>
    </Provider>
  )
}

