import React from 'react';
import "./AddFriend.css"

function AddFriends() {
    return (
        <div>
            <h1 className="container">Add Friends</h1>
            <div className="parent-div">
                <div className="cally">
                    <h3 className="head">suggested</h3>
                    <div><img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt=""/>okerekechukwu <button>Add</button></div>
                    <div><img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt=""/>okerekechukwu <button>Add</button></div>
                    <div><img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt=""/>okerekechukwu <button>Add</button></div>
                    <div><img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt=""/>okerekechukwu <button>Add</button></div>
                    <div><img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt=""/> okerekechukwu <button>Add</button></div>
                    <div><img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt=""/>okerekechukwu <button>Add</button></div>
                </div>

                <div className="josh">
                    <div className="con1">
                        <h3>Add by Username or ID</h3>
                        <label>
                            <input type="button" value=""/>
                        </label>
                        <button>Add</button>
                    </div>
                    <div className="con2">
                        <p><a href="#">continue</a></p>
                        <span><a href="#">skip</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFriends;
