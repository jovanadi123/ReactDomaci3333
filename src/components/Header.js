import React from 'react';

export default function Header(props){
    const {countCartItems} = props;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Sport Vision</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart{' '}{countCartItems ? (
                    <button className="badge">{countCartItems}</button>
                ) : 
                <button className="badge">0</button>
                }
                </a>{' '} 
                <a href="#/signin">SingIn</a>
            </div>
        </header>

    );
}