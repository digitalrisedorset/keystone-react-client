import { useMutation, gql } from '@apollo/client';
import Form from './styles/Form';
import {useState} from "react";

const CREATE_ATTRIBUTE_MUTATION = gql`    
 mutation CreateAttribute($data: WoocommerceAttributeCreateInput!) {
  createWoocommerceAttribute(data: $data) {
      id
      code
      name
      type
      required
  }
}
`;

export default function CreateWoocommerceAttribute() {
    const [formState, setFormState] = useState({
        code: '',
        name: '',
        type: '',
        required:0
    });

    const [createAttribute] = useMutation(CREATE_ATTRIBUTE_MUTATION, {
        variables: {
            data: {
                code: formState.code,
                name: formState.name,
                type: formState.type,
                required: !!(formState.required)
            }
        }
    });

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            createAttribute();
        }}>
            <fieldset>
                <label htmlFor="code">
                    Attribute Code
                    <input
                        className="mb2"
                        value={formState.code}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                code: e.target.value
                            })
                        }
                        type="text"
                        placeholder="A Code for the Attribute"
                    />
                </label>
                <label htmlFor="name">
                    Name
                    <input
                        className="mb2"
                        value={formState.name}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                name: e.target.value
                            })
                        }
                        type="text"
                        placeholder="A Name for the Attribute"
                    />
                </label>
                <label htmlFor="price">
                    Type
                    <input
                        className="mb2"
                        value={formState.type}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                type: e.target.value
                            })
                        }
                        type="text"
                        placeholder="A Type for the Attribute"
                    />
                </label>
                <label htmlFor="required">
                    Required
                    <input type="checkbox" id="required" name="required" value="0"
                           checked={formState.required}
                           onChange={(e) =>
                               setFormState({
                                   ...formState,
                                   required: e.target.value
                               })
                           }
                    />
                </label>

                <button type="submit">+ Add Attribute</button>
            </fieldset>
        </Form>
    )
}

export {CREATE_ATTRIBUTE_MUTATION};
