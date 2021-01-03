import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type PageSelectorProps = {
  color: string,
  page: number
}

export default function PageSelector ({ color, page }: PageSelectorProps) {
  return (
    <div className="flex flex-col items-center w-32">
      <div className="my-4">
        <div className={'text-' + color + ' my-2 text-xs'}>Packaging</div>
        <div className="w-3 my-3">
          <FontAwesomeIcon icon={page === 1 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
        <div className="w-3 my-3">
          <FontAwesomeIcon icon={page === 2 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
        <div className="w-3 my-3">
          <FontAwesomeIcon icon={page === 3 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
      </div>
      <div className="my-4">
        <div className={'text-' + color + ' my-2 text-xs'}>Product</div>
        <div className="w-3 my-3">
          <FontAwesomeIcon icon={page === 4 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
        <div className="w-3 my-3">
          <FontAwesomeIcon icon={page === 5 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
        <div className="w-3 my-3">
          <FontAwesomeIcon icon={page === 6 ? faCircle : farCircle} className={'fill-current text-' + color}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  )
}
