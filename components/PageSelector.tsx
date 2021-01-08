import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

import styles from '../styles/PageSelector.module.css'

class PageSelectorProps {
  page: number = 0;
  setSection: (sec: number) => void = (a) => {};
}

const offsetMap = [5, 30, 38, 46, 71, 79, 87]
const mobileOffsetMap = [5, 17, 25, 33, 45, 53, 61]
const colorMap = [
  '#000000',
  '#728397',
  '#efe8e1',
  '#e89b7c',
  '#efe8e1',
  '#728397',
  '#e89b7c'
]

export default function PageSelector (props: PageSelectorProps) {
  return (
    <motion.div
      className="fixed transform left-1/2 bottom-0 translate-y-0 -translate-x-1/2 lg:left-0 lg:bottom-1/2 lg:translate-y-1/2 lg:translate-x-0 z-10"
      animate={{ color: colorMap[props.page] }}
    >
      <motion.div
        animate={{ top: `${offsetMap[props.page] / 4}rem`, left: `${mobileOffsetMap[props.page] / 4}rem` }}
        className={
          'flex w-5 h-5 ml-0 lg:ml-10 xl:ml-16 absolute items-center justify-center ' + styles.dot
        }
      >
        <div className="w-3 h-3 relative">
          <FontAwesomeIcon
            icon={faCircle}
            className="w-full h-full absolute left-0 top-0"
          ></FontAwesomeIcon>
        </div>
      </motion.div>
      <div className="flex flex-row lg:flex-col w-min">
        <div className="mx-2 my-0 mb-8 lg:mb-0 lg:my-2 lg:ml-10 lg:mr-0 xl:ml-16">
          <div className="w-5 h-5 mt-0 ml-3 lg:mt-3 lg:ml-0 relative">
            <FontAwesomeIcon
              icon={farCircle}
              className="w-full h-full absolute left-0 top-0 cursor-pointer"
              onClick={() => {
                props.setSection(0)
              }}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col mx-2 my-0 mb-8 lg:mb-0 lg:my-2 lg:ml-10 lg:mr-0 xl:ml-16">
          <div className={'hidden lg:block my-4 text-sm'}>Packaging</div>
          <div className="w-5 h-5 mt-0 ml-3 lg:mt-3 lg:ml-0 relative">
            <FontAwesomeIcon
              icon={farCircle}
              className="w-full h-full absolute left-0 top-0 cursor-pointer"
              onClick={() => {
                props.setSection(1)
              }}
            ></FontAwesomeIcon>
          </div>
          <div className="w-5 h-5 mt-0 ml-3 lg:mt-3 lg:ml-0 relative">
            <FontAwesomeIcon
              icon={farCircle}
              className="w-full h-full absolute left-0 top-0 cursor-pointer"
              onClick={() => {
                props.setSection(2)
              }}
            ></FontAwesomeIcon>
          </div>
          <div className="w-5 h-5 mt-0 ml-3 lg:mt-3 lg:ml-0 relative">
            <FontAwesomeIcon
              icon={farCircle}
              className="w-full h-full absolute left-0 top-0 cursor-pointer"
              onClick={() => {
                props.setSection(3)
              }}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col mx-2 my-0 mb-8 lg:mb-0 lg:my-2 lg:ml-10 lg:mr-0 xl:ml-16">
          <div className={'hidden lg:block my-4 text-sm'}>Product</div>
          <div className="w-5 h-5 mt-0 ml-3 lg:mt-3 lg:ml-0 relative">
            <FontAwesomeIcon
              icon={farCircle}
              className="w-full h-full absolute left-0 top-0 cursor-pointer"
              onClick={() => {
                props.setSection(4)
              }}
            ></FontAwesomeIcon>
          </div>
          <div className="w-5 h-5 mt-0 ml-3 lg:mt-3 lg:ml-0 relative">
            <FontAwesomeIcon
              icon={farCircle}
              className="w-full h-full absolute left-0 top-0 cursor-pointer"
              onClick={() => {
                props.setSection(5)
              }}
            ></FontAwesomeIcon>
          </div>
          <div className="w-5 h-5 mt-0 ml-3 lg:mt-3 lg:ml-0 relative">
            <FontAwesomeIcon
              icon={farCircle}
              className="w-full h-full absolute left-0 top-0 cursor-pointer"
              onClick={() => {
                props.setSection(6)
              }}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
