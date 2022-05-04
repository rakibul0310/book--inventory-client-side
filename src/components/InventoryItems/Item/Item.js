import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { image, name, description, price, quantity, _id, supplier } = props.Item
    return (
        <div className='flex flex-col justify-center items-center border-[1px] border-gray-200 py-3 duration-700'>
            <img className='' src={image} alt="" width={130} height={150} />
            <div className='p-3 flex flex-col'>
                <h3 className='font-bold mt-3'>{name}</h3>
                <span className='font-semibold'>Price: ${price}</span>
                <span className='font-semibold'>Quantity: {quantity}</span>
                <span className='font-semibold'>Supplier: {supplier}</span>
                <p className='text-sm'><span className='font-semibold'>Description: </span>{`${description.slice(0, 150)}....`}</p>
            </div>
            <Link to={`/inventory/${_id}`}>
                <button className='px-6 py-2 mt-3 duration-500 text-xl text-[#1566AA] font-semibold border-[2px] border-[#1566AA] rounded-3xl hover:bg-[#1566AA] hover:text-white'>Update Stock</button>
            </Link>
        </div>
    );
};

export default Item;