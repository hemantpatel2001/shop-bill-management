
import CategoryList from './CategoryList'
import { useNavigate } from 'react-router-dom'



const CategoryListWrapper = () => {

{/*delete customer function*/ }

  const navigate = useNavigate();
  const HandleDelete = (id: any) => {
    console.log('delele', id)

  }

  {/*editcustomer function*/ }
  const HandleEdit = (id: any) => {
    console.log('edit', id)
    navigate("/shop-bill-management/edit-category")
  }

  return (
    <CategoryList HandleEdit={HandleEdit} HandleDelete={HandleDelete} />
  )
}

export default CategoryListWrapper;