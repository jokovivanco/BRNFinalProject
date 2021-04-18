import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function HomeActive() {
  const homeActive = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.3334 16.6667V10.145C18.3334 9.69128 18.2408 9.24232 18.0613 8.82563C17.8817 8.40893 17.619 8.03328 17.2892 7.72168L11.145 1.91501C10.8356 1.62245 10.4259 1.45944 10 1.45944C9.57417 1.45944 9.16447 1.62245 8.85502 1.91501L2.71085 7.72168C2.38104 8.03328 2.11831 8.40893 1.93877 8.82563C1.75922 9.24232 1.66664 9.69128 1.66669 10.145V16.6667C1.66669 17.1087 1.84228 17.5326 2.15484 17.8452C2.4674 18.1578 2.89133 18.3333 3.33335 18.3333H16.6667C17.1087 18.3333 17.5326 18.1578 17.8452 17.8452C18.1578 17.5326 18.3334 17.1087 18.3334 16.6667Z" fill="#2BC39B" stroke="#2BC39B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
  const HomeActiveSvg = () => <SvgXml xml={homeActive} />
  return <HomeActiveSvg />
}
