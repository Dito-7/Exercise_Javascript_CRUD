import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [pointTak, setPointTak] = useState('');
    const history = useNavigate();
    const { id } = useParams();

    const getProductById = async(e) => {
        e.preventDefault();
        const taskDocRef = doc(db, 'mahasiswajs', id)
        console.log(taskDocRef)
        await updateDoc(taskDocRef, {
            title: title,
            pointTak: pointTak
        })
        history("/")
    }

    return (
        <div>
            <form onSubmit={getProductById}>
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
                    <button className="button is-primary">Update</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default EditProduct