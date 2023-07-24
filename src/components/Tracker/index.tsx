import { useState } from 'react'
import { RepositorySelector } from '../RepositorySelector'
import { CommitList } from '../CommitList'

export const Tracker = () => {
  const [selectedTab, setSelectedTab] = useState<'frontend' | 'backend'>(
    'frontend',
  )

  const handleTabChange = (tab: 'frontend' | 'backend') => {
    setSelectedTab(tab)
  }

  return (
    <section className="relative">
      <RepositorySelector
        selectedTab={selectedTab}
        handleTabChange={handleTabChange}
      />

      <CommitList />
    </section>
  )
}
