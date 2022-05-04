import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventorySingleItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        axios.get(url)
            .then(res => {
                setItem(res.data);
                setQuantity(res.data.quantity)
            })
    }, [id])

    const handleDelivered = (id) => {
        let newItem = item;
        newItem.quantity = newItem.quantity - 1;

        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        setQuantity(newItem.quantity);
        console.log(id)
    }

    return (
        <div className='flex flex-col justify-center items-center px-5 my-20'>
            <div className='flex flex-col justify-center items-center border-[1px] border-gray-300 rounded-md py-3 w-full md:w-2/4'>
                <img className='' src={item.image} alt="" width={230} height={250} />
                <div className='p-3 flex flex-col'>
                    <h3 className='font-bold mt-3'>{item.name}</h3>
                    <span className='font-semibold leading-loose'>Price: ${item.price}</span>
                    <span className='font-bold'>Quantity: <span className='text-3xl text-red-500'>{quantity}</span></span>
                    <span className='font-semibold leading-[3em]'>Supplier: {item.supplier}</span>
                    <span className='font-semibold text-[#FDC300]'>ID: {item._id}</span>
                    <span className='font-semibold leading-[2em]'>Sold: {item.sold}</span>
                    <p className='text-sm'><span className='font-semibold'>Description: </span>{item.description}</p>
                </div>
                <button onClick={() => handleDelivered(id)} className='px-6 py-2 mt-3 duration-500 text-xl text-white font-semibold border-[2px] rounded-3xl bg-red-500/70 hover:bg-red-500 hover:text-white'>Delivered</button>
            </div>
        </div>
    );
};

export default InventorySingleItem;