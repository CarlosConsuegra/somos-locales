import { useState } from "react"
import { Menu, X } from "lucide-react"
import svgPaths from "../imports/svg-1f14o9h2d6"
import svgPathsNav from "../imports/svg-cw4t9csb44"
import imgImageLummiAvatars from "figma:asset/7a5f115577ccb3e95788a467b47881be87098935.png"
import imgImageLummiAvatars1 from "figma:asset/a5db1000c748ecb80bbff0480b26671905cf73a4.png"
import imgImageLummiAvatars2 from "figma:asset/eaf5a45de77337da7ef191afcbf1a9479d30fb5d.png"
import imgImageLummiAvatars3 from "figma:asset/b0d7d75b04b2132ec39031a5f7025f37dbd46d81.png"
import imgAvatarImage from "figma:asset/20be8209945571c98a3b7006fb4294e3438ff6b6.png"
import imgHazUnaFotoDeUnPublicoDeEstadioDondeDestaqueElAmarillo from "figma:asset/601bf49a3f8560cc336138ef5c4239a4decb6a0d.png"
import imgRecurso63X1 from "figma:asset/55516bba33c938a617820d582adc4e2b460cd585.png"
import { Button } from "./ui/button"

interface AboutUsResponsiveProps {
  onNavigateHome: () => void
  onRegister: () => void
}

