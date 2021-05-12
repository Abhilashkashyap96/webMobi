import React, { Component } from 'react'
import Chat from '../Assets/Chat.png'
import Notification from '../Assets/Notification.png'
import Settings from '../Assets/Settings.png'

class RightSidebar extends Component {
    render() {
        return (
            <div className="right-sidebar">
                <div className="right-inner-container">
                    <div className='img'></div>
                    <a href=""><img src={ Chat } alt="" /></a>
                    <a href=""><img src={ Notification } alt="" /></a>
                    <a href=""><img src={ Settings } alt="" /></a>
                </div>
            </div>
        )
    }
}

export default RightSidebar
