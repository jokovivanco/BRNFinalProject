import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function Star() {
  const star = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.00002 0.666656L5.03002 2.75332L7.33335 3.08999L5.66669 4.71332L6.06002 7.00666L4.00002 5.92332L1.94002 7.00666L2.33335 4.71332L0.666687 3.08999L2.97002 2.75332L4.00002 0.666656Z" fill="#FFDD28"/>
  </svg>  
  `
  const StarSvg = () => <SvgXml xml={star} />
  return <StarSvg />
}
