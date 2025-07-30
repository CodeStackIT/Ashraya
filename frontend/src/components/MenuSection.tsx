// import React from "react";

// interface MenuSectionProps {
//   title: string;
//   description: string | any;
//   image: string;
//   reverse?: boolean;
// }

// const MenuSection: React.FC<MenuSectionProps> = ({
//   title,
//   description,
//   image,
//   reverse = false,
// }) => {
//   return (
//     <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center my-2`}>
//       <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
//         <h2 className="text-4xl font-bold mb-2 text-black items-center font-mono ">{title}</h2>
//         <p className="text-black text-2xl">{description}</p>
//       </div>
//       <div className="md:w-1/2">
//         <img src={image} alt={title} className="w-72 md:w-96 lg:w-[550px]  h-fit rounded shadow" />
//       </div>
//     </div>
//   );
// };

// export default MenuSection;




import React from 'react';

interface MenuSectionProps {
  title: string;
  description: React.ReactNode;
  image: string;
  reverse?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  description,
  image,
  reverse = false,
}) => {
  return (
    <>
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center my-2`}>
      <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-2 text-black items-center font-mono">{title}</h2>
        <div className="text-black text-2xl">{description}</div>
      </div>
      <div className="md:w-1/2">
        <img src={image} alt={title} className="w-72 md:w-96 lg:w-[450px] h-fit rounded shadow" />
      </div>
    </div>
    </>
  );
};

export default MenuSection;