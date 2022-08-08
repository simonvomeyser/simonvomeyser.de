import clsx from 'clsx'
import React from 'react'
import { ProjectType } from '../d'
import { FadeInImage } from './FadeInImage'

export type ProjectCardProps = {
  project: ProjectType
  className?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ className, project }) => {

  return (
    <div className={clsx(' shadow', className)}>
      <div className='bg-neutral-100 pt-[56.6666%] relative'>
        <div className='absolute inset-0 w-full h-full'>
          <FadeInImage
            src={`/img/projects/${project.logo}`}
            alt={project.name}
            width={456}
            height={258}
            objectFit='cover'
          />
        </div>
      </div>
      <div className='px-4 pt-4 pb-8'>
        <div className='text-sm text-neutral-400'>{project.year}</div>
        <div className='text-2xl mb-4'>{project.name}</div>
        <div className='text-2xl mb-4'>
        </div>
        <div className='project-card-rich-text' dangerouslySetInnerHTML={{ __html: project.html }} />
      </div>
    </div>
  )
}
