

export function Cards({children}){

    return (
        <>
            <div className="h-full flex flex-col border bg-[linear-gradient(135deg,rgb(32,32,32),rgb(20,20,20))] border-[#685159]  lg:border-[#4e4f51] rounded-[18px] hover:-translate-y-1 hover:border-[#685159] transition-all duration-200 ">

                {children}
            </div>
        
        </>
    )
}