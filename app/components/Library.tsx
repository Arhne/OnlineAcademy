import Image from "next/image";
import { mycourses } from "../constants";



const Library = () => {
  return (
    <section
      className="max-container padding-container my-14">
      
      
      <div className="mb-6 flexBetween">
        <p className="uppercase pl-3 flexBetween bold-20b 3xl:bold-20a">your courses</p>
        
        <button type="button" className="capitalize regular-13 text-gray-50 bg-[#f4f0f0] border-0 p-1.5 rounded-md">see all</button>
 
      </div>

       <ul className="grid gap-10 3xl:grid-cols-2">
        {mycourses.map((eachcourse) => (
            <CourseItem
            key = {eachcourse.id}
            img = {eachcourse.img}
            title = {eachcourse.title}
            level = {eachcourse.level}
            rating ={eachcourse.rating}
            points ={eachcourse.points}
            days ={eachcourse.days}
            instImg ={eachcourse.instImg}
            name ={eachcourse.name}
            role ={eachcourse.role}
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
  points : string;
  days : string;
  instImg: string;
  name: string;
  role : string;
};



const CourseItem = ({level, img, title, rating, points, days, instImg, name, role}: proptype) =>{
return (
  <li className="bg-[#faf9f9] w-full rounded-[9px] p-3 flex flex-1 gap-x-2">

    <Image src={img} width={250} height={100} className="w-[100px] xs:w-[200px] 3xl:w-[100px] 4xl:w-[250px] object-cover rounded-[10px]" alt="courses"/>  

    <div className="flex flex-1 flex-col justify-around">


      <h5 className="regular-13a lg:regular-16a mt-5 capitalize">
        {title}
      </h5>

      <ul className="flexBetween mt-5 regular-13 3xl:regular-13a lg:mt-[30px] *:text-gray-50 *:flexCenter">
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


      <div className="mt-5">
        <Image src={rating} width={100} height={100} className="w-full" alt="courses"/>  
        <ul className="flexBetween regular-13 3xl:regular-13a *:text-gray-50 *:flexCenter">
          <li>{points}</li>
          <li>{days}</li>
        </ul> 
        
      </div>
        

      <div className="flexBetween mt-5 lg:mt-[30px]">

      <div className="flexCenter">
            <Image
                className="rounded-[9px] mr-1.5"
                src={instImg}
                width={40}
                height={20}
                alt="Profile picture"
                />

            <div className="rounded-[9px]">
                <h5 className="regular-16 capitalize text-black-70">{name}</h5>
                <p className="regular-13  text-gray-50">{role}</p>
            </div>
        </div>

        <button className="text-[8px] p-[8px] xs:3xxl:text-[10px] 3xl:text-[8px] 3xl:p-[6px] 3xxl:p-[8px] capitalize
         rounded-[8px] flexCenter gap-1 text-white-70 bg-[#080808]" type="button">lets go <span>
                <Image src="/whitearrow.svg" width={8} height={8} alt="an arrow" />
            </span>
        </button>
        
      </div>

    </div>
   
   

    

  </li>

)
}

export default Library