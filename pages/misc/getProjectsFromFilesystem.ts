import { promises as fs } from 'fs'
import matter from 'gray-matter'
import { GetStaticPropsContext } from 'next'
import path from 'path'


export const getProjectsFromFilesystem = async (context: GetStaticPropsContext) => {
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