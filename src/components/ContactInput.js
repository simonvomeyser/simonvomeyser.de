import React, { Component } from 'react'
import FormInput from 'src/components/FormInput'

export default class ContactInput extends Component {
  render() {
    return (
      <FormInput
        label="emailPlaceholder"
        hasError={this.props.hasError}
        disabled={this.props.disabled}
        value={this.props.value}
      >
        <input
          name="email"
          type="email"
          value={this.props.value}
          onBlur={this.props.validate}
          onChange={this.props.update}
        />
      </FormInput>
    )
  }
}
