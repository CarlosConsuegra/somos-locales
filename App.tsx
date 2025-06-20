import { useState } from "react"
import { Menu, X } from "lucide-react"
import svgPaths from "./imports/svg-cw4t9csb44"
import imgPrincipalSection from "figma:asset/4aa4542fd64d1139952bd3c75a4d5911b4b85721.png"
import imgRecurso63X1 from "figma:asset/55516bba33c938a617820d582adc4e2b460cd585.png"
import imgConfusedMaleStudent from "figma:asset/3bfbf0d8ae76804120fae1f6b9bd267583339b1c.png"
import imgHandHoldingPhone from "figma:asset/4d4ca32a0130a030844043552b8d8c5915eb7ae1.png"
import imgHandsHoldingGoldTrophyCup from "figma:asset/44a6dceaedb486e15fa49f46825a5b33611b0972.png"
import imgAppScreenShot from "figma:asset/b60b737c4ff20ddff3b2b120bad68684b8870df4.png"
import imgImageLummiAvatars from "figma:asset/7a5f115577ccb3e95788a467b47881be87098935.png"
import imgImageLummiAvatars1 from "figma:asset/a5db1000c748ecb80bbff0480b26671905cf73a4.png"
import imgProperty1ImageBackgroundLummi from "figma:asset/f03cf4af052d254cbc7d0b65fb32455b3ebc953d.png"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import RegistrationModal from "./components/RegistrationModal"
import AppScreenshotCarousel from "./components/AppScreenshotCarousel"
import AboutUsResponsive from "./components/AboutUsResponsive"

