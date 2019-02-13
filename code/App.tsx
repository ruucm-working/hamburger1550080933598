import { Data, animate, Override, Animatable } from 'framer'

import { log } from 'ruucm-util'

const data = Data({
  // Menu
  menuScale: Animatable(1),

  //lineOne
  rightOne: Animatable(0),
  topOne: Animatable(0),
  rotationOne: Animatable(0),
  widthOne: Animatable(21),

  //lineThree
  bottomThree: Animatable(0),
  rightThree: Animatable(0),
  rotationThree: Animatable(0),
  widthThree: Animatable(28),

  //lineTwo
  widthTwo: Animatable(33),
  rightTwo: Animatable(0),
  leftTwo: Animatable(0),

  // textOne
  textLeftOne: Animatable(-30),
  textOpacityOne: Animatable(0),

  textLeftTwo: Animatable(-30),
  textOpacityTwo: Animatable(0),
})

// switch
var isOpened = false

// anim options
const springOptionsOne = {
  tension: 100,
  friction: 10,
}

// Lines
export const lineOne: Override = () => {
  return {
    right: data.rightOne,
    top: data.topOne,
    rotation: data.rotationOne,
    width: data.widthOne,
    originX: 0,
    originY: 0,
  }
}

export const lineThree: Override = () => {
  return {
    right: data.rightThree,
    bottom: data.bottomThree,
    rotation: data.rotationThree,
    width: data.widthThree,
    originX: 0,
    originY: 0,
  }
}

export const lineTwo: Override = () => {
  return {
    width: data.widthTwo,
    right: data.rightTwo,
    left: data.leftTwo,
  }
}

// Texts
export const textOne: Override = () => {
  return {
    left: data.textLeftOne,
    opacity: data.textOpacityOne,
  }
}
export const textTwo: Override = () => {
  return {
    left: data.textLeftTwo,
    opacity: data.textOpacityTwo,
  }
}

export const Menu: Override = () => {
  return {
    scale: data.menuScale,
    // Actions
    async onTap() {
      if (!isOpened) {
        log('open !')

        // with & height
        animate.easeInOut(data.widthOne, 45.5)
        animate.easeInOut(data.widthThree, 45.5)

        animate.spring(data.topOne, -3)
        animate.easeInOut(data.bottomThree, -3)

        animate.easeInOut(data.rotationOne, 45)
        animate.easeInOut(data.rotationThree, -45)

        // hide lineTwo
        animate.easeIn(data.leftTwo, 2, {
          duration: 0.8,
        })
        animate.easeIn(data.rightTwo, 30, {
          duration: 0.8,
        })

        // scale down menu
        animate.ease(data.menuScale, 0.85)

        // text anims
        animate.spring(data.textLeftOne, 0, springOptionsOne)
        await animate.spring(data.textOpacityOne, 1, springOptionsOne).finished

        animate.spring(data.textLeftTwo, 0, springOptionsOne)
        animate.spring(data.textOpacityTwo, 1, springOptionsOne)
      } else {
        log('close !')

        // show lineTwo
        animate.easeIn(data.leftTwo, 0, {
          duration: 0.8,
        })
        animate.easeIn(data.rightTwo, 0, {
          duration: 0.8,
        })

        // with & height
        animate.easeInOut(data.widthOne, 21)
        animate.easeInOut(data.widthThree, 28)

        animate.spring(data.topOne, 0)
        animate.spring(data.bottomThree, 0)

        animate.easeInOut(data.rotationOne, 0)
        animate.easeInOut(data.rotationThree, 0)

        // scale up menu
        animate.ease(data.menuScale, 1)

        // text anims
        animate.spring(data.textLeftTwo, -30, springOptionsOne)
        await animate.spring(data.textOpacityTwo, 0, springOptionsOne).finished

        animate.spring(data.textLeftOne, -30, springOptionsOne)
        animate.spring(data.textOpacityOne, 0, springOptionsOne)
      }
      isOpened = !isOpened
    },
  }
}
