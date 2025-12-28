import React from 'react'

import CourseDetailsPage from '../components/CoursePage/CourseDetailsPage.jsx'  
import NavbarCourse from '../components/CoursePage/NavbarCourse.jsx';

const CoursePage = () => {
  return (
    <>
    <NavbarCourse />
      <CourseDetailsPage />
    </>
  )
}

export default CoursePage;