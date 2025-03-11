import Button from "../../atoms/button"

const Title = () => {
  return (
    <div className="flex items-center lg:items-start justify-between max-lg:flex-col max-lg:gap-y-4">
      <h1 className="tracking-normal text-3xl font-black max-lg:text-center lg:w-[30rem] md:text-5xl xl:text-7xl">
        AI-DRIVEN INSPIRATIONAL SPACES
      </h1>

      <div className="space-y-6 w-full md:w-2/3 lg:w-82 max-lg:text-center">
        <p className="tracking-wide leading-relaxed max-md:text-sm">
          Quad is a building design platform powered by generative AI to help
          design optimal residential developments in minutes, rather than a month
        </p>
        <Button url="/" variant="primary" className="border">Get Started</Button>
      </div>
 
    </div>

  )
}

export default Title
