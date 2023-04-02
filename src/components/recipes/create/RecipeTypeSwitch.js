import Form from 'react-bootstrap/Form';

function RecipeTypeSwitch() {
    return (
        <>
            <Form>
                <Form.Check type="switch" id="custom-switch" label="Vegan" />
                <Form.Check type="switch" id="custom-switch" label="Vegetarian" />
                <Form.Check type="switch" id="custom-switch" label="High Protein" />

                {/* <Form.Check
                    disabled
                    type="switch"
                    label="disabled switch"
                    id="disabled-custom-switch"
                /> */}
            </Form>
            <Form>
                <Form.Check type="switch" id="custom-switch" label="Low Sugar" />
                <Form.Check type="switch" id="custom-switch" label="Gluten Free" />
                <Form.Check type="switch" id="custom-switch" label="Lactoce Free" />
                {/* <Form.Check type="switch" id="custom-switch" label="Regular recipe" /> */}
            </Form>
        </>
        // <Form>
        //     {['checkbox'].map((type) => (
        //         <div key={`inline-${type}`} className="mb-3">
        //             <Form.Check
        //                 inline
        //                 label="Vegan"
        //                 name="group1"
        //                 type={type}
        //                 id={`inline-${type}-1`}
        //             />

        //             <Form.Check
        //                 inline
        //                 label="Vegetarian"
        //                 name="group1"
        //                 type={type}
        //                 id={`inline-${type}-1`}
        //             />

        //             <Form.Check
        //                 inline
        //                 label="High Protein"
        //                 name="group2"
        //                 type={type}
        //                 id={`inline-${type}-1`}
        //             />

        //               <Form.Check
        //                 inline
        //                 label="Gluten Free"
        //                 name="group1"
        //                 type={type}
        //                 id={`inline-${type}-1`}
        //             />
        //               <Form.Check
        //                 inline
        //                 label="Lactoce Free"
        //                 name="group1"
        //                 type={type}
        //                 id={`inline-${type}-1`}
        //             />
        //                          <Form.Check
        //                 inline
        //                 label="Low Sugar"
        //                 name="group1"
        //                 type={type}
        //                 id={`inline-${type}-1`}
        //             />
        //               <Form.Check
        //                 inline
        //                 label="Regular recipe"
        //                 name="group1"
        //                 type={type}
        //                 id={`inline-${type}-1`}
        //             />
        //         </div>
        //     ))}
        // </Form>
    );
}

export default RecipeTypeSwitch;