import { useTypedAnimator, TypePhase } from "@/Hooks/useTypedAnimator"
import cn from 'classnames';

type Props = {
    wordArray: string[]
}
export const TypedAnimator = ({ wordArray }: Props) => {

    const { typedWord, phase, resume, selectedWord } = useTypedAnimator(wordArray);

    return (
        <div onClick={resume} className="bg-app-black-600 p-4 h-[56] rounded-lg w-7/12 mx-auto">
            <p className='text-app-white-700 text-left h-[56] end-cursor blinking text-xs font-light'
                aria-label={selectedWord}
            >
                {typedWord}
            </p>
        </div>
    )
}