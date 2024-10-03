import { useCategoryDeleteMutation, useCategoryGetQuery } from '../../../Slice/categoryslice';
import CategoryList from './CategoryList';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CategoryListWrapper = () => {
  const { data, isLoading, isError } = useCategoryGetQuery();

  const [deleteCategory] = useCategoryDeleteMutation();
  const navigate = useNavigate();

  const HandleDelete = (id: any) => {
 
    Swal.fire({
      title: 'Are you sure?',
      text: "you want to delete category",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: ' delete it!',
      cancelButtonText: ' cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        
        deleteCategory(id)
          .then((res) => {
            if (res.data) {
              Swal.fire('Deleted!', 'Your category has been deleted.', 'success');
            } else {
              Swal.fire('Error!', 'There was an issue deleting the category.', 'error');
            }
          })
          .catch(() => {
            Swal.fire('Error!', 'There was an issue deleting the category.', 'error');
          });
      }
    });
  };

  const HandleEdit = (id: any) => {
 
    navigate(`/shop-bill-management/edit-category/:${id}`);
  };

  return (
    <CategoryList 
      data={data}  
      isError={isError} 
      isLoading={isLoading} 
      HandleEdit={HandleEdit} 
      HandleDelete={HandleDelete} 
    />
  );
};

export default CategoryListWrapper;
