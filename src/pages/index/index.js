import React, { Component} from 'react'; 
import './index.css';




export default class index extends Component{
    render() {

        return (
            <div className="index_page">
                
                <div className="banner"> 
                    <div className="title">
                        Jiayu Lu
                    </div>

                    <div className="description">
                        I am a front end developer<br />
                        Third year student in University of Toronto<br />
                        Specialist in Computer Science Software Engineering
                    </div>

                    <a href='/aLiShow' id='aLiShow'>
                        project
                    </a>
                </div>
            
            </div>
        )
        
    }
}