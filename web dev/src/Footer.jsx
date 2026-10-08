

export function Footer(){

        const currentYear = new Date().getUTCFullYear();
    return(
        <>
            <section className=" pb-15 border-b border-b-[#4e4f51] mt-20 mx-6 lg:mx-25 ">




                <div className="px-6 p-6  lg:p-10 lg:flex lg:justify-between bg-[radial-gradient(at_100%_0%,rgba(254,44,85,0.133),rgba(0,0,0,0)_65%),linear-gradient(110deg,rgb(28,28,28),rgb(33,22,26))] border border-[rgb(86,48,58)] rounded-2xl">
                    
                    
                    
                    <div className="flex  flex-col gap-3">
                        <h2 className="font-bold text-3xl">Make space for your style.</h2>
                        <span className=" text-[rgb(170,170,170)]">An image. A GIF. A profile that feels like you.</span>
                    </div>
                    <button className="rounded-lg bg-[rgb(216,27,66)] hover:-translate-y-0.5 flex justify-center items-center gap-2 px-6 p-4 mt-4 font-extrabold cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg> <span className="text-[13px]">Choose your device</span>
                    </button>
                </div>

            </section>

                <div className="mt-6 flex flex-col lg:flex-row lg:justify-between  lg:mx-25 lg:mb-10 gap-4 mx-6 mb-6 text-xs">
                    <span className="block">© {currentYear} Dreamiegenie's project</span>
                    <span className="block">Independent practice project. Not affliated to any app/website other than this.</span>
                </div> 
        
        </>
    )
}