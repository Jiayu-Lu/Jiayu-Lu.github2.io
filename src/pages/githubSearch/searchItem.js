import React, { Component } from 'react'
import './githubSearch.css'

export default class searchItem extends Component {
    render() {
        const {userLogin, userAvatar, userHtml} = this.props
        console.log(userLogin)
        return (
            <div>
                <div className="githubSearch_card">
                    <a href={userHtml} target="_blank" rel='noreferrer'>
                        <img src={userAvatar} alt='avatar' style={{width: '100px'}}/>
                    </a>
                    <p className="card-text">{userLogin}</p>
                </div>
            </div>
        )
    }
}
