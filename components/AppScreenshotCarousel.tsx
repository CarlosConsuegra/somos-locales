import { useState } from "react"
import svgPaths from "../imports/svg-u30mtf8lqz"
import imgImage8 from "figma:asset/c81fd7d04632692c677a623f83208e1fc2b954b9.png"
import imgReflection from "figma:asset/e90fa98614fad942fed9968a3c6013357b07500c.png"
import img004 from "figma:asset/dbf52aa45dcee540a0b5437acaaf9bd18e1f6195.png"
import img000 from "figma:asset/27d8b61f751e80dbc1b668ba6b7d76c26fb88c76.png"
import img003 from "figma:asset/946df00d0462f709ba8e8c2c6c287e21a5776339.png"
import img001 from "figma:asset/b6c24549df54de5cfe864a76e99569b4d37953ab.png"
import imgAppScreenShot from "figma:asset/b60b737c4ff20ddff3b2b120bad68684b8870df4.png"
import { imgImage9 } from "../imports/svg-x2ubl"

function Frame427318968() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 lg:gap-12 items-center justify-start leading-[0] not-italic px-4 sm:px-8 lg:px-[139px] py-0 relative w-full">
          <div className="font-['Poppins:Bold',_sans-serif] relative shrink-0 text-[#373736] text-[28px] lg:text-[36px] text-center w-full">
            <p className="block leading-[1.2]">Conoce la plataforma</p>
          </div>
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#444444] text-[16px] lg:text-[20px] text-center lg:text-left w-full">
            <p className="block leading-[1.4] lg:leading-[1.2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function RemixIconsLineSystemArrowLeftSLine() {
  return (
    <div
      className="absolute inset-0 overflow-clip"
      data-name="remix-icons/line/system/arrow-left-s-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.p3e30bd80}
            fill="white"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  )
}

function IconsArrowLeftSLine() {
  return (
    <div className="relative size-full" data-name="Icons/arrow-left-s-line">
      <RemixIconsLineSystemArrowLeftSLine />
    </div>
  )
}

function IconsLineSystemArrowLeftSLine() {
  return (
    <div
      className="[grid-area:1_/_1] ml-[8px] lg:ml-[12.952px] mt-[8px] lg:mt-[12.952px] relative size-[24px] lg:size-[38.095px]"
      data-name="Icons/line/system/arrow-left-s-line"
    >
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[180deg] size-[24px] lg:size-[38.095px]">
          <IconsArrowLeftSLine />
        </div>
      </div>
    </div>
  )
}

function RightIcon({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="hidden sm:grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative hover:scale-110 transition-transform"
      data-name="Right Icon"
    >
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-12 lg:size-16">
        <div className="flex-none rotate-[180deg]">
          <div className="relative size-12 lg:size-16">
            <div className="absolute bottom-[-17.188%] left-[-15.625%] right-[-15.625%] top-[-14.063%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 84 84"
              >
                <g filter="url(#filter0_d_2_116)" id="Ellipse 6">
                  <circle
                    cx="42"
                    cy="41"
                    fill="#262623"
                    r="32"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="84"
                    id="filter0_d_2_116"
                    width="84"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow_2_116"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_116"
                      mode="normal"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsLineSystemArrowLeftSLine />
    </button>
  )
}

function Screen() {
  return (
    <div
      className="absolute bottom-[3.31%] contents left-0 right-[-2.362%] top-0"
      data-name="Screen"
    >
      <div
        className="[background-size:92.11%_92.11%] absolute aspect-[780/1688] bg-[42.14%_14.35%] bg-no-repeat left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8.35107px_33.8254px] mask-size-[250.766px_561.325px] mix-blend-screen right-[-2.362%] top-0"
        data-name="image 8"
        style={{
          backgroundImage: `url('${imgImage8}')`,
          maskImage: `url('${imgImage9}')`,
        }}
      />
      <div
        className="[background-size:92.11%_92.11%] absolute aspect-[780/1688] bg-[42.14%_14.35%] bg-no-repeat left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8.35107px_33.8254px] mask-size-[250.766px_561.325px] right-[-2.362%] top-0"
        data-name="image 9"
        style={{
          backgroundImage: `url('${imgImage8}')`,
          maskImage: `url('${imgImage9}')`,
        }}
      />
      <div
        className="[background-size:100%_100%] absolute bg-no-repeat bg-top-left bottom-[3.31%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8.35107px_33.8254px] mask-size-[250.766px_561.325px] mix-blend-screen right-[3.31%] top-0"
        data-name="Reflection"
        style={{
          backgroundImage: `url('${imgReflection}')`,
          maskImage: `url('${imgImage9}')`,
        }}
      />
    </div>
  )
}

function Mobile() {
  return (
    <div
      className="[grid-area:1_/_1] h-[400px] lg:h-[622px] ml-[50px] sm:ml-[180px] lg:ml-[355.965px] mt-0 relative shadow-[0px_24.8215px_49.643px_-12.4108px_rgba(17,24,39,0.25)] w-[170px] lg:w-[265.792px]"
      data-name="Mobile"
    >
      <div
        className="[background-size:100%_100%] absolute bg-no-repeat bg-top-left inset-0"
        data-name="Samsung Galaxy S9"
        style={{ backgroundImage: `url('${imgReflection}')` }}
      />
      <Screen />
    </div>
  )
}

