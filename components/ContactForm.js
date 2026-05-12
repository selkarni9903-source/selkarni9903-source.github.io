function ContactForm(){

    return(

        <form id="contactForm" className="contact-form">

            <div className="input-group">

                <input
                    type="text"
                    id="name"
                    placeholder="Votre nom"
                />

            </div>

            <div className="input-group">

                <input
                    type="email"
                    id="email"
                    placeholder="Votre email"
                />

            </div>

            <div className="input-group">

                <textarea
                    id="message"
                    rows="6"
                    placeholder="Votre message"
                ></textarea>

            </div>

            <button className="submit-btn">

                Envoyer

            </button>

        </form>
    );
}

ReactDOM.createRoot(
document.getElementById("contact-root")
).render(<ContactForm />);