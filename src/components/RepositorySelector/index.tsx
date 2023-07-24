import Emoji from 'react-emoji-render'
import { IRepository, repositoryType } from '../../types/repository'
import { UseQueryResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { IResponse } from '../../api/config'

interface Props {
  selectedTab: string
  handleTabChange: (tab: repositoryType) => void
  repositoryMutation: UseQueryResult<AxiosResponse<IResponse<IRepository>>>
}
export const RepositorySelector = ({
  handleTabChange,
  selectedTab,
  repositoryMutation,
}: Props) => {
  return (
    <>
      <div className="relative z-20 flex w-full  overflow-hidden bg-gray-100 text-slate-700 shadow-md md:rounded-lg">
        <div className="w-1/2 ">
          <button
            className="transition- w-full  py-2 text-center text-2xl duration-300 hover:bg-gray-300"
            onClick={() => handleTabChange(repositoryType.FRONTEND)}
          >
            <span
              className={`border-b-2  transition-all duration-300 ${
                selectedTab === repositoryType.FRONTEND
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
            onClick={() => handleTabChange(repositoryType.BACKEND)}
          >
            <span
              className={`border-b-2 transition-all duration-300 ${
                selectedTab === repositoryType.BACKEND
                  ? 'border-b-slate-700'
                  : 'border-b-transparent'
              }`}
            >
              Backend
            </span>
          </button>
        </div>
      </div>
      <div className="relative z-10 min-h-[134px] -translate-y-4 rounded-lg bg-[#CECECE]/[0.16] px-2 pb-4 pt-8 shadow-md backdrop-blur-sm">
        <div className="mx-auto ml-[45px] max-w-[542px] md:ml-auto">
          {repositoryMutation.isError && (
            <h2>
              <Emoji>Something went wrong :fire:</Emoji>
            </h2>
          )}
          {repositoryMutation.isLoading && (
            <h2>
              <Emoji>Loading... :hourglass_flowing_sand: </Emoji>
            </h2>
          )}
          {repositoryMutation.isSuccess && (
            <>
              <p className="text-base text-gray-100 ">
                <Emoji>
                  {repositoryMutation.data.data.data.description ||
                    'No description'}
                </Emoji>
              </p>
              <a
                className="mt-4 block w-fit cursor-pointer text-sm text-gray-100 underline "
                href={repositoryMutation.data.data.data.html_url}
                target="_blank"
                rel="noreferrer"
              >
                Go to repository
              </a>
              {repositoryMutation.data.data.data.homepage && (
                <a
                  className="mt-2 block w-fit cursor-pointer text-sm text-gray-100 underline "
                  href={repositoryMutation.data.data.data.homepage}
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to website
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
