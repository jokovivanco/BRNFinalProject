import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function BackArrow() {
  const backArrow = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="32" fill="#FAFAFA"/>
  <path d="M35 38L29 32L35 26" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
  const BackArrowSvg = () => <SvgXml xml={backArrow} width='64'/>
  return <BackArrowSvg />
}
