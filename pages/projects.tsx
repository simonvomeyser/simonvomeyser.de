import { promises as fs } from 'fs'
import matter from 'gray-matter'
import type { GetStaticPropsContext, NextPage } from 'next'
import path from 'path'
import { useState } from 'react'
import { PageHeading } from '../components/PageHeading'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectType } from '../d'
import { useProjects } from '../hooks/useProjects'
import { useTranslation } from '../hooks/useTranslation'
import SearchSvg from '../svg/search.svg'


const Index: NextPage<{ projects: ProjectType[] }> = ({ projects }) => {
  const { __, ___ } = useTranslation()

  const { currentProjects, oldProjects, allProjects } = useProjects(projects)
  const [showOldProjects, setShowOldProjects] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  let projectsToShow = showOldProjects ? allProjects : currentProjects

  if (searchQuery.length > 0) {

    projectsToShow = allProjects.filter(project => {
      return (
        project?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project?.technologies?.join(' ').toLowerCase().includes(searchQuery.toLowerCase()) ||
          project?.html?.toLowerCase().includes(searchQuery.toLowerCase())
      )

    })
  }

  return (
    <>
      <PageHeading>
        <h1>{__('navigationProjects')}</h1>
      </PageHeading>
      <div className='rich-text max-w-screen-sm mx-auto mb-8'>
        {___('projectsCopy')}
      </div>

      <div className='max-w-screen-sm mx-auto mb-10 md:px-8 relative'>


        <div className="relative">

        <SearchSvg className='absolute top-1/2  transform  -translate-y-1/2 left-3 w-5 h-5 text-neutral-200' />

        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
               className='w-full border border-neutral-250 rounded-sm px-4 py-3 bg-neutral-50 text-lg block pl-11'
               placeholder={__('projectsSearchPlaceholder')}
        />
        </div>
      </div>
      <div className='grid sm:grid-cols-2 gap-4'>
        {projectsToShow.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
      {searchQuery && projectsToShow.length === 0 && (
        <div className='text-center text-neutral-300 py-8'>
          {___('projectsNoResults')} <br />
          <button className='underline' onClick={() => setSearchQuery('')}>{__('projectsNoResultsClear')}</button>
        </div>
      )}
      {!showOldProjects && !searchQuery && (
        <div className='mt-12 flex justify-center '>
          <button type='button' className='px-4 py-3 border-primary border-2 text-primary'
                  onClick={() => setShowOldProjects(true)}>
            {__('projectsShowOldProjects')} ({oldProjects.length})
          </button>
        </div>
      )}
    </>
  )
}



export async function getStaticProps(context: GetStaticPropsContext) {

  const postsDirectory = path.join(process.cwd(), '/projects/' + context.locale)
  const filenames = await fs.readdir(postsDirectory)

  const projects = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = await fs.readFile(filePath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      dateFull: matterResult.data.year + '-' + matterResult.data.month,
      ...matterResult.data,
      html: matterResult.content.trim(),
    }
  })


  return {
    props: {
      projects: await Promise.all(projects),
    },
  }

}

export default Index
