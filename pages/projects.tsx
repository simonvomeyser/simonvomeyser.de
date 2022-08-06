import { promises as fs } from 'fs'
import matter from 'gray-matter'
import type { GetStaticPropsContext, NextPage } from 'next'
import path from 'path'
import { Layout } from '../components/Layout'
import { PageHeading } from '../components/PageHeading'
import useTranslation from '../hooks/useTranslation'

export type ProjectType = {
  name: string
}

const Index: NextPage<{ projects: ProjectType[] }> = ({ projects }) => {
  const { __, ___ } = useTranslation()

  return (
    <Layout>
      <PageHeading>
        <h1>{__('navigationProjects')}</h1>
      </PageHeading>
      <div className='rich-text max-w-screen-sm mx-auto'>
        {___('projectsCopy')}
      </div>
      <div className='grid sm:grid-cols-2 gap-4'>
        {projects.map((project, index) => (
          <div key={index}>
            {project.data.name} <br />
            {project.content}

          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {

  const postsDirectory = path.join(process.cwd(), '/projects/' + context.locale)
  const filenames = await fs.readdir(postsDirectory)

  const projects = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = await fs.readFile(filePath, 'utf8')

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here
    const matterResult = matter(fileContents)

    return {
      data: matterResult.data,
      content: matterResult.content,
    }
  })


  return {
    props: {
      projects: await Promise.all(projects),
    },
  }
}

export default Index
