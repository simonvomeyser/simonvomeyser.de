import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { AlertBox } from './AlertBox'

export type ContactFormAlertBoxProps = {
  submitStatus: 'success' | 'error';
};


export const ContactFormAlertBox: React.FC<ContactFormAlertBoxProps> = ({submitStatus}) => {

  const { __, ___ } = useTranslation()

  return (
    <div className='my-16 fade-in-on-render'>
      <AlertBox
        heading={submitStatus === 'success' ? __('contactMessageSuccessHeading') : __('contactMessageErrorHeading')}
        type={submitStatus}>
        {submitStatus === 'success' ? ___('contactMessageSuccessText') : ___('contactMessageErrorText')}
      </AlertBox>
    </div>
  )

}
