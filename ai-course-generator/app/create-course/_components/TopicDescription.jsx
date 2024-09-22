import { Input } from 'postcss'
import React from 'react'

function TopicDescription() {
  return (
    <div>
        {/* Input Topic */}
        <div className='mx-20 lg:mx-44'>
            <label>Write the topic for whic you want to generate a course (e.g., Python Course, Yoga, etc.): </label>
            <Input placeholder={'Topic'} />
        </div>
        {/* Text Area Desc */}
    </div>
  )
}

export default TopicDescription