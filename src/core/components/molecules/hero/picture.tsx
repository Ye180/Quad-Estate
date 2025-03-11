import Image from "next/image"

const Picture = () => {
  return (
      <div className="h-fit overflow-hidden rounded-4xl shadow lg:h-[80vh]">
      {/* <h1>description</h1> */}
    <Image alt="Image1" src="/assets/home1.webp" width={2000} height={2000} className="w-full h-full" priority/>
      </div>
  )
}

export default Picture
