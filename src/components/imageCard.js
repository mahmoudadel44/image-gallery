import React from 'react'

const imageCard = ({image}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-3 ml-2">
    <img src={image.webformatURL} alt="natural" className="w-full"></img>    
    <div className="px-6 py-6">
    <div className="font-bold text-purple-600 text-xl">
 Photo by {image.user}
    </div>
    <ul>
      <li>
        <strong>Views:</strong>
       { image.views}
      </li>
      <li>
        <strong>downloads:</strong>
      {image.downloads}
      </li>  
      <li>
        <strong>likes:</strong>
        {image.likes}
      </li>  
    </ul>
    </div>
    <div className="px-6 py-4">
      {image.tags.split(',').map(tag=>(
            <span  className="bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
            </span>
        ))}
    </div>
    </div>
  )
}

export default imageCard
