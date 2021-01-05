import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type PageSelectorProps = {
  color: string,
  page: number
}

export default function PageSelector ({ color, page }: PageSelectorProps) {
  return (
    <div className=" flex-col w-48 hidden lg:flex">
      <div className="my-4 ml-10 xl:ml-16">
        <div className={'text-' + color + ' my-4 text-sm'}>Packaging</div>
        <div className="w-4 my-3">
          <FontAwesomeIcon icon={page === 1 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
        <div className="w-4 my-3">
          <FontAwesomeIcon icon={page === 2 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
        <div className="w-4 my-3">
          <FontAwesomeIcon icon={page === 3 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
      </div>
      <div className="my-4 ml-10 xl:ml-16">
        <div className={'text-' + color + ' my-4 text-sm'}>Product</div>
        <div className="w-4 my-3">
          <FontAwesomeIcon icon={page === 4 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
        <div className="w-4 my-3">
          <FontAwesomeIcon icon={page === 5 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
        <div className="w-4 my-3">
          <FontAwesomeIcon icon={page === 6 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  )
}
