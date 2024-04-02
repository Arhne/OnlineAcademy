import Image from "next/image";
import { footerLinks, footerComments } from "@/app/constants";
import Link from "next/link";


type ColumnProps = {
  title: string;
  links: string[];
}

type FooterProps = {
  name: string;
  comment: string;
} 

const FooterColumn = ({title, links}: ColumnProps) => (
<div className="footer_column ">
  <h4 className="uppercase regular-13b mb-4">{title}</h4>
  <ul className="flex flex-col capitalize gap-2 bold-13">
   {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
  </ul>
</div>
)

const FooterComment = ({name, comment}: FooterProps) => (

  <div className="rounded-[8px] p-[.65rem] bg-[#F5F5F5] mb-4">
    <h5 className="text-[#3E3232] regular-13b mb-1">{name}</h5>
    <p className="text-[#030202bf] bold-12">{comment}</p>
  </div>
  
  )


const Footer = () => {
  return (
    
    <footer className="max-container padding-container">
        
     <div className="  p-5 mt-15 rounded-[16px] bg-[#FAF7F7]">
        
        <div className="flex items-center gap-8 mb-5 md:mb-10">
          
          <div className="bg-bg-img-1 relative bg-no-repeat bg-contain">
          <p className="p-5 text-[7.7px] 3xl:text-[10px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. ta voluptates architecto voluptas quam eos autem dolor nihil id, placeat debitis tenetur praesentium explicabo facilis. Expedita.</p>
          </div> 
          <Image 
          src="/footerlogo.svg"
          width={90}
          height={80}
          alt ="footer logo"
          />
        </div>  

        <div className="5xl:flexCenter">

        <div className="flexCenter flex-col 3xl:flex-row gap-12">
          <div>
            <h4 className="uppercase regular-13b mb-4">Membership Certificate</h4>
            <Image
            src="/cert.svg"
            width={350}
            height={250}
            alt= "image of a certificate"
            />
          </div>

          <div className="flex gap-12">
            <FooterColumn 
            title ={footerLinks[0].title}
            links ={footerLinks[0].links}/>
            <FooterColumn 
            title ={footerLinks[1].title}
            links ={footerLinks[1].links}/>
          </div>

        </div>  

        <div className="flex flex-1 items-center justify-center mt-10 *:mb-10">

          <div className="w-[373px]">
          <h4 className="uppercase regular-13b mb-4">New Comment</h4>
         
          <FooterComment
          name ={footerComments[0].name} 
          comment={footerComments[0].comment} />

         <FooterComment
          name ={footerComments[1].name} 
          comment={footerComments[1].comment} />

         <FooterComment
          name ={footerComments[2].name} 
          comment={footerComments[2].comment} />

         <FooterComment
          name ={footerComments[3].name} 
          comment={footerComments[3].comment} />
          </div> 
          
        </div>


        </div>
        <div className="#F5F5F5 flexBetween text-[#3E3232BF] capitalize bold-12 bg-[#F5F5F5] rounded-[8px] p-4">
          <p>privacy policy | terms & conditions</p>
          <p>all copyright (c) 2022 reserved</p>
        </div>

        </div>
    </footer>
  )
}

export default Footer