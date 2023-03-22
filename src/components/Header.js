import React from 'react';

export default function Header(props){
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Sport Vision</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart</a> <a href="#/signin">SingIn</a>
            </div>
        </header>

    );
}