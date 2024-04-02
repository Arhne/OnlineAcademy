import Image from "next/image";
import { INTRUCTORS } from "../constants";

const Instructors = () => {
  return (
   
    <section className="max-container padding-container mt-24">
      

      <div className="pb-14 grid 3xl:grid-cols-[.5fr_1fr] gap-16">

        <div className="*:mb-[25px] 3xl:mt-5 3xxl:mt-20 text-left mx-auto">
          <h1 className="bold-40 capitalize text-[#000000]">
              <span className="gradcolor">Best</span> instructors
          </h1>
          <p className="pb-[40px]">At the Academy, we strive to bring together the best professors for the best courses</p>
          
          <button className="text-[14px] xs:text-[10px] py-[10px] relative
            px-[10px] rounded-[8px] flexCenter gap-1 text-white-70 bg-[#080808]" type="button">
            All Instructors <span><Image src="/whitearrow.svg" width={8} height={8} alt="an arrow" /></span>
         
            <Image src="/advertup.png" width={100} height={50} className="absolute right-[-120px] bottom-[-15px] z-[1]" alt="advert"/>
        <Image src="/advertising.png" width={100} height={50} className="absolute right-[-160px] z-[1] bottom-[20px]" alt="advert"/>
          </button>
        </div>

        <div className="3xl:mt-16 4xl:mt-6">
          <ul className="grid gap-7 grid-cols-2 relative 3xl:grid-cols-3">
          <Image src="/background2.svg" width={1200} height={900} className="absolute right-[0] bottom-[30%] z-[-1]" alt="advert"/>
        
            {INTRUCTORS.map((tutor) => (
              <Tutors
              key = {tutor.key}
              img = {tutor.instImg}
              title = {tutor.name}
              proficiency = {tutor.role}
              
              />
            ))}
          </ul>
        </div>

      </div>
  </section>
);};

type Teachtype = {
img: string;
title: string;
proficiency: string;
};



const Tutors = ({img, title, proficiency}: Teachtype) =>{
return (
  <li className="bg-[#faf7f7] rounded-[11px] flex w-full flex-1 
  flex-col p-3">
     
    <Image src={img} width={410} height={300} className="rounded-[10px]" alt="courses"/>  

    <ul className="mt-5 regular-13 lg:mt-[30px]">
      <li className="flexBetween">
        <h5 className="regular-13a text-[#3E3232] lg:regular-16a">
          {title}
        </h5> 
        <p className="text-gray-50">{proficiency}</p>
        
      </li>
    </ul>
    
  </li>

);};
export default Instructors;