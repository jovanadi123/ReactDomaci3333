import React from 'react';

export default function Basket(props){
    const{cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 5000 ? 0 : 350;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className="block col-1">
            <h2>Vaša korpa</h2>
            <div>
                {cartItems.length === 0 && <div>Korpa je prazna.</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x {item.price.toFixed(2)}rsd
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Cena proizvoda</div>
                    <div className="col-1 text-right">{itemsPrice.toFixed(2)} rsd</div>
                </div>
                <div className="row">
                    <div className="col-2">Takse</div>
                    <div className="col-1 text-right">{taxPrice.toFixed(2)} rsd</div>
                </div>
                <div className="row">
                    <div className="col-2">Poštarina</div>
                    <div className="col-1 text-right">{shippingPrice.toFixed(2)} rsd</div>
                </div>
                <div className="row">
                    <div className="col-2"><strong>Ukupno</strong></div>
                    <div className="col-1 text-right"><strong>{totalPrice.toFixed(2)} rsd</strong></div>
                </div>
                <hr />
                <div className="row">
                    <button onClick={() => alert('Vaša porudžbina je prosleđena. Hvala na kupovini.')}>Poruči</button>
                </div>
                </>
            )}
        </aside>

    );
}