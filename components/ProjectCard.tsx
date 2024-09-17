import clsx from 'clsx'
import React from 'react'
import { ProjectType } from '../d'
import { useTranslation } from '../hooks/useTranslation'
import ExternalLinkSvg from '../svg/external-link.svg'
import FullscreenSvg from '../svg/fullscreen.svg'
import PlayScreenSvg from '../svg/play-screen.svg'
import StopSquareSvg from '../svg/stop-square.svg'
import { slugify } from '../util/slugify'
import { FadeInImage } from './FadeInImage'

export type ProjectCardProps = {
  project: ProjectType
  className?: string;
  style?: React.CSSProperties;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ className, project , style}) => {
  let video: React.RefObject<HTMLVideoElement> = React.createRef()
  let videoFullscreen: React.RefObject<HTMLVideoElement> = React.createRef()

  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false)
  const {__} = useTranslation();

  const toggleVideoPlay = () => {
    if (video.current) {
      if (isVideoPlaying) {
        video.current.pause()
      } else {
        video.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }


  return (
    <div className={clsx('shadow', className)} style={style} id={slugify(project.name)}>
      <div className='bg-neutral-100 pt-[50%] relative'>
        <div className='absolute inset-0 w-full h-full'>
          <FadeInImage
            src={`/img/projects/${project.logo}`}
            alt={project.name}
            width={603}
            height={304}
            objectFit='cover'
            layout="responsive"
          />
          <video muted loop ref={video}
                 preload='none'
                 playsInline
                 className={clsx('w-full h-full object-cover absolute inset-0 transition duration-1000', {
                   'opacity-0': !isVideoPlaying,
                 })}
          >
            <source src={project.videoUrl} type='video/mp4' />
          </video>
          <div className='sr-only'>
            <video muted loop ref={videoFullscreen} preload='none'
            >
              <source src={project.videoUrl} type='video/mp4' />
            </video>
          </div>

        </div>
      </div>
      <div className='relative'>

        <div className='absolute right-0 -translate-y-1/2 px-2 space-x-4'>
          {project.videoUrl && (
            <>
              <a
                className={clsx('rounded-full bg-primary inline-flex justify-center items-center text-white w-10 h-10 hover:bg-primary hover:scale-105 transition duration-300 relative ', {
                  'opacity-0 scale-50 translate-x-10 pointer-events-none': !isVideoPlaying
                })}
                tabIndex={isVideoPlaying ? 0 : -1}
                title="Fullscreen"
                onClick={toggleVideoPlay}
                href={project.videoUrl} target='_blank' rel='noopener noreferrer'>
                  <FullscreenSvg
                    className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />

              </a>
              <button
                title={isVideoPlaying ? 'Pause' : 'Play'}
                className='rounded-full bg-primary inline-flex justify-center items-center text-white w-10 h-10 hover:bg-primary hover:scale-105 transition duration-300 relative '
                onClick={toggleVideoPlay}
              >

                <PlayScreenSvg
                  className={clsx("w-5 h-5 transition duration-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", {
                    'opacity-0 scale-0': isVideoPlaying
                  })}
                   />
                <StopSquareSvg
                  className={clsx("w-3 h-auto transition duration-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ", {
                    'opacity-0 scale-0': !isVideoPlaying,
                  })}
                />
              </button>
            </>
          )}
          {project.link && (
            <a href={project.link}
               target="_blank" rel="noopener noreferrer"
               className='rounded-full bg-neutral-700 inline-flex justify-center items-center text-white w-10 h-10 hover:bg-primary hover:scale-105 transition duration-300 relative'>
              <ExternalLinkSvg
                className='w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </a>
          )}
        </div>
        <div className='px-4 pt-4 pb-8'>
          <div className='text-sm text-neutral-400'>{project.year}{project.running ? ' ' + __('untilNow') : ''}</div>
          <div className='text-2xl mb-4'>{project.name}</div>
          <div className='small-basic-rich-text' dangerouslySetInnerHTML={{ __html: project.html }} />
        </div>
      </div>
    </div>
  )
}
