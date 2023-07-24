export interface ICommit {
  sha: string
  node_id: string
  commit: ICommitClass
  url: string
  html_url: string
  comments_url: string
  author: IAuthor
  committer: IAuthor
}

export interface IAuthor {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface ICommitClass {
  message: string
  committer: ICommitter
  tree: ITree
  url: string
  comment_count: number
  verification: IVerification
}

export interface ICommitter {
  name: string
  email: string
  date: Date
}

export interface ITree {
  sha: string
  url: string
}

export interface IVerification {
  verified: boolean
  reason: string
  signature: null
  payload: null
}
