import React from 'react'
const svgStyle = {
  verticalAlign: 'middle',
  fill: 'currentColor',
}

const EmocjaLogoButterfly = props => (
  <svg
    viewBox="0 0 65 48"
    width={props.width}
    height={props.height}
    style={svgStyle}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path d="M5.735 5.502c.912 6.336 6.139 17.104 10.371 17.908 1.083-.707 11.311-7.292 13.876-8.63l.032-2.142c-.183-.5-2.691-5.95-24.279-7.136zM5.716 42.5c17.816-.881 22.645-4.119 23.937-5.987.649-.938.444-1.594.436-1.622l-.033-.186c-.071-11.823-.087-16.518-.086-18.398-2.506 1.493-9.9 5.919-13.408 8.179l-.17.114-.052-.009C8.416 28.653 6.171 39.639 5.716 42.5z" />
    <path d="M16.563 24.485c3.508-2.26 10.902-6.686 13.408-8.179v-.244c-2.284 1.334-9.065 5.563-13.405 8.402-.078.038-.148.086-.225.126l.052.009.17-.114zM59.265 42.498c-.913-6.326-6.136-17.092-10.368-17.911-1.088.709-11.311 7.292-13.877 8.628l-.034 2.137c.184.502 2.69 5.971 24.279 7.146zM59.283 5.5c-17.969.892-22.744 4.167-23.988 6.054-.595.903-.398 1.534-.396 1.54l.037.197c.074 11.854.093 16.534.094 18.405 2.508-1.494 9.9-5.924 13.412-8.189l.17-.11.053.005C56.578 19.344 58.827 8.361 59.283 5.5z" />
    <path d="M48.441 23.507c-3.512 2.266-10.904 6.695-13.412 8.189v.24c2.285-1.334 9.076-5.565 13.409-8.404.079-.039.148-.087.226-.131l-.053-.005-.17.111z" />
  </svg>
)

EmocjaLogoButterfly.defaultProps = {
  width: '48px',
  height: '48px',
}
export default EmocjaLogoButterfly
