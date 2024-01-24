import { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'; 


function Read() {
    const params = useParams()
    const {id} = params

    const [values, setValues] = useState({
       
        name:'',
        description:'',
        category:'',
        quantity:'',
        price:'',

    })
    
    
    const Navigatec = useNavigate()
    const handleCancel =() =>{Navigatec('/Summary')}

    useEffect(() => {
        fetch('http://localhost:4000/api/hello'+`/${id}`)
            .then((response)=> response.json())
            .then((data) => {setValues(data)})
            
    
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        },[]);       



  return (
    <form className="create" > 

      <label>Product Name:</label>
      <input 
        type="text" 
        // onChange={(e) => setName(e.target.value)} 
        value={values.name} readOnly
       
     />
     <br></br>

     <label>Description:</label>
      <input 
        type="text" 
        // readOnly={(e) => setDescription(e.target.value)} 
        value={values.description} readOnly
   
     />
     <br></br>

     <label>Category:</label>
      <input 
        type="text" 
        // onChange={(e) => setCategory(e.target.value)} 
        value={values.category} readOnly

    />
    <br></br>

    < label>Quantity:</label>
      <input 
        type="number" 
        // onChange={(e) => setQuantity(e.target.value)} 
        value={values.quantity} readOnly

     />
     <br></br>

     <label>Price:</label>
      <input 
        type="number" 
        // onChange={(e) => setPrice(e.target.value)} 
        value={values.price} readOnly
        
     />

    
    
<button onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default Read
