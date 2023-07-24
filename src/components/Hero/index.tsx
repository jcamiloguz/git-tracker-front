interface Props {
  Title: string
  description: string
}

export const Hero = ({ Title, description }: Props) => {
  return (
    <section className="mb-6 mt-[18px] md:mb-[68px] md:mt-16">
      <h1 className="text-center  text-5xl font-bold text-gray-100">{Title}</h1>
      <p className="mx-auto mt-6 w-[90%] text-center text-gray-100">
        {description}
      </p>
    </section>
  )
}
