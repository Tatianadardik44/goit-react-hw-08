import { Field, Form, Formik } from "formik"
import { useId } from "react";
import * as Yup from "yup";

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
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const handleSubmit = (values, actions) => {
        console.log("hello");
         actions.resetForm();
    }
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form>
                    <div>
                        <label htmlFor={nameId}>Username</label>
                        <Field type="text" name="name" id={nameId}></Field>
                    </div>
                    <div>
                        <label htmlFor={emailId}>Email</label>
                        <Field type="text" name="email" id={emailId}></Field>
                    </div>
                     <div>
                        <label htmlFor={passwordId}>Password</label>
                        <Field type="text" name="password" id={passwordId}></Field>
                    </div>
                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    )
}
export default RegistrationForm