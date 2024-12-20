import TransactionListing from './TransactionListing'

type Props = {}

const TransactionsListingWrapper = (props: Props) => {

    const data = [{

        date: "12-04-2024",
        amount: "4000",
        invoiceNo: "GHGHG123444"
    },
    {

        date: "13-04-2024",
        amount: "90000",
        invoiceNo: "RFYTR4565"
    },
    {

        date: "26-05-2024",
        amount: "50000",
        invoiceNo: "YUIUY678"
    }]
    return (
        <div><TransactionListing data={data} /></div>
    )
}

export default TransactionsListingWrapper