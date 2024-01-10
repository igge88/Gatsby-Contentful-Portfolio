import * as React from "react"
import Seo from "../components/seo"

const ContactTemplate = (props) => {
    return (
        <main>
            <h2>{props.title}</h2>
        </main>
    );
}

export default ContactTemplate;

export const Head = () => <Seo title="Contact" />
