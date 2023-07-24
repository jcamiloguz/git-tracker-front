import { RepositorySelector } from '../RepositorySelector'
import { CommitList } from '../CommitList'

import { useRepositories } from '../../hooks/useRepositories'

export const Tracker = () => {
  const {
    selectedTab,
    handleRepositoryChange,
    commitsMutation,
    selectedRepositoryMutation,
  } = useRepositories()
  return (
    <section className="relative">
      <RepositorySelector
        selectedTab={selectedTab}
        handleTabChange={handleRepositoryChange}
        repositoryMutation={selectedRepositoryMutation}
      />

      {commitsMutation.isSuccess && (
        <CommitList commits={commitsMutation.data.data.data} />
      )}
    </section>
  )
}
