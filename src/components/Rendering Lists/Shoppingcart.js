import React from 'react';

const Shoppingcart = ({ users }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {user.name}, <strong>Price:</strong> {user.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Shoppingcart;
