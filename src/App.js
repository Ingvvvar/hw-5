import React, { useReducer, useState } from 'react';
import './App.css';
import { Calculator } from './components/Calc'

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      apple: 'spartac',
      count: 100,
      name: 'Vasiliy',
      surname: 'Alibabaevich',
      family: 'Pushkin',
      'gift-wrap': false,
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 10000);
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  return (
    <div className="wrapper">
      <h1>Apples order form</h1>
      
      <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange} value={formData.name || ''} />
            <p>Surname</p>
            <input name="surname" onChange={handleChange} value={formData.surname || ''} />
            <p>Family</p>
            <input name="family" onChange={handleChange} value={formData.family || ''} />
          </label>
        </fieldset>

        <fieldset disabled={submitting}>
          <label>
            <p>Apple variety</p>
            <select name="apple" onChange={handleChange} value={formData.apple || ''}>
              <option value="">--Please choose an option--</option>
              <option value="antonovka">Antonovka</option>
              <option value="mcIntosh">McIntosh</option>
              <option value="spartac">Spartac</option>
            </select>
          </label>
          <label>
            <p>Number of kilograms</p>
            <input type="number" name="count" onChange={handleChange} step="10" value={formData.count || ''} />
          </label>
          <label>
            <p>Gift Wrap</p>
            <input
             checked={formData['gift-wrap'] || false}
             disabled={formData.apple !== 'mcIntosh'}
             name="gift-wrap"
             onChange={handleChange}
             type="checkbox"
            />
          </label>
        </fieldset>
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
      {submitting &&
        <div><p>your order in json format: <span>{JSON.stringify(formData)}</span></p></div>
      }
      <hr />
      <Calculator />
    </div>
  )
}

export default App;