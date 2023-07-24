import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import {
  getAllRepositories,
  getRepository,
  getRepositoryCommits,
} from '../api/repository'
import { repositoryType } from '../types/repository'

export const useRepositories = () => {
  const [selectedTab, setSelectedTab] = useState<repositoryType>(
    repositoryType.FRONTEND,
  )

  const handleRepositoryChange = (repository: repositoryType) => {
    setSelectedTab(repository)
  }

  const repositoriesMutation = useQuery({
    queryKey: ['repositories'],
    queryFn: getAllRepositories,
  })
  const selectedRepositoryMutation = useQuery({
    queryKey: ['repository', selectedTab],
    queryFn: () => getRepository(selectedTab),
  })

  const commitsMutation = useQuery({
    queryKey: ['commits', selectedTab],
    queryFn: () => getRepositoryCommits(selectedTab),
  })
  useEffect(() => {
    console.log(commitsMutation.data)
  }, [commitsMutation.data])
  return {
    selectedTab,
    handleRepositoryChange,
    repositoriesMutation,
    commitsMutation,
    selectedRepositoryMutation,
  }
}
