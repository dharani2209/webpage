import { useState } from 'react'
import axios from "axios";
import { useNavigate} from 'react-router-dom';
const AddProduct = () => {
    const [place, setPlace] = useState('');
    const [days, setDays] = useState('');
    const [pack, setPack] = useState('');
    const [covid_restrictions, setCovid_restrictions] = useState('');
    const [temperature, setTemperature] = useState('');
    const navigate = useNavigate();
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8181/',{
          place: place,
          days:days,
          pack:pack,
          covid_restrictions:covid_restrictions,
          temperature:temperature
        });
        navigate("/");
    }
 
    return (
        <div className='add'>
        <form onSubmit={ saveProduct }>
       <table className="tableadd">
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
                    <input 
                        className="input"
                        type="text"
                        placeholder="Enter place Name"
                        value={ place }
                        pattern="[a-zA-Z]{2,}" required
                        onChange={ (e) => setPlace(e.target.value) }
                    />
                </div>   
                </td>
                <td>  
                <div className="field">
                    <input 
                        className="input"
                        type="text"
                        placeholder="Enter days"
                        value={ days }
                        min="1"
                        max="100"
                        inputMode='numeric'
                        title="choose 1-100 days"
                        onChange={ (e) => setDays(e.target.value) }
                    />
                </div>
                </td>  
                <td>  
                <div className="field">
                    <input 
                        className="input"
                        type="text"
                        placeholder="Enter the amount"
                        value={ pack }
                        min="1000"
                        max="100000"
                        inputMode='numeric'
                        title="Please fill the amount"
                        onChange={ (e) => setPack(e.target.value) }
                    />
                </div>
                </td>  
                <td>  
                <div className="field">
                    <input 
                        className="input"
                        type="text"
                        placeholder="covid_restrictions"
                        value={ covid_restrictions }
                        title="Please type Yes or No"
                        onChange={ (e) => setCovid_restrictions(e.target.value) }
                    />
                </div>
                </td>  
                <td>  
                <div className="field">
                    <input 
                        className="input"
                        type="text"
                        placeholder="Enter the temperature"
                        value={ temperature }
                        min="1"
                        max="60"
                        inputMode='numeric'
                        title="Please enter the Temperature"
                        onChange={ (e) => setTemperature(e.target.value) }
                    />
                </div>
                </td>  
                <div className="field">
                    <button id="btnsave"className="primary" title="please click! to save" >Save</button>
                </div>
           
            </tr></tbody>
           
            </table>
            </form>
        </div>
    )
}
 
export default AddProduct
