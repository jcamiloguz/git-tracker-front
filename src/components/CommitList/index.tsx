import { CommitItem } from '../CommitItem'

export const CommitList = () => {
  return (
    <>
      <div className=" absolute ml-[18px] h-[100%] w-[6px] -translate-y-40 bg-gray-100 shadow-md md:ml-16"></div>
      <ul className="ml-10 mr-5 md:ml-[87px] md:mr-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <CommitItem key={index} />
        ))}
      </ul>
    </>
  )
}
