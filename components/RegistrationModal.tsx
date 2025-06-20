import { useState } from "react"
import svgPaths from "../imports/svg-8mcv7kewxr"
import imgModalRegistrate from "figma:asset/12937cd396dc128cd0c4888ab753cab72d1139b7.png"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  fullName: string
  setFullName: (value: string) => void
  email: string
  setEmail: (value: string) => void
  currentStep: number
  setCurrentStep: (step: number) => void
  onSubmit: () => void
}

function HeadingContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading Container">
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center leading-[0] not-italic p-0 relative text-center w-full">
        <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#222222] text-[24px] w-full">
          <p className="block leading-[1.4]">Regístrate</p>
        </div>
        <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#666666] text-[16px] w-full">
          <p className="block leading-[1.5]">¡Sé parte de SomosLocales!</p>
        </div>
      </div>
    </div>
  )
}

function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div
      className="absolute bg-[#ff76ba] bottom-[-25%] left-0 top-[-25%] transition-all duration-300"
      data-name="Progress bar"
      style={{ width: `${(currentStep / 3) * 100}%` }}
    />
  )
}

function ProgressContainer({ currentStep }: { currentStep: number }) {
  return (
    <div
      className="bg-[#eeeeee] h-1 overflow-clip relative shrink-0 w-full"
      data-name="Progress container"
    >
      <ProgressBar currentStep={currentStep} />
    </div>
  )
}

function Progress({ currentStep }: { currentStep: number }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Progress">
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-0 relative w-full">
        <ProgressContainer currentStep={currentStep} />
        <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ff76ba] text-[16px] text-left w-full">
          <p className="block leading-[1.5]">Paso {currentStep}/3</p>
        </div>
      </div>
    </div>
  )
}

function Content({ placeholder, value, onChange }: { placeholder: string, value: string, onChange: (value: string) => void }) {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Content"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <input
          className="basis-0 font-['Poppins:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic bg-transparent border-none outline-none relative shrink-0 text-[#444444] text-[14px] text-left placeholder:text-[#aaaaaa]"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}

function Input({ placeholder, value, onChange }: { placeholder: string, value: string, onChange: (value: string) => void }) {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3.5 py-2.5 relative w-full">
          <Content placeholder={placeholder} value={value} onChange={onChange} />
        </div>
      </div>
      <div className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  )
}

function InputWithLabel({ label, placeholder, value, onChange }: { label: string, placeholder: string, value: string, onChange: (value: string) => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Input with label">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#444444] text-[14px] text-left text-nowrap">
          <p className="block leading-[1.5] whitespace-pre">{label}</p>
        </div>
        <Input placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </div>
  )
}

function InputFieldBase({ label, placeholder, value, onChange }: { label: string, placeholder: string, value: string, onChange: (value: string) => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="_Input field base">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        <InputWithLabel label={label} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </div>
  )
}

function InputField({ label, placeholder, value, onChange }: { label: string, placeholder: string, value: string, onChange: (value: string) => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Input field">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <InputFieldBase label={label} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </div>
  )
}

