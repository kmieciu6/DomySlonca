import React, {Component} from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            message: '',
            agree: false,
            errors: {
                emailError: '',
                nameError: '',
                messageError: '',
                agreeError: ''
            }
        }
    }

    changeHandler = event => {
        let inputName = event.target.name;
        let inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState(prevState => ({
            ...prevState, [inputName]: inputValue
        }));
        if (inputName === 'email') {
            if (inputValue.length < 2) {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        emailError: 'Email nieprawidłowy'
                    }
                }))
            } else {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        emailError: ''
                    }
                }))
            }
        }
        if (inputName === 'name') {
            if (inputValue.length < 2) {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        nameError: 'Imię i nazwisko powinno mieć co najmniej 2 znaki'
                    }
                }))
            } else {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        nameError: ''
                    }
                }))
            }
        }
        if (inputName === 'message') {
            if (inputValue.length < 50) {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        messageError: 'Wiadomość powinna mieć co najmniej 50 znaków'
                    }
                }))
            } else {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        messageError: ''
                    }
                }))
            }
        }
        if (inputName === 'agree') {
            if (inputValue === false) {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        agreeError: 'Wymagana akceptacja'
                    }
                }))
            } else {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        agreeError: ''
                    }
                }))
            }
        }
    }

    render() {
        return (
            <>
                <Header/>
                <section id='contact' className='pages'>
                    <h1>Kontakt</h1>
                    <form>
                        <MyInput
                            type='text'
                            name='email'
                            label='Email'
                            className='input'
                            placeholder='twój@email.com'
                            value={this.state.email}
                            onChange={this.changeHandler}
                            error={this.state.errors.emailError}
                        />
                        <MyInput
                            type='text'
                            name='name'
                            label='Imię i nazwisko'
                            className='input'
                            placeholder='Imię i nazwisko'
                            value={this.state.name}
                            onChange={this.changeHandler}
                            error={this.state.errors.nameError}
                        />
                        <MyTextArea
                            type='text'
                            name='message'
                            label='Wiadomość'
                            className='input'
                            value={this.state.message}
                            onChange={this.changeHandler}
                            error={this.state.errors.messageError}
                        />
                        <MyInput
                            type='checkbox'
                            name='agree'
                            label='Wyrażam zgodę na przetwarzanie danych osobowych.'
                            className='checkbox_agree'
                            value={this.state.agree}
                            onChange={this.changeHandler}
                            error={this.state.errors.agreeError}
                        />
                        {/*{this.state.email === '' ? 'N/A' : this.state.email} <br/>*/}
                        {/*{this.state.name === '' ? 'N/A' : this.state.name} <br/>*/}
                        {/*{this.state.message === '' ? 'N/A' : this.state.message} <br/>*/}
                        {/*{this.state.agree ? 'tak' : 'nie'}*/}
                        <input type="submit" className='button' value="Wyślij"/>
                    </form>
                </section>
                <Footer/>
            </>
        )
    }
}

export default Contact;