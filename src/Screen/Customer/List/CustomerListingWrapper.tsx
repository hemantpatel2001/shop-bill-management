import CustomerListing from './CustomerListing'
import { useCustomerGetQuery, useDeleteCustomerMutation } from '../../../Slice/customerslice'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2' // Import SweetAlert2

const CustomerListingWrapper = () => {
    const [customerdelete] = useDeleteCustomerMutation()
    const { data, isError, isLoading } =useCustomerGetQuery()
    const navigate = useNavigate()

    const HandleDelete = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
          icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                customerdelete(id)
                    .then((res) => {
                        console.log(res)
                        Swal.fire(
                            'Deleted!',
                            'Customer has been deleted.',
                            'success'
                        )
                    })
                    .catch((error) => {
                        console.error('Delete failed:', error)
                        Swal.fire(
                            'Error!',
                            'There was a problem deleting the customer.',
                            'error'
                        )
                    });
            }
        });
    }

    const HandleEdit = (id: string) => {
        navigate(`edit-customer/${id}`)
        console.log(id)
    }

    return (
        <CustomerListing 
            data={data} 
            HandleEdit={HandleEdit} 
            HandleDelete={HandleDelete} 
            isLoading={isLoading} 
            isError={isError} 
        />
    )
}

export default CustomerListingWrapper;
