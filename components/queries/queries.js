import gql from "graphql-tag";

const getBookingsQuery = gql`
  {
    bookings{
        id
        date_time
        cus{
            id
            name
        }
        emp{
            id
            name
        }
    }
  }
`
const getServicesQuery = gql`
    {
 	positions (type: 2) {
 	    id
        name
        }
    }
`
export  {getBookingsQuery, getServicesQuery}