import {motion} from 'framer-motion'

const slideTransition = (TargetComponent) => {
    return () => (
        <>
            <TargetComponent />
            <motion.div 
                className="slide-in"
                initial={{scaleX:0}}
                animate={{scaleX:0}}
                exit={{scaleX:1}}
                transition={{duration:2}}
            />
            <motion.div 
                className="slide-out"
                initial={{scaleX:1}}
                animate={{scaleX:0}}
                exit={{scaleX:0}}
                transition={{duration:1}}
            />
        </>
    );
}

export default slideTransition