function Form({ fullName, setFullName, email, setEmail, currentStep }: { fullName: string, setFullName: (value: string) => void, email: string, setEmail: (value: string) => void, currentStep: number }) {
  if (currentStep === 1) {
    return (
      <div
        className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        data-name="Form"
      >
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative size-full">
          <InputField 
            label="Nombre completo" 
            placeholder="Escribe tu nombre completo" 
            value={fullName} 
            onChange={setFullName} 
          />
          <div className="relative rounded-lg shrink-0 w-full" data-name="Input">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative w-full">
              <InputField 
                label="Correo electrónico" 
                placeholder="Escribe tu correo electrónico" 
                value={email} 
                onChange={setEmail} 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 2) {
    return (
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="text-center py-8">
          <h3 className="text-lg mb-4 font-['Poppins:SemiBold',_sans-serif] text-[#222222]">¡Casi terminamos!</h3>
          <p className="text-[#666666] font-['Poppins:Regular',_sans-serif]">Verifica tu información y continúa.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="text-center py-8">
        <h3 className="text-lg mb-4 font-['Poppins:SemiBold',_sans-serif] text-[#222222]">¡Bienvenido a SomosLocales!</h3>
        <p className="text-[#666666] font-['Poppins:Regular',_sans-serif]">Tu registro está completo.</p>
      </div>
    </div>
  )
}

function TextPadding({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative shrink-0" data-name="Text padding">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-0.5 py-0 relative">
          <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#262623] text-[16px] text-left text-nowrap">
            <p className="block leading-[1.5] whitespace-pre">{children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ButtonsButton({ onClick, children }: { onClick: () => void, children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#f7e75d] relative rounded-lg shrink-0 w-full hover:bg-[#f7e75d]/90 transition-colors"
      data-name="Buttons/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center px-[18px] py-3 relative w-full">
          <TextPadding>{children}</TextPadding>
        </div>
      </div>
      <div className="absolute border border-[#f7e75d] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </button>
  )
}

function Line() {
  return (
    <div
      className="basis-0 bg-stone-200 grow h-px min-h-px min-w-px shrink-0"
      data-name="Line"
    />
  )
}

function Separator() {
  return (
    <div className="relative shrink-0 w-full" data-name="Separator">
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-center p-0 relative w-full">
        <Line />
        <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-stone-400">
          <p className="block leading-[1.6] whitespace-pre">o</p>
        </div>
        <Line />
      </div>
    </div>
  )
}

function SocialIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Social icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_1_11548)" id="Social icon">
          <path
            d={svgPaths.p7776880}
            fill="#4285F4"
            id="Vector"
          />
          <path
            d={svgPaths.p2d84f580}
            fill="#34A853"
            id="Vector_2"
          />
          <path
            d={svgPaths.p380d1d80}
            fill="#FBBC04"
            id="Vector_3"
          />
          <path
            d={svgPaths.p1ebd4080}
            fill="#EA4335"
            id="Vector_4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_11548">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

function SocialButton() {
  return (
    <button
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full hover:bg-gray-50 transition-colors"
      data-name="Social button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center px-4 py-3 relative w-full">
          <SocialIcon />
          <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#222222] text-[14px] text-left text-nowrap">
            <p className="block leading-[1.5] whitespace-pre">
              Continuar con Google
            </p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </button>
  )
}

function ContainerButtoms({ currentStep, onNext, onFinish }: { currentStep: number, onNext: () => void, onFinish: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container buttoms">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        {currentStep < 3 ? (
          <ButtonsButton onClick={onNext}>Siguiente</ButtonsButton>
        ) : (
          <ButtonsButton onClick={onFinish}>Finalizar</ButtonsButton>
        )}
        <Separator />
        <SocialButton />
      </div>
    </div>
  )
}

export default function RegistrationModal({ 
  isOpen, 
  onClose, 
  fullName, 
  setFullName, 
  email, 
  setEmail, 
  currentStep, 
  setCurrentStep, 
  onSubmit 
}: RegistrationModalProps) {
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleFinish = () => {
    onSubmit()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="bg-center bg-cover bg-no-repeat relative rounded-[32px] shadow-[0px_20px_24px_-4px_rgba(0,0,0,0.08),0px_8px_8px_-4px_rgba(0,0,0,0.03)] h-[559px] max-w-[480px] min-w-[400px] w-[480px]"
        data-name="Modal Regístrate"
        style={{ backgroundImage: `url('${imgModalRegistrate}')` }}
      >
        <div className="flex flex-col items-center justify-center max-w-inherit min-w-inherit relative size-full">
          <div className="box-border content-stretch flex flex-col gap-6 h-[559px] items-center justify-center max-w-inherit min-w-inherit p-[32px] relative w-[480px]">
            <HeadingContainer />
            <Progress currentStep={currentStep} />
            <Form 
              fullName={fullName} 
              setFullName={setFullName} 
              email={email} 
              setEmail={setEmail} 
              currentStep={currentStep} 
            />
            <ContainerButtoms 
              currentStep={currentStep} 
              onNext={handleNext} 
              onFinish={handleFinish} 
            />
            
            <button
              onClick={onClose}
              className="absolute -top-2 -right-2 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors z-10"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}