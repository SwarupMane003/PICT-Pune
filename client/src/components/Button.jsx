import React from 'react'

function Button(props) {
  return (
    <a href={props.src} onClick={props.func}>
   <button type="button" class="py-3 mx-96 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-black dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{props.content}</button>
    </a>
  )
}

export default Button