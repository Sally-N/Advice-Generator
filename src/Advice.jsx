import './index.css'
import DiceButton from './assets/images/icon-dice.svg';
import DividerDesktop from './assets/images/pattern-divider-desktop.svg'
import DividerMobile from './assets/images/pattern-divider-mobile.svg'
import "./api.jsx"

export default function AdviceGenerator() {


    return (
        <div className='flex justify-center items-center h-100 w-full h-full'>
            <div className="card bg-[#323a49] w-6/12 h-60 top-2/4 flex-col items-center justify-center ">
                <h1 className="text-3xl font-boldtext-center text-[#52ffa8]">Advice # <span id="number"></span></h1>
                <p className='text-[#cee3e9]' id='quote'></p>
                <div className='m-auto pt-14'>
                    <img src={DividerDesktop} alt="" className='m-auto' />
                    <img src= {DividerMobile} alt="" className='invisible'/>

                </div>
                <button className='m-auto flex w-14 h-14 rounded-full bg-[#52ffa8] relative top-12 center hover:drop-shadow-[0_0_40px_#52FFA8] cursor-pointer'>
                    <img src={DiceButton} alt=""  id="abutton" className='m-auto' role='button'/>
                </button>                
            </div>
        </div>
    )
}