import ProductsListing from './ProductsListing'
import { useProductGetQuery } from '../../../Slice/productslice'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

type Props = {}

const ProductsListingWrapper = (props: Props) => {
  const navigate = useNavigate()
  const { data, isLoading, isError } = useProductGetQuery()

  const HandleEdit = (id) => {
    navigate(`/shop-bill-management/edit-product/${id}`)
  }
  console.log(data);


  return (
    <ProductsListing data={data} isLoading={isLoading} HandleEdit={HandleEdit} isError={isError} />
  )
}

export default ProductsListingWrapper
