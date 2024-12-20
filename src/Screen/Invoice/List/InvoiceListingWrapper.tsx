import React from 'react'
import InvoiceListing from './InvoiceListing'
import { useNavigate } from 'react-router-dom'
import { useGetAllInvoiceQuery } from '../../../Slice/invoiceapislice'

type Props = {}

const InvoiceListingWrapper: React.FC<Props> = (props) => {
  const { data ,isLoading,isError} = useGetAllInvoiceQuery()
  const navigate = useNavigate()

  const HandlePayDue = () => {
    navigate("/shop-bill-management/due-amount")
  }

  const HandleEdit = () => {
    console.log("edit")
  }

  const HandleView = () => {
    navigate("/shop-bill-management/view-invoice")
  }

  return (
    <div>
      <InvoiceListing
        data={data}
        HandlePayDue={HandlePayDue}
        HandleEdit={HandleEdit}
        HandleView={HandleView}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  )
}

export default InvoiceListingWrapper
