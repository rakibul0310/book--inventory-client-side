import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Inventory = (props) => {
    const { image, name, _id, price, quantity, supplier } = props.item;
    const { handleDeleteItem } = props;
    console.log(props)


    return (
        <tr>
            <td className='border border-gray-300'>
                <div className='flex flex-col justify-center items-center p-3'>
                    <img src={image} alt="" width={70} height={80} />
                    <h2 className='font-semibold mt-2'>{name}</h2>
                </div>

            </td>
            <td className='border border-gray-300'>
                <div className='flex flex-col justify-center items-center'>
                    <span><span className='font-medium'>Price: </span>${price}</span>
                    <span><span className='font-medium'>Quantity: </span>{quantity}</span>
                    <span><span className='font-medium'>Supplier: </span>{supplier}</span>
                </div>
            </td>
            <td className='border border-gray-300'>
                <div className='flex flex-col justify-center items-center p-2'>
                    <button className='btn px-6 py-1 text-sm md:text-lg font-normal bg-green-500/70 hover:bg-green-500 duration-500'><Link to={`/inventory/${_id}`}>Update</Link></button>
                    <button onClick={() => handleDeleteItem(_id)} className='btn px-4 md:px-6 py-1 text-sm md:text-lg font-normal bg-red-500/70 hover:bg-red-500 duration-500 mt-5'><FontAwesomeIcon icon={faTrash} /> Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default Inventory;