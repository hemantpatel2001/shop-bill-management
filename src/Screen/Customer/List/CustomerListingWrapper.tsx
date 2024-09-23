
import CustomerListing from './CustomerListing'
import { useCustomerGetByIdQuery, useCustomerGetQuery, useDeleteCustomerMutation } from '../../../Slice/customerslice'
import { useNavigate } from 'react-router-dom'



const CustomerListingWrapper = () => {

  const [customerdelete] = useDeleteCustomerMutation()
  const { data, isError, isLoading } = useCustomerGetQuery()



  {/*delete customer function*/}
  const navigate = useNavigate();
  const HandleDelete = (_id) => {
    customerdelete(_id).then((res) => {
      console.log(res)
    })
  }
    {/*editcustomer function*/}
  const HandleEdit = (_id) => {
    navigate(`edit-customer/${_id}`)
    console.log(_id)
  }

  return (
    <CustomerListing data={data} HandleEdit={HandleEdit} HandleDelete={HandleDelete} isLoading={isLoading} isError={isError} />
  )
}

export default CustomerListingWrapper