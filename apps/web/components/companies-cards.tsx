"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Card, CardContent } from "@workspace/ui/components/card";
import { motion } from "framer-motion";
import { Book, Earth } from "lucide-react";
import { GitHubDarkIcon, GitHubLightIcon } from "@trigger.dev/companyicons";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function CompaniesCards() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const { theme } = useDarkMode();

  return (
    <div
      ref={containerRef}
      className="flex flex-col bp7:h-[380px] h-[1040px] md:flex-row gap-8 p-4 mx-auto max-w-6xl relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Foggy cursor effect with multiple layers - yellow in light mode, white in dark mode */}
      {isHovering && (
        <>
          {/* Base layer - largest and most blurred */}
          <motion.div
            className="pointer-events-none absolute bg-yellow-100/30 dark:bg-gray-500/30 rounded-full blur-3xl z-50"
            animate={{
              x: mousePosition.x - 100,
              y: mousePosition.y - 100,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              mass: 0.5,
            }}
            style={{
              width: "200px",
              height: "200px",
              filter: "blur(40px)",
            }}
          />
          {/* Middle layer - medium blur */}
          <motion.div
            className="pointer-events-none absolute bg-yellow-100/20 z-50 dark:bg-gray-500/30 rounded-full blur-2xl"
            animate={{
              x: mousePosition.x - 75,
              y: mousePosition.y - 75,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 250,
              mass: 0.4,
            }}
            style={{
              width: "150px",
              height: "150px",
              filter: "blur(25px)",
            }}
          />
          {/* Top layer - smallest and sharpest */}
          <motion.div
            className="pointer-events-none absolute z-50 bg-yellow-50/10 dark:bg-gray-500/30 rounded-full blur-xl"
            animate={{
              x: mousePosition.x - 50,
              y: mousePosition.y - 50,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              mass: 0.3,
            }}
            style={{
              width: "100px",
              height: "100px",
              filter: "blur(15px)",
            }}
          />
        </>
      )}

      {/* Card 1 - Run your code */}
      <Card className="flex-1 h-[350px] bg-gray-50 dark:bg-transparent border-0 rounded-lg overflow-hidden dark:before:content-[''] dark:before:absolute dark:before:inset-0 dark:before:bg-gradient-to-br dark:before:from-[#232327] dark:before:to-[#28282D] dark:before:rounded-lg dark:before:z-0 relative">
        <CardContent className="p-6 flex flex-col justify-center h-full relative z-10 border-[2px] dark:border-[#2C2B31] border-[#E4E4E7]">
          <div className="flex flex-row items-center justify-center bp2:agp-6 gap-3  mb-6 ">
            <div className="p-4 bp7:block hidden dark:bg-[#222225] bg-white rounded-full border-[2px] dark:border-[#2C2B31] border-[#E4E4E7] ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="size-10  sm:size-7 md:size-8 lg:size-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 11H20.5329C20.5769 11.3847 20.6 11.7792 20.6 12.1837C20.6 14.9184 19.6204 17.2204 17.9224 18.7837C16.4367 20.1551 14.404 20.9592 11.9796 20.9592C8.46933 20.9592 5.43266 18.947 3.9551 16.0123C3.34695 14.8 3 13.4286 3 11.9796C3 10.5306 3.34695 9.1592 3.9551 7.94698C5.43266 5.01226 8.46933 3 11.9796 3C14.4 3 16.4326 3.88983 17.9877 5.33878L16.5255 6.80101C15.3682 5.68153 13.8028 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.5265 19 18.1443 16.3923 18.577 13H12V11Z"></path>
              </svg>
            </div>

            <div className="p-4 bg-white dark:bg-[#222225] rounded-full border-[2px] dark:border-[#2C2B31] border-[#E4E4E7] ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="size-10 sm:size-7 md:size-8 lg:size-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.9744 16.1635C20.6888 17.0545 20.199 17.5 19.5048 17.5C18.6273 17.5 17.7647 16.9735 16.917 15.9206C16.3283 15.1893 15.5026 13.7996 14.44 11.7515C13.984 10.8723 13.5611 10.0959 13.1714 9.42225C13.4809 8.93372 13.757 8.54177 13.9998 8.24641C14.957 7.08214 15.9587 6.5 17.0048 6.5C17.8397 6.5 18.635 7.03584 19.3907 8.10753C20.1673 9.20896 20.7114 10.5694 21.0228 12.1888C21.3292 13.782 21.3131 15.1069 20.9744 16.1635ZM12.0049 11.4296C12.2149 11.8151 12.4349 12.2294 12.6647 12.6725C13.7887 14.839 14.6869 16.3397 15.3591 17.1748C16.6071 18.7249 17.989 19.5 19.5048 19.5C20.3608 19.5 21.0931 19.2297 21.7019 18.6892C22.2267 18.2233 22.6191 17.5849 22.879 16.774C23.3216 15.3931 23.3576 13.7388 22.9868 11.8112C22.6212 9.90978 21.9673 8.29105 21.0252 6.95497C19.8712 5.31832 18.531 4.5 17.0048 4.5C15.3288 4.5 13.8121 5.32543 12.4549 6.97628C12.3132 7.14862 12.1632 7.34668 12.0049 7.57046C11.8466 7.34668 11.6966 7.14862 11.5548 6.97628C10.1976 5.32543 8.68102 4.5 7.005 4.5C5.4788 4.5 4.13867 5.31833 2.98462 6.95498C2.04252 8.29105 1.38864 9.90977 1.02298 11.8112C0.652277 13.7388 0.688225 15.3931 1.13083 16.774C1.39074 17.5849 1.78309 18.2233 2.30788 18.6892C2.91672 19.2297 3.6491 19.5 4.50502 19.5C6.02087 19.5 7.40276 18.7249 8.65069 17.1748C9.32296 16.3397 10.2211 14.839 11.345 12.6726C11.575 12.2294 11.7949 11.8151 12.0049 11.4296ZM10.8384 9.42226C10.4487 10.0959 10.0258 10.8723 9.56972 11.7515C8.50715 13.7996 7.6815 15.1893 7.09279 15.9206C6.24514 16.9735 5.38255 17.5 4.50502 17.5C3.81084 17.5 3.32096 17.0545 3.03539 16.1635C2.69674 15.1069 2.6806 13.782 2.98699 12.1888C3.29843 10.5694 3.84248 9.20896 4.61913 8.10752C5.37481 7.03584 6.1701 6.5 7.005 6.5C8.05111 6.5 9.05277 7.08214 10.01 8.24641C10.2528 8.54176 10.5289 8.93371 10.8384 9.42226Z"></path>
              </svg>
            </div>

            <div className="p-4 bg-white dark:bg-[#222225] rounded-full border-[2px] dark:border-[#2C2B31] border-[#E4E4E7] ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="size-10 sm:size-7 md:size-8 lg:size-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.6262 14.6201C14.5191 16.2386 12.8976 17.0042 11.0007 17.0042C8.69659 17.0042 6.7243 15.2315 7.00788 12.8803C7.32248 10.272 9.34731 9.14962 12.716 8.73726C13.3171 8.66367 13.566 8.64299 14.8629 8.54691C14.9116 8.54331 14.9575 8.53988 15.001 8.5366C15.0008 8.46544 15.0007 8.39386 15.0007 8.32185C15.0007 6.52595 13.9328 5.30005 12.5007 5.30005C11.0638 5.30005 10.0603 6.0474 9.44592 7.82645L7.55546 7.17365C8.44288 4.60377 10.1935 3.30005 12.5007 3.30005C15.1034 3.30005 17.0007 5.47803 17.0007 8.32185C17.0007 10.9707 17.164 13.0776 17.484 13.8794C17.84 14.7715 17.9698 14.9959 18.3677 15.4921L16.8075 16.7434C16.2843 16.091 16.0549 15.6945 15.6264 14.6207L15.6262 14.6201ZM21.2572 20.5453C20.9864 20.7452 20.5157 20.6263 20.7288 20.1048C20.9934 19.4569 21.2755 18.6971 20.9911 18.3527C20.7807 18.098 20.5235 17.9711 19.9637 17.9711C19.5041 17.9711 19.2733 18.0305 18.9688 18.0508C18.7646 18.0645 18.6753 17.7537 18.8775 17.6109C19.1393 17.426 19.4216 17.2811 19.7483 17.1833C20.8979 16.8389 22.253 17.0276 22.4172 17.2658C22.7826 17.7959 22.2189 19.835 21.2572 20.5453ZM20.0754 19.4608C19.8136 19.7164 19.5299 19.9496 19.2462 20.156C17.1235 21.7716 14.3748 22.6169 11.9875 22.6169C8.14505 22.6169 4.70765 20.8226 2.10014 17.8212C1.87644 17.5906 2.06133 17.2555 2.32314 17.4369C5.13247 19.5136 8.6108 20.7699 12.2112 20.7699C14.4772 20.7699 16.9195 20.2329 19.2462 19.0775C19.4085 19.0007 19.5906 18.8961 19.7501 18.8228C20.117 18.6128 20.4395 19.1293 20.0754 19.4608ZM15.0107 10.5414C13.7522 10.6347 13.5147 10.6544 12.959 10.7224C10.4062 11.0349 9.16175 11.7247 8.99349 13.1198C8.86763 14.1633 9.80321 15.0042 11.0007 15.0042C13.0397 15.0042 14.5179 13.7764 15.0227 10.5406C15.0187 10.5409 15.0147 10.5411 15.0107 10.5414Z"></path>
              </svg>
            </div>
          </div>
          <p className="text-[16px] absolute bottom-2 w-[90%] font-medium text-gray-900 mt-8 dark:text-white">
            Built by passionate developers with expertise in modern technologies
          </p>
        </CardContent>
      </Card>

      {/* Card 2 - Resize workspace */}
      <Card className="flex-1 h-[350px] bg-gray-50 dark:bg-transparent border-0 rounded-lg overflow-hidden dark:before:content-[''] dark:before:absolute dark:before:inset-0 dark:before:bg-gradient-to-br dark:before:from-[#232327] dark:before:to-[#28282D] dark:before:rounded-lg dark:before:z-0 relative">
        <CardContent className="p-6 flex flex-col justify-center h-full relative z-10 border-[2px] dark:border-[#2C2B31] border-[#E4E4E7]">
          <div className="flex flex-row items-center justify-center gap-6 mb-6 ">
            <div className="p-4 dark:bg-[#222225] bg-white rounded-full border-[2px] dark:border-[#2C2B31] border-[#E4E4E7] ">
              <Book className="size-10" />
            </div>

            <div className="p-4 bg-white dark:bg-[#222225] rounded-full border-[2px] dark:border-[#2C2B31] border-[#E4E4E7] ">
              <svg
                fill="none"
                height="36"
                viewBox="0 0 47 36"
                width="47"
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 sm:size-7 md:size-8 lg:size-10"
              >
                <g clipPath="url(#clip0_1336_76067)">
                  <path
                    d="M23.092 35.9997C35.8453 35.9997 46.184 34.9335 46.184 33.6183C46.184 32.303 35.8453 31.2368 23.092 31.2368C10.3386 31.2368 0 32.303 0 33.6183C0 34.9335 10.3386 35.9997 23.092 35.9997Z"
                    fill="#27272A"
                    fillOpacity="0.4"
                  ></path>
                  <path
                    d="M31.6113 4.00293H33.1974C33.3863 4.00293 33.5733 4.04014 33.7479 4.11243C33.9224 4.18473 34.081 4.29069 34.2146 4.42427C34.3482 4.55785 34.4541 4.71643 34.5264 4.89096C34.5987 5.0655 34.6359 5.25256 34.6359 5.44147C34.6359 5.63038 34.5987 5.81744 34.5264 5.99198C34.4541 6.16651 34.3482 6.32509 34.2146 6.45867C34.081 6.59225 33.9224 6.69822 33.7479 6.77051C33.5733 6.8428 33.3863 6.88001 33.1974 6.88001H31.6113V4.00293Z"
                    fill="#070708"
                  ></path>
                  <path
                    d="M31.6124 6.87952C32.4069 6.87952 33.0509 6.23547 33.0509 5.44098C33.0509 4.6465 32.4069 4.00244 31.6124 4.00244C30.8179 4.00244 30.1738 4.6465 30.1738 5.44098C30.1738 6.23547 30.8179 6.87952 31.6124 6.87952Z"
                    fill="#070708"
                  ></path>
                  <path
                    d="M7.98828 2.06982H30.1834C31.0774 2.06982 31.9349 2.425 32.5671 3.05721C33.1993 3.68942 33.5545 4.54688 33.5545 5.44096C33.5545 5.88366 33.4673 6.32203 33.2979 6.73104C33.1285 7.14004 32.8802 7.51167 32.5671 7.82471C32.2541 8.13775 31.8825 8.38607 31.4734 8.55548C31.0644 8.7249 30.6261 8.81209 30.1834 8.81209H7.98828V2.07141V2.06982Z"
                    fill="#FAFAFA"
                  ></path>
                  <path
                    d="M10.8185 5.44092C10.8185 7.30293 10.3046 8.81284 8.43945 8.81284H17.7416V5.44092H10.8185Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M8.44261 2.06984C7.95324 2.06894 7.46954 2.17456 7.0251 2.37938C6.58065 2.5842 6.18612 2.88331 5.86889 3.25593C5.55166 3.62855 5.31933 4.06576 5.18805 4.53719C5.05677 5.00862 5.02968 5.50298 5.10865 5.98593C5.18763 6.46889 5.37078 6.92887 5.64539 7.33392C5.92 7.73898 6.27949 8.07941 6.69889 8.33157C7.11829 8.58374 7.58755 8.74159 8.07409 8.79417C8.56062 8.84675 9.05277 8.7928 9.51636 8.63606L7.58298 6.70584L9.61708 4.67174L11.5124 7.01829L11.5917 6.64399C11.7885 6.13356 11.8578 5.58284 11.7937 5.03955C11.7296 4.49627 11.534 3.97682 11.2238 3.52623C10.9135 3.07563 10.4981 2.70749 10.0135 2.45371C9.52887 2.19993 8.98966 2.06816 8.44261 2.06984Z"
                    fill="#D4D4D8"
                  ></path>
                  <path
                    d="M11.086 6.14055L9.61808 4.67188L7.58398 6.70598L9.51737 8.63619C10.2035 8.40584 10.7973 7.96101 11.2113 7.36736C11.3376 7.18063 11.3942 6.95546 11.3713 6.73121C11.3484 6.50695 11.2474 6.29788 11.086 6.14055Z"
                    fill="#D4D4D8"
                  ></path>
                  <path
                    d="M11.813 5.19775H11.3594V29.9551H11.813V5.19775Z"
                    fill="#D4D4D8"
                  ></path>
                  <path
                    d="M33.5551 29.9551H11.8145V5.19775L33.5551 5.3405V29.9551Z"
                    fill="#FAFAFA"
                  ></path>
                  <path
                    d="M30.4775 17.3315H14.8915C14.5253 17.3315 14.2285 17.6284 14.2285 17.9945C14.2285 18.3607 14.5253 18.6575 14.8915 18.6575H30.4775C30.8437 18.6575 31.1405 18.3607 31.1405 17.9945C31.1405 17.6284 30.8437 17.3315 30.4775 17.3315Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M24.3189 20.334H14.8915C14.5253 20.334 14.2285 20.6308 14.2285 20.9969C14.2285 21.3631 14.5253 21.6599 14.8915 21.6599H24.3189C24.6851 21.6599 24.9819 21.3631 24.9819 20.9969C24.9819 20.6308 24.6851 20.334 24.3189 20.334Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M30.4772 20.334H27.3876C27.0214 20.334 26.7246 20.6308 26.7246 20.9969C26.7246 21.3631 27.0214 21.6599 27.3876 21.6599H30.4772C30.8433 21.6599 31.1402 21.3631 31.1402 20.9969C31.1402 20.6308 30.8433 20.334 30.4772 20.334Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M18.7361 23.3369H14.8915C14.5253 23.3369 14.2285 23.6337 14.2285 23.9999C14.2285 24.366 14.5253 24.6628 14.8915 24.6628H18.7361C19.1022 24.6628 19.399 24.366 19.399 23.9999C19.399 23.6337 19.1022 23.3369 18.7361 23.3369Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M30.4794 23.3369H21.5009C21.1347 23.3369 20.8379 23.6337 20.8379 23.9999C20.8379 24.366 21.1347 24.6628 21.5009 24.6628H30.4794C30.8456 24.6628 31.1424 24.366 31.1424 23.9999C31.1424 23.6337 30.8456 23.3369 30.4794 23.3369Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M26.7937 9.27865L25.8032 9.91307C25.7429 9.82822 25.6906 9.74653 25.6303 9.6704C25.529 9.54277 25.3915 9.44883 25.2357 9.40098C25.08 9.35312 24.9134 9.35361 24.758 9.40236C24.2822 9.54114 24.2822 10.0994 24.5201 10.3183C24.6078 10.4012 24.7068 10.4712 24.8143 10.5261C25.0522 10.6426 25.2901 10.7449 25.5328 10.852C25.8862 10.9975 26.2191 11.1883 26.5232 11.4198C26.7214 11.5743 26.8821 11.7716 26.9932 11.9969C27.1043 12.2223 27.163 12.4699 27.1648 12.7212C27.1894 13.0632 27.116 13.4051 26.9531 13.7069C26.7473 14.068 26.411 14.3365 26.0133 14.4571C25.183 14.7259 24.3718 14.6807 23.6002 14.2517C23.2373 14.0458 22.9418 13.7392 22.7493 13.3691C22.7397 13.3524 22.7326 13.3342 22.7207 13.3088L23.7596 12.7077L23.8048 12.7743C23.9367 12.9965 24.122 13.1821 24.344 13.3143C24.5091 13.4072 24.692 13.464 24.8806 13.4811C25.0692 13.4982 25.2593 13.4751 25.4384 13.4135C25.6525 13.3445 25.8175 13.2112 25.869 12.9797C25.8959 12.8843 25.896 12.7833 25.8694 12.6878C25.8429 12.5923 25.7906 12.5059 25.7183 12.438C25.6291 12.3536 25.5282 12.2825 25.4186 12.2271C25.1378 12.0899 24.8508 11.967 24.5653 11.8401C24.2371 11.7061 23.9325 11.5206 23.6628 11.2905C23.4952 11.1397 23.3596 10.9566 23.2642 10.7523C23.1689 10.5479 23.1156 10.3264 23.1077 10.101C23.0783 9.76585 23.1472 9.42937 23.306 9.13274C23.4907 8.7933 23.7943 8.53405 24.1584 8.40474C24.7171 8.19087 25.3363 8.19824 25.8896 8.42536C26.2988 8.58476 26.5764 8.89642 26.7937 9.27865Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M18.207 13.4443L19.2443 12.8171L19.3022 12.913C19.3787 13.0585 19.4783 13.1905 19.5972 13.304C19.7189 13.3975 19.8644 13.4551 20.0172 13.4702C20.1699 13.4854 20.3239 13.4574 20.4616 13.3896C20.6313 13.2937 20.6995 13.1327 20.7257 12.9519C20.7419 12.8411 20.7499 12.7292 20.7495 12.6172C20.7495 11.2231 20.7495 9.82922 20.7495 8.43561V8.33252H22.0262C22.0262 8.35631 22.0262 8.38089 22.0262 8.40627V12.6458C22.0391 12.9994 21.9735 13.3514 21.8343 13.6767C21.6115 14.1525 21.2284 14.4364 20.7241 14.549C20.205 14.681 19.6568 14.6375 19.165 14.4253C18.7432 14.2335 18.4052 13.8954 18.2134 13.4737C18.2108 13.464 18.2087 13.4542 18.207 13.4443Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M38.0273 28.5171H39.6134C39.9949 28.5171 40.3608 28.6686 40.6306 28.9384C40.9004 29.2082 41.0519 29.5741 41.0519 29.9556C41.0519 30.3372 40.9004 30.7031 40.6306 30.9728C40.3608 31.2426 39.9949 31.3942 39.6134 31.3942H38.0273V28.5171Z"
                    fill="#070708"
                  ></path>
                  <path
                    d="M38.0284 31.3932C38.8229 31.3932 39.4669 30.7491 39.4669 29.9547C39.4669 29.1602 38.8229 28.5161 38.0284 28.5161C37.2339 28.5161 36.5898 29.1602 36.5898 29.9547C36.5898 30.7491 37.2339 31.3932 38.0284 31.3932Z"
                    fill="#070708"
                  ></path>
                  <path
                    d="M14.7305 26.5835H36.9256C37.8196 26.5835 38.6771 26.9387 39.3093 27.5709C39.9415 28.2031 40.2967 29.0606 40.2967 29.9546C40.2967 30.8487 39.9415 31.7062 39.3093 32.3384C38.6771 32.9706 37.8196 33.3258 36.9256 33.3258H14.7305V26.5851V26.5835Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M14.7325 33.3258C16.5943 33.3258 18.1036 31.8165 18.1036 29.9546C18.1036 28.0928 16.5943 26.5835 14.7325 26.5835C12.8706 26.5835 11.3613 28.0928 11.3613 29.9546C11.3613 31.8165 12.8706 33.3258 14.7325 33.3258Z"
                    fill="#D4D4D8"
                  ></path>
                  <path
                    d="M17.8931 31.1513L15.92 29.1782L13.8867 31.2123L15.8169 33.1433C16.2883 32.9845 16.7187 32.7237 17.0776 32.3793C17.4365 32.035 17.7149 31.6156 17.8931 31.1513Z"
                    fill="#070708"
                    opacity="0.2"
                  ></path>
                  <path
                    d="M13.4902 28.6592H14.9177C15.0879 28.6592 15.2565 28.6927 15.4139 28.7579C15.5712 28.823 15.7141 28.9185 15.8345 29.0389C15.9549 29.1593 16.0504 29.3023 16.1156 29.4596C16.1807 29.6169 16.2143 29.7855 16.2143 29.9558C16.2143 30.2996 16.0777 30.6294 15.8345 30.8726C15.5913 31.1158 15.2616 31.2524 14.9177 31.2524H13.4902V28.6592Z"
                    fill="#070708"
                  ></path>
                  <path
                    d="M13.49 31.2514C14.206 31.2514 14.7865 30.6709 14.7865 29.9548C14.7865 29.2387 14.206 28.6582 13.49 28.6582C12.7739 28.6582 12.1934 29.2387 12.1934 29.9548C12.1934 30.6709 12.7739 31.2514 13.49 31.2514Z"
                    fill="#3F3F46"
                  ></path>
                  <path
                    d="M33.7482 21.4013L34.1923 22.5766C34.203 22.6041 34.2193 22.6292 34.2402 22.65C34.261 22.6709 34.2861 22.6872 34.3136 22.6979L35.4889 23.142C35.5282 23.1571 35.5621 23.1838 35.586 23.2186C35.6098 23.2534 35.6226 23.2945 35.6226 23.3367C35.6226 23.3789 35.6098 23.4201 35.586 23.4548C35.5621 23.4896 35.5282 23.5163 35.4889 23.5314L34.3136 23.9763C34.286 23.9867 34.261 24.0028 34.2401 24.0236C34.2192 24.0444 34.2029 24.0693 34.1923 24.0968L33.7482 25.2721C33.7331 25.3114 33.7064 25.3453 33.6716 25.3692C33.6368 25.393 33.5957 25.4058 33.5535 25.4058C33.5113 25.4058 33.4702 25.393 33.4354 25.3692C33.4006 25.3453 33.3739 25.3114 33.3588 25.2721L32.9139 24.0968C32.9036 24.0693 32.8875 24.0442 32.8668 24.0235C32.846 24.0027 32.8209 23.9866 32.7934 23.9763L31.6181 23.5314C31.5788 23.5163 31.5449 23.4896 31.521 23.4548C31.4972 23.4201 31.4844 23.3789 31.4844 23.3367C31.4844 23.2945 31.4972 23.2534 31.521 23.2186C31.5449 23.1838 31.5788 23.1571 31.6181 23.142L32.7934 22.6979C32.8209 22.6873 32.8458 22.671 32.8666 22.6501C32.8874 22.6292 32.9035 22.6042 32.9139 22.5766L33.3588 21.4013C33.3739 21.362 33.4006 21.3281 33.4354 21.3042C33.4702 21.2804 33.5113 21.2676 33.5535 21.2676C33.5957 21.2676 33.6368 21.2804 33.6716 21.3042C33.7064 21.3281 33.7331 21.362 33.7482 21.4013Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M16.9953 0.134856L17.4402 1.30932C17.4509 1.33638 17.4671 1.36089 17.4879 1.38125C17.5087 1.40161 17.5335 1.41736 17.5607 1.42748L18.736 1.87157C18.7756 1.88656 18.8097 1.91325 18.8338 1.94809C18.8579 1.98294 18.8708 2.0243 18.8708 2.06666C18.8708 2.10902 18.8579 2.15037 18.8338 2.18522C18.8097 2.22007 18.7756 2.24676 18.736 2.26174L17.5607 2.70583C17.5332 2.7163 17.5081 2.73254 17.4874 2.75347C17.4666 2.77439 17.4505 2.79952 17.4402 2.82716L16.9953 4.0048C16.9805 4.0445 16.9539 4.07872 16.9191 4.10289C16.8844 4.12705 16.843 4.14 16.8006 4.14C16.7583 4.14 16.7169 4.12705 16.6821 4.10289C16.6473 4.07872 16.6207 4.0445 16.6059 4.0048L16.1619 2.83034C16.1514 2.80264 16.1352 2.77748 16.1143 2.75656C16.0934 2.73563 16.0682 2.71942 16.0405 2.709L14.8653 2.26491C14.8256 2.24993 14.7915 2.22324 14.7674 2.18839C14.7434 2.15354 14.7305 2.11219 14.7305 2.06983C14.7305 2.02747 14.7434 1.98612 14.7674 1.95127C14.7915 1.91642 14.8256 1.88973 14.8653 1.87475L16.0405 1.42748C16.0682 1.41706 16.0934 1.40085 16.1143 1.37993C16.1352 1.359 16.1514 1.33385 16.1619 1.30615L16.6059 0.131684C16.6211 0.0921048 16.6479 0.0580929 16.6829 0.0342084C16.7179 0.0103239 16.7594 -0.00229137 16.8017 -0.00194623C16.8441 -0.00160108 16.8854 0.011688 16.92 0.0361395C16.9546 0.0605909 16.9809 0.0950358 16.9953 0.134856Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M38.2238 8.9477L38.6679 10.1222C38.6785 10.1498 38.6947 10.1749 38.7156 10.1958C38.7366 10.2167 38.7616 10.233 38.7893 10.2435L39.9645 10.6876C40.0041 10.7026 40.0383 10.7293 40.0623 10.7641C40.0864 10.799 40.0993 10.8403 40.0993 10.8827C40.0993 10.925 40.0864 10.9664 40.0623 11.0012C40.0383 11.0361 40.0041 11.0628 39.9645 11.0778L38.7893 11.5219C38.7616 11.5324 38.7366 11.5487 38.7156 11.5696C38.6947 11.5905 38.6785 11.6156 38.6679 11.6432L38.2238 12.8176C38.209 12.8573 38.1825 12.8916 38.1477 12.9157C38.1129 12.9399 38.0715 12.9529 38.0292 12.9529C37.9868 12.9529 37.9454 12.9399 37.9106 12.9157C37.8758 12.8916 37.8493 12.8573 37.8345 12.8176L37.3896 11.6432C37.3793 11.6155 37.3632 11.5904 37.3424 11.5695C37.3216 11.5486 37.2966 11.5323 37.269 11.5219L36.0938 11.0778C36.0542 11.0628 36.02 11.0361 35.996 11.0012C35.9719 10.9664 35.959 10.925 35.959 10.8827C35.959 10.8403 35.9719 10.799 35.996 10.7641C36.02 10.7293 36.0542 10.7026 36.0938 10.6876L37.269 10.2435C37.2966 10.233 37.3216 10.2168 37.3424 10.1959C37.3632 10.1749 37.3793 10.1498 37.3896 10.1222L37.8345 8.9477C37.8493 8.90801 37.8758 8.87378 37.9106 8.84962C37.9454 8.82545 37.9868 8.8125 38.0292 8.8125C38.0715 8.8125 38.1129 8.82545 38.1477 8.84962C38.1825 8.87378 38.209 8.90801 38.2238 8.9477Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M9.78048 16.0593L10.2246 17.2338C10.235 17.2615 10.2512 17.2866 10.2721 17.3076C10.2931 17.3285 10.3182 17.3447 10.3459 17.3551L11.5204 17.7992C11.56 17.8142 11.5941 17.8409 11.6182 17.8757C11.6423 17.9106 11.6552 17.9519 11.6552 17.9943C11.6552 18.0366 11.6423 18.078 11.6182 18.1129C11.5941 18.1477 11.56 18.1744 11.5204 18.1894L10.3459 18.6358C10.3182 18.6463 10.2931 18.6625 10.2721 18.6834C10.2512 18.7043 10.235 18.7295 10.2246 18.7572L9.78048 19.9316C9.76568 19.9713 9.7391 20.0056 9.70431 20.0297C9.66951 20.0539 9.62816 20.0668 9.58579 20.0668C9.54343 20.0668 9.50207 20.0539 9.46728 20.0297C9.43248 20.0056 9.4059 19.9713 9.3911 19.9316L8.94622 18.7572C8.93589 18.7294 8.91971 18.7042 8.89877 18.6833C8.87784 18.6624 8.85264 18.6462 8.82489 18.6358L7.65042 18.1918C7.6108 18.1768 7.57668 18.1501 7.5526 18.1152C7.52852 18.0804 7.51562 18.039 7.51562 17.9967C7.51562 17.9543 7.52852 17.913 7.5526 17.8781C7.57668 17.8433 7.6108 17.8166 7.65042 17.8016L8.82489 17.3575C8.85264 17.3472 8.87784 17.331 8.89877 17.31C8.91971 17.2891 8.93589 17.2639 8.94622 17.2362L9.3911 16.0617C9.40566 16.0219 9.43202 15.9875 9.46667 15.9631C9.50132 15.9388 9.5426 15.9256 9.58496 15.9253C9.62733 15.925 9.66876 15.9377 9.70371 15.9617C9.73865 15.9856 9.76544 16.0197 9.78048 16.0593Z"
                    fill="#A1A1AA"
                  ></path>
                  <path
                    d="M11.0828 6.13659L9.61808 4.67188L7.58398 6.70598L9.51737 8.63619C10.1071 8.4386 10.6308 8.08182 11.0305 7.60526L11.1454 7.46648C11.3033 7.27718 11.3844 7.03556 11.3728 6.78935C11.3613 6.54313 11.2578 6.31021 11.0828 6.13659Z"
                    fill="#070708"
                    opacity="0.2"
                  ></path>
                  <path
                    d="M7.26562 4.28711H8.69306C8.8634 4.2869 9.03211 4.32026 9.18955 4.38528C9.34699 4.45029 9.49008 4.54569 9.61064 4.66603C9.73119 4.78637 9.82686 4.92928 9.89216 5.0866C9.95747 5.24392 9.99114 5.41257 9.99124 5.58291C9.99124 5.92678 9.85464 6.25658 9.61148 6.49974C9.36832 6.74289 9.03853 6.8795 8.69465 6.8795H7.26721V4.28711H7.26562Z"
                    fill="#070708"
                  ></path>
                  <path
                    d="M7.26534 6.87931C7.98143 6.87931 8.56193 6.29881 8.56193 5.58272C8.56193 4.86664 7.98143 4.28613 7.26534 4.28613C6.54925 4.28613 5.96875 4.86664 5.96875 5.58272C5.96875 6.29881 6.54925 6.87931 7.26534 6.87931Z"
                    fill="#3F3F46"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1336_76067">
                    <rect fill="white" height="36" width="46.1848"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <p className="text-[16px] absolute bottom-2 w-[90%] font-medium text-gray-900 mt-8 dark:text-white">
            Providing essential resources for developers and learners
          </p>
        </CardContent>
      </Card>

      <Card className="flex-1 h-[350px] bg-gray-50 dark:bg-transparent border-0 rounded-lg overflow-hidden dark:before:content-[''] dark:before:absolute dark:before:inset-0 dark:before:bg-gradient-to-br dark:before:from-[#232327] dark:before:to-[#28282D] dark:before:rounded-lg dark:before:z-0 relative">
        <CardContent className="p-6 flex flex-col justify-center h-full relative z-10 border-[2px] dark:border-[#2C2B31] border-[#E4E4E7]">
          <div className="flex flex-row items-center justify-center gap-3 mb-6 ">
            <div className="p-4 dark:bg-[#222225] bg-white rounded-full border-[2px] dark:border-[#2C2B31] border-[#E4E4E7] ">
              {theme === "light" ? (
                <GitHubDarkIcon className="size-10" />
              ) : (
                <GitHubLightIcon className="size-10" />
              )}
            </div>

            <div className="p-4 bg-white dark:bg-[#222225] rounded-full border-[2px] dark:border-[#2C2B31] border-[#E4E4E7] ">
              <Earth className="size-10" />
            </div>
          </div>
          <p className="text-[16px] absolute bottom-2 w-[90%] font-medium text-gray-900 mt-8 dark:text-white">
            Contributors to innovative projects and open-source tools
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
