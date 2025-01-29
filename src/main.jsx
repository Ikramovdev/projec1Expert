import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './context/Context.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import './translations/i18n.js'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContext>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </AuthContext>
  </BrowserRouter>
)
