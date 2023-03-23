import React from 'react';
import Clock from './Clock';
import Product from './Product';

export default function Main(props){
    const {products, onAdd} = props;
    return (
    <main className="block col-2">
        <h2>Proizvodi</h2>
        <div className="row">
            {products.map((product) => (
                <Product key={product.id} product = {product} onAdd={onAdd}></Product>
            ))}

        </div>
        <hr></hr>
        <div className="block row text-right">
                <Clock />
            </div>
    </main>
    );
}