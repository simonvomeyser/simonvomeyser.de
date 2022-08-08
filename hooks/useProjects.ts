import { ProjectType } from '../d'

export const yearForCurrentProjects = 2019

export const useProjects = (projects: ProjectType[]) => {
  const sortedProjects = projects.sort((a, b) => {
    if (a.dateFull > b.dateFull) {
      return -1
    }
    if (a.dateFull < b.dateFull) {
      return 1
    }
    return 0
  })

  const currentProjects = sortedProjects.filter((p) => p.year >= yearForCurrentProjects)
  const oldProjects = sortedProjects.filter((p) => p.year < yearForCurrentProjects)

  return { currentProjects, oldProjects }
}