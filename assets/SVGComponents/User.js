import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function User() {
  const user = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66668C5.78262 12.5 4.93478 12.8512 4.30965 13.4763C3.68453 14.1014 3.33334 14.9493 3.33334 15.8333V17.5" stroke="#2BC39B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 9.16667C11.841 9.16667 13.3334 7.67428 13.3334 5.83333C13.3334 3.99238 11.841 2.5 10 2.5C8.15907 2.5 6.66669 3.99238 6.66669 5.83333C6.66669 7.67428 8.15907 9.16667 10 9.16667Z" stroke="#2BC39B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="3.33334" y1="17.5" x2="16.6667" y2="17.5" stroke="#2BC39B" stroke-width="2"/>
  </svg>
  `
  const UserSvg = () => <SvgXml xml={user} />
  return <UserSvg />
}
