import { motion } from "framer-motion";

const animations = {
    initial: {opacity: 0, x: 50},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -50},
}

export default function AnimatedPage({children}) {
    return (
        <motion.div variants={animations} initial='initial' animate='animate' exit='exit' transition={{duration: 0.5}} className="w-full h-full flex justify-center items-center">
            {children}
        </motion.div>
    )
}