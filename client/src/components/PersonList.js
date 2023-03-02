import React from 'react'

const PersonList = (props) => {
    const { deleteProduct } = props;
    return (
        <div>
            <h1>All Products</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {props.people.map((person, i) =>
                        <tr key={i}>
                            <td><a href={`/products/${person._id}`}>{person.title}</a></td>
                            <td><button onClick={() => deleteProduct(person._id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default PersonList;

