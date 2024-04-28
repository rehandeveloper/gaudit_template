export const titleAnimation = {
    hidden:{ opacity: 0, y: "100%" },
             visible:{ opacity: 1, y: 0 },
             transition:{
               duration: 1.5,
               opacity: {
                 duration: 1,
               },
             },
             viewport:{once:true,}
  }