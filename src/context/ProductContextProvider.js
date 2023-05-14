import React,{useState,useEffect,createContext} from 'react';
// api
import data from "../Api/data"

export const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        
         const api =() =>{
            setProducts(data)
         }    
        
       api();
    },[])
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;
