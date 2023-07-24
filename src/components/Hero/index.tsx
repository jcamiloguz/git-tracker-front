interface Props {
  Title: string
  description: string
}

export const Hero = ({ Title, description }: Props) => {
  return (
    <section className="mt-16">
      <h1 className="text-center  text-5xl font-bold text-gray-100  ">
        {Title}
      </h1>
      <p className="mt-6 text-center text-gray-100">{description}</p>
    </section>
  )
}
