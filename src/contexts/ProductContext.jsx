import { createContext, useContext } from 'react';
import { useUser } from './UserContext';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const { userId } = useUser();

  return <ProductContext.Provider>{children}</ProductContext.Provider>;
}

export function useProduct() {
  return useContext(ProductContext);
}
