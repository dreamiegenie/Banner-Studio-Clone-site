
import { StarsIcon } from "./StarsIcon";
import { Circle } from "./Circle";

export function HomePage(){



    return(
        <>

            <nav className="flex justify-between items-center m-4 ">
                <h2 className="font-bold">Banner Studio</h2>
                <button className="border border-gray-500/50 rounded-4xl text-xs px-3 p-2 text-gray-300/80">Get the app</button>
            </nav>
            <div className="border border-gray-500/30"></div>
        <main className="md:grid md:grid-cols-2 md:place-items-center md:mt-20  md:mx-24 gap-40">
            <div className="">
            <section className="mt-12 px-4">
                <button className="border border-red-500/20 rounded-4xl text-xs px-3.5 p-2 text-rose-200 flex gap-3 font-bold bg-red-950/30">
                        <StarsIcon/>IMAGE & GIF PROFILE BANNERS</button>
                <div className="mt-6">
                    <p className="font-bold text-5xl sm:text-[70px]">Your Profile.</p>
                    <p className="font-bold text-5xl sm:text-[70px]">A whole new</p>
                    <span className="bg-linear-60 from-red-400 via-rose-500/80 to-slate-300 bg-clip-text text-transparent font-bold text-5xl sm:text-[70px]">Kind of you.</span>
                </div>
            </section>
            <section className="p-4 mt-6 text-slate-300/50 text-lg">
                <p>Add an image or GIF banner to your TikTok profile. Complete the task, then follow the tutorial to get the feature</p>
            
                <div className="mt-6 text-white flex flex-col gap-4 sm:flex-row">
                    <button className="bg-rose-600 p-3 flex gap-2 justify-center items-center rounded-xl w-full sm:w-50 sm:hover:-translate-y-0.5 transition-all duration-200">
                                <StarsIcon/> Get your banner</button>
                    <button className="border border-slate-400/50 p-3 rounded-xl flex gap-4 justify-center items-center w-full shadow shadow-mauve-200/30 sm:w-50 sm:hover:bg-white sm:hover:text-black transition-colors duration-500 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                                    <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                                    </svg>See how it works</button>
                </div>
                    <div className="flex gap-4 text-xs mt-6">
                        <span className="flex gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>iPhone</span>
                        <span className="flex gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-android2" viewBox="0 0 16 16">
                                    <path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68"/>
                                </svg>Android </span>
                        <span>Image + GIF support</span>
                    </div>
            </section>
            </div>
            <section className="mt-10 "> 
                <div className="border rounded-2xl bg-mist-800/50 m-4 border-gray-400/30 sm:w-md md:w-lg sm:m-auto md:rotate-2">
                    <div className="flex justify-between items-center text-xs text-gray-400 mx-4 mt-4"> 
                        <span className="">YOUR PROFILE, REIMAGINED</span>
                        <span className="bg-white/20 px-2 p-1 rounded-md font-light text-[10px] text-white/80">CONCEPT</span>
                    </div>
                    <div className="border rounded-2xl mt-6 mx-3 mb-6 border-gray-500/80 bg-linear-150 from-rose-700 via-teal-950  to-green-500/50 ">
                            <div className="flex flex-col text-right mx-4 m-4 ">
                                <span className="text-xs">YOUR SPACE, YOUR STYLE.</span>
                                <div className="flex flex-col mt-4 font-bold text-4xl">
                                    <span>MAKE</span>
                                    <span>IT YOURS.</span>
                                </div>
                                <button className="flex justify-center w-28 gap-2  items-center border rounded-2xl  text-[10px]  p-1 bg-slate-950/30 border-gray-400/50 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-play-btn-fill" viewBox="0 0 16 16">
                                        <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                                    </svg>GIF PREVIEW</button>
                            </div>
                            <div className="mx-4">
                                <p>Your name</p>
                                <span className="text-xs text-slate-500/80">@yourprofile · concept preview</span>
                                <div className="flex gap-8 ">
                                    <span>128</span>
                                    <span>12.4k</span>
                                    <span>86.2k</span>
                                </div>
                                <div className="flex gap-4 text-[10px]">
                                    <span>Following</span>
                                    <span>Followers</span>
                                    <span className="mx-1.5">Likes</span>
                                </div>
                                <p className="text-xs mt-6">A little more you. A little less ordinary</p>
                            </div>
                            <div className="border-[0.8px] mt-4 mx-4 border-white/30"></div>
                            <div>
                                <p className="text-xs mt-2 mx-6 flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.559 5.448a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                                    </svg>Your moments</p>

                                <div className="flex justify-center gap-2 mt-4 mb-6 ">
                                    <div className="bg-linear-to-br from-gray-500 to-gray-950/70 font-bold rounded-lg w-24 h-24 sm:w-30 md:w-36 flex justify-center items-center">CREATE.</div>
                                    <div  className="bg-linear-to-br from-green-500/80 to-green-950 font-bold rounded-lg w-24 h-24 sm:w-30 md:w-36 text-emerald-300 flex justify-center items-center">YOUR.</div>
                                    <div  className="bg-linear-to-br from-rose-500/60 to-rose-950/80 text-rose-300 font-bold rounded-lg sm:w-30 md:w-36 w-24 h-24 flex justify-center items-center">WORLD.</div>
                                </div>
                            </div>
                            </div>
                            <div className="m-4 flex justify-between">
                                <span className="text-[10px]">Illustrative profile, not an app screenshot</span>
                                <div className="flex gap-2">
                                        <Circle className="text-red-500"/>
                                        <Circle className="text-green-500"/>
                                        <Circle className="text-gray-400"/>
                                </div>
                    </div>
                </div>
            </section>
        </main>

        </>
    )
}