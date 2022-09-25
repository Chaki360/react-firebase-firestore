import { addDoc, collection, deleteDoc, doc, getDocs } from '@firebase/firestore';
import { AiFillCaretDown, AiFillDelete } from 'react-icons/ai'
import { AiFillCaretUp } from 'react-icons/ai'
import React, { useRef, useState } from 'react';
import { database } from '../Firebase/Firebase.init';
import { toast } from 'react-toastify';

const FireStoreOperation = () => {

    const addPlayers = useRef();
    const [players, setPlayers] = useState([]);
    const playersRef = collection(database, "players");

    getDocs(playersRef)
        .then((allPlayers) => {
            let players = []
            allPlayers.docs.forEach((doc) => {

                players.push({
                    ...doc.data(), id: doc.id
                })
            })
            setPlayers(players)
        })
        .catch(err => {
            console.log(err.message)
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = addPlayers.current.value;
        await addDoc(playersRef, { name: name });
        addPlayers.current.value = ''
        toast.success("Successfully Added")
    };
    const handleDelete = async (id) => {
        const playerDoc = doc(database, "players", id);
        await deleteDoc(playerDoc)
        toast.error("Deleted Successfully")
    };
    const handleSortingUp = async (id) => {

    };
    const handleSortingDown = async (id) => {

    };




    return (
        <div>
            <h1 className='text-4xl mb-4 mt-4 text-center font-bold text-teal-900'>List of Sportsman</h1>
            {
                players.map(player => <div key={player.id}>
                    <div className='flex justify-center'>
                        <div className='w-1/4 py-3 px-4 rounded-lg mt-3 flex justify-between items-center'>
                            <h2 className='text-2xl'>{player.name}</h2>
                            <div className='flex items-center gap-6 '>
                                <button onClick={() => handleSortingUp(player.id)}><AiFillCaretUp className='text-teal-900' /></button>
                                <button onClick={() => handleSortingDown(player.id)}><AiFillCaretDown className='text-teal-900' /></button>
                                <button onClick={() => handleDelete(player.id)}><AiFillDelete className="text-red-500" /></button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <div className=' flex justify-center mt-3'>
                <div className='w-1/4'>
                    <form className='bg-slate-200 py-2 px-4 rounded-lg flex justify-between' onSubmit={handleSubmit}>
                        <input className='p-2 border rounded-lg w-full border-teal-900' type="text" ref={addPlayers} />
                        <input className='py-2 px-4 bg-teal-900 text-white rounded-lg hover:bg-teal-700 transition-all cursor-pointer ml-3' type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FireStoreOperation;