export default function AboutUsResponsive({ onNavigateHome, onRegister }: AboutUsResponsiveProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const decalogoItems = [
    {
      number: "1",
      title: "Apoyar y alentar",
      description: "incondicionalmente a mi equipo y al futbol femenil (En las buenas y en las malas, no sólo en las finales)."
    },
    {
      number: "2", 
      title: "Respetar",
      description: "a las jugadoras, cuerpo técnico y al equipo."
    },
    {
      number: "3",
      title: "Respetar", 
      description: "siempre a la afición rival y a la propia."
    },
    {
      number: "4",
      title: "Respetar",
      description: "a los árbitros y al personal del estadio (policías, vendedores, personal de la entrada, etc.)"
    },
    {
      number: "5",
      title: "Cuidar instalaciones",
      description: "Respetar y cuidar las instalaciones del estadio."
    },
    {
      number: "6",
      title: "Promover la sana convivencia",
      description: "Generar un ambiente de respeto y diversión para toda la familia."
    },
    {
      number: "7",
      title: "Ser un ejemplo",
      description: "Para los niños y las futuras generaciones de aficionados."
    },
    {
      number: "8",
      title: "Fomentar la participación",
      description: "Invitar a amigos y familia a disfrutar del fútbol femenil."
    },
    {
      number: "9",
      title: "Valorar el esfuerzo",
      description: "Reconocer el trabajo y dedicación de las jugadoras."
    },
    {
      number: "10",
      title: "Vivir la pasión",
      description: "Disfrutar cada momento y celebrar el amor por el fútbol."
    }
  ]

  const teamMembers = [
    {
      name: "Karla H. Valdez",
      role: "CEO & Fundadora",
      image: imgImageLummiAvatars
    },
    {
      name: "Ana Paulina Sosa", 
      role: "CEO & Fundadora",
      image: imgImageLummiAvatars1
    },
    {
      name: "María González",
      role: "Directora de Marketing",
      image: imgImageLummiAvatars2
    },
    {
      name: "Luis Rodríguez",
      role: "Director Técnico", 
      image: imgImageLummiAvatars3
    }
  ]

  const testimonials = [
    {
      text: "SomosLocales me ha conectado con una comunidad increíble de aficionados al fútbol femenil. ¡Es una experiencia única!",
      author: "María Fernández",
      role: "Aficionada desde 2020",
      image: imgAvatarImage
    },
    {
      text: "La plataforma facilita muchísimo encontrar información sobre partidos y estadios. Mi familia y yo no nos perdemos ningún juego.",
      author: "Carlos Mendoza", 
      role: "Padre de familia",
      image: imgImageLummiAvatars
    },
    {
      text: "Las quinielas son súper divertidas y me han ayudado a conocer mejor el deporte. ¡Recomiendo SomosLocales al 100%!",
      author: "Ana Torres",
      role: "Estudiante universitaria", 
      image: imgImageLummiAvatars1
    }
  ]

  return (
    <div className="bg-[#f7e75d] relative size-full" data-name="About us">
      <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative size-full">
        {/* Header - Sticky */}
        <div className="bg-[#262623] sticky top-0 w-full z-50">
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row items-center justify-between px-4 sm:px-8 lg:px-[90px] py-4 relative w-full">
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
                          <path d={svgPathsNav.p30eef200} fill="#F7E75D" />
                        </g>
                        <g filter="url(#filter1_d_1_11573)" id="Vector_2">
                          <path d={svgPathsNav.p1321d80} fill="#F7E75D" />
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
                    onClick={onNavigateHome}
                    className="font-['Poppins:SemiBold',_sans-serif] text-stone-50 hover:text-[#f7e75d] transition-colors"
                  >
                    Inicio
                  </button>
                  <button className="font-['Poppins:SemiBold',_sans-serif] text-[#f7e75d]">
                    Nosotros
                  </button>
                </div>
                <Button 
                  onClick={onRegister}
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
                      onClick={() => {
                        onNavigateHome()
                        setMobileMenuOpen(false)
                      }}
                      className="font-['Poppins:SemiBold',_sans-serif] text-stone-50 hover:text-[#f7e75d] transition-colors text-left"
                    >
                      Inicio
                    </button>
                    <button className="font-['Poppins:SemiBold',_sans-serif] text-[#f7e75d] text-left">
                      Nosotros
                    </button>
                    <Button 
                      onClick={() => {
                        onRegister()
                        setMobileMenuOpen(false)
                      }}
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

        {/* Pasión por el Juego Section */}
        <div className="bg-[#262623] relative shrink-0 w-full">
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-8 lg:gap-[120px] items-center justify-center pb-8 lg:pb-0 pt-12 lg:pt-[120px] px-4 sm:px-8 lg:px-0 relative w-full">
              {/* Section Title */}
              <div className="relative shrink-0 w-full">
                <div className="relative size-full">
                  <div className="box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[90px] items-start justify-start px-0 lg:px-[90px] py-0 relative w-full">
                    {/* Content */}
                    <div className="w-full lg:basis-0 lg:grow relative shrink-0">
                      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative w-full">
                        <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#eeeeee] text-[28px] lg:text-[36px] text-center lg:text-left w-full">
                          <p className="block leading-[1.2]">Pasión por el Juego</p>
                        </div>
                        <div className="relative shrink-0 w-full">
                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
                            <div
                              className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#ffffff] text-[16px] lg:text-[18px] text-center lg:text-left w-full"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              <p className="block leading-[1.6] lg:leading-[34px]">
                                Nuestra misión va más allá de simplemente ser espectadores. Nos
                                esforzamos por impulsar y aumentar la asistencia y el apoyo al
                                fútbol femenil en México. Creemos en la importancia de involucrar a
                                las familias y a los niños en este deporte, creando una comunidad de
                                aficionados apasionados y comprometidos.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Logo */}
                    <div className="h-[150px] lg:h-[205px] relative shrink-0 w-[240px] lg:w-[330px] mx-auto lg:mx-0">
                      <div
                        className="bg-center bg-contain bg-no-repeat h-full w-full opacity-90"
                        style={{ backgroundImage: `url('${imgRecurso63X1}')` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-0 relative shrink-0 w-full max-w-[889px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 889 1"
                  >
                    <line
                      id="Line 1"
                      stroke="#FAFAF9"
                      x2="889"
                      y1="0.5"
                      y2="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decálogo Section */}
        <div className="bg-[#262623] relative shrink-0 w-full">
          <div className="flex flex-col items-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col gap-12 lg:gap-20 items-center justify-start px-4 sm:px-8 lg:px-[90px] py-16 lg:py-[100px] relative w-full">
              {/* Section Title */}
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-center justify-start leading-[0] p-0 relative text-center lg:text-left w-full">
                  <div className="font-['Poppins:Bold',_sans-serif] not-italic relative shrink-0 text-[#eeeeee] text-[28px] lg:text-[36px]">
                    <p className="block leading-[1.2] whitespace-pre">Decálogo</p>
                  </div>
                  <div
                    className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[#cccccc] text-[24px] lg:text-[32px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="block leading-[1.4]">De la mejor afición</p>
                  </div>
                </div>
              </div>

              {/* List Container */}
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 items-start justify-start p-0 relative w-full">
                  {decalogoItems.map((item, index) => (
                    <div key={index} className="relative shrink-0">
                      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start leading-[0] not-italic p-0 relative size-full">
                        <div className="font-['Poppins:Bold',_sans-serif] relative shrink-0 text-[#f7e75d] text-[24px] lg:text-[32px] text-center">
                          <p className="block leading-[1.4] whitespace-pre">{item.number}</p>
                        </div>
                        <div className="flex-1 relative shrink-0">
                          <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic p-0 relative text-left w-full">
                            <div className="font-['Poppins:Bold',_sans-serif] relative shrink-0 text-[#ffffff] text-[16px] lg:text-[18px] w-full">
                              <p className="block leading-[1.5]">{item.title}</p>
                            </div>
                            <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#cccccc] text-[12px] lg:text-[14px] w-full">
                              <p className="block leading-[1.5]">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conócenos más Section */}
        <div className="bg-[#f7e75d] relative shrink-0 w-full">
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-12 lg:gap-20 items-center justify-center px-4 sm:px-8 lg:px-[90px] py-16 lg:py-[100px] relative w-full">
              {/* Section Title */}
              <div className="relative shrink-0 w-full">
                <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#262623] text-[28px] lg:text-[36px] text-center w-full">
                  <p className="block leading-[1.2]">Conócenos más</p>
                </div>
              </div>

              {/* Illustration Container */}
              <div className="relative shrink-0 w-full max-w-4xl">
                <div className="box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center p-0 relative w-full">
                  {/* Illustration */}
                  <div className="w-full lg:basis-0 lg:grow relative shrink-0">
                    <div className="bg-[#262623] rounded-2xl p-8 lg:p-12 relative">
                      <div className="flex flex-col items-center gap-6">
                        {/* Character illustration placeholder */}
                        <div className="bg-[#f7e75d] rounded-full p-8 w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center">
                          <div className="text-[#262623] text-4xl lg:text-5xl">⚽</div>
                        </div>
                        
                        {/* Doodle elements */}
                        <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
                          <div className="bg-[#f7e75d] rounded-lg p-2 text-center text-[#262623] text-sm">🏆</div>
                          <div className="bg-[#f7e75d] rounded-lg p-2 text-center text-[#262623] text-sm">👏</div>
                          <div className="bg-[#f7e75d] rounded-lg p-2 text-center text-[#262623] text-sm">🎉</div>
                          <div className="bg-[#f7e75d] rounded-lg p-2 text-center text-[#262623] text-sm">📱</div>
                          <div className="bg-[#f7e75d] rounded-lg p-2 text-center text-[#262623] text-sm">👥</div>
                          <div className="bg-[#f7e75d] rounded-lg p-2 text-center text-[#262623] text-sm">⭐</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:basis-0 lg:grow relative shrink-0">
                    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-center p-0 relative w-full">
                      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#262623] text-[24px] lg:text-[28px] text-center lg:text-left w-full">
                        <p className="block leading-[1.3]">Una comunidad unida por la pasión</p>
                      </div>
                      <div className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#666666] text-[16px] lg:text-[18px] text-center lg:text-left w-full">
                        <p className="block leading-[1.6]">
                          En SomosLocales creemos que el fútbol es más que un deporte: es una forma de vida que 
                          une familias, crea amistades y construye comunidades. Somos el puente entre los 
                          aficionados y el hermoso mundo del fútbol femenil mexicano.
                        </p>
                      </div>
                      <div className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#666666] text-[16px] lg:text-[18px] text-center lg:text-left w-full">
                        <p className="block leading-[1.6]">
                          Nuestra plataforma no solo conecta, sino que educa, emociona y empodera a cada 
                          persona que forma parte de esta gran familia futbolística.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestro equipo Section */}
        <div className="bg-[#f7e75d] relative shrink-0 w-full">
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-12 lg:gap-16 items-center justify-center px-4 sm:px-8 lg:px-[90px] py-16 lg:py-[100px] relative w-full">
              {/* Section Title */}
              <div className="relative shrink-0 w-full">
                <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#262623] text-[28px] lg:text-[36px] text-center w-full">
                  <p className="block leading-[1.2]">Nuestro equipo</p>
                </div>
              </div>

              {/* Team Grid */}
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-center p-0 relative w-full">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="relative shrink-0">
                      <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative">
                        <div
                          className="bg-center bg-cover bg-no-repeat h-[150px] lg:h-[180px] rounded-full shrink-0 w-[150px] lg:w-[180px] border-4 border-[#262623]"
                          style={{ backgroundImage: `url('${member.image}')` }}
                        />
                        <div className="relative shrink-0 w-full">
                          <div className="box-border content-stretch flex flex-col items-center justify-start leading-[0] not-italic p-0 relative text-center w-full">
                            <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#262623] text-[18px] lg:text-[20px]">
                              <p className="block leading-[1.4]">{member.name}</p>
                            </div>
                            <div className="font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[#666666] text-[14px] lg:text-[16px]">
                              <p className="block leading-[1.5]">{member.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestra familia - Testimonials Section */}
        <div
          className="bg-cover bg-center relative shrink-0 w-full"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url('${imgHazUnaFotoDeUnPublicoDeEstadioDondeDestaqueElAmarillo}')`,
          }}
        >
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-12 lg:gap-16 items-center justify-center px-4 sm:px-8 lg:px-[90px] py-16 lg:py-[120px] relative w-full">
              {/* Section Title */}
              <div className="relative shrink-0 w-full">
                <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#f7e75d] text-[28px] lg:text-[36px] text-center w-full">
                  <p className="block leading-[1.2]">Nuestra familia</p>
                </div>
              </div>

              {/* Testimonials Grid */}
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start justify-center p-0 relative w-full">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="relative shrink-0">
                      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-[rgba(255,255,255,0.2)]">
                        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative">
                          <div
                            className="bg-center bg-cover bg-no-repeat h-[60px] lg:h-[80px] rounded-full shrink-0 w-[60px] lg:w-[80px] border-2 border-[#f7e75d]"
                            style={{ backgroundImage: `url('${testimonial.image}')` }}
                          />
                          <div className="relative shrink-0 w-full">
                            <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative text-center w-full">
                              <div className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#ffffff] text-[14px] lg:text-[16px] w-full">
                                <p className="block leading-[1.6] italic">"{testimonial.text}"</p>
                              </div>
                              <div className="box-border content-stretch flex flex-col gap-1 items-center justify-start leading-[0] not-italic p-0 relative w-full">
                                <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#f7e75d] text-[16px] lg:text-[18px]">
                                  <p className="block leading-[1.4]">{testimonial.author}</p>
                                </div>
                                <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#cccccc] text-[12px] lg:text-[14px]">
                                  <p className="block leading-[1.5]">{testimonial.role}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
                            <div className="size-5 lg:size-6 bg-[rgba(255,255,255,0.59)] rounded"></div>
                          </button>
                          <button className="hover:scale-110 transition-transform">
                            <div className="size-5 lg:size-6 bg-[rgba(255,255,255,0.59)] rounded"></div>
                          </button>
                          <button className="hover:scale-110 transition-transform">
                            <div className="size-5 lg:size-6 bg-[rgba(255,255,255,0.59)] rounded"></div>
                          </button>
                          <button className="hover:scale-110 transition-transform">
                            <div className="size-5 lg:size-6 bg-[rgba(255,255,255,0.59)] rounded"></div>
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
                            <button className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center relative shrink-0 text-[12px] lg:text-[14px] text-stone-50 hover:text-[#f7e75d] transition-colors">
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
      </div>
    </div>
  )
}