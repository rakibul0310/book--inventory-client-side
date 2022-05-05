import React, { useState } from 'react';

const AddItem = () => {
    const [email, setEmail] = useState('');
    const [itemName, setItemName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [supllier, setSupplier] = useState('');
    const [sold, setSold] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleItemName = (e) => {
        setItemName(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(parseFloat(e.target.value))
    }
    const handleQuantity = (e) => {
        setQuantity(parseInt(e.target.value))
    }
    const handleSupplier = (e) => {
        setSupplier(e.target.value)
    }
    const handleSold = (e) => {
        setSold(e.target.value)
    }

    const handleAddItem = (e) => {
        e.preventDefault();
        const newItem = { email, itemName, image, description, price, quantity, supllier, sold }
        fetch('http://localhost:5000/additem', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newItem),
        })
            .then(res => res.json())
            .then(data => console.log(data))

        // e.target.reset();
    }

    return (
        <div className='flex flex-col justify-center items-center my-10'>
            <h2 className='text-3xl font-medium'>Add a new Item</h2>
            <form onSubmit={handleAddItem} className='flex flex-col w-3/4 md:w-1/4'>
                <label className='text-lg mt-5 text-left' htmlFor="email">Email</label>
                <input onBlur={handleEmail} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="email" name="email" id="email" placeholder='Enter your email' required />
                <label className='text-lg mt-3 text-left' htmlFor="name">Item name</label>
                <input onBlur={handleItemName} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="text" name="name" id="name" placeholder='Item name' required />
                <label className='text-lg mt-3 text-left' htmlFor="image">Image URL</label>
                <input onBlur={handleImage} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="text" name="image" id="image" placeholder='image' required />
                <label className='text-lg mt-3 text-left' htmlFor="description">Description</label>
                <textarea onBlur={handleDescription} className='outline-[#1566AA] border-[1px] border-[#EBEBEB]' name="description" id="description" cols="30" rows="10" placeholder='description' required></textarea>
                <label className='text-lg mt-3 text-left' htmlFor="price">Price</label>
                <input onBlur={handlePrice} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="number" name="price" id="price" placeholder='price' required />
                <label className='text-lg mt-3 text-left' htmlFor="quantity">Quantity</label>
                <input onBlur={handleQuantity} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="number" name="quantity" id="quantity" placeholder='quantity' required />
                <label className='text-lg mt-3 text-left' htmlFor="supplier">Supplier</label>
                <input onBlur={handleSupplier} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="text" name="supplier" id="supplier" placeholder='supplier' required />
                <label className='text-lg mt-3 text-left' htmlFor="sold">Sold</label>
                <input onBlur={handleSold} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="text" name="sold" id="sold" placeholder='sold' required />
                <input className='my-5 px-6 py-1 bg-green-500/70 hover:bg-green-500 text-white text-lg font-semibold cursor-pointer' type="submit" value="ADD ITEM" />
            </form>
        </div>
    );
};

export default AddItem;