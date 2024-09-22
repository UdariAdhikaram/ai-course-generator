import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'

function SelectOption() {
    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <label className=''>🎓 Difficulty Level</label>
                    <Select>
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
                    <Select>
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
                    <Select>
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
                    <Input type="number"/>
                    </div>
            </div>
        </div>
    )
}

export default SelectOption