import { gql } from "@apollo/client";

export const ADD_POST = gql`
    mutation MyMutation(
        $body: String!
        $image: String!
        $subrabbit_id: ID!
        $title: String!
        $username: String!
) {
    inserPost(
        body: $body
        image: $image
        subrabbit_id: $subrabbit_id
        title: $username
    ) {
        body
        created_at
        id
        image
        subrabbit
        title
        username
    }
}
`