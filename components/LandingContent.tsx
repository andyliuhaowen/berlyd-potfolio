import CustomButton from './CustomButton'
import Image from 'next/image'

class LandingContentProps {
  name: string = ''
}

export default function LandingContent (props: LandingContentProps) {
  return (
    <div className={`bg-${props.name}_bg h-screen relative flex items-center`}>
      <div className="flex w-full">
        <div className="flex flex-col items-center pl-28 w-7/20">
          <div className="h-full flex flex-col">
            <div className={`text-${props.name} font-yesteryear z-50 relative w-0 leading-normal text-40 whitespace-nowrap md:text-52 xl:text-60`}>Mojo</div>
            <div className="flex flex-col flex-grow justify-center">
              <div className="text-mojo_text text-5xl mb-2">Mojito</div>
              <div className="text-mojo_text text-lg my-2">a delightful taste from Havana</div>
              <div>
                <CustomButton href="mojo" text="View Project" color="mojo_text" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mr-16 relative flex-grow h-65vh mt-8vh" >
          <Image src="/mojo.png" alt="Mojo photo" layout="fill" objectFit="cover" objectPosition="center"></Image>
        </div>
      </div>
    </div>
  )
}
