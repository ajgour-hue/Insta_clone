
import AppRoutes from './AppRoutes'
import { router } from './app.routes.jsx'
import { AuthProvider } from './features/auth/auth.context.jsx'
import { PostContextProvider } from './features/post/post.context.jsx'
import "./features/shared/style.scss"
const App = () => {
  return (
    <div>
     <AuthProvider>
     <PostContextProvider>
     <AppRoutes />
     </PostContextProvider>
     </AuthProvider>
    </div>
  )
}

export default App
