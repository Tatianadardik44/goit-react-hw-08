import { Route, Routes } from "react-router-dom"
import { Suspense, lazy, useEffect } from "react"
import AppBar from "../AppBar/AppBar"
import css from "./App.module.css"
import { useDispatch, useSelector } from "react-redux"
import { refreshUser } from "../../redux/auth/operations"
import { selectIsRefreshing } from "../../redux/auth/selectors"
import   RestrictedRoute  from "../RestrictedRout/RestrictedRout"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import Layout from "../Layout/Layout"

const HomePage = lazy(() => import('../../pages/HomePage'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage'))
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'))
const LoginPage = lazy(() => import('../../pages/LoginPage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'))
  

function App() {
  const isRefresing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())                       
  }, [dispatch])

  return isRefresing ? <b>Refreshing user , please wait...</b> :(
    <div className={css.content}>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />}/>} />
        <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} />} />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
   </Layout>
      
</div>
  )
}

export default App
