import { $dom } from '../library/dom'
import Pjax from 'theme-shokax-pjax'

export const statics = CONFIG.statics.indexOf('//') > 0 ? CONFIG.statics : CONFIG.root
export const scrollAction: { x: number, y: number } = { x: 0, y: 0 }
export let diffY = 0
export let originTitle: string, titleTime: NodeJS.Timeout
export const BODY = document.getElementsByTagName('body')[0]
export const HTML = document.documentElement
export const Container = $dom('#container')
export const loadCat = $dom('#loading')
export const siteNav = $dom('#nav')
export const siteHeader = $dom('#header')
export const menuToggle = siteNav.child('.toggle')
export const quickBtn = $dom('#quick')
export const sideBar = $dom('#sidebar')
export const siteBrand = $dom('#brand')
export let toolBtn = $dom('#tool')
export let toolPlayer
export let backToTop: HTMLElement
export let goToComment
export let showContents
export let siteSearch = $dom('#search')
export let siteNavHeight: number, headerHightInner: number, headerHight: number
export let oWinHeight = window.innerHeight
export let oWinWidth = window.innerWidth
export let LOCAL_HASH = 0
export let LOCAL_URL = window.location.href
export let pjax:Pjax

export function setSiteNavHeight (value:number):void {
  siteNavHeight = value
}
export function setHeaderHightInner (value:number):void {
  headerHightInner = value
}

export function setHeaderHight (value:number):void {
  headerHight = value
}

export function setOWinHeight (value:number):void {
  oWinHeight = value
}

export function setOWinWidth (value:number):void {
  oWinWidth = value
}

export function setDiffY (value:number):void {
  diffY = value
}

export function setTitleTime (value:NodeJS.Timeout):void {
  titleTime = value
}

export function setLocalHash (value:number):void {
  LOCAL_HASH = value
}

export function setLocalUrl (value:string):void {
  LOCAL_URL = value
}

export function setPjax (value:Pjax):void {
  pjax = value
}

export function setOriginTitle (value:string):void {
  originTitle = value
}

export function setToolPlayer (value:any):void {
  toolPlayer = value
}

export function setBackToTop (value:HTMLElement):void {
  backToTop = value
}

export function setGoToComment (value:any):void {
  goToComment = value
}

export function setShowContents (value:any):void {
  showContents = value
}

export function setToolBtn (value:HTMLElement):void {
  toolBtn = value
}

export function setSiteSearch (value:HTMLElement):void {
  siteSearch = value
}
