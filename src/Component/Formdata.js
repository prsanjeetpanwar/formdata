import React, { useState } from 'react';

const FormTable = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState('');
  const [phone, setPhone] = useState('');
  const [tableData, setTableData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the form data to the table
    const formData = {
      name,
      age,
      address,
      education,
      phone,
    };
    setTableData([...tableData, formData]);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setAge('');
    setAddress('');
    setEducation('');
    setPhone('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ width: '400px', padding: '20px', borderRadius: '5px', backgroundColor: '#f1f1f1' }}>
        <div>
          <label htmlFor="name"style={{display:'block',
          marginBottom:'5px',fontWeight:'bold'}} 
>Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor='age'style={{display:'block',
          marginBottom:'5px',fontWeight:'bold'}}
>Age:</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <label htmlFor="address"style={{display:'block',
          marginBottom:'5px',fontWeight:'bold'}}
>Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="education"style={{display:'block',
          marginBottom:'5px',fontWeight:'bold'}}
>Education:</label>
          <input type="text" id="education" value={education} onChange={(e) => setEducation(e.target.value)} />
        </div>
        <div>
          <label htmlFor="phone"style={{display:'block',
          marginBottom:'5px',fontWeight:'bold'}}
>Phone:</label>
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  />
        </div>
        <button type="submit">Submit</button>
      </form>

      <button
        onClick={() => setShowTable(!showTable)}
        style={{
          display: 'block',
          width: '30%',
          padding: '10px',
          marginTop: '10px',
          backgroundColor: '#4caf50',
          color: '#fff',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        {showTable ? 'Hide Table' : 'Show Table'}
      </button>

      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Education</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.address}</td>
                <td>{data.education}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FormTable;




