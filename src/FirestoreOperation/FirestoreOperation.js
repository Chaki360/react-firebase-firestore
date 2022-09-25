import { addDoc, collection, deleteDoc, doc, getDocs } from '@firebase/firestore';
import { AiFillCaretDown, AiFillDelete } from 'react-icons/ai'
import { AiFillCaretUp } from 'react-icons/ai'
import React, { useEffect, useRef, useState } from 'react';
import { database } from '../Firebase/Firebase.init';

const FireStoreOperation = () => {

    const addPlayers = useRef()
    const [players, setPlayers] = useState([]);
    const playersRef = collection(database, "players");

    useEffect(() => {
        const getPlayers = async () => {
            const data = await getDocs(playersRef);
            setPlayers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
        getPlayers()
    }, [playersRef]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = addPlayers.current.value;
        await addDoc(playersRef, { name: name });
        addPlayers.current.value = ''
    }
    const handleDelete = async (id) => {
        const playerDoc = doc(database, "players", id);
        await deleteDoc(playerDoc)
    }




    return (
        <div>
            {
                players.map(player => <div key={player.id}>
                    <div className='flex justify-center'>
                        <div className='w-1/4 py-3 px-4 rounded-lg mt-3 flex justify-between items-center'>
                            <h2 className='text-2xl'>{player.name}</h2>
                            <div className='flex items-center gap-6 '>
                                <button><AiFillCaretUp className='text-blue-900' /></button>
                                <button><AiFillCaretDown className='text-blue-900' /></button>
                                <button onClick={() => handleDelete(player.id)}><AiFillDelete className="text-red-500" /></button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <div className=' flex justify-center mt-3'>
                <div className='w-1/4'>
                    <form className='bg-blue-200 py-2 px-4 rounded-lg flex justify-between' onSubmit={handleSubmit}>
                        <input className='p-2 border rounded-lg w-full border-blue-900' type="text" ref={addPlayers} />
                        <input className='py-2 px-4 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition-all cursor-pointer ml-3' type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FireStoreOperation;