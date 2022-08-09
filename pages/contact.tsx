import clsx from 'clsx'
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import type { NextPage } from 'next'
import React from 'react'
import { Layout } from '../components/Layout'
import { MovingLabel } from '../components/MovingLabel'
import { PageHeading } from '../components/PageHeading'
import { useTranslation } from '../hooks/useTranslation'
import CheckmarkSvg from '../svg/checkmark.svg'


const Index: NextPage = () => {
  const { __, ___ } = useTranslation()
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  function validateForm(values: FormikValues ) {
    const errors: { email?: string, message?: string, privacy?: string } = {}
    if (!values.email) {
      errors.email = __('errorsRequired')
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = __('errorsInvalidEmail')
    }

    if (!values.message) {
      errors.message = __('errorsRequired')
    } else if (values.message.length < 10) {
      errors.message = __('errorsMessageTooShort')
    }

    if (!values.privacy) {
      errors.privacy = __('errorsRequired')
    }

    return errors
  }

  function shortShake() {
    buttonRef.current?.classList.add('animate-shake')
    setTimeout(() => {
      buttonRef.current?.classList.remove('animate-shake')
    }, 1000)
  }

  return (
    <Layout>
      <PageHeading>
        <h1>{__('navigationContact')}</h1>
      </PageHeading>
      <div className='rich-text max-w-screen-sm mx-auto mb-8'>
        {___('contactFormCopy')}
      </div>
      <div className='max-w-screen-xs mx-auto'>
        <Formik
          initialValues={{ email: '', message: '', privacy: false }}
          validate={validateForm}
          validateOnChange={false}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ isSubmitting, values, errors}) => (
            <Form>
              <div className='mb-6'>
                <div className='relative'>

                  <MovingLabel htmlFor='email' text='E-Mail' moveFlag={!!values.email} />

                  <Field type='email' name='email' id='email'
                         className='w-full border border-neutral-250 rounded-sm px-4 py-4 bg-neutral-50 text-lg block ' />
                </div>
                <ErrorMessage name='email' component='div' className='text-sm text-red-400 fade-in-on-render' />

              </div>
              <div className='mb-4'>
                <div className='relative'>
                  <MovingLabel htmlFor='message' text='Message' moveFlag={!!values.message} />
                  <Field name='message' as='textarea' id='message'
                         className='w-full border border-neutral-250 rounded-sm px-4 py-4 bg-neutral-50 text-lg block h-56' />
                </div>
                <ErrorMessage name='message' component='div' className='text-sm text-red-400 fade-in-on-render' />
              </div>
              <div className='mb-8'>
                <label className='flex w-full custom-checkbox-label cursor-pointer'>
                  <Field type='checkbox' name='privacy' className='sr-only' />
                  <span
                    className={clsx('w-6 h-6 border rounded-sm inline-block mr-4 flex-shrink-0 relative', {
                      'border-neutral-200 bg-neutral-50': !errors.privacy,
                      'border-red-500 bg-red-100': errors.privacy,
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
            </Form>
          )}
        </Formik>
      </div>

    </Layout>
  )
}

export default Index
