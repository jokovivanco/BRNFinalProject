import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function Search() {
  const search = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 17.5L13.7617 13.755L17.5 17.5ZM15.8333 8.74999C15.8333 10.6286 15.087 12.4303 13.7587 13.7587C12.4303 15.087 10.6286 15.8333 8.74999 15.8333C6.87137 15.8333 5.0697 15.087 3.74132 13.7587C2.41293 12.4303 1.66666 10.6286 1.66666 8.74999C1.66666 6.87137 2.41293 5.0697 3.74132 3.74132C5.0697 2.41293 6.87137 1.66666 8.74999 1.66666C10.6286 1.66666 12.4303 2.41293 13.7587 3.74132C15.087 5.0697 15.8333 6.87137 15.8333 8.74999V8.74999Z" stroke="#2BC39B" stroke-width="2" stroke-linecap="round"/>
  </svg>
  `
  const SearchSvg = () => <SvgXml xml={search} />
  return <SearchSvg />
}
