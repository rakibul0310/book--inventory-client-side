import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item/Item';

const InventoryItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/home/book')
            .then(res => {
                setItems(res.data)
            })
    }, [])
    return (
        <div className='flex flex-col justify-center items-center px-5 mt-20'>
            <h2 className='text-3xl underline decoration-[#FDC300] font-bold text-black mb-8'>Inventory Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center content-center px-10'>
                {
                    items.map(item => <Item Item={item} key={item._id}></Item>)
                }
            </div>
            <button className='btn px-8 py-2 border-[1px] border-[#1566AA] mt-10 mb-10 text-[#1566AA] text-xl md:text-3xl font-medium hover:bg-[#1566AA] hover:text-white duration-500'><Link to="/manageinventories">Manage Inventories</Link></button>
        </div>
    );
};

export default InventoryItems;