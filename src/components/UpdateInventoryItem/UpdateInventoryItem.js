import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateInventoryItem = () => {
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
        if (newItem.quantity === 0) {
            alert("Please restock item");
            return;
        }
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
        setItem(newItem);
        setQuantity(newItem.quantity);
    }

    const handleRestock = (e) => {
        e.preventDefault();
        const restockQuantity = e.target.quantity.value;
        const newItem = item;
        const url = `http://localhost:5000/inventory/${newItem._id}`;
        newItem.quantity = newItem.quantity + parseInt(restockQuantity);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        setItem(newItem);
        setQuantity(newItem.quantity);

        toast("Restock item successfully!");
        e.target.reset();
    }

    return (
        <div className='flex flex-col justify-center items-center px-5 my-20'>
            <div className='w-full flex justify-end'>
                <button className='btn px-5 md:px-8 py-1 md:py-2 border-[1px] border-[#1566AA] mb-10 text-[#1566AA] text-xl md:text-3xl font-medium hover:bg-[#1566AA] hover:text-white duration-500'><Link to="/manageinventories">Manage Inventories</Link></button>
            </div>
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
            <div className='w-full flex flex-col justify-center items-center mt-5'>
                <h2 className='text-3xl text-green-500/70 font-bold mb-3 mt-8'>Restock The Item</h2>
                <form className='flex w-3/4 md:w-1/4' onSubmit={handleRestock}>
                    <div className='flex border-[1px] border-[#1566AA] p-0 w-fit h-fit mt-3'>
                        <input className='md:w-1/2 lg:w-full m-0 pl-2 bg-transparent text-gray-900 font-thin border-0 outline-none' type="number" name="quantity" id="quantity" placeholder='Quantity you want to restock' required />
                        <input className='px-6 py-1 bg-[#1567aab6] hover:bg-[#1566AA] text-white duration-500 text-lg font-medium cursor-pointer' type="submit" value="Restock" />
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default UpdateInventoryItem;