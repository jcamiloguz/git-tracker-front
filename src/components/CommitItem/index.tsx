import { toast } from 'react-hot-toast'
import { ClipboardIcon } from '../../assets/icons/ClipboardIcon'
import Emoji from 'react-emoji-render'
import { ICommit } from '../../types/commit'
interface Props {
  commit: ICommit
}

export const CommitItem = ({ commit }: Props) => {
  return (
    <li className="relative mb-10 rounded-md  bg-[#CECECE]/[0.16]  px-[18px]  pb-3 pt-[18px] shadow-md backdrop-blur-sm">
      <div className="absolute left-[-36px]  top-0 z-10 h-8 w-8 rounded-full bg-gray-100 shadow-md"></div>
      <div className="flex justify-between">
        <a
          className="max-w-[512px] font-bold"
          href={commit.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <Emoji>{commit.commit.message}</Emoji>
        </a>
        <p className="hidden md:block">
          {new Date(commit.commit.committer.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </div>
      <a
        className=" mt-4 flex w-fit items-center gap-2"
        href="http://github.com"
        target="_blank"
        rel="noreferrer"
      >
        <figure className="h-[37px] w-[37px] overflow-hidden rounded-full shadow-md">
          <img
            src={commit.author.avatar_url}
            alt="profile image"
            className="h-full w-full object-cover"
          />
        </figure>
        <span>{commit.author.login}</span>
      </a>
      <div className="flex items-center justify-between">
        <div className="mt-2 flex items-center gap-2">
          <p className=" text-sm ">SHA: {commit.sha.slice(0, 5)}... </p>
          <button
            className="flex h-full cursor-pointer items-center "
            onClick={() => {
              navigator.clipboard.writeText(commit.sha)
              toast.success('Copied to clipboard')
            }}
          >
            <ClipboardIcon />
          </button>
        </div>
        <p className="block md:hidden">
          {new Date(commit.commit.committer.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </div>
    </li>
  )
}
