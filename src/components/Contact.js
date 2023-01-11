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
            agree: false
        }
    }

    changeHandler = event => {
        let inputName = event.target.name;
        let inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({[inputName]: inputValue})
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
                        />
                        <MyInput
                            type='text'
                            name='name'
                            label='Imię i nazwisko'
                            className='input'
                            placeholder='imię i nazwisko'
                            value={this.state.name}
                            onChange={this.changeHandler}
                        />
                        <MyTextArea
                            type='text'
                            name='message'
                            label='Wiadomość'
                            className='input'
                            value={this.state.message}
                            onChange={this.changeHandler}
                        />
                        <MyInput
                            type='checkbox'
                            name='agree'
                            label='Wyrażam zgodę na przetwarzanie danych osobowych.'
                            className='checkbox_agree'
                            onChange={this.changeHandler}
                            value={this.state.agree}
                        >
                            <span className="checkmark"/>
                        </MyInput>
                        {/*    <label className="checkbox_agree">*/
                        }
                        {/*        <p.>Wyrażam zgodę na przetwarzanie danych osobowych</p>*/
                        }
                        {/*        <input type="checkbox"/>*/
                        }
                        {/*        <span className="checkmark"/>*/
                        }
                        {/*    </label>*/
                        }
                        <input type="submit" className='button' value="Wyślij"/>
                    </form>
                    {/*{this.state.email === '' ? 'N/A' : this.state.email} <br/>*/}
                    {/*{this.state.name === '' ? 'N/A' : this.state.name} <br/>*/}
                    {/*{this.state.message === '' ? 'N/A' : this.state.message} <br/>*/}
                    {/*{this.state.agree ? 'tak' : 'nie'}*/}
                </section>
                <Footer/>
            </>
        )
    }
}

export default Contact;