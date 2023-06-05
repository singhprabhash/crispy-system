import { useTypedAnimator, TypePhase } from "@/Hooks/useTypedAnimator"

type Props = {
    wordArray: string[],
    hideRest?: Boolean
}
export const TypedAnimator = ({ wordArray, hideRest }: Props) => {

    const { typedWord, phase, resume, selectedWord } = useTypedAnimator(wordArray);

    return (
        <div onClick={resume} className="h-auto rounded-lg w-full lg:w-[700px] md:mx-auto animator_bar">
            <h1 className={`text-app-primary-black ${hideRest ? 'text-center' : 'text-left'}`}
                aria-label={selectedWord}
            >
                {!hideRest && <div className="text-4xl sm:text-6xl">We will help you in</div> }
                
                <div className="my-2">
                    <b className="end-cursor blinking text-4xl sm:text-6xl">{typedWord}</b>
                </div>
                 
                {/* <div className="text-4xl sm:text-6xl">Provider</div> */}
            </h1>
            {!hideRest && <p className="mt-10 text-[#575757] leading-8"><b>Maximize Wealth, Minimize Taxes</b>, Tailored strategies for financial success. Take control of your future with personalized tax planning and proactive financial management. </p> }
        </div>
    )
}