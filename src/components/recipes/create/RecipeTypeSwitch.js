import Form from 'react-bootstrap/Form';

function RecipeTypeSwitch() {
    return (
        <Form>
                <Form.Check type="switch" id="custom-switch" label="Vegan" />
                <Form.Check type="switch" id="custom-switch" label="Vegetarian" />
                <Form.Check type="switch" id="custom-switch" label="High Protein" />
                <Form.Check type="switch" id="custom-switch" label="Low Sugar" />
                <Form.Check type="switch" id="custom-switch" label="Gluten Free" />
                <Form.Check type="switch" id="custom-switch" label="Lactoce Free" />
                <Form.Check type="switch" id="custom-switch" label="Regular recipe" />
            <Form.Check
                disabled
                type="switch"
                label="disabled switch"
                id="disabled-custom-switch"
            />
        </Form>
    );
}

export default RecipeTypeSwitch;