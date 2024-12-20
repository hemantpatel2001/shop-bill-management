import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginWrapper from "../Login/LoginWrapper";
import CustomerListingWrapper from "../Screen/Customer/List/CustomerListingWrapper";
import Layout from "../Screen/Sidebar/Layout";
import AddProductWrapper from "../Screen/Product/Add/AddProductWrapper";
import ProductsListingWrapper from "../Screen/Product/List/ProductsListingWrapper";
import EditCustomerFormWrapper from "../Screen/Customer/Edit/EditCustomerFormWrapper";
import AddCategoryWrapper from "../Screen/category/Add/AddCategoryWrapper";
import EditCategoryWrapper from "../Screen/category/Edit/EditCategoryWrapper";
import CategoryListWrapper from "../Screen/category/List/CategoryListWrapper";
import AddVendorFormWrappers from "../Screen/Vendor/ADD/AddVendorFormWrappers";
import EditVendorsFormWrapper from "../Screen/Vendor/EDIT/EditVendorsFormwrappers";
import VendorListingWrapper from "../Screen/Vendor/LIST/VendorListingWrapper";
import EditInvoicesWrapper from "../Screen/invoice/Edit/editInvoicesWrapper";
import InvoiceListingWrapper from "../Screen/invoice/List/InvoiceListingWrapper";
import { Auth } from "../Authentications/Authntecation";
import EditProductWrapper from "../Screen/Product/Edit/EditProductWrapper";
import WithOutLogin from "../Authentications/WithoutLoging";
import AddDueAmountWrapper from "../Screen/dueamount/Add/addDueAmountWrapper";
import ViewinvoiceWrapper from "../Screen/invoice/Viewinvoice/ViewInvoiceform/viewinvoiceWrapper";
import TransactionsListingWrapper from "../Screen/transaction/List/TransactionsListingWrapper";
import DashBoardWrapper from "../Screen/dashboard/DashboardWrapper";
import AddInvoiceWrapper from "../Screen/invoice/Add/addInvoiceWrapper";
import AddCustomerFormWrapper from "../Screen/Customer/Add/AddCustomerFormWrapper";

export const PageRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <WithOutLogin>
          <LoginWrapper />
        </WithOutLogin>
      ),
    },
    {
      path: "/shop-bill-management",
      element: (
        <Auth>
          <Layout />
        </Auth>
      ),

      children: [
        {
          path: "add-customer",
          element: <AddCustomerFormWrapper />,
        },
        {
          path: "customer-details",
          element: <CustomerListingWrapper />,
        },
        {
          path: "edit-customer",
          element: <EditCustomerFormWrapper />,
        },
        {
          path: "edit-customer/:id",
          element: <EditCustomerFormWrapper />,
        },
        {
          path: "add-category",
          element: <AddCategoryWrapper />,
        },
        {
          path: "edit-category",
          element: <EditCategoryWrapper />,
        },
        {
          path: "category-details",
          element: <CategoryListWrapper />,
        },
        {
          path: "edit-category/:id",
          element: <EditCategoryWrapper />,
        },
        {
          path: "add-Product",
          element: <AddProductWrapper />,
        },
        {
          path: "edit-product",
          element: <EditProductWrapper />,
        },
        {
          path: "edit-product/:id",
          element: <EditProductWrapper />,
        },
        {
          path: "Product-details",
          element: <ProductsListingWrapper />,
        },
        {
          path: "add-vendor",
          element: <AddVendorFormWrappers />,
        },
        {
          path: "vendors-details",
          element: <VendorListingWrapper />,
        },
        {
          path: "edit-vendore/:id",
          element: <EditVendorsFormWrapper />,
        },
        {
          path: "invoice-details",
          element: <InvoiceListingWrapper />,
        },
        {
          path: "add-invoice",
          element: <AddInvoiceWrapper />,
        },
        {
          path: "edit-invoice",
          element: <EditInvoicesWrapper />,
        },
        {
          path: "due-amount",
          element: <AddDueAmountWrapper />,
        },
        {
          path: "view-invoice",
          element: <ViewinvoiceWrapper />,
        },
        {
          path: "transaction",
          element: <TransactionsListingWrapper />,
        },
        {
          path: "dashboard",
          element: <DashBoardWrapper />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
