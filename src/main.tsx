import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './components/app/App.tsx';
import { CharactersProvider } from './context/characters-context.tsx';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </QueryClientProvider>
);
