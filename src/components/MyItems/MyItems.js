import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from './MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/myitems?email=${user.email}`;
        axios.get(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => setMyItems(res.data))
    }, [user])

    const handleDeleteItem = (id) => {
        let agree = window.confirm("Are you sure?");
        if (agree) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myItems.filter(item => item._id !== id)
                    setMyItems(remaining);
                    console.log(data);
                })
        } else {
            return;
        }
    }

    return (
        <div className='flex flex-col w-full justify-center px-5 my-10'>
            <h3 className='text-[#1566AA] text-3xl font-bold mb-5'>My Items</h3>
            <table className='min-h-[200px] border-collapse border border-gray-300 text-center p-3 mb-7'>
                <thead className='bg-blue-200/70 text-xl'>
                    <tr>
                        <th className='border border-gray-300 py-4'>Name</th>
                        <th className='border border-gray-300 py-4'>Details</th>
                        <th className='border border-gray-300 py-4'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myItems.map(item => <MyItem item={item} handleDeleteItem={handleDeleteItem} key={item._id}></MyItem>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyItems;