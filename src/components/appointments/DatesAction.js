import React from 'react'
import { Button, container } from 'react-bootstrap';
const DatesAction = ({DeleteData,onViewData}) => {
  return (
    <div className="col-sm-8 justify-content-between m-auto d-flex my-3">

    <Button onClick={DeleteData} className="btn-style">مسح الكل</Button>
    <Button onClick={onViewData} className="btn-style">عرض</Button>


  </div>
  )
}

export default DatesAction
