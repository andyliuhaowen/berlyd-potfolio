import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

class PageSelectorProps {
  page: number = 0;
}

const offsetMap = [5, 30, 38, 46, 71, 79, 87]
const colorMap = ['#000000', '#728397', '#efe8e1', '#e89b7c', '#efe8e1', '#728397', '#e89b7c']

export default function PageSelector (props: PageSelectorProps) {
  const mt = offsetMap[props.page]
  return (
    <motion.div className="hidden lg:fixed left-0 top-1/2 transform -translate-y-1/2 z-10" animate={{ color: colorMap[props.page] }} >
      <motion.div
        animate={{ top: `${mt / 4}rem` }}
        className={'flex w-5 h-5 ml-10 xl:ml-16 absolute items-center justify-center'}
      >
        <div className="w-3 h-3 relative">
          <FontAwesomeIcon icon={faCircle} className="w-full h-full absolute left-0 top-0"></FontAwesomeIcon>
        </div>
      </motion.div>
      <div className="flex-col w-48 flex">
        <div className="my-2 ml-10 xl:ml-16">
          <div className="w-5 h-5 my-3 relative">
            <FontAwesomeIcon icon={farCircle} className="w-full h-full absolute left-0 top-0"></FontAwesomeIcon>
          </div>
        </div>
        <div className="my-2 ml-10 xl:ml-16">
          <div className={'my-4 text-sm'}>Packaging</div>
          <div className="w-5 h-5 my-3 relative">
            <FontAwesomeIcon icon={farCircle} className="w-full h-full absolute left-0 top-0"></FontAwesomeIcon>
          </div>
          <div className="w-5 h-5 my-3 relative">
            <FontAwesomeIcon icon={farCircle} className="w-full h-full absolute left-0 top-0"></FontAwesomeIcon>
          </div>
          <div className="w-5 h-5 my-3 relative">
            <FontAwesomeIcon icon={farCircle} className="w-full h-full absolute left-0 top-0"></FontAwesomeIcon>
          </div>
        </div>
        <div className="my-2 ml-10 xl:ml-16">
          <div className={'my-4 text-sm'}>Product</div>
          <div className="w-5 h-5 my-3 relative">
            <FontAwesomeIcon icon={farCircle} className="w-full h-full absolute left-0 top-0"></FontAwesomeIcon>
          </div>
          <div className="w-5 h-5 my-3 relative">
            <FontAwesomeIcon icon={farCircle} className="w-full h-full absolute left-0 top-0"></FontAwesomeIcon>
          </div>
          <div className="w-5 h-5 my-3 relative">
            <FontAwesomeIcon icon={farCircle} className="w-full h-full absolute left-0 top-0"></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
