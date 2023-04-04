import './index.css'
import DiceButton from './assets/images/icon-dice.svg';

export default function AdviceGenerator() {


    return (
        <div className='flex justify-center items-center h-100 w-full h-full'>
            <div className="card bg-[#323a49] w-6/12 h-60 top-2/4">
                <h1 className="text-3xl font-boldtext-center text-[#52ffa8]">Advice</h1>
                <p className='text-[#cee3e9]' id='quote'>Example</p>
                <button className='m-auto flex w-14 h-14 rounded-full bg-[#52ffa8] relative top-28 center hover:drop-shadow-[0_0_40px_#52FFA8]' id=''>
                    <img src={DiceButton} alt="" className='m-auto'/>
                </button>                
            </div>
        </div>
    )
}