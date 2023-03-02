import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';

const Main = (props) => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setPeople(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [loaded]);

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data)
                setLoaded(false)
            })

            .catch(err => console.error(err));
    }

    return (
        <div>

            <PersonForm />
            <hr />
            {loaded && <PersonList people={people} deleteProduct={deleteProduct} />}
        </div>
    )
}

export default Main;

