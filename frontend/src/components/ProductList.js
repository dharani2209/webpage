import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css"
 
const ProductList = () => {
    const [products, setProduct] = useState([]);
 
    useEffect(() => {
        getProducts();
    }, []);
 
    const getProducts = async () => {
        const response = await axios.get('http://localhost:8181/');
        setProduct(response.data);
    }
 
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:8181/${id}`);
        getProducts();
    }
 
    return (
        <div className="totalcontainer">
        
            <Link to="/add" id="btn2" className="button is-primary mt-2">New Data</Link>



            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Place</th>
                        <th>Days</th>
                        <th>Pack</th>
                        <th>Covid Restrictions</th>
                        <th>Temperature</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                        <tr key={ product.id }>
                            <td>{ index + 1 }</td>
                            <td>{ product.place }</td>
                            <td>{ product.days }</td>
                            <td>{ product.pack }</td>
                            <td>{ product.covid_restrictions }</td>
                            <td>{ product.temperature }</td>
                            <td>
                                <Link to={`/edit/${product.id}`} id="btn" className="button is-small" title="please click! to edit">Edit</Link>
                                <button onClick={ () => deleteProduct(product.id) } id="btn1"className="button is-small is-danger" title="Do you want to delete?">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default ProductList
