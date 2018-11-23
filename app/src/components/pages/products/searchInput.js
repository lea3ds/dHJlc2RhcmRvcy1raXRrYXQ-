import React from 'react';
import {TextField} from "@material-ui/core";

const Component = (props) => {
    return <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        margin="normal"
        variant="outlined"
        fullWidth={true}
    />;
}

export default Component;