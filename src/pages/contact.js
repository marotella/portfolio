import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

function About(props) {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch(props.URL + "about");
    const data = await response.json();
    console.log(data);
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => {
    return (
      <main className="flex flex-col h-screen">
        <Header />
        <div className="flex items-center justify-center flex-1">
          <section className="flex flex-col items-center m-4 md:m-8 text-white w-full">
            <h2 className="text-xl md:text-3xl s:text-center mb-4 font-[600]">
              Let's Connect!
            </h2>
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <Link to="https://github.com/marotella">
                <button className="p-2 bg-green m-4 border flex flex-row justify-center items-center w-full">
                  <p className="p-2 text-2xl">GitHub: </p>{" "}
                  <img
                    className="h-8"
                    src={process.env.PUBLIC_URL + "/github.png"}
                    alt="github"
                  />
                </button>
              </Link>
              <Link to="https://github.com/marotella">
                <button className="p-2 bg-green m-4 border flex flex-row justify-center items-center w-full">
                  <p className="p-2 text-2xl">LinkedIn: </p>{" "}
                  <img
                    className="h-8"
                    src={process.env.PUBLIC_URL + "/linkedin.png"}
                    alt="linkedin"
                  />
                </button>
              </Link>
              <Link to="mailto:michelle.a.rotella@gmail.com">
                <button className="p-2 bg-green m-4 border flex flex-row justify-center items-center w-full">
                  <p className="p-2 text-2xl">Email </p>
                </button>
              </Link>
              <Link to={about.resume}>
                <button className="p-2 bg-green m-4 border flex flex-row justify-center items-center w-full">
                  <p className="p-2 text-2xl">Resume </p>
                </button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  };

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
