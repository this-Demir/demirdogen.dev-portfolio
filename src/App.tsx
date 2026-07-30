import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './context/LanguageContext';

const App = () => (
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </LanguageProvider>
);

export default App;
