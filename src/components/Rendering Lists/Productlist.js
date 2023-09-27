import React from 'react';

const Productlist = (props) => {
    const { products } = props;

    return (
        <div>
            <ul>
                {products.filter(product => product.rate < 10).map(filteredProduct => (
                    <li key={filteredProduct.id}>
                        {filteredProduct.name} - {filteredProduct.rate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Productlist;
