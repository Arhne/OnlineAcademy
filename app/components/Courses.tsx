import Image from "next/image";
import { courseBooks } from "../constants";



const Courses = () => {
  return (
    <section
      className="max-container padding-container mt-14">
      
      
      <div className="mb-6">
        <p className="uppercase pl-3 flexBetween bold-20b 3xl:bold-20a">new courses(Books)</p>
        <p></p>
      </div>

       <ul className="grid gap-10 xs:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4">
        {courseBooks.map((eachcourse) => (
            <CourseItem
            key = {eachcourse.id}
            img = {eachcourse.img}
            title = {eachcourse.title}
            level = {eachcourse.level}
            rating ={eachcourse.rating}
            />
          )
        )}
       </ul>
    </section>
  );
};

type proptype = {
  key: number;
  img: string;
  title: string;
  level: string[];
  rating: string;
};



const CourseItem = ({level, img, title, rating}: proptype) =>{
return (
  <li className="bg-[#faf9f9] rounded-[9px] flex w-full flex-1 
  flex-col p-3">

    <Image src={img} width={410} height={300} className="rounded-[10px]" alt="courses"/>  

    <h5 className="regular-13a lg:regular-16a mt-5 capitalize">
      {title}
    </h5>
    <ul className="flexBetween mt-5 regular-13 lg:mt-[30px] *:text-gray-50 *:flexCenter">
      <li>
      <Image src="/book.svg" width={11} height={20} alt="courses"/>  
      {level[0]}
      </li>
      <li>
      <Image src="/user.svg" width={11} height={20} alt="courses"/>  
      {level[1]}
      </li>
      <li>
      <Image src="/level.svg" width={15} height={20} alt="courses"/>  
      {level[2]}
      </li>

    </ul>

    <div className="flexBetween mt-5 lg:mt-[30px]">
    <button className="text-[14px] xs:text-[10px] py-[10px] 
    px-[10px] rounded-[8px] flexCenter gap-1 text-white-70 bg-[#080808]" type="button">
        Start Course Now <span>
            <Image src="/whitearrow.svg" width={8} height={8} alt="an arrow" />
        </span>
    </button>
      <div><Image src={rating} width={30} height={20} alt="courses"/> </div>
    </div>

  </li>

)}
export default Courses;
