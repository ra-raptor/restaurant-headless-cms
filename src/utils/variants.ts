import { Variants } from "framer-motion";


export const ViewPortAnim = {once:false,amount:0.25}



export const FadeInUp:Variants = {
    initial :{
        y : 40,
        opacity : 0,
    },
    animate : {
        y : 0,
        opacity : 1,
        transition : {
            duration : 0.5,
            ease: "easeInOut", 
        }
    },
   
}
export const FadeInDown:Variants = {
    initial :{
        y : -60,
        opacity : 0,
    },
    animate : {
        y : 0,
        opacity : 1,
        transition : {
            duration : 0.5,
            ease: "easeInOut", 
        }
    },
   
}

export const staggeredContainer:Variants = {
    initial :{},
    animate : {
        transition : {
            staggerChildren: 0.6,
            delayChildren : 0.5,
        }
    }
}

export const SidebarAnim:Variants = {
    open: { 
        opacity: 1, 
        height: "auto",
        transition:{ duration: 0.1, ease: 'easeIn'}
    },
    collapsed: { 
        opacity: 0, 
        height: 0,
        transition:{ duration: 0.1, ease: 'easeIn'}
    }
}

export const springVarient:Variants = {
    in: {
      opacity: 0,
      transition : {
        type: "spring",
        damping: 25,
        stiffness: 120,
    }
    },
    out: {
      opacity: 1,
      transition : {
        type: "spring",
        damping: 25,
        stiffness: 120,
    }
    },
}
