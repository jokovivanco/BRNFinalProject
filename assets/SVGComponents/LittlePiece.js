import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function LittlePiece() {
  const littlePiece = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H20C8.95431 20 0 11.0457 0 0V20Z" fill="#212121"/>
  </svg>
  `
  const LittlePieceSvg = () => <SvgXml xml={littlePiece} style={{position: 'absolute', left: 0, top: -20}} />
  return <LittlePieceSvg />
}
