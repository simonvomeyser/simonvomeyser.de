import { ProjectType } from '../d'

export const yearForCurrentProjects = 2020

export const useProjects = (projects: ProjectType[]) => {

  const notRunningProjects = projects.filter((p) => !p.running)
  const runningProjects = projects.filter((p) => p.running)

  const sortedProjects = notRunningProjects.sort((a, b) => {
    if (a.dateFull > b.dateFull) {
      return -1
    }
    if (a.dateFull < b.dateFull) {
      return 1
    }
    return 0
  })

  // Add running projects to the top of the list
  sortedProjects.unshift(...runningProjects)

  const currentProjects = sortedProjects.filter((p) => p.year >= yearForCurrentProjects)
  const oldProjects = sortedProjects.filter((p) => p.year < yearForCurrentProjects)

  return { currentProjects, oldProjects, allProjects: sortedProjects }
}