import ContactHero from "./components/ContactHero";
import HarareBulawayo from "./components/HarareBulawayo";
import Depots from "./components/Depots";
import Table from "./components/Table";
import Email from "./components/Email";
import Callback from "./components/Callback";
import ContactForm from "./components/ContactForm";

export default function Contact() {
    return(
        <main>
            <ContactHero />
            <HarareBulawayo />
            <Depots />
            <Table />
            <Email />
            <Callback />
            <ContactForm />
        </main>
    )
}