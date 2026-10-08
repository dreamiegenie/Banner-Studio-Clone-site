import virusTotal from './assets/virus-total-48.png';

export function VirusTotalCard () {

    return(
        <>
            <div className='border border-[rgb(53,66,96)] bg-[rgba(59,78,115,0.36)] rounded-2xl mt-4 mx-3 hover:border-[#7097df] pb-6 hover:-translate-y-0.5 transition-all duration-300'>
                    
                        <div className='bg-[rgb(42,55,87)] rounded-t-2xl flex justify-between items-center p-3 px-6 border-b border-b-blue-200/20'>
                            <div className="flex justify-center items-center gap-2"> 
                                <img src={virusTotal} alt="Virus total icon"  width={30}/>
                                <span className='text-xs text-blue-200'>VIRUSTOTAL</span>
                            </div>
                            <span className='text-xs bg-[#1b2944] text-[#a6c7ff] px-2.5 p-1 shadow shadow-black/40 rounded-sm'>iOS</span>
                        </div>
                <div className=' mx-6'>
                    <div className='flex mt-6 '>
                        <span className='border border-[#6c8ac3] w-12.5 h-12.5 p-2 text-[#a6c7ff] px-3 pt-3   rounded-full'>IPA</span>
                        <div className='flex flex-col gap-3 mx-4'>
                            <p className='font-bold text-xl'>iOS file analysis</p>
                            <span className='text-[10px] text-blue-200/70'>FILE REPORT / SHA-256</span>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <span className='text-[#bdcfe9] border border-[#51688e] bg-[#243450] text-[12.5px] p-1.5 rounded-sm'>Live report available</span>
                        <p className="text-[#c0cbe0] text-[14px] mt-3">Open the supplied iPhone report to view the latest results for this file.</p>
                    </div>

                    <div className='mt-6 flex flex-col gap-6'>
                            <div className='border bg-[#141d30] border-[#354561] rounded-md px-4 p-2 '>
                                <span className='text-xs'>SHA-256</span>
                                <code className='text-[#e5ecfa] block text-xs mt-2 wrap-break-word'>330b6b5466f8ce4ac0757ef3f4e4192129d8f4f7242ff5233e07e117bc73b706</code>
                            </div>

                            <button className='flex justify-center items-center p-3.5  border border-[rgb(84,139,228)] hover:bg-[rgb(58,119,210)] bg-[rgb(46,101,186)]    hover:-translate-y-0.5 transition-all duration-300 rounded-md'>
                                    <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="none">
                                        <path d="M 3,4 H 20 V 20 H 3 L 10.5,12 Z" stroke="white" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
                                        </svg>
                                    <span className='font-bold text-[15px]'>View iOS report</span>
                            </button>
                    </div>
                </div>
            </div>
        
        </>
    )
}