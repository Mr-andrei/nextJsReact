import React from 'react';


interface Params {
    params: { id: string }
}

const ProductPage = ({params: {id}}: Params) => {
    return (
        <div>ProductPage
        </div>
    );
};

export default ProductPage;