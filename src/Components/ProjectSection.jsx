import '../cssComponents/ProjectSection.css'
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg'


function Projects() {
  const Projects = [
    {
      image :project1,
      title: 'Diabetes Health Care Prediction Model',
      description: 'I developed a machine learning classification model to predict whether patients have diabetes based on medical parameters such as number of pregnancies, glucose levels, blood pressure, skin thickness, insulin levels, and age. The project involved extensive data preprocessing, applying different ML algorithms, and evaluating their performance to achieve accurate results. I also used visualization tools like Matplotlib to clearly represent prediction outcomes, which made the model more interpretable for medical decision-making.'
    },
    {
      
      image : project2,
      title: 'Real-Time Object Detection Using Hybrid Method',
      description: 'In this project, I implemented a real-time object detection system using YOLO v3, capable of detecting and tracking objects from live camera feeds, images, or videos. The system provides instant visual annotations and alerts for specific objects, which can be applied in areas like surveillance, automation, and security. To make it interactive, I built a simple web interface using HTML, CSS, JavaScript, PHP, and MySQL. The project demonstrated the integration of deep learning with web technologies to solve real-world problems efficiently.'
    },
    {
      image :project3,
      title: 'Crop Yield Prediction Using Satellite Hyperspectral Image Data',
      description: 'This project focused on applying machine learning for precision agriculture by predicting crop yields using satellite hyperspectral image data. The system analyzes soil health, crop conditions, and environmental factors to provide farmers with data-driven recommendations for maximizing productivity. I applied image processing techniques along with ML algorithms to process large datasets and generate meaningful insights. The results can help farmers optimize resource usage and improve agricultural output.'
    },
  ];
  return (
    <section id='projects' className="project-section">
    <h2>Projects</h2>
    <div className="project-grid">
      {Projects.map((project, index) => (
        <div key={index} className="project-card">
          <img className="project-image"  src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Projects
