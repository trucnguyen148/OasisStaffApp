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
    positions(type: 2) {
    id
    name
    }
    bookings {
      id
      date_time
      products {
        id
        category {
          id
        }
      }
      cus {
        id
        name
        phone
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
        worktime{
          id
          start
          end
        }
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

const getDetailBookingServiceQuery = gql`
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

const getDetailBookingProductQuery = gql`
  {
    positions(type: 1) {
      id
      name
    },
    product_type(type: 1) {
      id 
      name 
      unit_price
      category{
        id
      }
    }
  }
`

const getCollectionQuerry = gql`
  {
  collections{
    id
    name
    images {
      id
      image
    }
  }
}
`

const getWorkTimesQuerry = gql`
  {
    workTimes{
    id
    start
    end
  }
}
`

export { getBookingsQuery, getScheduleQuery, getAnnoucementsQuery, getDetailBookingServiceQuery, getDetailBookingProductQuery, getCollectionQuerry, getWorkTimesQuerry }
