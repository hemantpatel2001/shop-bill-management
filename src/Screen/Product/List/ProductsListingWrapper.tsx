import ProductsListing from './ProductsListing'
import { useProductGetQuery } from '../../../Slice/productslice'
import { toast } from 'react-toastify'

type Props = {}

const ProductsListingWrapper = (props: Props) => {
  const { data, isLoading, isError } = useProductGetQuery()

console.log(data);


  return (
    <ProductsListing data={data}   isLoading={isLoading} isError={isError}/>
  )
}

export default ProductsListingWrapper
