import React from 'react';
import {TextField} from '@material-ui/core';

class Component extends React.Component {

    state = {error: false}

    getErrors = (value) => {
        let error = null;
        let {regex, allowEmpty} = this.props;

        if (allowEmpty !== true && !!!value) error = 'empty';
        if (!!regex && !regex.test(value)) error = 'regex';

        if (error !== this.state.error) this.setState({error: !!error});
        return error;
    }

    render() {
        let {id, label, type, value, error, onChange, size, disabled,helperText} = this.props;
        return <div className={"centered-element-container"}>
            <TextField
                id={id}
                label={label}
                type={type}
                value={value}
                disabled={disabled}
                onChange={e => {
                    e.target.error = this.getErrors(e.target.value);
                    onChange(e);
                }}
                //fullWidth={true}
                style={{
                    width: size
                }}
                error={error!==undefined?error:this.state.error}
                helperText={helperText}
            />
        </div>;
    }
}

export default Component;