function AppScreenshort({ currentSlide }: { currentSlide: number }) {
  const slides = [
    {
      left: img000,
      center: img003,
      right: img001,
      rightSecond: img004
    },
    {
      left: img003,
      center: img001,
      right: img004,
      rightSecond: img000
    },
    {
      left: img001,
      center: img004,
      right: img000,
      rightSecond: img003
    },
    {
      left: img004,
      center: img000,
      right: img003,
      rightSecond: img001
    },
    {
      left: img000,
      center: img003,
      right: img001,
      rightSecond: img004
    }
  ]

  const currentSlideData = slides[currentSlide] || slides[0]

  return (
    <div
      className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid min-h-px min-w-px place-items-start relative shrink-0"
      data-name="App Screenshort"
    >
      {/* Side images - hidden on mobile */}
      <div
        className="hidden lg:block [grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[532px] ml-[753.226px] mt-[45px] opacity-50 rounded-[40px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] w-[224.774px] transition-all duration-500"
        data-name="004"
        style={{ backgroundImage: `url('${currentSlideData.rightSecond}')` }}
      />
      
      {/* Main mobile in center */}
      <Mobile />
      
      {/* Side images responsive */}
      <div
        className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[340px] lg:h-[532px] ml-0 mt-[30px] lg:mt-[45px] opacity-30 lg:opacity-50 shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] w-[140px] lg:w-[225.692px] transition-all duration-500"
        data-name="000"
        style={{ backgroundImage: `url('${currentSlideData.left}')` }}
      />
      <div
        className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[340px] lg:h-[532px] ml-[65px] sm:ml-[120px] lg:ml-[100.922px] mt-[30px] lg:mt-[45px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] w-[140px] lg:w-[225.692px] transition-all duration-500"
        data-name="003"
        style={{ backgroundImage: `url('${currentSlideData.center}')` }}
      />
      <div
        className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[340px] lg:h-[532px] ml-[280px] sm:ml-[420px] lg:ml-[638.999px] mt-[30px] lg:mt-[45px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] w-[140px] lg:w-[224.774px] transition-all duration-500"
        data-name="001"
        style={{ backgroundImage: `url('${currentSlideData.right}')` }}
      />
    </div>
  )
}

function LeftIcon({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="hidden sm:flex items-center justify-center relative shrink-0 hover:scale-110 transition-transform"
    >
      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
          <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-12 lg:size-16">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-12 lg:size-16">
                <div className="absolute bottom-[-17.188%] left-[-15.625%] right-[-15.625%] top-[-14.063%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 84 84"
                  >
                    <g filter="url(#filter0_d_2_116)" id="Ellipse 6">
                      <circle
                        cx="42"
                        cy="41"
                        fill="#262623"
                        r="32"
                      />
                    </g>
                    <defs>
                      <filter
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                        height="84"
                        id="filter0_d_2_116"
                        width="84"
                        x="0"
                        y="0"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="5" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          in2="BackgroundImageFix"
                          mode="normal"
                          result="effect1_dropShadow_2_116"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2_116"
                          mode="normal"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <IconsLineSystemArrowLeftSLine />
        </div>
      </div>
    </button>
  )
}

function Frame427318966({ currentSlide, onPrevSlide, onNextSlide }: { currentSlide: number, onPrevSlide: () => void, onNextSlide: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-4 lg:gap-10 items-center justify-center leading-[0] p-0 relative w-full overflow-hidden">
        <LeftIcon onClick={onPrevSlide} />
        <AppScreenshort currentSlide={currentSlide} />
        <RightIcon onClick={onNextSlide} />
      </div>
    </div>
  )
}

function Slider({ currentSlide, totalSlides, onSlideChange }: { currentSlide: number, totalSlides: number, onSlideChange: (index: number) => void }) {
  return (
    <div className="h-5 relative shrink-0 w-full flex justify-center" data-name="Slider">
      <div className="flex items-center justify-center gap-3 lg:gap-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`rounded-full transition-all hover:scale-110 ${
              index === currentSlide
                ? "w-[18px] lg:w-[22px] h-[18px] lg:h-[22px] bg-[#FF76BA] border-2 border-[#FF76BA]"
                : "w-3 lg:w-4 h-3 lg:h-4 bg-[#FF76BA]"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function Frame427318967({ currentSlide, totalSlides, onSlideChange, onPrevSlide, onNextSlide }: { 
  currentSlide: number, 
  totalSlides: number, 
  onSlideChange: (index: number) => void, 
  onPrevSlide: () => void, 
  onNextSlide: () => void 
}) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-8 lg:gap-[52px] items-center justify-start p-0 relative w-full">
        <Frame427318966 currentSlide={currentSlide} onPrevSlide={onPrevSlide} onNextSlide={onNextSlide} />
        <Slider currentSlide={currentSlide} totalSlides={totalSlides} onSlideChange={onSlideChange} />
      </div>
    </div>
  )
}

export default function AppScreenshotCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="bg-[#262623] relative shrink-0 w-full" data-name="App Screen Shot">
      {/* Contenedor principal con esquinas redondeadas superiores y fondo que elimina espacios blancos */}
      <div className="relative w-full">
        {/* Fondo oscuro para eliminar espacios blancos */}
        <div className="absolute inset-0 bg-[#262623]"></div>
        
        {/* Contenido principal con imagen de fondo y esquinas redondeadas superiores */}
        <div
          className="bg-cover bg-center relative rounded-tl-[80px] lg:rounded-tl-[180px] rounded-tr-[80px] lg:rounded-tr-[180px] shrink-0 w-full"
          style={{ backgroundImage: `url('${imgAppScreenShot}')` }}
        >
          <div className="flex flex-col items-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-8 lg:gap-[60px] items-center justify-start px-4 sm:px-8 lg:px-[90px] py-12 lg:py-20 relative w-full">
              <Frame427318968 />
              <Frame427318967 
                currentSlide={currentSlide} 
                totalSlides={totalSlides} 
                onSlideChange={handleSlideChange}
                onPrevSlide={handlePrevSlide}
                onNextSlide={handleNextSlide}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}