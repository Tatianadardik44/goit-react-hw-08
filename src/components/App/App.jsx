import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import AppBar from "../AppBar/AppBar"
import css from "./App.module.css"
const HomePage = lazy(() => import('../../pages/HomePage'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage'))
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'))
const LoginPage = lazy(() => import('../../pages/LoginPage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'))
  

function App() {
  

  return (
    <div className={css.content}>
      <AppBar />
      <Suspense fallback = {<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
      
</div>
  )
}

export default App
