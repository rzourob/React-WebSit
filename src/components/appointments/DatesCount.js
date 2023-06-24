import React from 'react'

const DatesCount = ({ person }) => {
  return (
    <div className="row col-sm-8 ustify-content-between py-3 m-auto fs-5 fw-bold lh-lg text-center">
    لديك {person.length} مواعيد اليوم
  </div>
  )
}

export default DatesCount
