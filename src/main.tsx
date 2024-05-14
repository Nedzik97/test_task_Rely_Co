import ReactDOM from 'react-dom/client';
import { App } from './components/app/App.tsx';
import { CharactersProvider } from './context/characters-context.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CharactersProvider>
    <App />
  </CharactersProvider>
);
