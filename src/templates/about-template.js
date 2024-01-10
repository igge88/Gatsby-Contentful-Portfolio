import * as React from "react"
import Seo from "../components/seo"

const AboutTemplate = (props) => {
    return (
        <main>
            <h2>{props.title}</h2>
        </main>
    );
}

export default AboutTemplate;

export const Head = () => <Seo title="About" />
