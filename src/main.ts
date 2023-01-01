import "./style.css"
import anime from 'animejs/lib/anime.es.js'

function theWorld(t1: HTMLElement, t2: HTMLElement) {
  const BASE_SIZE = 50
  const xScale = Math.round(document.body.clientWidth / BASE_SIZE) + 20
  const yScale = Math.round(document.body.clientHeight / BASE_SIZE) + 20
  const scale = xScale > yScale ? xScale : yScale

  return anime.timeline({
    easing: 'spring(1, 80, 10, 0)',
    duration: 4
  })
  .add({
    targets: t1,
    scale,
    duration: 1
  })
  .add({
    targets: t2,
    opacity: 1,
    duration: 0
  })
  .add({
    targets: t1,
    scale: 0,
    duration: 1
  })
}

function createDom(id: string) {
  const dom = document.createElement("div")
  dom.id = id
  return dom
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default async function(sec: number) {
  // already running
  if (document.getElementById("__zawarudo_sepia") || document.getElementById("__zawarudo_invert")) {
    return
  }

  const sepia = createDom("__zawarudo_sepia")
  const invert = createDom("__zawarudo_invert")
  document.body.append(sepia)
  document.body.append(invert)
  await theWorld(invert, sepia).finished
  await sleep(sec * 1000)
  sepia.remove()
  invert.remove()
}