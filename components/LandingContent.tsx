import CustomButton from './CustomButton'
import Image from 'next/image'

class LandingContentProps {
  name: string = ''
  title: string = ''
  tagline: string = ''
  desc: string = ''
  image: string = ''
}

export default function LandingContent (props: LandingContentProps) {
  return (
    <div className={`bg-${props.name}_bg h-screen relative flex items-center`}>
      <div className="flex w-full">
        <div className="flex flex-col items-center pl-0 md:w-7/20 lg:pl-28">
          <div className="h-full flex-col flex">
            <div className={`text-${props.name}_text font-yesteryear z-50 relative w-0 leading-none whitespace-nowrap text-40 transform translate-x-16 md:transform-none md:text-52 xl:text-60`}>{props.title}</div>
            <div className="flex-col flex-grow justify-center hidden md:flex">
              <div className={`text-${props.name}_text text-4xl xl:text-5xl mb-2`}>{props.tagline}</div>
              <div className={`text-${props.name}_text text-base xl:text-lg my-2`}>{props.desc}</div>
              <div>
                <CustomButton href="mojo" text="View Project" color="mojo_text" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mr-16 relative flex-grow h-65vh mt-8vh ml-16 md:ml-0" >
          <Image src={props.image} alt="Mojo photo" layout="fill" objectFit="cover" objectPosition="center"></Image>
        </div>
      </div>
    </div>
  )
}
