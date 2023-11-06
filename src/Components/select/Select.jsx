import React from 'react'
import "./select.css"

function Select({ matchCatagory, setMatchCatagory }) {
   
  return (
    <div >
      <select className='select'
        value={matchCatagory}
        onChange={(e) => setMatchCatagory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="International">International</option>
        <option value="Domestic">Domestic</option>
        <option value="Women">Women</option>
      </select>
    </div>
  );
}

export default Select