import React from 'react'
import '../cssComponents/AboutSection.css';

function AboutSection() {
  return (
    <>
        <sectio id="about" className='about-container'>
            <div className='about-content'>
            <h2>ABOUT ME</h2>
            <p>I’m a developer who enjoys turning ideas into functional and visually appealing
  web applications. I love exploring new technologies and creating projects that
  make life easier and more interesting..</p>
  <p>am a Computer Science Engineering student at Bangalore Institute of Technology with a strong foundation in software development, data science, and AI-driven solutions. My journey in tech has been shaped by building real-world projects that solve meaningful problems. For instance, I created a Diabetes Health Care Prediction Model to support early medical diagnosis, a YOLO-based Real-Time Object Detection system that can enhance security and automation, and a Crop Yield Prediction model using satellite hyperspectral data to empower farmers with precision agriculture insights.
    </p>

<p>These experiences allowed me to go beyond theory—working with machine learning algorithms, image processing, and full-stack web technologies—to deliver practical solutions that make an impact. I enjoy exploring the intersection of data, intelligence, and innovation, and I am eager to continue this journey by contributing to cutting-edge projects that shape the future of technology.</p>
        </div>
        </sectio>
    </>
  )
}

export default AboutSection