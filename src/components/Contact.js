import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Contact = () => {
    return (
        <>
            <Header/>
            <section id='contact' className='pages'>
                <h1>Kontakt</h1>
                <form>
                    <label>
                        <h5>Email</h5>
                        <input type='email' name='email' className='input' placeholder='twój@email.com'/>
                        <h5>Imię i nazwisko</h5>
                        <input type='name' name='name' className='input' placeholder='imię i nazwisko'/>
                        <h5>Tekst</h5>
                        <textarea type='text' name='text' className='input' placeholder='Treść wiadomości' rows={5}/>
                        <div className='checkbox_agree'>
                            <input type="checkbox" id="agree" name="agree"/>
                            <label htmlFor="agree"><p>Wyrażam zgodę na przetwarzanie danych osobowych.</p></label>
                        </div>
                    </label>
                    <input type="submit" className='button' value="Wyślij"/>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default Contact;