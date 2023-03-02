import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Detail = (props) => {
    const navigate = useNavigate()
    const [person, setPerson] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })

            .catch(err => console.error(err));
    }
    return (
        <div>
            <h1> All Products</h1>
            <p>Title: {person.title}</p>
            <p>Price: {person.price}</p>
            <p>Description: {person.description}</p>
            <p><a href={`/products/${person._id}/edit`}>Edit Product</a></p>
            <button onClick={() => deleteProduct(person._id)}>Delete</button>
        </div>
    )
}

export default Detail;