import gql from 'graphql-tag';

const Bookings = gql `
    {
        bookings{
            id
            date_time
            cus {
              id
              name
              phone  
            }
        }
    }
`

const Services = gql `
    {
        categories{
            id
            name
            description
        }
    }
`
export {Bookings, Services};