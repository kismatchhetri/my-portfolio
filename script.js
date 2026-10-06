let projectContainer = document.querySelector(".section-projects");

const projectDetails =[
    {
        name:"Robots Sensor System",
        details:"A robotics system for road safety uses AI, cameras, and sensors to monitor traffic, guide pedestrians, and prevent accidents. Cities around the world—and local groups like the Kathmandu Valley Traffic Police testing AI units via Unitree Nepal—use these systems to manage congestion and educate the public.",
        date:"2026 | 11 | 02",
        images:'<img src="images/project1.gif" alt="robot working">'
    },
    {
        name:"Robots Sensor System",
        details:"A robotics system for road safety uses AI, cameras, and sensors to monitor traffic, guide pedestrians, and prevent accidents. Cities around the world—and local groups like the Kathmandu Valley Traffic Police testing AI units via Unitree Nepal—use these systems to manage congestion and educate the public.",
        date:"2026 | 11 | 02",
        images:'<img src="images/project1.gif" alt="robot working">'
    },
    {
        name:"Robots Sensor System",
        details:"A robotics system for road safety uses AI, cameras, and sensors to monitor traffic, guide pedestrians, and prevent accidents. Cities around the world—and local groups like the Kathmandu Valley Traffic Police testing AI units via Unitree Nepal—use these systems to manage congestion and educate the public.",
        date:"2026 | 11 | 02",
        images:'<img src="images/project1.gif" alt="robot working">'
    }
]

let projectHtml="";
projectDetails.forEach((values)=>{
   projectHtml +=
   `<div class="section-projects-list">
    <h3>${values.name}</h3>
        <h5>${values.details}</h5>
        <h5>${values.date}</h5>
        ${values.images}
    </div>
   `
})

projectContainer.innerHTML= projectHtml
