import clsx from 'clsx'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import type { GetServerSidePropsContext, NextPage } from 'next'
import { useQueryState } from 'next-usequerystate'
import path from 'path'
import { useState } from 'react'
import { PageHeading } from '../components/PageHeading'
import { ProjectCard } from '../components/ProjectCard'
import { Seo } from '../components/Seo'
import { ProjectType } from '../d'
import { useProjects } from '../hooks/useProjects'
import { useTranslation } from '../hooks/useTranslation'
import SearchSvg from '../svg/search.svg'


const Index: NextPage<{ projects: ProjectType[], query: string }> = ({ projects , query}) => {
  const { __, ___ } = useTranslation()

  const { currentProjects, oldProjects, allProjects } = useProjects(projects)
  const [showOldProjects, setShowOldProjects] = useState(false)
  const [searchQuery, setSearchQuery] = useQueryState('q', { defaultValue: query })

  let projectsToShow = showOldProjects ? allProjects : currentProjects

  if (searchQuery && searchQuery.length > 0) {

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
      <Seo
        pageTitle={__('navigationProjects')}
        description={__('metaDescriptionProject')}
      />
      <PageHeading>
        <h1>{__('navigationProjects')}</h1>
      </PageHeading>
      <div className='rich-text max-w-screen-sm mx-auto mb-8'>
        {___('projectsCopy')}
      </div>

      <div className='max-w-screen-xs mx-auto mb-10 md:px-8 relative'>


        <div className="relative">

        <SearchSvg className='absolute top-1/2  transform  -translate-y-1/2 left-3 w-5 h-5 text-neutral-200' />

        <input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value, {scroll: false, shallow: true})}
               className={clsx('w-full border-2 rounded-sm px-4 py-3 bg-neutral-50 text-lg block pl-11 transition duration-500 ', {
                  'border-neutral-200': !searchQuery.length,
                  'border-primary': searchQuery.length > 0,
               })}
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
          <button className='underline' onClick={() => setSearchQuery('', {scroll: false, shallow: true})}>{__('projectsNoResultsClear')}</button>
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



export async function getServerSideProps(context: GetServerSidePropsContext) {

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
      query: context.query.q || '',
    },
  }

}

export default Index
