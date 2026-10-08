import virusTotal from './assets/virus-total-48.png';
import { VirusTotalCard } from './VirusTotalCard';
import { VirusTotalCard2 } from './VirusTotalCard2';

export function VirusTotal () {

    return(
        <>
            <section className="mt-20  ">
                    <div className="lg:flex lg:justify-between lg:items-end gap-15 mx-4 px-2 lg:px-24">
                        <div className='flex flex-col gap-4 mb-4'>
                            <h3 className="text-xs font-bold text-[rgb(148,185,255)]">FILE TRANSPARENCY</h3>
                            <h2 className="font-extrabold text-3xl">VirusTotal file reports.</h2>
                        </div>
                        <div>
                            <span className="text-gray-400 text-sm">Review the scan results and match the file hash before installing.</span>
                        </div>
                    </div>
                <main className='lg:grid lg:place-items-center'>
                    <div className="border border-[rgb(53,66,96)] rounded-2xl m-4 bg-[rgb(23,24,39)] pb-6">
                            <div className="flex justify-between items-center p-4 bg-[rgb(42,55,87)] rounded-t-2xl">
                                <div className='flex justify-center items-center gap-2'>
                                    <img src={virusTotal} alt="VirusTotal icon" />
                                    <h2 className="text-2xl font-bold text-blue-100">VirusTotal</h2>
                                </div>

                                <span className="text-[10px] text-blue-200">APP FILE REPORTS</span>
                            </div>
                    

{/* bg-[rgb(42,55,87)] rgb(32, 42, 66) border-[ rgb(59,73,104)]. idk?-rgb(59,78,115)*/}

                        <div className='lg:grid lg:grid-cols-2 '>
                            <VirusTotalCard/>
                            <VirusTotalCard2/>
                        </div>
                        <p className='text-xs text-blue-200 mx-4.5 mt-6'>These links open VirusTotal. This report section is independently published by Banner Studio.</p>
                    </div>
                    </main>
            </section>
            <div className='border-b border-b-[#4e4f51b7] mx-6 mt-10 lg:mx-25'></div>
        </>
    )
}