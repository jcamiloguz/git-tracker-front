import { ICommit } from '../../types/commit'
import { CommitItem } from '../CommitItem'
interface Props {
  commits: ICommit[]
}

export const CommitList = ({ commits }: Props) => {
  return (
    <>
      <div className=" absolute ml-[18px] h-[100%] w-[6px] -translate-y-40 bg-gray-100 shadow-md md:ml-16"></div>
      <ul className="ml-10 mr-5 md:ml-[87px] md:mr-auto">
        {commits.map((commit) => (
          <CommitItem key={commit.sha} commit={commit} />
        ))}
      </ul>
    </>
  )
}
