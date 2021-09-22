import React, { useState } from 'react';

const Category = () => {
  const [name, setName] = useState("");

  return (
    <div className="category">
      <form>
        <label htmlFor="category">Category</label>
        <div className="d-flex">
          <input 
            type="text" 
            name="category" 
            id="category" 
            value={name} 
            onChange={e => setName(e.target.value)} 
          />

          <button type="submit">Create</button>
        </div>
      </form>

      <div>
        <div className="category_row">
          <p className="m-0 text-capitalize">Category Name</p>

          <div>
            <i className="fas fa-edit mx-2" />
            <i className="fas fa-trash-alt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;