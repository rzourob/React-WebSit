import React from 'react'

const DatesList = ({ person }) => {
  return (
    <div className="row col-sm-8 justify-content-center m-auto ">
      <div className="rectangle p-2">

        {person.length ? (person.map((item) => {
          return (
            <div key={item.id} className=" d-flex border-bottom mx-3 my-2">
              <img className="rimg" src="img/1.jpg" alt="test" ></img>
              <div className="px-3">
                <p className="d-inline fs-5 ">{item.name}</p>
                <p className="fs-6">{item.date}</p>
              </div>
            </div>
          )
        })) : null}

      </div>

    </div>
  )
}

export default DatesList
