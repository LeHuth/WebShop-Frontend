export const loginMutation = gql`
mutation($username: String!, $password: String!){
    login(username: $username, password: $password){
        payload
        token
        refreshToken
    }
}`

export const verifyTokenMutation = gql`
mutation($token: String!){
  verifyToken(token: $token){
    success
    payload
  }
}`

export const registerMutation = gql`
mutation($username: String!, $email: String!, ){
  register(username:"username", email: "m@m.de", password1: "d", password2:"d"){
    success
    errors
    token
    refreshToken
  }
}`

export const selfQuery = gql`
query{
  self{
    id
    username
    memberImage{
      id
      image
    }
    reviewOwner{
      title
      text
      rating
      reviewVote{
        value
      }
    }
  }
}
`

export const refreshToken = gql`
mutation($refreshToken: String!){
    refreshToken(refreshToken: $refreshToken){
    token
    refreshToken
    }
}
`

export const allProductsQuery = gql`
query{
  products{
    id
    price
    name
    rating
    category{
      name
    }
    productImage{
      image
    }
    manufacturer{
      name
    }
    gender
  }
}`

export const productDetailQuery = gql`
query($productid: Int!){
      productDetail(productid: $productid){
    manufacturer{
      name
      id
    }
    name
    rating
    price
    shortDescription
    stock
    productImage{
      image
    }
    productReview{
      id
      title
      text
      created
      rating
      member{
        memberImage{
          image
          id
        }
        username
      }
      reviewVote{
        id
        timestamp
      }
    }
  }
}
`
