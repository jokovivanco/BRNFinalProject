import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function FavoriteActive() {
  const favoriteActive = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.0625 2.5C12.8125 2.5 11.625 3 10.75 3.875L10 4.625L9.3125 3.9375C7.5 2.0625 4.5 2.0625 2.6875 3.875L2.625 3.9375C0.75 5.8125 0.75 8.8125 2.625 10.6875L10 18.125L17.375 10.6875C19.25 8.8125 19.25 5.8125 17.375 3.9375C16.5 3 15.3125 2.5 14.0625 2.5Z" fill="#2BC39B"/>
  </svg>
  `
  const FavoriteActiveSvg = () => <SvgXml xml={favoriteActive} />
  return <FavoriteActiveSvg />
}
