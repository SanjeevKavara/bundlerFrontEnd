import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import csmIntro from "../../assets/videos/CSM.mp4"

function CourseDetail() {
    const lectureTitle = 'lecture'
    const [lectureNumber,setLectureNumber] = useState(0)


    const lectures = [{
        _id: 'asdad1',
        title: 'sample1',
        description: 'fdss dse32 des',
        video: {
            url: 'dssdsa',
        },
    },
    {
        _id: 'asdad2',
        title: 'sample2',
        description: 'fdss dse32 des',
        video: {
            url: 'dssdsa',
        },
    },
    {
        _id: 'asdad3',
        title: 'sample3',
        description: 'fdss dse32 des',
        video: {
            url: 'dssdsa',
        },
    }]


   
    return (
        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}> {/* responsive design for mobile and desktop view */}
            <Box>
                <video
                    width='100%'
                    controls controlsList='nodownload  noremoteplayback'
                    src={csmIntro}
                    disablePictureInPicture
                    disableRemotePlayback
                ></video>

                <Heading children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} m={'4'} />



                <Heading children='Description' m={'4'} />

                <Text m={'4'} children={lectures[lectureNumber].description} />

            </Box>

            <VStack>
                {
                    lectures.map((lecture, index) => (
                        <button key={lecture._id}
                        style={{
                            width: '100%',
                            padding:'1rem',
                            textAlign:'center',
                            margin:'0',
                            borderBottom:'1px solid rgba(0,0,0,0.2)',
                        }}
                        onClick={()=>setLectureNumber(index)}
                        >
                            <Text noOfLines={1}>
                                #{index + 1} {lecture.title}
                            </Text>
                        </button>
                    ))  
                }
            </VStack>
        </Grid>
    )
}

export default CourseDetail
