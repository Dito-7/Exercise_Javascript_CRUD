import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [pointTak, setPointTak] = useState('');
    const history = useNavigate();

    const saveProduct = async(e) => {
        e.preventDefault();
        await addDoc(collection(db, 'mahasiswajs'), {
            title: title,
            pointTak : pointTak,
            })
        history("/")
    }

    return (
        <div>
            <form onSubmit={saveProduct}>
            <div className="field">
                <label className="label">Nama Mahasiswa</label>
                <div className="control">
                    <input className="input" value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Nama Mahasiswa"></input>
                </div>
            </div>
            <div className="field">
                <label className="label">Point TAK</label>
                <div className="control">
                    <input className="input" value={pointTak} onChange={(e)=> setPointTak(e.target.value)} type="text" placeholder="Point TAK"></input>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-primary">Save</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default AddProduct