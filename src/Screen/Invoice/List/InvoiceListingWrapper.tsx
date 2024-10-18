import React from 'react'
import InvoiceListing from './InvoiceListing'
import { useNavigate } from 'react-router-dom'

type Props = {}

const InvoiceListingWrapper = (props: Props) => {
  const navigate=useNavigate()
  const   HandlePayDue=()=>{
  navigate("/shop-bill-management/due-amount")

    }
    const HandleEdit=()=>{
      console.log("edit")
  }
  const HandleView=()=>{
    console.log("Veiw")
}
  return (
    <div><InvoiceListing   HandlePayDue={ HandlePayDue}  HandleEdit={ HandleEdit}  HandleView={ HandleView}/></div>
  )
}

export default InvoiceListingWrapper