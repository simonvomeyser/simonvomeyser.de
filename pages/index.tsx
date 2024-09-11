import type { NextPage } from 'next'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { Container } from '../components/Container'
import { PageHeading } from '../components/PageHeading'
import { Seo } from '../components/Seo'
import { SocialLinks } from '../components/SocialLinks'
import { useTranslation } from '../hooks/useTranslation'
import AboutMeImageMobile from '../img/about-me-1-mobile.jpg'
import AboutMeImage from '../img/about-me-1.jpg'
import AboutMeBackground from '../svg/about-me-background.svg'

const Index: NextPage = () => {
  const { __, ___ } = useTranslation()

  return (
    <>
      <Seo/>
      <div className='flex sm:pt-8 relative'>
        <AboutMeBackground className=' absolute w-32 sm:w-72  -top-7 sm:top-0 left-0 h-auto text-teal-100' />
        <div className='flex-1 sm:px-16 relative flex flex-col justify-center'>
          <PageHeading>
            <h1>
              {__('niceToMeetYou')}
            </h1>
          </PageHeading>
          <div className="max-w-screen-xs mx-auto lg:hidden mb-8">
            <Image priority={true} src={AboutMeImageMobile} width={766} height={597} objectFit='cover'
                   alt={__('aboutMeImageAlt')} />
          </div>
          <p className='text-center mb-8 sm:mb-12 text-2xl text-neutral-500 font-special'>
            {___('aboutMeOpener')}
          </p>
          <p className='text-lg text-neutral-400 rich-text'>
            {___('aboutMeFirstText')}
          </p>
        </div>
        <div className='w-[40%] pt-[60%] relative hidden lg:block'>
          <div className=' w-full h-full absolute inset-0'>
            <Image priority={true} src={AboutMeImage} width={378} height={566} objectFit='cover'
                   alt={__('aboutMeImageAlt')} />
          </div>
        </div>
      </div>
      <div className='my-14 h-0.5 bg-primary mx-auto max-w-xs'></div>
      <Container className="mb-16">

        <div className='text-center font-special text-2xl text-neutral-600 mb-8'>
          {___('aboutMeReadMoreHeading1')}
        </div>
        <div className='rich-text mb-10'>
          {___('aboutMeReadMoreText1')}
        </div>
        <div className='text-center font-special text-2xl text-neutral-600 mb-8'>
          {___('aboutMeReadMoreHeading2')}
        </div>
        <div className='rich-text mb-8'>
          {___('aboutMeReadMoreText2')}
        </div>
        <div className='flex justify-center'>
          <Link href='contact' className='py-2.5 p-4 min-w-[200px] bg-primary text-white text-lg text-center transition duration-500 hover:opacity-60'>
            {___('aboutMeCta')}
          </Link>
        </div>
      </Container>
      {/*Button that leads to contact*/}
      <SocialLinks/>
    </>
  )
}

export default Index
