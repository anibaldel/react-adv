import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// import { MyTextInput } from '../components/MyTextInput';
// import { MySelect } from '../components/MySelect';
// import { MyCheckbox } from '../components/MyCheckbox';

import { MyCheckbox, MyTextInput, MySelect } from '../components';

import '../styles/styles.css';

export const FormikAbastractation = () => {
    
  return (
    <div>
        <h1>Formik Abastractation</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                termns: false,
                jobType: ''
            }}
            onSubmit= { (values )=> {
                console.log( values );
            }}
            validationSchema= { Yup.object({
                firstName: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .required('requerido'),
                lastName: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .required('requerido'),
                email: Yup.string()
                            .email('Debe ser un email válido')
                            .required('requerido'),
                termns: Yup.boolean()
                            .oneOf([true], 'Debe de aceptar las condiciones'),
                jobType: Yup.string()
                                .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                                .required('Requerido')
                })
                
            }
        >
            { (formik)=> (
                <Form>
                    <MyTextInput 
                        label="firstName" 
                        name="firstName"
                        placeholder="nombre" 
                    />

                    <MyTextInput 
                        label="Last Name" 
                        name="lastName"
                        placeholder="apellido" 
                    />


<                   MyTextInput 
                        label="Email Address" 
                        name="email"
                        placeholder="john@google.com"
                        type='email' 
                    />

                    <MySelect label="Job Type" name="jobType" >
                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT Senior</option>
                        <option value="it-jr">IT Jr.</option>
                    </MySelect>

                    <MyCheckbox label="Terms & conditions" name="termns" />

                    <button type='submit'>Submit</button>
                    
                </Form>

                )
            }

        </Formik>
    </div>
  )
}
