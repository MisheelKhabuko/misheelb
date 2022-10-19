import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../Styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My name is Misheel</h2>
                <div className="prompt">
                    <p>A software junior developer.</p>
                    <a href="https://www.facebook.com/misheel.slim" target="_blank"><FacebookIcon /></a>
                    <a href="misheel.khabuko@gmail.com" target="_blank"><EmailIcon /></a>
                    <a href="https://github.com/MisheelKhabuko" target="_blank"><GithubIcon /></a>
                </div>
            </div>
            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                          ReactJS, HTML, CSS, BootStrap, Liquid
                        </span>
                    </li>
                    {/*<li className="item">
                        <h2>Back-End</h2>
                        <span>
                          NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
                          MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
                        </span>
                    </li>*/}
                    <li className="item">
                        <h2>Languages</h2>
                        <span>MySQL, JavaScript, Swift, Python, React</span>
                    </li>
                </ol>
          </div>
        </div>
    );
}

export default Home;