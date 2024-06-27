import { Field, Form, Formik } from "formik"
import { useId } from "react";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css"
import { useDispatch } from "react-redux";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
});
const initialValues = {
    name: "",
    email: "",
   password: ""
    
}
const RegistrationForm = () => {
    const dispatch = useDispatch()
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const handleSubmit = (values, actions) => {
      console.log(values);
         actions.resetForm();
    }
    return (
        <div className={css.form}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form className={css.formBox}>
                    <div className={css.input}>
                        <label htmlFor={nameId}>Username</label>
                        <Field type="text" name="name" id={nameId} className={css.inputBackground}></Field>
                    </div>
                    <div className={css.input}>
                        <label htmlFor={emailId}>Email</label>
                        <Field type="text" name="email" id={emailId} className={css.inputBackground}></Field>
                    </div>
                     <div className={css.input}>
                        <label htmlFor={passwordId}>Password</label>
                        <Field type="text" name="password" id={passwordId} className={css.inputBackground}></Field>
                    </div>
                    <button type="submit" className={css.btn}>Register</button>
                </Form>
            </Formik>
        </div>
    )
}
export default RegistrationForm