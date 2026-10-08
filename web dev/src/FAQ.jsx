

export function FAQ(){


    return(
        <>
            <section className="mx-6 mt-15 lg:mx-25">
                
                    <span className="text-[rgb(254,44,85)] text-[14px]">BEFORE YOU START</span>
                    <h2 className="text-3xl font-extrabold mt-4">A few things to know.</h2>
                <div className="mt-8 flex flex-col gap-8">
                    <details className="border-b border-b-[#4e4f51b7] pb-6">
                        <summary>What is this site?</summary>
                            <span className="mt-6 mb-6 inline-block ">A small creative project inspired by the original bannertik.online website which was for creating digital banners.</span>
                    </details>
                    <details  className="border-b border-b-[#4e4f51b7]  pb-6">
                        <summary>Can i actually create a banner here?</summary>
                            <span className="mt-6 mb-6 inline-block ">No you can't. This site is focused on the interface rather than functionality.</span>
                    </details>
                    <details  className="border-b border-b-[#4e4f51b7]  pb-6">
                        <summary>What can I do on the site?</summary>
                            <span className="mt-6 mb-6 inline-block ">Explore and critque my frontend skill. I'm still learning and improving on my skill, so a constructive criticism will be appreciated &hearts;</span>
                    </details>
                </div>
            </section>
        
        </>
    )
}