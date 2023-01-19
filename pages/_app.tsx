import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from 'store';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { QueryClientProvider, QueryClient } from 'react-query';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
