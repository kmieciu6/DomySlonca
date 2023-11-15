import React from 'react';
import {ErrorMessage, Field, Formik} from 'formik';
import {useForm} from '@formspree/react';
import Header from "./header/Header";
import Footer from "./Footer";
import thanks from '../assets/thanks.jpeg'
import {Link} from "react-router-dom";
import { getTranslation } from './translations/LanguageUtils';
import { useLanguage } from './translations/LanguageContext';

function Contact() {
    const { currentLanguage } = useLanguage();
    let errEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    const [state, handleSubmit] = useForm("xeqwozkp");
    if (state.succeeded) {
        return (
            <>
                <Header/>
                <section id='contact' className='pages'>
                    <div className='thanks'>
                        <h1>
                            {getTranslation('thank_for_contact', currentLanguage)}
                        </h1>
                        <img src={thanks} alt=""/>
                        <Link to='/'>
                            <button className='button'
                                    onClick={() => {
                                        window.scroll({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth",
                                        });
                                    }}>
                                {getTranslation('come_back', currentLanguage)}
                            </button>
                        </Link>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
    return (
        <>
            <Header/>
            <section id='contact' className='pages'>
                <h1>
                    {getTranslation('contact', currentLanguage)}
                </h1>
                <Formik
                    initialValues={{
                        email: '',
                        name: '',
                        message: '',
                        number: '',
                        agree: false
                    }}

                    validate={values => {
                        const messages = getTranslation('validationMessages', currentLanguage);

                        const errors = {};
                        if (!values.email || errEmail.test(values.email) === false) {
                            errors.email = messages.emailInvalid;
                        }
                        if (values.name.length < 2) {
                            errors.name = messages.nameTooShort;
                        }
                        if (values.message.length < 50) {
                            errors.message = messages.messageTooShort;
                        }
                        if (values.agree === false) {
                            errors.agree = messages.agreeRequired;
                        }
                        return errors;
                    }}
                    onSubmit={handleSubmit}
                >
                    {
                        ({
                             handleSubmit,
                         }) => (
                            <form onSubmit={handleSubmit}>
                                <label className='label'>
                                    <h5>
                                        {getTranslation('form_email', currentLanguage)}
                                    </h5>
                                    <Field
                                        id="mail"
                                        type="text"
                                        name="email"
                                        className='input'
                                        placeholder={getTranslation('placeholder_email', currentLanguage)}
                                    />
                                    <ErrorMessage name="email" render={msg => <p className="alert">{msg}</p>}/>
                                </label>

                                <label className='label'>
                                    <h5>
                                        {getTranslation('form_name', currentLanguage)}
                                    </h5>
                                    <Field
                                        id="name"
                                        type="text"
                                        name="name"
                                        className='input'
                                        placeholder={getTranslation('placeholder_name', currentLanguage)}
                                    />
                                    <ErrorMessage name="name" render={msg => <p className="alert">{msg}</p>}/>
                                </label>

                                <label className='label'>
                                    <h5>
                                        {getTranslation('form_number', currentLanguage)}
                                    </h5>
                                    <Field
                                        id="number"
                                        type='number'
                                        name='number'
                                        className='input'
                                        placeholder={getTranslation('placeholder_number', currentLanguage)}
                                    />
                                </label>

                                <label className='label'>
                                    <h5>
                                        {getTranslation('form_message', currentLanguage)}
                                    </h5>
                                    <Field
                                        as='textarea'
                                        id="message"
                                        type='text'
                                        name='message'
                                        className='input'
                                        placeholder={getTranslation('placeholder_message', currentLanguage)}
                                        rows={5}
                                    />
                                    <ErrorMessage name="message" render={msg => <p className="alert">{msg}</p>}/>
                                </label>

                                <label className='label'>
                                    <Field
                                        id="agree"
                                        type='checkbox'
                                        name='agree'
                                        className='checkbox_agree'
                                    />
                                    <h5>
                                        {getTranslation('form_personal_data1', currentLanguage)}
                                        <Link
                                            to='/privacy_policy'
                                            className='link'
                                            onClick={() => {
                                                window.scroll({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}> 
                                                {getTranslation('form_personal_data2', currentLanguage)}
                                        </Link>
                                    </h5>
                                    <span className="checkmark"/>
                                    <ErrorMessage name="agree"
                                                  render={msg => <p className="alert alert_agree">{msg}</p>}/>
                                </label>

                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className='button'>
                                    {getTranslation('form_submit', currentLanguage)}
                                </button>
                            </form>
                        )
                    }
                </Formik>
            </section>
            <Footer/>
        </>
    );
}

export default Contact;