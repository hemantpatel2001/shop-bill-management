import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginWrapper from '../Login/LoginWrapper'
import AddCustomerFormWrapper from '../Screen/Customer/Add/AddCustomerFormWrapper'
import CustomerListingWrapper from '../Screen/Customer/List/CustomerListingWrapper'
import Layout from '../Screen/Sidebar/Layout'
import AddProductWrapper from '../Screen/Product/Add/AddProductWrapper'
import ProductsListingWrapper from '../Screen/Product/List/ProductsListingWrapper'
import EditCustomerFormWrapper from '../Screen/Customer/Edit/EditCustomerFormWrapper'
import AddInvoiceWrapper from '../Screen/Invoice/Add/AddInvoiceWrapper'
import AddCategoryWrapper from '../Screen/category/Add/AddCategoryWrapper'
import EditCategoryWrapper from '../Screen/category/Edit/EditCategoryWrapper'
import CategoryListWrapper from '../Screen/category/List/CategoryListWrapper'
import AddVendorFormWrappers from '../Screen/Vendor/ADD/AddVendorFormWrappers'
import EditVendorsFormWrapper from '../Screen/Vendor/EDIT/EditVendorsFormwrappers'



export const PageRoute = () => {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <LoginWrapper />

    },
    {
      path: "/shop-bill-management",
      element: <Layout />,
      children: [
        {
          path: "add-customer",
          element: <AddCustomerFormWrapper />
        },
        {
          path: "customer-details",
          element: <CustomerListingWrapper />
        },
        {
          path: "edit-customer",
          element: <EditCustomerFormWrapper />
        },
        {
          path: 'customer-details/edit-customer/:id',
          element: <EditCustomerFormWrapper />
        },
        {
          path: "add-category",
          element: <AddCategoryWrapper />
        },
        {
          path: "edit-category",
          element: <EditCategoryWrapper />
        },
        {
          path:"category-details",
          element:<CategoryListWrapper/>
        },
        {
          path: "add-Product",
          element: <AddProductWrapper />
        },
        {
          path: "Product-details",
          element: <ProductsListingWrapper />
        }
        , {
          path: "Add-invoice",
          element: <AddInvoiceWrapper />
        },
        {
          path:"add-vendore",
          element:<AddVendorFormWrappers/>
        },
        {
          path:"edit-vendor",
          element:<EditVendorsFormWrapper/>
        }
     
      ]

    }


  ])





  return (
    <RouterProvider router={router} />
  )
}