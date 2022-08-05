import type { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import AboutMeImage from '../img/about-me-1.jpg'

const Index: NextPage = () => {
  return (
    <Layout>
      <div className='flex pt-16'>
        <div className='flex-1 px-9'>
          <h1 className="text-4xl text-center text-teal-400 mb-12 font-medium  font-special">Cool, dass du hier bist!</h1>
              <p className="text-center mb-12 text-2xl text-neutral-500 font-special">Ich bin Simon, und ich mache <br/> <i>irgendwas im Internet</i></p>
          <p className="text-neutral-400 text-lg">Etwas genauer genommen plane und realisiere ich mit dir Webprojekte als <b>Fullstack
              Entwickler </b> <br/><br/> Ich nutze dabei <b>Javascript</b> Frameworks und <b>Laravel</b> <br/>... und eine Menge Kaffee ☕️ </p>
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
