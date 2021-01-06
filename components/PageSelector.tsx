import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PageSelector () {
  return (
    <div className="absolute w-48 flex flex-col h-entire z-20">
      <div className="h-full w-full absolute">
        <div className="bg-landing_pink h-screen"></div>
        <div className="bg-mojo_bg h-screen"></div>
      </div>
      <div className="w-full h-full bg-white absolute" style={{ mixBlendMode: 'multiply' }}>
        <div className="h-full w-full absolute z-50" style={{ mixBlendMode: 'screen' }}>
          <div className="bg-black h-screen"></div>
          <div className="bg-mojo_text h-screen"></div>
        </div>
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2">
          <div className="flex w-5 h-5 ml-10 xl:ml-16 absolute items-center justify-center top-17">
            <div className="w-3">
              <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
            </div>
          </div>
          <div className=" flex-col w-48 hidden lg:flex">
            <div className="my-4 ml-10 xl:ml-16">
              <div className={'my-4 text-sm'}>Packaging</div>
              <div className="w-5 my-3">
                <FontAwesomeIcon
                  icon={farCircle}
                ></FontAwesomeIcon>
              </div>
              <div className="w-5 my-3">
                <FontAwesomeIcon
                  icon={farCircle}
                ></FontAwesomeIcon>
              </div>
              <div className="w-5 my-3">
                <FontAwesomeIcon
                  icon={farCircle}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="my-4 ml-10 xl:ml-16">
              <div className={'my-4 text-sm'}>Product</div>
              <div className="w-5 my-3">
                <FontAwesomeIcon
                  icon={farCircle}
                ></FontAwesomeIcon>
              </div>
              <div className="w-5 my-3">
                <FontAwesomeIcon
                  icon={farCircle}
                ></FontAwesomeIcon>
              </div>
              <div className="w-5 my-3">
                <FontAwesomeIcon
                  icon={farCircle}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
