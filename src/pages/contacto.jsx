import Footer from "components/Footer";
import Header from "components/Header";
import ContactForm from "components/ContactForm.jsx";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="px-4 py-8">
          <div className="flex mt-6 justify-around">
            <div className="w-1/3">
              <h2 className="text-brand-green text-4xl font-bold mb-6 mt-4">
                Contactanos!
              </h2>
              <ContactForm />
            </div>
            <img src="/contact.svg" alt="contact.icon" className="w-1/2 h-auto mr-4" />
          </div>
      </section>
      <Footer />
    </>
  );
}
