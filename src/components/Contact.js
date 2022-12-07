import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Contact = () => {
    return (
        <section id='contact'>
            <Header/>
            <h1>Kontakt</h1>
            <form>
                <label>
                    <h5>Email</h5>
                    <input type='email' name='email' placeholder='Jan Kowalski'/>
                    <h5>Imię i nazwisko</h5>
                    <input type='name' name='name' placeholder='mail@xyz.com'/>
                    <h5>Tekst</h5>
                    <textarea type='text' name='text' placeholder='Proszę zamieścić wiadomość' rows={5}/>
                </label>
                <input type="submit" value="Wyślij"/>
            </form>
            <Footer/>
        </section>
    )
}

export default Contact;