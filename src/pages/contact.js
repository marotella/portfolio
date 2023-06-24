import { useState, useEffect } from "react"

function Contact(props) {
    const [contact, setContact] = useState(null)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const getContactData = async () => {
        const response = await fetch(props.URL + "about")
        const data = await response.json()
        console.log(data)
        setContact(data)
    }
    useEffect(() => {
        getContactData()
    }, []
    )
  

const loaded = () => {
    return (
        <div>
            <section>
                <h3>Get in touch with Michelle</h3>
                <p>{contact.linkedin}</p>
            </section>
        </div>
    )
}
return contact ? loaded() : <h1>Loading...</h1>
}

export default Contact