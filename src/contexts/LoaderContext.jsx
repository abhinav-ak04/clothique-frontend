import { createContext, useContext, useEffect, useState } from 'react';

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const [loadingCount, setLoadingCount] = useState(0);

  const startLoading = () => {
    console.log('Loading started');
    setLoadingCount((count) => count + 1);
  };
  const stopLoading = () => {
    console.log('Loading stopped');
    setLoadingCount((count) => Math.max(count - 1, 0));
  };

  const isLoading = loadingCount > 0;

  useEffect(() => {
    console.log('Loading Count:', loadingCount);
  }, [loadingCount]);

  return (
    <LoaderContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}
