

export function Modal({onClose}){

    return(
        <>
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-md">
            <div className="border-t-3 border-[#fe2c55]  m-10 md:m-20  p-4 rounded-2xl bg-white/10 flex flex-col justify-center items-center shadow shadow-black/60 gap-4">
                    <h2 className="font-bold text-3xl text-white">F. Y. I</h2>
                <p className=" text-white">This is a concept site, not a banner creator. The buttons are non-functional, except for the link to my GitHub and the FAQ section.</p> 
                <span className="italic text-white">Thank you for your time.</span>
                <button className="text-[#fe2c55] hover:-translate-y-0.5 transition-transform duration-300 " onClick={onClose}> <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><title>x-fill</title><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  d="M7 7L17 17M17 7L7 17"/></svg></button>
            </div>
            
        </div>
        </>
    )
}