import{ useRef } from 'react'
import { motion, useInView } from "framer-motion";

interface project_schema {
  "image_link"?: string,
  "name": string,
  "description": string,
  "links": Array<string>
}

export const MyWork = () => {
  const projects: project_schema[] = [
    {
      "image_link": "",
      "name": "project1",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores veniam debitis suscipit quam fugit deleniti earum, cumque, eum, magni iusto non vel corrupti aliquid? Quibusdam accusamus asperiores fuga veritatis ab laudantium, vitae enim explicabo ad, alias magni et corrupti autem. Libero rerum laudantium totam repellat necessitatibus? Error quo sed qui ad facilis maxime est culpa aliquid ipsam deleniti aliquam aut eligendi quidem ducimus nemo, minima quas ut quia inventore quibusdam voluptas numquam debitis atque? Nam at consectetur non accusamus ipsa! Dolorem, incidunt quibusdam. Nihil omnis, minima consequuntur labore ipsum impedit odio neque at tempora nam possimus, eligendi officia a illum?",
      "links": ["www.github.com"]
    },
    {
      "name": "project2",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores veniam debitis suscipit quam fugit deleniti earum, cumque, eum, magni iusto non vel corrupti aliquid? Quibusdam accusamus asperiores fuga veritatis ab laudantium, vitae enim explicabo ad, alias magni et corrupti autem. Libero rerum laudantium totam repellat necessitatibus? Error quo sed qui ad facilis maxime est culpa aliquid ipsam deleniti aliquam aut eligendi quidem ducimus nemo, minima quas ut quia inventore quibusdam voluptas numquam debitis atque? Nam at consectetur non accusamus ipsa! Dolorem, incidunt quibusdam. Nihil omnis, minima consequuntur labore ipsum impedit odio neque at tempora nam possimus, eligendi officia a illum?",
      "links": ["www.github.com"]
    },
    {
      "name": "project3",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores veniam debitis suscipit quam fugit deleniti earum, cumque, eum, magni iusto non vel corrupti aliquid? Quibusdam accusamus asperiores fuga veritatis ab laudantium, vitae enim explicabo ad, alias magni et corrupti autem. Libero rerum laudantium totam repellat necessitatibus? Error quo sed qui ad facilis maxime est culpa aliquid ipsam deleniti aliquam aut eligendi quidem ducimus nemo, minima quas ut quia inventore quibusdam voluptas numquam debitis atque? Nam at consectetur non accusamus ipsa! Dolorem, incidunt quibusdam. Nihil omnis, minima consequuntur labore ipsum impedit odio neque at tempora nam possimus, eligendi officia a illum?",
      "links": ["www.github.com"]
    },
    {
      "name": "project4",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores veniam debitis suscipit quam fugit deleniti earum, cumque, eum, magni iusto non vel corrupti aliquid? Quibusdam accusamus asperiores fuga veritatis ab laudantium, vitae enim explicabo ad, alias magni et corrupti autem. Libero rerum laudantium totam repellat necessitatibus? Error quo sed qui ad facilis maxime est culpa aliquid ipsam deleniti aliquam aut eligendi quidem ducimus nemo, minima quas ut quia inventore quibusdam voluptas numquam debitis atque? Nam at consectetur non accusamus ipsa! Dolorem, incidunt quibusdam. Nihil omnis, minima consequuntur labore ipsum impedit odio neque at tempora nam possimus, eligendi officia a illum?",
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
          animate={ { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Work
        </motion.h1>
        <p className='text-neutral-400 mb-16'>A collection of projects I've worked on.</p>
      </center>
      <section>
        <section className="flex flex-wrap justify-center">
          {projects.map((project,index) =>
            <motion.section ref={sectionRef}
              initial={index%2==0?{opacity:0,x:-40}:{opacity:0,x:40}}
              animate={isInView?{opacity:1,x:0}:{}}
              transition={{duration:0.7,ease:"linear"}}
              className='shadow-neutral-600 rounded-2xl shadow-sm w-full md:w-1/3 lg:w-5/12 p-4 m-2'>
              <img src={project?.image_link} alt="" />
              <section className="text-neutral-300 text-xl"> <i className=' font-semibold text-white border-b-2 text-lg'>Project:</i> {project.name}</section>
              <section className="text-neutral-400"><i className=' font-semibold text-white border-b-2 text-lg'>Description:</i> {project.description}</section>
            </motion.section>
          )}
        </section>
      </section>
    </div>
  )
}
