import React, { useEffect, useState } from 'react';
import Inventory from './Inventory';

const ManageInventory = () => {
    const [allItems, setAllItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])
    return (
        <div className='flex flex-col w-full justify-center px-5'>
            <table className='border-collapse border border-gray-300 text-center p-3 my-7'>
                <thead className='bg-blue-200/70 text-xl'>
                    <tr>
                        <th className='border border-gray-300 py-4'>Name</th>
                        <th className='border border-gray-300 py-4'>Details</th>
                        <th className='border border-gray-300 py-4'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allItems.map(item => <Inventory item={item} key={item._id}></Inventory>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventory;