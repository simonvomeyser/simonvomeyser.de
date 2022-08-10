import clsx from 'clsx'
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import CheckmarkSvg from '../svg/checkmark.svg'
import LoaderSvg from '../svg/loader.svg'
import { MovingLabel } from './MovingLabel'


export type ContactFormProps = {
  className?: string;
  setSubmitStatus: (status: 'success' | 'error' | null) => void;
};

export const ContactForm: React.FC<ContactFormProps> = ({ className, setSubmitStatus }) => {

  const { __, ___ } = useTranslation()
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  function validateForm(values: FormikValues) {
    const errors: { email?: string, text?: string, privacy?: string } = {}

    if (!values.email) {
      errors.email = __('errorsRequired')
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = __('errorsInvalidEmail')
    }

    if (!values.text) {
      errors.text = __('errorsRequired')
    } else if (values.text.length < 10) {
      errors.text = __('errorsMessageTooShort')
    }

    if (!values.privacy) {
      errors.privacy = __('errorsRequired')
    }

    return errors
  }

  function onSubmit(values: FormikValues) {

    const url = process.env.NEXT_PUBLIC_API_URL + '/contact'

    console.log(url)

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then(r => {
        return r.json()
      })
      .then(() => {
        setTimeout(() => {

          setSubmitStatus('success')

        }, 1000)

      })
      .catch(() => {
        setSubmitStatus('error')
      })
  }

  function shortShake() {
    buttonRef.current?.classList.add('animate-shake')
    setTimeout(() => {
      buttonRef.current?.classList.remove('animate-shake')
    }, 1000)
  }

  return (
    <div className={clsx('', className)}>
      <Formik
        initialValues={{ email: '', text: '', privacy: false }}
        validate={validateForm}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, values, errors, touched }) => (
          <Form className='relative'>

            <div className={clsx('transition duration-500', {
              'opacity-5 pointer-events-none': isSubmitting,
            })}>
              <div className='mb-6'>
                <div className='relative'>

                  <MovingLabel htmlFor='email' text={__('emailPlaceholder')} moveFlag={!!values.email} />

                  <Field type='email' name='email' id='email'
                         className='w-full border border-neutral-250 rounded-sm px-4 py-4 bg-neutral-50 text-lg block ' />
                </div>
                <ErrorMessage name='email' component='div' className='text-sm text-red-400 fade-in-on-render' />

              </div>
              <div className='mb-4'>
                <div className='relative'>
                  <MovingLabel htmlFor='text' text={__('textPlaceholder')} moveFlag={!!values.text} />
                  <Field name='text' as='textarea' id='text'
                         className='w-full border border-neutral-250 rounded-sm px-4 py-4 bg-neutral-50 text-lg block h-56' />
                </div>
                <ErrorMessage name='text' component='div' className='text-sm text-red-400 fade-in-on-render' />
              </div>
              <div className='mb-8'>
                <label className='flex w-full custom-checkbox-label cursor-pointer' tabIndex={1}>
                  <Field type='checkbox' name='privacy' className='sr-only' />
                  <span
                    className={clsx('w-6 h-6 border rounded-sm inline-block mr-4 flex-shrink-0 relative border-neutral-200 bg-neutral-50', {
                      '!border-red-500 !bg-red-100': errors.privacy && touched.privacy,
                    })}>
                    <span
                      className=' absolute bg-teal-400 text-white w-full h-full flex justify-center items-center transition-all duration-300'>
                      <CheckmarkSvg className='w-5 h-5' />
                    </span>
                  </span>
                  <span className='inline-block text-sm small-basic-rich-text !text-neutral-400'>
                    {___('contactFormPrivacy')}
                  </span>

                </label>
              </div>
              <div className='flex justify-center '>
                <button disabled={isSubmitting}
                        ref={buttonRef}
                        onClick={() => Object.keys(errors).length ? shortShake() : null}
                        className='py-2.5 p-4 min-w-[200px] bg-primary text-white text-lg'>
                  {__('send')}
                </button>
              </div>
            </div>

            <div
              className={clsx('absolute top-20 left-1/2 transform -translate-x-1/2 duration-500  pointer-events-none', {
                'opacity-100 ': isSubmitting,
                'opacity-0 ': !isSubmitting,
              })}>
              <LoaderSvg className='w-36 h-36 text-primary' />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
