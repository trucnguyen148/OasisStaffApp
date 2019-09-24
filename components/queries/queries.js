import gql from "graphql-tag";

const getBookingsQuery = gql`
  {
    positions(type: 2) {
      id
      name
    },
    products {
      id
      category {
        id
      }
      bookings {
        id
        date_time
        cus {
          id
          name
          phone
        }
        emp {
          id
          name
        }
      }
    }
  }
`
const getScheduleQuery = gql`
  {
    branches{
      id
      name
      employees{
        id
        name
      }
  }
  }
`

const getAnnoucementsQuery = gql`
  {
    announcements {
        id
        title
        detail
        created_at
        updated_at
    }
  }
`

const getDetailBookingQuery = gql`
  {
    positions(type: 2) {
      id
      name
    },
    product_type(type: 2) {
        id 
        name 
        unit_price
        category{
          id
        }
      }
  }
`
export  {getBookingsQuery, getScheduleQuery, getAnnoucementsQuery, getDetailBookingQuery}