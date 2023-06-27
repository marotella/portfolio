import { useState, useEffect } from "react"
import Header from "../components/header"
import {Link} from "react-router-dom"
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
        <main className="flex flex-col">
        <Header/>
        <div className="text-center m-8 md:m-16 flex items-center flex-col justify-center opacity-0 animate-fadeIn">
            <section className="flex flex-col items-center m-4 md:m-8 text-white">
                <h2 className="text-xl md:text-3xl s:text-center mb-4 font-[600]">Let's Connect!</h2>
                <div className="flex flex-row justify-between">
                <Link to="https://github.com/marotella">
                  <button className="p-2 bg-green m-4 border flex flex-row justify-center items-center"><p className="p-2 text-2xl">GitHub: </p> <img className="h-8" src={process.env.PUBLIC_URL + "/github.png"} alt="github" /></button>
                </Link>
                <Link to="https://github.com/marotella">
                  <button className="p-2 bg-green m-4 border flex flex-row justify-center items-center"><p className="p-2 text-2xl">LinkedIn: </p> <img className="h-8" src={process.env.PUBLIC_URL + "/linkedin.png"} alt="github" /></button>
                </Link>
                </div>
            </section>
            <section className="flex flex-col items-cente m-4 md:m-8 text-white md:w-1/2 border border-dashed p-4">
                <h2 className="text-xl md:text-2xl md:text-center mb-4 font-[400]">Email me</h2>
                <form className="flex flex-col" onSubmit={handleFormSubmit}>
                <div className="flex m-2 md:m-4 items-center">
                    <label htmlFor="name  m-2" className="flex text-left items-left text-xl font-[500]">Name: </label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="m-2 w-full m-2 w-full text-green text-lg md:text-xl p-2"
                    />
                    </div>
                     <div className="flex m-2 md:m-4 items-center">
                    <label htmlFor="email  m-2" className="flex text-left items-left text-xl font-[500]"> Email: </label>
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="m-2 w-full m-2 w-full text-green text-lg md:text-xl p-2"
                    />
                    </div>
                    <div className="flex m-2 md:m-4 flex-col md:text-left">
                    <label htmlFor="message m-2" className="flex text-left items-left text-xl font-[500]">Message: </label>
                    <textarea 
                        type="text"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="m-2 w-full h-48 text-green text-lg md:text-xl p-2"
                    ></textarea>
                    </div>
                    <button className="p-4 bg-green m-2 md:text-2xl md:font-[600] border hover:bg-white hover:text-green" type="submit">Send</button>

                </form>
            </section>
        </div>
        </main>
    )
}
return contact ? loaded() : <h1>Loading...</h1>
}

export default Contact