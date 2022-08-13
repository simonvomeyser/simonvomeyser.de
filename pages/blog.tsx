import type { NextPage } from 'next'
import React from 'react'
import { Container } from '../components/Container'
import { FadeInImage } from '../components/FadeInImage'
import { PageHeading } from '../components/PageHeading'
import { useTranslation } from '../hooks/useTranslation'
import ArrowRightSvg from '../svg/arrow-right.svg'

type BlogPostType = {
  title: string
  list_image: string
  excerpt: string
  tags: string[]
  link: string;
}

const Index: NextPage<{ posts: BlogPostType[] }> = ({ posts }) => {
  const { __, ___ } = useTranslation()

  return (
    <>
      <PageHeading>
        <h1>{__('navigationBlog')}</h1>
      </PageHeading>
      <Container className='rich-text mb-8'>
        {___('blogCopy')}
      </Container>
      <Container className='mb-8 flex justify-center'>
        <a href='https://simple-web.dev'
           className='p-2 w-full sm:min-w-[300px] text-center inline-block mx-auto bg-primary font-bold text-white'>
          {__('blogCta')}
        </a>
      </Container>
      <Container>
        <div className='rich-text max-w-screen-sm mx-auto mb-8'>
          {___('blogCopy2')}
        </div>
      </Container>

      <div className='grid sm:grid-cols-2 gap-4'>
        {posts.map((post, index) => (
          <div className='shadow flex flex-col' key={index}>
            <div className='bg-neutral-100 pt-[56.6666%] relative'>
              <div className='absolute inset-0 w-full h-full'>
                <FadeInImage
                  src={post.list_image}
                  alt={post.title}
                  width={456}
                  height={258}
                  objectFit='cover'
                />
                <a href={post.link} className='absolute inset-0 w-full h-full'>
                </a>
              </div>
            </div>
            <div className='px-4 pt-4 flex flex-col h-full pb-4'>
              <div className='text-sm text-neutral-400'>{post.tags.join(', ')}</div>
              <div className='text-2xl mb-4'>{post.title}</div>
              <div className='small-basic-rich-text mb-4'
                   dangerouslySetInnerHTML={{ __html: post.excerpt.trim() }}
              />
              <div className='flex justify-end mt-auto'>
                <a href={post.link} className='hover:text-neutral-700 transition text-neutral-400'>
                <ArrowRightSvg className='w-8 h-auto ' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export async function getStaticProps() {

  const posts = await fetch('https://simple-web.dev/api/recent-posts')
    .then(res => res.json()).then(data => {
      return data.data
    })

  return {
    props: { posts },
  }

}


export default Index
