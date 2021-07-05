import React from 'react'

const Filter = ({value, filterHandler}) => {
    return (
      <div>filter critera: <input value={value} onChange={filterHandler} />
      </div>
    )
  }


export default Filter