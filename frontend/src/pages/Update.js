import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const params = useParams();
  const { id } = params;

  const [values, setValues] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });

  useEffect(() => {
    fetch(`http://localhost:4000/api/hello/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setValues(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:4000/api/hello/${id}`, values)
      .then(() => {
        navigate('/summary');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };
  const Navigatec = useNavigate()
    const handleCancel =() =>{Navigatec('/Summary')}

  return (
    <form className="create" onSubmit={handleSubmit}>
      <label>Product Name:</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={values.name}
      />
      <br />

      <label>Description:</label>
      <input
        type="text"
        name="description"
        onChange={handleChange}
        value={values.description}
      />
      <br />

      <label>Category:</label>
      <select onChange={handleChange} value={values.category} style={{ width: '50%'}}>
        <option value="">Select category</option>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
      </select>
      <br />

      <label>Quantity:</label>
      <input
        type="number"
        name="quantity"
        onChange={handleChange}
        value={values.quantity}
      />
      <br />

      <label>Price:</label>
      <input
        type="number"
        name="price"
        onChange={handleChange}
        value={values.price}
      />

    <div style={{ display: 'flex', justifyContent: 'left', marginTop: '10px' }}>
      <button style={{ marginRight: '10px' }}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
    </form>
  );
}

export default Update;
