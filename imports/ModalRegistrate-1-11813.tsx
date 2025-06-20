import svgPaths from "./svg-8mcv7kewxr";
import imgModalRegistrate from "figma:asset/12937cd396dc128cd0c4888ab753cab72d1139b7.png";

function HeadingContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading Container">
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center leading-[0] not-italic p-0 relative text-center w-full">
        <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[#222222] text-[24px] w-full">
          <p className="block leading-[1.4]">{`Regístrate `}</p>
        </div>
        <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[#666666] text-[16px] w-full">
          <p className="block leading-[1.5]">{`¡Sé parte de SomosLocales! `}</p>
        </div>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div
      className="absolute bg-[#ff76ba] bottom-[-25%] left-0 top-[-25%] w-[134px]"
      data-name="Progress bar"
    />
  );
}

function ProgressContainer() {
  return (
    <div
      className="bg-[#eeeeee] h-1 overflow-clip relative shrink-0 w-full"
      data-name="Progress container"
    >
      <ProgressBar />
    </div>
  );
}

function Progress() {
  return (
    <div className="relative shrink-0 w-full" data-name="Progress">
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-0 relative w-full">
        <ProgressContainer />
        <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ff76ba] text-[16px] text-left w-full">
          <p className="block leading-[1.5]">Paso 1/3</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Content"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div className="basis-0 font-['Poppins:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#aaaaaa] text-[14px] text-left">
          <p className="block leading-[1.5]">Escribe tu nombre completo</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3.5 py-2.5 relative w-full">
          <Content />
        </div>
      </div>
      <div className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input with label">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#444444] text-[14px] text-left text-nowrap">
          <p className="block leading-[1.5] whitespace-pre">Nombre completo</p>
        </div>
        <Input />
      </div>
    </div>
  );
}

function InputFieldBase() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Input field base">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        <InputWithLabel />
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input field">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <InputFieldBase />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Content"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div className="basis-0 font-['Poppins:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#aaaaaa] text-[14px] text-left">
          <p className="block leading-[1.5]">Escribe tu correo electrónico</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3.5 py-2.5 relative w-full">
          <Content1 />
        </div>
      </div>
      <div className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input with label">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#444444] text-[14px] text-left text-nowrap">
          <p className="block leading-[1.5] whitespace-pre">
            Correo electrónico
          </p>
        </div>
        <Input1 />
      </div>
    </div>
  );
}

function InputFieldBase1() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Input field base">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        <InputWithLabel1 />
      </div>
    </div>
  );
}

function InputField1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input field">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <InputFieldBase1 />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Input">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative w-full">
        <InputField1 />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Form"
    >
      <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative size-full">
        <InputField />
        <Input2 />
      </div>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="relative shrink-0" data-name="Text padding">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-0.5 py-0 relative">
          <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#262623] text-[16px] text-left text-nowrap">
            <p className="block leading-[1.5] whitespace-pre">Siguiente</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonsButton() {
  return (
    <div
      className="bg-[#f7e75d] relative rounded-lg shrink-0 w-full"
      data-name="Buttons/Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center px-[18px] py-3 relative w-full">
          <TextPadding />
        </div>
      </div>
      <div className="absolute border border-[#f7e75d] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Line() {
  return (
    <div
      className="basis-0 bg-stone-200 grow h-px min-h-px min-w-px shrink-0"
      data-name="Line"
    />
  );
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
  );
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
            fill="var(--fill-0, #4285F4)"
            id="Vector"
          />
          <path
            d={svgPaths.p2d84f580}
            fill="var(--fill-0, #34A853)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p380d1d80}
            fill="var(--fill-0, #FBBC04)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p1ebd4080}
            fill="var(--fill-0, #EA4335)"
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
  );
}

function SocialButton() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
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
    </div>
  );
}

function ContainerButtoms() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container buttoms">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        <ButtonsButton />
        <Separator />
        <SocialButton />
      </div>
    </div>
  );
}

export default function ModalRegistrate() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative rounded-[32px] shadow-[0px_20px_24px_-4px_rgba(0,0,0,0.08),0px_8px_8px_-4px_rgba(0,0,0,0.03)] size-full"
      data-name="Modal Regístrate"
      style={{ backgroundImage: `url('${imgModalRegistrate}')` }}
    >
      <div className="flex flex-col items-center justify-center max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center max-w-inherit min-w-inherit p-[32px] relative size-full">
          <HeadingContainer />
          <Progress />
          <Form />
          <ContainerButtoms />
        </div>
      </div>
    </div>
  );
}