import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './contexts/CartContext.jsx';
import { UserProvider } from './contexts/UserContext';
import { WishlistProvider } from './contexts/WishlistContext.jsx';
import { AddressProvider } from './contexts/AddressContext.jsx';
import { OrderProvider } from './contexts/OrderContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { LoaderProvider } from './contexts/LoaderContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoaderProvider>
        <UserProvider>
          <CartProvider>
            <WishlistProvider>
              <AddressProvider>
                <OrderProvider>
                  <App />
                </OrderProvider>
              </AddressProvider>
            </WishlistProvider>
          </CartProvider>
        </UserProvider>
      </LoaderProvider>
    </BrowserRouter>
  </StrictMode>,
);
