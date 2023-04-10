import './index.css'
import DiceButton from './assets/images/icon-dice.svg';
import DividerDesktop from './assets/images/pattern-divider-desktop.svg'
import DividerMobile from './assets/images/pattern-divider-mobile.svg'
import "./api.jsx"

export default function AdviceGenerator() {
    return (
        <div className='flex justify-center items-start h-100 w-full h-screen pt-28'>
            {/* <div className="card bg-[#323a49] w-6/12 h-60 top-2/4 flex-col items-center justify-center max-[640px]:w-11/12 max-[640px]:h-56 max-[640px]:items-start"> */}

                <div className="card bg-[#323a49] w-11/12 h-68 flex-col items-start justify-center rounded-lg">
                    <div className='h-10 font-["Manrope"] pt-0'>
                        <h6 className="text-[10px] text-center text-[#52ffa8] font-thin tracking-[.25em]">ADVICE<span id="number"></span></h6>
                        <p className='text-[#cee3e9] p-0 flex-initial '> <q className='text-sm/[28px]' id="quote"></q></p>
                    </div>
                    <div className='m-auto pt-14 max-[640px]:pt-32'>
                        <img src={DividerDesktop} alt="" className='m-auto max-[640px]:invisible' />
                        <img src={DividerMobile} alt="" className='sm:invisible' />
                    </div>
                    <button className='m-auto flex w-14 h-14 rounded-full bg-[#52ffa8] top-12 center hover:drop-shadow-[0_0_40px_#52FFA8] cursor-pointer relative'>
                        <img src={DiceButton} alt="" id="abutton" className='m-auto' role='button' />
                    </button>
                </div>
            </div>
            )
}