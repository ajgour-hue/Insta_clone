
import AppRoutes from './AppRoutes'
import { AuthProvider } from './features/auth/auth.context.jsx'
import "./style.scss"
const App = () => {
  return (
    <div>
     <AuthProvider>
     <AppRoutes />
     </AuthProvider>
    </div>
  )
}

export default App
