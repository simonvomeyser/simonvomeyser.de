import type { GetStaticPropsContext, NextPage } from 'next'
import React, { useState } from 'react'
import { Container } from '../components/Container'
import { FadeInImage } from '../components/FadeInImage'
import { Layout } from '../components/Layout'
import { PageHeading } from '../components/PageHeading'
import { useTranslation } from '../hooks/useTranslation'


const Index: NextPage = ({ posts }) => {
  const { __, ___ } = useTranslation()
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  return (
    <Layout>
      <PageHeading>
        <h1>{__('navigationBlog')}</h1>
      </PageHeading>
      <Container className="rich-text mb-8">
        {___('blogCopy')}
      </Container>
      <Container className="mb-8">

          <a href='https://simple-web.dev'
             className='p-2 min-w-[300px] text-center inline-block mx-auto bg-primary font-bold text-white'>
              {__('blogCta')}
          </a>
      </Container>
      <Container>
        <div className='rich-text max-w-screen-sm mx-auto mb-8'>
          {___('blogCopy2')}
        </div>
      </Container>

      <div className='grid sm:grid-cols-2 gap-4'>
        {posts.map((node, index) => (
          <div className="shadow" key={index}>
            <div className='bg-neutral-100 pt-[56.6666%] relative'>
              <div className='absolute inset-0 w-full h-full'>
                <FadeInImage
                  src={node.list_image}
                  alt={node.title}
                  width={456}
                  height={258}
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='px-4 pt-4 pb-8'>
              <div className='text-sm text-neutral-400'>{node.tags.join(', ')}</div>
              <div className='text-2xl mb-4'>{node.title}</div>
              <div className='small-basic-rich-text' dangerouslySetInnerHTML={{ __html: node.excerpt.trim() }} />
            </div>
          </div>
        ))}
      </div>

    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {

  const posts = await fetch('https://simple-web.dev/api/recent-posts')
    .then(res => res.json()).then(data => {
      return data.data
    })

  return {
    props: { posts },
  }

}


export default Index
