import React from 'react';
import {TextField} from "@material-ui/core";

class Component extends React.Component {

    maxSuggestionsView = 10;

    createSuggestionsFilteredAndValue = (suggestions, value) => {
        return ["Buscar"]
            .concat(suggestions.filter(x => x.indexOf(value) >= 0))
            .slice(0, this.maxSuggestionsView);
    }

    state = {
        opened: false,
        value: this.props.value,
        suggestions: this.props.suggestions,
        suggestionSelected: 0,
        suggestionsFilteredAndValue: this.createSuggestionsFilteredAndValue(this.props.suggestions, this.props.value),
    }

    valueChangeHandler = (newValue, send) => {
        this.setState({
            value: newValue,
            suggestionsFilteredAndValue: this.createSuggestionsFilteredAndValue(this.state.suggestions, newValue),
        })
        if (send === true) this.props.handleValueSelected(newValue);
    }

    inputKeyPressHandler = (event) => {
        if (event.key === 'ArrowUp' && this.state.suggestionSelected > 0) {
            let newSelected = this.state.suggestionSelected - 1;
            if (newSelected < 0) newSelected = 0;
            this.setState({suggestionSelected: newSelected});
        }
        if (event.key === 'ArrowDown') {
            let newSelected = this.state.suggestionSelected + 1;
            if (newSelected > this.state.suggestionsFilteredAndValue.length - 1) newSelected = this.state.suggestionsFilteredAndValue.length - 1;
            this.setState({suggestionSelected: newSelected});
        }
        if (event.key === 'Enter') {
            let value = !this.state.value?"":this.state.value;
            let newValue = this.state.suggestionSelected > 0
                ? this.state.suggestionsFilteredAndValue[this.state.suggestionSelected]
                : value;
            this.valueChangeHandler(newValue, true);
            this.setSuggestionOpened(false);
        }
    }

    suggestionClickHandler = (suggestion, suggestionSelected) => {
        var newValue = suggestionSelected > 0 ? suggestion : this.state.value;
        this.valueChangeHandler(newValue, true);
        this.setSuggestionOpened(false);
    }

    setSuggestionOpened = (opened) => {
        if (opened === true) {
            this.setState({opened: opened, suggestionSelected: 0});
            this.props.handleOpenChange(opened);
        }
        else
            setTimeout(() => {
                    this.setState({opened: false})
                    this.props.handleOpenChange(opened)
                }, 100);
    }

    render() {
        return <div className={"filter-container"} style={{height: this.state.opened ? "100%" : null}}>
            <TextField
                id="outlined-search"
                label="Buscar"
                type="search"
                margin="normal"
                variant="outlined"
                fullWidth={true}

                value={this.state.value}
                onChange={e => {
                    this.valueChangeHandler(e.target.value);
                    this.setSuggestionOpened(true);
                }}
                onKeyDown={e => this.inputKeyPressHandler(e)}

                onFocus={() => this.setSuggestionOpened(true)}
                onBlur={() => this.setSuggestionOpened(false)}
            />

            <div id={"suggestions"} className={"suggestions"} style={{display: this.state.opened === true ? null : "none"}}>
                {this.state.suggestionsFilteredAndValue.map((suggestion, index) =>
                    <div
                        key={index}
                        onClick={() => this.suggestionClickHandler(suggestion, index)}
                        className={"suggestion" + (this.state.suggestionSelected === index ? " selected" : "")}
                    >
                        {suggestion}
                    </div>
                )}
            </div>
        </div>;
    }
}

export default Component;