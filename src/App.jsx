import RouteCustom from './router/route'
import './App.css'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <RouteCustom/>
    </LanguageProvider>
  )
}

export default App;





