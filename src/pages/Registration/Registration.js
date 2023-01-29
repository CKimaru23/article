import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, Form as SUIForm, Header } from 'semantic-ui-react'
import './styles.css'
import { Link } from 'react-router-dom';

const Registration = () => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(5, 'Username must be at least 5 characters')
            .required('Username is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await axios.post('http://localhost:3000/register', values);
            alert('Registration Successful!');
        } catch (err) {
            alert(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <SUIForm style={{ width: '50%'}}>
                <Header as='h1'>Registration Form</Header>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <SUIForm.Field>
                                <label>Username</label>
                                <Field type='text' name='username' placeholder='Enter your username' />
                                <ErrorMessage name='username' component='div' />
                            </SUIForm.Field>
                            <SUIForm.Field>
                                <label>Email</label>
                                <Field type='email' name='email' placeholder='Enter your email' />
                                <ErrorMessage name='email' component='div' />
                            </SUIForm.Field>
                            <SUIForm.Field>
                                <label>Password</label>
                                <Field type='password' name='password' placeholder='Enter your password' />
                                <ErrorMessage name='password' component='div' />
                            </SUIForm.Field>
                            <Button type='submit' disabled={isSubmitting}>
                                <a href='/home'>Submit</a>
                                
                            </Button>
                            <Button type='button'>
                                <Link to="/login">Already registered? Login</Link>
                            </Button>
                        </Form>
                    )}
                </Formik>
            </SUIForm>
        </div>
    );
};

export default Registration;
