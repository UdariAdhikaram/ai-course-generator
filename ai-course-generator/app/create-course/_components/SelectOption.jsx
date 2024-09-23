import { UserInputContext } from '@/app/_context/UserinputContext'
import React, { useContext } from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'

function SelectOption() {

const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  
const handleInputChange=(fieldName,value)=>{
      setUserCourseInput(prev=>({
        ...prev,
        [fieldName]:value
      }))
  }

    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <label className=''>🎓 Difficulty Level</label>
                    <Select onValueChange={(value)=>handleInputChange('level',value)}
                        defaultValue={userCourseInput.level}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advance">Advance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className=''>⏱ Course Duration</label>
                    <Select onValueChange={(value)=>handleInputChange('duration',value)}
                        defaultValue={userCourseInput.duration}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">1 Hours</SelectItem>
                            <SelectItem value="Intermediate">2 Hours </SelectItem>
                            <SelectItem value="Advance">More than 3 Hours</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                
                <div>
                    <label className=''>📹 Add Video</label>
                    <Select onValueChange={(value)=>handleInputChange('displayVideo',value)}
                        defaultValue={userCourseInput.displayVideo}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Yes</SelectItem>
                            <SelectItem value="Intermediate">No</SelectItem>
                            </SelectContent>
                    </Select>
                </div>
                <div >
                    <label className=''>📖 No of Chapters</label>
                    <Input type="number" className="h-9 text-lg"
                    onChange={(event)=>handleInputChange('noOfChapter',event.target.value)}
                    defaultValue={userCourseInput.noOfChapter}/>
                    </div>
            </div>
        </div>
    )
}

export default SelectOption