import type { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import useTranslation from '../hooks/useTranslation'
import AboutMeImage from '../img/about-me-1.jpg'
import AboutMeBackground from '../svg/about-me-background.svg'

const Index: NextPage = () => {
  const { __, ___ } = useTranslation()

  return (
    <Layout>
      <div className='flex pt-16 relative'>
        <AboutMeBackground className='absolute w-72 top-0 left-0 h-auto text-teal-100' />
        <div className='flex-1 px-9 relative'>
          <h1 className='text-4xl text-center text-teal-400 mb-12 font-medium  font-special'>
            {__('niceToMeetYou')}
          </h1>
          <p className='text-center mb-12 text-2xl text-neutral-500 font-special'>
            {___('aboutMeOpener')}
          </p>
          <p className='text-lg text-neutral-400'>
            {___('aboutMeFirstText')}
          </p>
        </div>
        <div className='w-[40%] pt-[60%] relative'>
          <div className='bg-gray-200 w-full h-full absolute inset-0'>
            <Image priority={true} src={AboutMeImage} width={378} height={566} objectFit='cover'
                   alt={__('aboutMeImageAlt')} />
          </div>
        </div>
      </div>
      <div className='my-14 h-0.5 bg-primary mx-auto max-w-xs'></div>
      <div className='max-w-screen-sm mx-auto'>
        <div className='text-center font-special text-2xl text-neutral-600 mb-8'>
          {___('aboutMeReadMoreHeading1')}
        </div>
        <div className='rich-text'>
          {___('aboutMeReadMoreText1')}
        </div>
      </div>
    </Layout>
  )
}

export default Index
