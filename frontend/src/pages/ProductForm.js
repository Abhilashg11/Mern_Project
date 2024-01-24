import { useState } from 'react'


const ProductForm = () => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [error,setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {name,description, category, quantity, price}
    
    const response = await fetch('http://localhost:4000/api/hello', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

   
    if (response.ok) { 
        setName('')
        setDescription('')
        setCategory('')
        setQuantity('')
        setPrice('')
        setError('')
    
    }

  }
  const handleCancel = () => {
    window.location.reload();
  };

  return (
  <form className="create" onSubmit={handleSubmit}> 
      <label>Product Name</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
       
      />

     <br></br>
    
      <label>Description</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
    
      />
  
     <br></br>
    
      <label>Category</label>
      <select onChange={(e) => setCategory(e.target.value) } value={category} style={{ width: '50%'}}>
        <option value="">Select category</option>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
      </select>
 
    <br></br>
    
      < label>Quantity</label>
      <input 
        type="number" 
        onChange={(e) => setQuantity(e.target.value)} 
        value={quantity}
        min="0"

      />
     
     <br></br>
    
      <label>Price</label>
      <input 
        type="number" 
        onChange={(e) => setPrice(e.target.value)} 
        value={price}
        min="0"
        
      />
    <br></br>
    <div style={{ display: 'flex', justifyContent: 'left', marginTop: '10px' }}>
        <button style={{ marginRight: '10px' }}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
    </div>
  </form>
  )
}

export default ProductForm
