import type { GetStaticPropsContext, NextPage } from 'next'
import { useState } from 'react'
import { Layout } from '../components/Layout'
import { PageHeading } from '../components/PageHeading'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectType } from '../d'
import { useProjects } from '../hooks/useProjects'
import { useTranslation } from '../hooks/useTranslation'
import { getProjectsFromFilesystem } from './misc/getProjectsFromFilesystem'

const Index: NextPage<{ projects: ProjectType[] }> = ({ projects }) => {
  const { __, ___ } = useTranslation()

  const { currentProjects, oldProjects } = useProjects(projects)
  const [showOldProjects, setShowOldProjects] = useState(false)

  const projectsToShow = showOldProjects ? currentProjects.concat(oldProjects) : currentProjects

  return (
    <Layout>
      <PageHeading>
        <h1>{__('navigationProjects')}</h1>
      </PageHeading>
      <div className='rich-text max-w-screen-sm mx-auto mb-8 md:mb-12'>
        {___('projectsCopy')}
      </div>
      <div className='grid sm:grid-cols-2 gap-4'>
        {projectsToShow.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {!showOldProjects && (
        <div className='mt-12 flex justify-center '>
          <button type='button' className='px-4 py-3 border-primary border-2 text-primary'
                  onClick={() => setShowOldProjects(true)}>
            {__('projectsShowOldProjects')} ({oldProjects.length})
          </button>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {

  return await getProjectsFromFilesystem(context)

}

export default Index
