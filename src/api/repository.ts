import { ICommit } from '../types/commit'
import { IRepository, repositoryType } from '../types/repository'
import { IResponse, api } from './config'

export const getAllRepositories = async () => {
  const response = await api.get<IResponse<IRepository[]>>('/repositories')
  return response
}
export const getRepository = async (repositoryType: repositoryType) => {
  const response = await api.get<IResponse<IRepository>>(
    `/repositories/${repositoryType}`,
  )
  return response
}

export const getRepositoryCommits = async (repository: repositoryType) => {
  const response = await api.get<IResponse<ICommit[]>>(
    `/repositories/${repository}/commits`,
  )
  return response
}
