import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const bounceTransition = {
  y: {
    duration: 0.8,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeOut'
  }
}

export default function ScrollIndicator () {
  return (
    <motion.div
      transition={bounceTransition}
      animate={{
        y: ['40%', '-40%']
      }}
    >
      <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
    </motion.div>
  )
}
