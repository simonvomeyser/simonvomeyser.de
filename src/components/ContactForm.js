import React, { Component } from 'react'
import styled from 'styled-components'
import { StyledPrimaryButton } from '../styled-components'

import ContactTextarea from './ContactTextarea'
import ContactInput from './ContactInput'
import Message from './Message'
import { isEmail } from '../util/isEmail'
import { FormattedMessage } from 'react-intl'
import { isContactText } from '../util/isContactText'
import Spinner from './Spinner'
import axios from 'axios'
import languageContext from '../i18n/languageContext'
import { API_URL } from "gatsby-env-variables"

class ContactForm extends Component {
  static contextType = languageContext;

  state = {
    email: '',
    text: '',
    errors: {},
    isSubmitting: false,
    isDone: false,
    apiUrl: API_URL + '/contact',
  }

  update = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
    this.removeError(target.name)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ isSubmitting: true })

    if (!this.validateAll()) {
      this.setState({ isSubmitting: false })
      return
    }

    const { email, text, apiUrl } = this.state
    const { language } = this.context;

    axios
      .post(apiUrl, { email, text, locale: language })
      .then(this.setToDone)
      .catch(this.setToDone) // Let Sentry log errors, don't show them
  }
  setToDone = () => {
    this.setState({ isDone: true, isSubmitting: false })
    setTimeout(() => {
      this.setState({ email: '', text: '' })
    }, 1000)
  }
  // Show different errors to inrease usablity
  getMessageIdToDisplay = () => {
    const { email: emailError, text: textError } = this.state.errors

    if (emailError && !textError) {
      return 'emailRequired'
    }
    if (!emailError && textError) {
      return 'textRequired'
    }
    return 'emailAndTextRequired'
  }
  removeError = inputName => {
    const newErrors = Object.assign({}, this.state.errors)
    delete newErrors[inputName]

    this.setState({ errors: newErrors })
  }
  validateInput = ({ target }) => {
    const inputName = target.name

    const newErrors = Object.assign(this.state.errors)

    if (inputName === 'email') {
      newErrors.email = !isEmail(this.state.email)
    }

    if (inputName === 'text') {
      newErrors.text = !isContactText(this.state.text)
    }

    this.setState({ errors: newErrors })
  }
  validateAll = () => {
    const newErrors = {
      email: !isEmail(this.state.email),
      text: !isContactText(this.state.text),
    }

    this.setState({ errors: newErrors })

    return !newErrors.email && !newErrors.text
  }

  render() {
    const { email, text, errors, isSubmitting, isDone } = this.state
    const idForError = this.getMessageIdToDisplay()

    return (
      <StyledWrapper>
        <form noValidate action="" onSubmit={this.handleSubmit}>
          <fieldset disabled={isSubmitting || isDone}>
            <ContactInput
              value={email}
              update={this.update}
              hasError={!!errors.email}
              validate={this.validateInput}
              disabled={isDone}
            />
            <ContactTextarea
              value={text}
              update={this.update}
              hasError={!!errors.text}
              validate={this.validateInput}
              disabled={isDone}
            />

            <StyledMessageWrapper>
              <Message
                heading={<FormattedMessage id="contactMessageSuccessHeading" />}
                text={<FormattedMessage id="contactMessageSuccessText" />}
                shown={isDone}
                type="success"
              />
              <Message
                heading={<FormattedMessage id="contactMessageErrorHeading" />}
                text={<FormattedMessage id={idForError} />}
                shown={errors.email || errors.text}
                type="error"
              />
            </StyledMessageWrapper>

            <StyledButtonWrapper hidden={isDone}>
              <StyledPrimaryButton type="submit">
                {isSubmitting ? <Spinner /> : <FormattedMessage id="send" />}
              </StyledPrimaryButton>
            </StyledButtonWrapper>
          </fieldset>
        </form>
      </StyledWrapper>
    )
  }
}

export default ContactForm

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  transition: opacity 0.28s ease-in-out;
  opacity: ${({ hidden }) => (hidden ? 0.1 : 1)};
`

const StyledMessageWrapper = styled.div`
  margin-bottom: 1rem;
`
