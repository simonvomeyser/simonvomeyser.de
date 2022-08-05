import type { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import AboutMeImage from '../img/about-me-1.jpg'

const Index: NextPage = () => {
  return (
    <Layout>
      <div className='flex pt-16'>
        <div className='flex-1 px-6'>
          <h1 className="text-3xl text-center text-primary mb-12">Schön, dass du hergefunden hast!</h1>
          <p className="text-center mb-12">Hi! Ich bin Simon, und ich mache irgendwas im Internet</p>
          <p>...etwas genauer plane und realisiere ich mit dir Webprojekte als Fullstack Entwickler und nutze dabei Javascript-Frameworks und PHP (Laravel). </p>
        </div>
        <div className='w-[40%] pt-[60%] relative'>
          <div className='bg-gray-200 w-full h-full absolute inset-0'>
            <Image src={AboutMeImage} alt='About me' width={378} height={566} layout={'fill'} objectFit="cover"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
