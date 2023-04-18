import React from 'react';
import "/textBox.css";
function TextBox(props){
    return(
        <div>
            <div id="js-chatbar" className="chat-bar">
                <div id="js-toggle" className="chat-bar__toggle" onClick="toggle()">
                    <i className="material-icons">add</i>
                </div>
                <div className="chat-bar__message">
                    <input className="chat-bar__input" type="text" placeholder="Message..." autoComplete="off"
                           autoFocus="true"/>
                </div>
                {props.mediaButtons.forEach(

                )
                }
                <div className="chat-bar__buttons">
                    <div className="button b-1"><i className="material-icons">photo</i></div>
                    <div className="button b-2"><i className="material-icons">photo</i></div>
                </div>
            </div>
        </div>
    );
}

export default TextBox;