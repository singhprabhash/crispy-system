import { useTypedAnimator, TypePhase } from "@/Hooks/useTypedAnimator"

type Props = {
    wordArray: string[]
}
export const TypedAnimator = ({ wordArray }: Props) => {

    const { typedWord, phase, resume, selectedWord } = useTypedAnimator(wordArray);

    return (
        <div onClick={resume} className="h-auto rounded-lg w-full lg:w-[600px] md:mx-auto animator_bar">
            <h1 className='text-app-primary-black text-left'
                aria-label={selectedWord}
            >
                <div className="text-4xl sm:text-6xl">The Ultimate</div> 
                
                <div className="my-2">
                    <b className="end-cursor blinking text-4xl sm:text-6xl">{typedWord}</b>
                </div>
                 
                <div className="text-4xl sm:text-6xl">Provider</div>
            </h1>
            <p className="mt-10 text-[#575757] leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
    )
}