type PageType = 'home' | 'about'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [currentStep, setCurrentStep] = useState(1)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleRegister = () => {
    setShowModal(true)
  }

  const handleSubmitRegistration = () => {
    console.log("Registro completado:", { fullName, email })
    setShowModal(false)
    setCurrentStep(1)
    setFullName("")
    setEmail("")
  }

  const navigateToAbout = () => {
    setCurrentPage('about')
    setMobileMenuOpen(false)
  }

  const navigateToHome = () => {
    setCurrentPage('home')
    setMobileMenuOpen(false)
  }

  if (currentPage === 'about') {
    return (
      <>
        <AboutUsResponsive 
          onNavigateHome={navigateToHome}
          onRegister={handleRegister}
        />
        <RegistrationModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          onSubmit={handleSubmitRegistration}
        />
      </>
    )
  }

  return (
    <div className="bg-[#262623] relative size-full">
      <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative size-full">
        {/* Principal Section */}
        <div
          className="bg-cover bg-center relative shrink-0 w-full min-h-screen lg:min-h-[800px]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgPrincipalSection}')`,
          }}
        >
          <div className="overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col gap-8 lg:gap-[115px] items-start justify-start pb-12 lg:pb-[81px] pt-5 px-4 sm:px-8 lg:px-[90px] relative w-full min-h-screen lg:min-h-[800px]">
              {/* Header */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center relative size-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-4 relative w-full">
                    {/* Logo */}
                    <div className="relative shrink-0">
                      <div className="h-[35px] lg:h-[45px] relative shrink-0 w-11 lg:w-14">
                        <div className="absolute bottom-[-17.778%] left-[-8.929%] right-[-10.714%] top-0">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 67 53"
                          >
                            <g id="Frame">
                              <g filter="url(#filter0_d_1_11573)" id="Vector">
                                <path d={svgPaths.p30eef200} fill="#F7E75D" />
                              </g>
                              <g filter="url(#filter1_d_1_11573)" id="Vector_2">
                                <path d={svgPaths.p1321d80} fill="#F7E75D" />
                              </g>
                            </g>
                            <defs>
                              <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="53"
                                id="filter0_d_1_11573"
                                width="42"
                                x="6.08756e-09"
                                y="-1.3035e-09"
                              >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  result="hardAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dx="-1" dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                  in2="BackgroundImageFix"
                                  mode="normal"
                                  result="effect1_dropShadow_1_11573"
                                />
                                <feBlend
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_1_11573"
                                  mode="normal"
                                  result="shape"
                                />
                              </filter>
                              <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="53"
                                id="filter1_d_1_11573"
                                width="36"
                                x="31"
                                y="8.80526e-10"
                              >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  result="hardAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dx="-1" dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                  in2="BackgroundImageFix"
                                  mode="normal"
                                  result="effect1_dropShadow_1_11573"
                                />
                                <feBlend
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_1_11573"
                                  mode="normal"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                      <div className="flex items-center gap-12">
                        <button 
                          onClick={navigateToHome}
                          className="font-['Poppins:SemiBold',_sans-serif] text-stone-50 hover:text-[#f7e75d] transition-colors"
                        >
                          Inicio
                        </button>
                        <button 
                          onClick={navigateToAbout}
                          className="font-['Poppins:SemiBold',_sans-serif] text-stone-50 hover:text-[#f7e75d] transition-colors"
                        >
                          Nosotros
                        </button>
                      </div>
                      <Button 
                        onClick={handleRegister}
                        className="bg-[#f7e75d] text-[#262623] hover:bg-[#f7e75d]/90 rounded-lg px-3.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                      >
                        Inicia sesión
                      </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                      className="lg:hidden text-white"
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                      <div className="absolute top-full left-0 right-0 bg-[#262623] border-t border-gray-600 lg:hidden">
                        <div className="flex flex-col p-4 space-y-4">
                          <button 
                            onClick={navigateToHome}
                            className="font-['Poppins:SemiBold',_sans-serif] text-stone-50 hover:text-[#f7e75d] transition-colors text-left"
                          >
                            Inicio
                          </button>
                          <button 
                            onClick={navigateToAbout}
                            className="font-['Poppins:SemiBold',_sans-serif] text-stone-50 hover:text-[#f7e75d] transition-colors text-left"
                          >
                            Nosotros
                          </button>
                          <Button 
                            onClick={handleRegister}
                            className="bg-[#f7e75d] text-[#262623] hover:bg-[#f7e75d]/90 rounded-lg px-3.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-full"
                          >
                            Inicia sesión
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Hero Content */}
              <div className="flex-1 flex items-center lg:items-end justify-center lg:justify-start relative w-full">
                <div className="max-w-2xl lg:max-w-[599px] w-full">
                  <div className="backdrop-blur-[0.35px] backdrop-filter bg-[rgba(0,0,0,0.03)] relative w-full p-4 lg:p-0">
                    <div className="text-center lg:text-left">
                      <div className="font-['Rubik_One:Regular',_sans-serif] text-[24px] sm:text-[28px] lg:text-[36px] text-[rgba(209,214,206,0.99)] tracking-[-0.72px] uppercase">
                        <p className="leading-none">#Tienesquevivirlo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative element - hidden on mobile */}
              <div
                className="hidden lg:block absolute bg-center bg-cover bg-no-repeat h-[120px] lg:h-[151px] right-4 lg:right-[90px] opacity-[0.68] top-[165px] w-[200px] lg:w-[267px]"
                style={{ backgroundImage: `url('${imgRecurso63X1}')` }}
              />
            </div>
          </div>
        </div>

        {/* Somos Locales Section */}
        <div className="bg-[#262623] relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-12 lg:gap-20 items-start justify-start pb-16 lg:pb-[120px] pt-12 lg:pt-20 px-4 sm:px-8 lg:px-0 relative w-full">
              <div className="relative shrink-0 w-full">
                <div className="relative size-full">
                  <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start lg:pl-[90px] lg:pr-[611px] py-0 relative w-full">
                    <div className="relative shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative w-full">
                        <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#eeeeee] text-[28px] lg:text-[36px] text-left w-full">
                          <p className="block leading-[1.2]">Somos Locales</p>
                        </div>
                        <div className="relative shrink-0 w-full">
                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative text-left w-full">
                            <div
                              className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#ffffff] text-[16px] lg:text-[18px] w-full"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              <p className="block leading-[1.6] lg:leading-[34px]">
                                Somos una plataforma deportiva que te ofrece una experiencia única y
                                emocionante. Participa en quinielas, reta a tus amigos y demuestra
                                quién sabe más. Encuentra horarios, boletos y los mejores tips para
                                disfrutar del fútbol femenil al máximo.
                              </p>
                            </div>
                            <div className="font-['Poppins:Bold',_sans-serif] not-italic relative shrink-0 text-[#f7e75d] text-[18px] lg:text-[20px] w-full">
                              <p className="block leading-[1.5]">¡Únete y vive la pasión!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-end relative size-full">
                  <div className="box-border content-stretch flex flex-col gap-9 items-end justify-start px-4 sm:px-8 lg:px-[90px] py-0 relative w-full">
                    <div className="relative shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-start p-0 relative w-full">
                        {/* Guías de estadios */}
                        <div className="w-full lg:basis-0 lg:grow relative rounded-[10px] shrink-0">
                          <div className="flex flex-col items-center relative size-full">
                            <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-[16px] relative size-full">
                              <div
                                className="bg-center bg-contain bg-no-repeat h-[100px] lg:h-[120px] shrink-0 w-[90px] lg:w-[109px]"
                                style={{ backgroundImage: `url('${imgConfusedMaleStudent}')` }}
                              />
                              <div className="relative shrink-0 w-full">
                                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative w-full">
                                  <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#aaaaaa] text-[20px] lg:text-[24px] text-center w-full">
                                    <p className="block leading-[1.4]">Guías de estadios</p>
                                  </div>
                                  <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#ffffff] text-[14px] lg:text-[16px] text-left w-full">
                                    <p className="block leading-[1.5]">
                                      Encuentra información de cada estadio, cómo llegar, dónde comer,
                                      hospedarte y opciones de transporte.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quiniela */}
                        <div className="w-full lg:basis-0 lg:grow relative rounded-[10px] shrink-0">
                          <div className="flex flex-col items-center relative size-full">
                            <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-[16px] relative size-full">
                              <div
                                className="bg-center bg-contain bg-no-repeat h-[100px] lg:h-[120px] shrink-0 w-[75px] lg:w-[92px]"
                                style={{ backgroundImage: `url('${imgHandHoldingPhone}')` }}
                              />
                              <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#aaaaaa] text-[20px] lg:text-[24px] text-center">
                                <p className="block leading-[1.4]">Quiniela</p>
                              </div>
                              <div className="font-['Poppins:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[14px] lg:text-[16px] text-left">
                                <p className="block leading-[1.5]">
                                  Reta a tus amigos en la quiniela y demuestra quién es el verdadero
                                  experto.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Gana recompensas */}
                        <div className="w-full lg:basis-0 lg:grow relative rounded-[10px] shrink-0">
                          <div className="flex flex-col items-center relative size-full">
                            <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-[16px] relative w-full">
                              <div
                                className="bg-center bg-contain bg-no-repeat h-[100px] lg:h-[120px] shrink-0 w-[95px] lg:w-[113px]"
                                style={{ backgroundImage: `url('${imgHandsHoldingGoldTrophyCup}')` }}
                              />
                              <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#aaaaaa] text-[20px] lg:text-[24px] text-center">
                                <p className="block leading-[1.4]">Gana recompensas</p>
                              </div>
                              <div className="font-['Poppins:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[14px] lg:text-[16px] text-left">
                                <p className="block leading-[1.5]">
                                  Suma puntos, sube en el ranking y compite por increíbles premios
                                  mientras disfrutas del fútbol.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Screenshot Carousel Section */}
        <AppScreenshotCarousel />

        {/* Team Section */}
        <div
          className="bg-cover bg-center relative shrink-0 w-full"
          style={{ backgroundImage: `url('${imgAppScreenShot}')` }}
        >
          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-[126px] items-center justify-center px-4 sm:px-8 lg:px-[90px] py-16 lg:py-[100px] relative w-full">
              <div className="w-full lg:basis-0 lg:grow relative shrink-0 order-2 lg:order-1">
                <div className="box-border content-stretch flex flex-col gap-10 items-center lg:items-start justify-center p-0 relative w-full">
                  <div className="relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col gap-4 items-center lg:items-start justify-center p-0 relative w-full">
                      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#373736] text-[28px] lg:text-[36px] text-center lg:text-right w-full">
                        <p className="block leading-[1.2]">El Corazón del Fútbol</p>
                      </div>
                      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#666666] text-[20px] lg:text-[24px] text-center lg:text-right w-full">
                        <p className="block leading-[1.4]">
                          La esencia de las gradas en tu hogar.
                        </p>
                      </div>
                      <div className="relative shrink-0 w-full">
                        <div className="box-border content-stretch flex flex-row gap-8 items-start justify-center lg:justify-end p-0 relative w-full">
                          <div className="h-[30px] relative rounded-[20px] shrink-0">
                            <button 
                              onClick={navigateToAbout}
                              className="box-border content-stretch flex flex-row gap-2 h-[30px] items-center justify-center p-0 relative hover:scale-105 transition-transform"
                            >
                              <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ff76ba] text-[18px] lg:text-[20px] text-center text-nowrap">
                                <p className="block leading-[1.4] whitespace-pre">Conócenos</p>
                              </div>
                              <div className="relative shrink-0 size-5">
                                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                  <path d={svgPaths.p223c5f00} fill="#FF76BA" />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:basis-0 lg:grow relative shrink-0 order-1 lg:order-2">
                <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative w-full">
                  <div className="relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 p-0 relative w-full">
                      <div className="w-full sm:min-w-[200px] lg:min-w-[260px] relative shrink-0">
                        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative">
                          <div
                            className="bg-center bg-cover bg-no-repeat h-[150px] lg:h-[206px] rounded-[400px] shrink-0 w-[150px] lg:w-[209px]"
                            style={{ backgroundImage: `url('${imgImageLummiAvatars}')` }}
                          />
                          <div className="relative shrink-0 w-full">
                            <div className="box-border content-stretch flex flex-col items-center justify-start leading-[0] not-italic p-0 relative text-center text-nowrap w-full">
                              <div className="font-['Poppins:SemiBold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[#444444] text-[20px] lg:text-[24px]">
                                <p className="block leading-[1.4] overflow-inherit text-nowrap whitespace-pre">Karla H. Valdez</p>
                              </div>
                              <div className="font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#666666] text-[16px] lg:text-[20px]">
                                <p className="block leading-[1.5] text-nowrap whitespace-pre">CEO &amp; Fundadora</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full sm:min-w-[200px] lg:min-w-[260px] relative shrink-0">
                        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative">
                          <div
                            className="bg-center bg-cover bg-no-repeat h-[150px] lg:h-[206px] rounded-[400px] shrink-0 w-[150px] lg:w-[209px]"
                            style={{ backgroundImage: `url('${imgImageLummiAvatars1}')` }}
                          />
                          <div className="relative shrink-0 w-full">
                            <div className="box-border content-stretch flex flex-col items-center justify-start leading-[0] not-italic p-0 relative text-center text-nowrap w-full">
                              <div className="font-['Poppins:SemiBold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[#444444] text-[20px] lg:text-[24px]">
                                <p className="block leading-[1.4] overflow-inherit text-nowrap whitespace-pre">
                                  Ana Paulina Sosa
                                </p>
                              </div>
                              <div className="font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#666666] text-[16px] lg:text-[20px]">
                                <p className="block leading-[1.5] text-nowrap whitespace-pre">CEO &amp; Fundadora</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div
          className="bg-cover bg-center relative shrink-0 w-full"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgProperty1ImageBackgroundLummi}')`,
          }}
        >
          <div className="flex flex-row items-end justify-center relative size-full">
            <div className="box-border content-end flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-end justify-center px-4 sm:px-8 lg:px-[90px] py-16 lg:py-[100px] relative w-full">
              <div className="w-full lg:basis-0 lg:grow lg:min-w-[400px] relative shrink-0">
                <div className="box-border content-stretch flex flex-col gap-8 lg:gap-12 items-center lg:items-start justify-center p-0 relative w-full">
                  <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#f7e75d] text-[28px] lg:text-[36px] text-center lg:text-left w-full">
                    <p className="block leading-[1.2]">Únete a la comunidad</p>
                  </div>
                  <div className="relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
                      <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] lg:text-[20px] text-center lg:text-left text-stone-50 w-full">
                        <p className="block leading-[1.4]">
                          Interactúa con otros aficionados, comparte tus experiencias en las
                          tribunas, y únete a conversaciones emocionantes sobre el deporte que
                          amamos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto lg:min-w-[400px] relative shrink-0">
                <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
                  <div className="relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col sm:flex-row gap-4 items-start justify-start p-0 relative w-full">
                      <div className="w-full sm:basis-0 sm:grow relative rounded-lg shrink-0">
                        <Input
                          type="email"
                          placeholder="Escribe tu correo electrónico"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-white text-[#aaaaaa] border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full"
                        />
                      </div>
                      <Button
                        onClick={handleRegister}
                        className="bg-white text-[#666666] hover:bg-gray-50 border border-[#eeeeee] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-full sm:w-auto whitespace-nowrap"
                      >
                        Regístrame
                      </Button>
                    </div>
                  </div>
                  <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[11px] lg:text-[12px] text-left w-full">
                    <p className="leading-[1.5]">
                      <span>By clicking Sign Up you're confirming that you agree with our </span>
                      <span className="underline">Terms and Conditions</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#262623] relative shrink-0 w-full">
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center px-4 sm:px-8 lg:px-0 py-12 relative w-full">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center relative size-full">
                  <div className="box-border content-center flex flex-col lg:flex-row gap-8 lg:gap-[140px] items-center justify-center lg:justify-between px-0 lg:px-[90px] py-0 relative w-full">
                    <div className="relative shrink-0 order-2 lg:order-1">
                      <div className="box-border content-stretch flex flex-col gap-8 items-center justify-center p-0 relative">
                        <div
                          className="bg-center bg-cover bg-no-repeat h-[100px] lg:h-[136px] opacity-[0.51] shrink-0 w-[180px] lg:w-60"
                          style={{ backgroundImage: `url('${imgRecurso63X1}')` }}
                        />
                        <div className="flex items-center gap-4 lg:gap-6">
                          <button className="hover:scale-110 transition-transform">
                            <svg className="size-5 lg:size-6" fill="none" viewBox="0 0 24 24">
                              <path d={svgPaths.p1f3eb480} fill="white" fillOpacity="0.59" />
                            </svg>
                          </button>
                          <button className="hover:scale-110 transition-transform">
                            <svg className="size-5 lg:size-6" fill="none" viewBox="0 0 24 24">
                              <path d={svgPaths.p10df5080} fill="white" fillOpacity="0.59" />
                            </svg>
                          </button>
                          <button className="hover:scale-110 transition-transform">
                            <svg className="size-5 lg:size-6" fill="none" viewBox="0 0 24 24">
                              <path d={svgPaths.p9c56780} fill="white" fillOpacity="0.59" />
                            </svg>
                          </button>
                          <button className="hover:scale-110 transition-transform">
                            <svg className="size-5 lg:size-6" fill="none" viewBox="0 0 24 24">
                              <path d={svgPaths.p368c4080} fill="white" fillOpacity="0.59" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:basis-0 lg:grow lg:max-w-[650px] relative shrink-0 order-1 lg:order-2">
                      <div className="box-border content-stretch flex flex-col sm:flex-row gap-6 lg:gap-4 items-start justify-center p-0 relative w-full">
                        <div className="w-full sm:basis-0 sm:grow relative shrink-0">
                          <div className="box-border content-stretch flex flex-col gap-4 items-center sm:items-start justify-start leading-[0] not-italic p-0 relative text-center sm:text-left w-full">
                            <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center relative shrink-0 text-[#f7e75d] text-[16px] lg:text-[18px]">
                              <p className="block leading-[1.4] text-nowrap whitespace-pre">SomosLocales</p>
                            </div>
                            <button 
                              onClick={navigateToAbout}
                              className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center relative shrink-0 text-[12px] lg:text-[14px] text-stone-50 hover:text-[#f7e75d] transition-colors"
                            >
                              <p className="block leading-[1.5] text-nowrap whitespace-pre">Acerca de Nosotros</p>
                            </button>
                            <button className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center relative shrink-0 text-[12px] lg:text-[14px] text-stone-50 hover:text-[#f7e75d] transition-colors">
                              <p className="block leading-[1.5] text-nowrap whitespace-pre">Oportunidades</p>
                            </button>
                            <button className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center relative shrink-0 text-[12px] lg:text-[14px] text-stone-50 hover:text-[#f7e75d] transition-colors">
                              <p className="block leading-[1.5] text-nowrap whitespace-pre">Noticias</p>
                            </button>
                          </div>
                        </div>

                        <div className="w-full sm:basis-0 sm:grow relative shrink-0">
                          <div className="box-border content-stretch flex flex-col gap-4 items-center sm:items-start justify-start leading-[0] not-italic p-0 relative text-center sm:text-left w-full">
                            <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center relative shrink-0 text-[#f7e75d] text-[16px] lg:text-[18px]">
                              <p className="block leading-[1.4] text-nowrap whitespace-pre">Contenido</p>
                            </div>
                            <button className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center relative shrink-0 text-[12px] lg:text-[14px] text-stone-50 hover:text-[#f7e75d] transition-colors">
                              <p className="block leading-[1.5] text-nowrap whitespace-pre">Quiniela</p>
                            </button>
                            <button className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center relative shrink-0 text-[12px] lg:text-[14px] text-stone-50 hover:text-[#f7e75d] transition-colors">
                              <p className="block leading-[1.5] text-nowrap whitespace-pre">Partidos</p>
                            </button>
                          </div>
                        </div>

                        <div className="w-full sm:basis-0 sm:grow relative shrink-0">
                          <div className="box-border content-stretch flex flex-col gap-4 items-center sm:items-start justify-start leading-[0] not-italic p-0 relative text-center sm:text-left w-full">
                            <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center relative shrink-0 text-[#f7e75d] text-[16px] lg:text-[18px]">
                              <p className="block leading-[1.4] text-nowrap whitespace-pre">Redes</p>
                            </div>
                            <button className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center relative shrink-0 text-[12px] lg:text-[14px] text-stone-50 hover:text-[#f7e75d] transition-colors">
                              <p className="block leading-[1.5] text-nowrap whitespace-pre">@SomosLocalesMX</p>
                            </button>
                            <button className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center relative shrink-0 text-[12px] lg:text-[14px] text-stone-50 hover:text-[#f7e75d] transition-colors">
                              <p className="block leading-[1.5] text-nowrap whitespace-pre">@SomosLocalesMX</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] lg:text-[12px] text-center text-stone-400">
                <p className="block leading-[1.6] whitespace-pre">All rights reserved 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Modal */}
        <RegistrationModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          onSubmit={handleSubmitRegistration}
        />
      </div>
    </div>
  )
}