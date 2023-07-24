import { toast } from 'react-hot-toast'
import { ClipboardIcon } from '../../assets/icons/ClipboardIcon'
import Emoji from 'react-emoji-render'

export const CommitItem = () => {
  return (
    <li className="relative mb-10 rounded-md  bg-[#CECECE]/[0.16]  px-[18px]  pb-3 pt-[18px] shadow-md backdrop-blur-sm">
      <div className="absolute left-[-36px]  top-0 z-10 h-8 w-8 rounded-full bg-gray-100 shadow-md"></div>
      <div className="flex justify-between">
        <h3 className="max-w-[512px] font-bold">
          <Emoji>Feat: :sparkles: First commit Create a nest project</Emoji>
        </h3>
        <p className="hidden md:block">5 Jul</p>
      </div>
      <a
        className=" mt-4 flex w-fit items-center gap-2"
        href="http://github.com"
        target="_blank"
        rel="noreferrer"
      >
        <figure className="h-[37px] w-[37px] overflow-hidden rounded-full shadow-md">
          <img
            src="https://avatars.githubusercontent.com/u/57039869?v=4"
            alt="profile image"
            className="h-full w-full object-cover"
          />
        </figure>
        <span>Jcamiloguz</span>
      </a>
      <div className="flex items-center justify-between">
        <div className="mt-2 flex items-center gap-2">
          <p className=" text-sm ">SHA: 1c9b3 </p>
          <button
            className="flex h-full cursor-pointer items-center "
            onClick={() => {
              navigator.clipboard.writeText('1c9b3')
              toast.success('Copied to clipboard')
            }}
          >
            <ClipboardIcon />
          </button>
        </div>
        <p className="block md:hidden">5 Jul</p>
      </div>
    </li>
  )
}
