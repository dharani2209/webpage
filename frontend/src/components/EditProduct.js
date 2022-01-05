import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditProduct = () => {
    const [place, setPlace] = useState('');
    const [days, setDays] = useState('');
    const [pack, setPack] = useState('');
    const [covid_restrictions, setCovid_restrictions] = useState('');
    const [temperature, setTemperature] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const updateProduct = async (e) => {
        e.preventDefault();
        const response = await axios.put(`http://localhost:8181/${id}`,{
            place: place,
            days:days,
            pack:pack,
            covid_restrictions:covid_restrictions,
            temperature:temperature
        });
        navigate("/");
    }
 
    useEffect(() => {
        getProductById();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
 
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:8181/${id}`);
        console.log(response.data);
        setPlace(response.data[0].place);
        setDays(response.data[0]
            .days);
        setPack(response.data[0].pack);
        setCovid_restrictions(response.data[0].covid_restrictions);
        setTemperature(response.data[0].temperature);
        
    }
 
    return (
        <div className='container'>
            <form onSubmit={ updateProduct }>
            <table className="tableedit">
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Days</th>
                        <th>Pack</th>
                        <th>Covid Restrictions</th>
                        <th>Temperature</th>
                        <th>Action</th>
                        
                    </tr>
                </thead> 
                <tbody> 
                     
                    <tr>
                <td>        
                <div className="field">
                    <label className="label">PLACE</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Place"
                        value={ place }
                        onChange={ (e) => setPlace(e.target.value) }
                    />
                </div>
                </td>  
                <td>  
                <div className="field">
                    <label className="label">DAYS</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="days"
                        value={ days }
                        onChange={ (e) => setDays(e.target.value) }
                    />
                </div>
                </td>  
                <td>  
                <div className="field">
                    <label className="label">PACK</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="pack"
                        value={ pack }
                        onChange={ (e) => setPack(e.target.value) }
                    />
                </div>
                </td>  
                <td>  
                <div className="field">
                    <label className="label">COVID_RESTRICTIONS</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="covid_restrictions"
                        value={ covid_restrictions }
                        onChange={ (e) => setCovid_restrictions(e.target.value) }
                    />
                </div>
                </td>  
                <td>  
                <div className="field">
                    <label className="label">TEMPERATURE</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="temperature"
                        value={ temperature }
                        onChange={ (e) => setTemperature(e.target.value) }
                    />
                </div>
                </td>  
                <div className="field">
                    <button id="btnupdate" className="button is-primary" title="please click! to update">Update</button>
                </div>
           </tr> </tbody>
            </table>
            </form>
        </div>
    )
}
 
export default EditProduct

