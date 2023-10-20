/*import React,{useRef} from "react"; 
//import { initializeApp } from 'firebase/app';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {firestore} from "../firebase"
import {  collection, addDoc } from 'firebase/firestore/lite';
 
export default function Home(){
    const messageRef = useRef();
    const ref = collection(firestore,"messages");
    const handleSave =  async(e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        let data = {
            message: messageRef.current.value,
        }
        try {
            await addDoc(ref, data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSave}>
                    <label>Enter message</label>
                    <input type="text" ref={messageRef} />
                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    );
}
*/