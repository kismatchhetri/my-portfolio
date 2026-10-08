let projectContainer = document.querySelector(".section-projects");

const projectDetails =[
    {
        name:"Robots Sensor System",
        details:"A robotics system for road safety uses AI, cameras, and sensors to monitor traffic, guide pedestrians, and prevent accidents. Cities around the world and local groups like the Kathmandu Valley Traffic Police testing AI units via Unitree Nepal use these systems to manage congestion and educate the public.",
        source:"source code",
        date:"2026 | 11 | 02",
        images:'<img src="images/project1.gif" alt="robot working">'
    },
    {
        name:"Movie Ticket Booking System",
        details:"Book movie tickets online in Nepal for QFX, Bigmovies, Fcube, and 30+ theaters from Khalti. Select showtime, theatre, and seat of your choice within a few clicks.",
        date:"2024 | 06 | 02",
        source:"source code",
        images:'<img src="images/project2.png" alt="robot working">'
    },
    {
        name:"Hamrobot System",
        details:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.<br><br>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.",
        date:"2026 | 07 | 12",
        source:"source code",
        images:'<img src="images/project3.png" alt="robot working">'
    },
    {
        name:"Robotics System for Road Safety",
        details:"A robotics system for road safety uses AI, cameras, and sensors to monitor traffic, guide pedestrians, and prevent accidents. Cities around the world and local groups like the Kathmandu Valley Traffic Police testing AI units via Unitree Nepal use these systems to manage congestion and educate the public.",
        date:"2025 | 12 | 15",
        source:"source code",
        images:'<img src="images/project4.png" alt="robot working">'
    }

]

let projectHtml="";
projectDetails.forEach((values)=>{
   projectHtml +=
   `<div class="section-projects-list">
    <h3>${values.name}</h3>
        <h5>${values.details}</h5>
        <h5>${values.date}</h5>
        <p>${values.source}</p>
        ${values.images}
    </div>
   `
})

projectContainer.innerHTML= projectHtml
