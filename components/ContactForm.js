function ContactForm() {
    return (
        <div>
            <form id="contactForm" className="contact-form">

                <div className="input-group">
                    <input id="name" type="text" placeholder="Nom" />
                </div>

                <div className="input-group">
                    <input id="email" type="email" placeholder="Email" />
                </div>

                <div className="input-group">
                    <textarea id="message" rows="6" placeholder="Message"></textarea>
                </div>

                <button className="submit-btn">Envoyer</button>
            </form>

            <div id="messagesBox"></div>
        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById("contact-root")
).render(<ContactForm />);