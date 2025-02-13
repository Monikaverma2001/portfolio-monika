import { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'

interface project_schema {
  "image_link"?: string,
  "name": string,
  "technology"?: Array<string>,
  "description": string,
  "links": Array<string>
}

export const MyWork = () => {
  const projects: project_schema[] = [
    {
      "image_link": "",
      "name": "TicketBlitz",
      "description": "I developed a movie ticket booking platform featuring updated seat availability tracking and a responsive user interface, along with an admin dashboard for managing movies and bookings. The project involved designing both the front-end and back-end architecture to ensure a seamless user experience. I built RESTful APIs to handle various functionalities, including user requests, movie details, and seat booking, while also integrating third-party payment APIs for secure and efficient ticket purchasing. Additionally, I optimized the application's performance to handle high-traffic environments, ensuring smooth and reliable operation.",
      "technology": ["React", "REDUX", "Express", "MongoDb", "Nodejs"],
      "links": ["www.github.com"]
    },
    {
      "name": " KPT",
      "description": "I developed an e-commerce platform with secure payment integration and OTP-based authentication, ensuring a seamless shopping experience across devices. The project involved implementing a full-stack architecture using the MERN stack for scalability and efficient development. I integrated Razorpay for smooth payment processing and implemented JWT-based email OTP authentication to enhance security. Additionally, I developed dynamic shopping cart functionality and built an admin panel for managing orders and products. To improve user experience, I optimized front-end React components for faster performance and better navigation.",
      "technology": ["React", "REDUX", "Express", "MongoDb", "Nodejs"],
      "links": ["www.github.com"]
    },
    {
      "name": "GCA-MINOR",
      "description": " ERP system, which includes three views for admin, mentors and mentee and they have respective roles and access to database like performance checking and mentor allotment.",
      "technology": ["Express", "MongoDb", "Nodejs"],
      "links": ["www.github.com"]
    }
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false })

  return (
    <div className='my-28'>
      <center>
        <motion.h1
          className='text-4xl my-4 font-semibold'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Work
        </motion.h1>
        <p className='text-neutral-400 mb-2 lg:mb-16'>A collection of projects I've worked on.</p>
      </center>
      <section>
        <section className="flex flex-wrap justify-between">
          {projects.map((project, index) =>
            <motion.section ref={sectionRef}
              initial={index % 2 == 0 ? { opacity: 0, x: -40 } : { opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "linear" }}
              className='shadow-neutral-600 rounded-2xl shadow-sm w-full md:w-1/3 lg:w-5/12 p-4 m-2'>
              <img src={project?.image_link} alt="" />
              <section className="text-neutral-300 text-xl"> <i className=' font-semibold text-white border-b-2 text-lg'>Project:</i> {project.name}</section>
              <section className="text-neutral-400"><i className=' font-semibold text-white border-b-2 text-lg'>Description:</i> {project.description}</section>

              {project?.links?.map((link) => (
                <SocialIcon key={link} url={link} className="mx-2" />
              ))}

            </motion.section>
          )}
        </section>
      </section>
    </div>
  )
}
