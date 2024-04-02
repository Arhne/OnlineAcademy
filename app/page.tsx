import Hero from "@/app/components/Hero"
import Courses from "./components/Courses"
import Instructors from "./components/Instructors"
import Newsletter from "./components/Newsletter"
import Library from "./components/Library"
import Recommendation from "./components/Recommendation"


export default function Home() {
  return (
    <main className="">  
       <Hero />
       <Courses />
       <Instructors />
       <Library />
       <Newsletter />
       <Recommendation />
    </main>
  )
}
