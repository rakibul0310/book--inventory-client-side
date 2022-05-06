import React, { useEffect, useState } from 'react';
import Inventory from './Inventory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        fetch('https://fierce-hollows-01189.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])

    const handleDeleteItem = (id) => {
        let agree = window.confirm("Are you sure?");
        if (agree) {
            const url = `https://fierce-hollows-01189.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = allItems.filter(item => item._id !== id)
                    setAllItems(remaining);
                    console.log(data);
                })
        } else {
            return;
        }
    }

    return (
        <div className='flex flex-col w-full justify-center px-5'>
            <div className='mt-10 mb-5 flex justify-center md:justify-end px-10'>
                <button className='btn px-6 py-1 text-2xl font-semibold text-white bg-green-500/70 hover:bg-green-500 duration-500'><Link to="/inventory/additem"><FontAwesomeIcon icon={faCirclePlus} /> Add Item</Link></button>
            </div>
            <h3 className='text-[#1566AA] text-3xl font-bold mb-5'>Manage Inventory</h3>
            <table className='border-collapse border border-gray-300 text-center p-3 mb-7'>
                <thead className='bg-blue-200/70 text-xl'>
                    <tr>
                        <th className='border border-gray-300 py-4'>Name</th>
                        <th className='border border-gray-300 py-4'>Details</th>
                        <th className='border border-gray-300 py-4'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allItems.map(item => <Inventory item={item} handleDeleteItem={handleDeleteItem} key={item._id}></Inventory>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventory;