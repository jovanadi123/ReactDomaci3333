import React from 'react';
import {CgShoppingCart} from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default function Header(props){
    const {countCartItems} = props;
    return (
        <header className="row block center">
            <div>
                <Link to="/">
                    <h1>Sport Vision</h1>
                </Link>
            </div>
            <div>
                <Link to="/basket"><CgShoppingCart />{' '}{countCartItems ? (
                    <button className="badge">{countCartItems}</button>
                ) : 
                <button className="badge">0</button>
                }
                </Link>{' '} 
                <Link to="/onama">O nama</Link>
            </div>
        </header>

    );
}