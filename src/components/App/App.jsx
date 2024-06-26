import { Route, Routes } from "react-router-dom"
import HomePage from "../../pages/HomePage"
import ContactsPage from "../../pages/ContactsPage"
import RegistrationPage from "../../pages/RegistrationPage"
import LoginPage from "../../pages/LoginPage"
import NotFoundPage from "../../pages/NotFoundPage"
import AppBar from "../AppBar/AppBar"
import css from "./App.module.css"


function App() {
  

  return (
    <div className={css.content}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
</div>
  )
}

export default App
