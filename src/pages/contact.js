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
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Sending email: ")
        console.log("Name:", name)
        console.log("Email:", email)
        console.log("Message:", message)
    }
    
    const handleDownloadResume = () => {
        if(contact && contact.resume) {
            const link = document.createElement("a")
            link.href = contact.resume
            link.download = "resume.pdf"
            link.click()
        }
    }

const loaded = () => {
    return (
        <main className="flex items-center justify-center min-h-screen">
        <div className="text-center m-8 md:m-16">
            <section className="flex flex-col items-center m-4 md:m-8">
                <h3>Get in touch with Michelle</h3>
                <p>{contact.linkedin}</p>
            </section>
            <section className="flex flex-col items-cente m-4 md:m-8">
                <h3>Email me</h3>
                <form className="flex flex-col" onSubmit={handleFormSubmit}>
                <div className="flex m-2 md:m-4 items-center">
                    <label htmlFor="name  m-2">Name: </label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="m-2"
                    />
                    </div>
                     <div className="flex m-2 md:m-4 items-center">
                    <label htmlFor="email  m-2">Email: </label>
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="m-2"
                    />
                    </div>
                    <div className="flex m-2 md:m-4 items-center">
                    <label htmlFor="message m-2">Message: </label>
                    <textarea 
                        type="text"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="m-2"
                    ></textarea>
                    </div>
                    <button type="submit">Send</button>

                </form>
            </section>
        </div>
        </main>
    )
}
return contact ? loaded() : <h1>Loading...</h1>
}

export default Contact