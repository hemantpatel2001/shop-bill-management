import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginWrapper from '../Login/LoginWrapper'
import AddCustomerFormWrapper from '../Screen/Customer/Add/AddCustomerFormWrapper'
import CustomerListingWrapper from '../Screen/Customer/List/CustomerListingWrapper'
import Layout from '../Screen/Sidebar/Layout'
import AddProductWrapper from '../Screen/Product/Add/AddProductWrapper'
import ProductsListingWrapper from '../Screen/Product/List/ProductsListingWrapper'
import EditCustomerFormWrapper from '../Screen/Customer/Edit/EditCustomerFormWrapper'
import AddCategoryWrapper from '../Screen/category/Add/AddCategoryWrapper'
import EditCategoryWrapper from '../Screen/category/Edit/EditCategoryWrapper'
import CategoryListWrapper from '../Screen/category/List/CategoryListWrapper'
import AddVendorFormWrappers from '../Screen/Vendor/ADD/AddVendorFormWrappers'
import EditVendorsFormWrapper from '../Screen/Vendor/EDIT/EditVendorsFormwrappers'
import VendorListingWrapper from '../Screen/Vendor/LIST/VendorListingWrapper'
import AddInvoiceWrapper from '../Screen/invoice/Add/addInvoiceWrapper'
import EditInvoicesWrapper from '../Screen/invoice/Edit/editInvoicesWrapper'
import InvoiceListingWrapper from '../Screen/invoice/List/InvoiceListingWrapper'
import { Auth } from '../Authentications/Authntecation'
import { WithoutLogin } from '../Authentications/withoutLogin'
import EditProductWrapper from '../Screen/Product/Edit/EditProductWrapper'





export const PageRoute = () => {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <WithoutLogin> <LoginWrapper /></WithoutLogin>

    },
    {
      path: "/shop-bill-management",
      element: <Auth><Layout /></Auth>,
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
          path: "category-details",
          element: <CategoryListWrapper />
        },

        {
          path: '/shop-bill-management/edit-category/:id',
          element: <EditCategoryWrapper />
        },
        {
          path: "add-Product",
          element: <AddProductWrapper />
        },
        {
          path: "edit-product",
          element: <EditProductWrapper />
        },
        
          {
            path: '/shop-bill-management/edit-product/:id',
            element: <EditProductWrapper />
          },
      
        {
          path: "Product-details",
          element: <ProductsListingWrapper />
        }
        ,
        {
          path: "add-vendore",
          element: <AddVendorFormWrappers />
        },
        {
          path: "edit-vendor",
          element: <EditVendorsFormWrapper />
        },
        {
          path: "vendors-details",
          element: <VendorListingWrapper />
        },
        {
          path: '/shop-bill-management/edit-vendore/:id',
          element: <EditVendorsFormWrapper />
        },
        {
          path: "invoice-details",
          element: <InvoiceListingWrapper />
        },
        {
          path: 'add-invoice',
          element: <AddInvoiceWrapper />
        },
        {
          path: 'edit-invoice',
          element: <EditInvoicesWrapper />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}