import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import {collection, query, onSnapshot,deleteDoc,doc } from "firebase/firestore";
import { db } from "../firebase/config";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fectdata();
    }, []);

    const fectdata = async() => {
        const response = query(collection(db, 'mahasiswajs'))
        onSnapshot(response, (data) => {
            setProducts(data.docs.map (doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }

    const deleteProduct = async(id) => {
        const taskDocRef = doc(db, 'mahasiswajs', id)
        await deleteDoc(taskDocRef)
        fectdata();
    }

    return (
        <div>
            <Link to="/add" className="button is-primary">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Mahasiswa</th>
                        <th>Point TAK</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index)=>(
                    <tr key={product.id}>
                        <td>{ index + 1}</td>
                        <td>{ product.data.title }</td>
                        <td>{ product.data.pointTak }</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                            <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;