import { useNavigate } from 'react-router-dom'
import VendorListing from './VendorListing'
import { useGetAllVendorQuery } from '../../../Slice/vendorslice'

const VendorListingWrapper = () => {
    const { data, isError, isLoading } = useGetAllVendorQuery()
    const navigate = useNavigate()

    // const HandleDelete = (id: string) => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //       icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#d33',
    //         cancelButtonColor: '#3085d6',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             customerdelete(id)
    //                 .then((res) => {
    //                     console.log(res)
    //                     Swal.fire(
    //                         'Deleted!',
    //                         'Customer has been deleted.',
    //                         'success'
    //                     )
    //                 })
    //                 .catch((error) => {
    //                     console.error('Delete failed:', error)
    //                     Swal.fire(
    //                         'Error!',
    //                         'There was a problem deleting the customer.',
    //                         'error'
    //                     )
    //                 });
    //         }
    //     });
    // }

    const HandleEdit = (id: string) => {
        navigate(`/shop-bill-management/edit-vendore/${id}`)
        console.log(id)
    }

    return (<div>
            <VendorListing
            data={data} 
            HandleEdit={HandleEdit} 
            // HandleDelete={HandleDelete} 
            isLoading={isLoading} 
            isError={isError} 
        />
     
    </div>
    
    )
}

export default VendorListingWrapper;
