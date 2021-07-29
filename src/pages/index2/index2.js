import React, { Component} from 'react'; 
import {Link} from 'react-scroll'
import portfolio from '../../images/picture/portfolio.png'
import project from '../../images/picture/project.png'
import github from '../../images/picture/github.png'
import contact from '../../images/picture/contact.png'
import EmpowerUAfrica from '../../images/picture/EmpowerUAfrica.png'
import neo4j from '../../images/picture/neo4j.png'
import postgresql from '../../images/picture/postgresql.png'
import aLiShow from '../../images/picture/aLiShow.png'
import world from '../../images/picture/world-wide-web.png'
import email from '../../images/picture/email.png'
import linkedin from '../../images/picture/linkedin.png'
import location from '../../images/picture/location.png'
import resumepdf from '../../files/Jiayu_Lu_Resume.pdf'
import './index.css';




export default class index extends Component{

    render() {

        return (
            <div className="index_page">
                
                <div className="container">
                    <div className="banner"> 
                        <div className="title">
                            Jiayu Lu
                        </div>

                        <div className="description">
                            I am a software developer<br />
                            Third year student in University of Toronto<br />
                            Specialist in Computer Science Software Engineering
                        </div>

                        <a href='/#/toDoList' id='todo_link'>
                            toDoList
                        </a>
                    </div>

                    <div className='index_nav row'>
                        <p className="col-md-2">

                        </p>
                        <div className="portfolio col-md-2">
                            <a href={resumepdf}>
                                <p>Resume</p>
                                <img src={portfolio}></img>
                            </a>
                        </div>

                        <div className="project col-md-2">
                            <Link to="project_banner" spy={true} smooth={true}>
                                <p>Project</p>
                                <img src={project}></img>
                            </Link>
                        </div>

                        <div className="github col-md-2">
                            <a href='https://github.com/Jiayu-Lu'>
                                <p>Github</p>
                                <img src={github}></img>
                            </a>
                        </div>

                        <div className="contact col-md-2">
                            <Link to="contact" spy={true} smooth={true}>
                                <p>Contact</p>
                                <img src={contact}></img>
                            </Link>
                        </div>
                    </div>

                    <div className='project_banner' id='project_banner'>
                        <p>Project</p>
                        
                        <div className='project_exam'>
                            <div>
                                <img src={EmpowerUAfrica}></img>
                            </div>
                            <div>
                                <h4>EmpowerUAfrica website</h4>
                                <p>HTML/CSS/JS-React-Node-Express-MySQL</p>
                                <a href='https://github.com/UTSCCSCC01/project-uoft-kings' id='aLiShow'>view source code</a>(need permission)
                            </div>
                        </div>

                        <div className='project_exam'>
                            <div>
                                <img src={neo4j}></img>
                            </div>
                            <div>
                                <h4>JDBC server</h4>
                                <p>Neo4j-JDBC-HttpServer</p>
                                <a href='https://github.com/Jiayu-Lu/Neo4jJDBC' id='aLiShow'>view source code</a>(need permission)
                            </div>
                        </div>

                        <div className='project_exam'>
                            <div>
                                <img src={postgresql}></img>
                            </div>
                            <div>
                                <h4>PostgreSQL JDBC</h4>
                                <p>PostgreSQL-JDBC</p>
                                <a href='https://github.com/Jiayu-Lu/CSCC43_Assignment2' id='aLiShow'>view source code</a>(need permission)
                            </div>
                        </div>

                        <div className='project_exam'>
                            <div>
                                <img src={aLiShow}></img>
                            </div>
                            <div>
                                <h4>ALiShow</h4>
                                <p>Responsive page design</p>
                                <a href='/#/aLiShow' id='aLiShow'>view page</a>
                            </div>
                        </div>
                    </div>

                    <div id='contact' className='index_contact'>
                        <p>Contact Information</p>
                        <div className='index_contact_component'>
                            <div>
                                <img src={world}></img>
                            </div>
                            <div>
                                Website
                            </div>
                            <div>
                                https://jiayu-lu.github.io
                            </div>
                        </div>

                        <div className='index_contact_component'>
                            <div>
                                <img src={email}></img>
                            </div>
                            <div>
                                Email
                            </div>
                            <div>
                                jiay.lu@mail.utoronto.ca
                            </div>
                        </div>

                        <div className='index_contact_component'>
                            <div>
                                <img src={linkedin}></img>
                            </div>
                            <div>
                                linkedin
                            </div>
                            <div>
                                www.linkedin.com/in/josiahlu
                            </div>
                        </div>

                        <div className='index_contact_component'>
                            <div>
                                <img src={location}></img>
                            </div>
                            <div>
                                Location
                            </div>
                            <div>
                                Toronto, Canada
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
            
            </div>
        )
        
    }
}