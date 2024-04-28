import { useEffect, useState } from "react"
import Axios from "axios";
import {gql, useMutation} from '@apollo/client';

const CREATE_ATTRIBUTE_LIST_MUTATION = gql`    
      mutation CreateWoocommerceAttributes($data: [WoocommerceAttributeCreateInput!]!) {
         createWoocommerceAttributes(data: $data) {
            id
            code
            name
            type
            required
         }
      }   
`;

export default function CreateListAttribute() {
    const [attributeListState, setAttributeListState] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [createListAttribute] = useMutation(CREATE_ATTRIBUTE_LIST_MUTATION, {
        variables: {
            data: attributeListState
        }
    });

    useEffect(() => {
        async function createAttributeList() {
            try {
                if (attributeListState.length>0) {
                    createListAttribute();
                    setIsLoading(false)
                }
            } catch (e) {
                console.log("There was a problem.")
            }
        }
        createAttributeList()
        return () => {

        }
    }, [attributeListState])

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const ourRequest = Axios.CancelToken.source()
            const res = await Axios.get('http://localhost:8080/getWoocommerceAttributeList', { cancelToken: ourRequest.token });
            setAttributeListState(res.data.map(attribute => ({
                code: attribute.slug,
                name: attribute.name,
                type: 'select',
                required: false
            })))
            ourRequest.cancel()
        } catch (e) {
            console.log('error');
        }
    }

    return (
        <form>
            <button type="submit" onClick={handleSubmit} className="py-3 mt-4 btn btn-lg btn-success btn-block">
                Import Attributes
            </button>
        </form>
    )
}