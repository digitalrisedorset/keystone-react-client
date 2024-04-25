import React from "react";
import { useQuery, gql } from "@apollo/client";

const ATTRIBUTE_QUERY = gql`
  {
      woocommerceAttributes {
        id
        code
        name
        type
        required
      }
  }
`;

export default function Attributes() {
    const { data, loading, error } = useQuery(ATTRIBUTE_QUERY);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    return (
        <div>
            <h1>Attribute List</h1>
            <ul>
                {data.woocommerceAttributes.map((attribute) => (
                    <li key={attribute.id}>name: {attribute.name}, type: {attribute.type}</li>
                ))}
            </ul>
        </div>
    );
}