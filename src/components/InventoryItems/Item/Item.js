import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { image, name, description, price, quantity, id, sold, supplier } = props.Item
    return (
        <div className='flex flex-col justify-center items-center border-[1px] border-gray-200 py-3 duration-700'>
            <img className='' src={image} alt="" width={130} height={150} />
            <div className='p-3 flex flex-col'>
                <h3 className='font-bold mt-3'>{name}</h3>
                <span className='font-semibold'>Price: ${price}</span>
                <span className='font-semibold'>Quantity: {quantity}</span>
                <span className='font-semibold'>Supplier: {supplier}</span>
                <p className='text-sm'><span className='font-semibold'>Description: </span>{description}</p>
            </div>
            <Link to={`/item/${name}`}>
                <button className='px-6 py-2 duration-500 text-xl text-black font-semibold border-[2px] border-[#FDC300] rounded-3xl hover:bg-[#FDC300] hover:text-white'>Update Stock</button>
            </Link>
        </div>
    );
};

export default Item;