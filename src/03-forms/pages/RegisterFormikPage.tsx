import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css'

export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
            initialValues={{
                firstName: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit= { (values )=> {
                console.log( values );
            }}
            validationSchema= { Yup.object({
                firstName: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .min(2, 'Debe de tener mas de 2 caracteres')
                                .required('requerido'),
                email: Yup.string()
                            .email('Debe ser un email válido')
                            .required('requerido'),
                password1: Yup.string()
                            .min(6, 'Debe de tener mas de 6 caracteres')
                            .required('Requerido'),
                password2: Yup.string()
                            .oneOf([ Yup.ref('password1')], 'Las contraseñas no son iguales')
                            .required('Requerido')
                })
                
            }
        >
            { ({handleReset})=> (
                <Form>
                    <MyTextInput 
                        label="firstName" 
                        name="firstName"
                        placeholder="nombre" 
                    />

                    <MyTextInput 
                        label="Email Address" 
                        name="email"
                        placeholder="john@google.com"
                        type='email' 
                    />

                    <MyTextInput 
                        label="Contraseña" 
                        name="password1"
                        type='password'
                        placeholder="******"  
                    />

                    <MyTextInput 
                        label="Repita contraseña" 
                        name="password2"
                        type='password' 
                        placeholder="******" 
                    />


                    <button type='submit'>Submit</button>
                    <button type='button' onClick={handleReset}>Reset Form</button>
                    
                </Form>

                )
            }

        </Formik>
    </div>
  )
}
