'use client'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";
const Loading = ({isFullScreen = true}) => {
    const [isMounted,setIsMounted]=useState(false)
    const [progress, setProgress] = useState(0);
    useEffect(()=>{
     setIsMounted(true)   
     const startTime = Date.now()
     const duration = 1500;
     const interval = setInterval(()=>{
      const elapsed = Date.now() - startTime  
      const computed = Math.min((elapsed / duration) * 100,100)
      setProgress(computed)
      if(elapsed >= duration) clearInterval(interval)
     },30)
    return () => clearInterval(interval);
    },[])
    if(!isMounted){
        return(
          <div className={`fixed flex items-center justify-center bg-[#f8fafc]/50 backdrop-blur-md ${
        isFullScreen ? 'inset-0 z-[60]' : 'top-16 bottom-0 inset-x-0 z-40'
      }`}>
        <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-teal-500/20 border-t-teal-600 rounded-full animate-spin" />
      </div>  
        )
    }
    return (
         <div className={`fixed flex items-center justify-center backdrop-blur-md overflow-hidden ${
      isFullScreen 
        ? 'inset-0 z-[60] bg-slate-900/10' 
        : 'top-16 bottom-0 inset-x-0 z-40 bg-slate-900/5'
    }`}>

      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/3 w-[180px] sm:w-[250px] md:w-[300px] h-[180px] sm:h-[250px] md:h-[300px] bg-[#14b8a6] rounded-full blur-[90px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-[180px] sm:w-[260px] md:w-[320px] h-[180px] sm:h-[260px] md:h-[320px] bg-[#1eb0ea] rounded-full blur-[100px] pointer-events-none animate-pulse" />

      {/* Card */}
      <div className="relative z-10 w-[90%] max-w-[380px] sm:max-w-[420px] bg-white/75 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgba(20,184,166,0.12)] rounded-3xl p-5 sm:p-7 md:p-8 flex flex-col items-center text-center">

        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#006b5f] via-[#14b8a6] to-[#1eb0ea] rounded-t-3xl" />

        {/* Lottie (RESPONSIVE FIX) */}
        <div className="w-32 sm:w-40 md:w-48 lg:w-52 aspect-square relative flex items-center justify-center mb-2">
          <DotLottieReact
            src="/loading.lottie"
            loop
            autoplay
            className="w-full h-full"
          />
        </div>

        {/* Branding */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#006b5f] to-[#14b8a6] bg-clip-text text-transparent">
            DocAppoint
          </h2>
          <p className="text-[9px] sm:text-[10px] text-[#3c4947] font-bold uppercase tracking-widest opacity-80">
            Precision Healthcare Portal
          </p>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 mt-5 text-xs sm:text-sm font-medium text-[#2d3a38]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-[#14b8a6] opacity-75"></span>
            <span className="relative h-2 w-2 rounded-full bg-[#14b8a6]"></span>
          </span>
          <span className="text-gray-600">Connecting to secure server...</span>
        </div>

        {/* Progress */}
        <div className="w-40 sm:w-44 md:w-48 h-1.5 bg-teal-100/50 rounded-full mt-4 overflow-hidden border border-white/50">
          <div
            className="h-full bg-gradient-to-r from-[#006b5f] to-[#14b8a6] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[10px] text-[#3c4947]/60 font-mono mt-2">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
    );
};

export default Loading;