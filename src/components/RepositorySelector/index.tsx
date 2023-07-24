interface Props {
  selectedTab: string
  handleTabChange: (tab: 'frontend' | 'backend') => void
}
export const RepositorySelector = ({ handleTabChange, selectedTab }: Props) => {
  return (
    <>
      <div className="relative z-20 flex w-full  overflow-hidden bg-gray-100 text-slate-700 shadow-md md:rounded-lg">
        <div className="w-1/2 ">
          <button
            className="transition- w-full  py-2 text-center text-2xl duration-300 hover:bg-gray-300"
            onClick={() => handleTabChange('frontend')}
          >
            <span
              className={`border-b-2  transition-all duration-300 ${
                selectedTab === 'frontend'
                  ? 'border-b-slate-700'
                  : 'border-b-transparent'
              }`}
            >
              Frontend
            </span>
          </button>
        </div>
        <div className="absolute left-1/2 top-1/2 h-[32px] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gray-500"></div>
        <div className="w-1/2">
          <button
            className="transition- w-full  py-2 text-center text-2xl duration-300 hover:bg-gray-300"
            onClick={() => handleTabChange('backend')}
          >
            <span
              className={`border-b-2 transition-all duration-300 ${
                selectedTab === 'backend'
                  ? 'border-b-slate-700'
                  : 'border-b-transparent'
              }`}
            >
              Backend
            </span>
          </button>
        </div>
      </div>
      <div className="relative z-10 -translate-y-4 rounded-lg bg-[#CECECE]/[0.16] px-2 pb-4 pt-8 shadow-md backdrop-blur-sm">
        <div className="mx-auto ml-[45px] max-w-[542px] md:ml-auto">
          <p className="text-base text-gray-100 ">
            Git tracker is a user-friendly app that displays the git commit
            history of this current project
          </p>
          <a
            className="mt-4 cursor-pointer text-sm text-gray-100 underline "
            href="
        https://github.com
      "
            target="_blank"
            rel="noreferrer"
          >
            Go to repository
          </a>
        </div>
      </div>
    </>
  )
}
