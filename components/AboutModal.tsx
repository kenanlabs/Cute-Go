import React from 'react';
import { X, RefreshCw } from 'lucide-react';
import { CURRENT_VERSION } from '../utils/constants';

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
    checkingUpdate: boolean;
    updateMsg: string;
    onCheckUpdate: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
    isOpen,
    onClose,
    checkingUpdate,
    updateMsg,
    onCheckUpdate,
}) => {

    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={(e) => { if(e.target === e.currentTarget) onClose() }}>
          <div className="bg-[#fcf6ea] rounded-[2rem] w-full max-w-sm shadow-2xl border-[6px] border-[#8c6b38] flex flex-col max-h-[85vh] relative overflow-hidden">
            
            {/* Fixed Close Button Layer */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-end z-20 pointer-events-none bg-gradient-to-b from-[#fcf6ea] via-[#fcf6ea]/80 to-transparent h-20">
                <button onClick={onClose} className="pointer-events-auto text-[#8c6b38] hover:text-[#5c4033] bg-[#fff] rounded-full w-10 h-10 flex items-center justify-center border-2 border-[#e3c086] transition-colors shadow-sm"><X size={20}/></button>
            </div>
            
            {/* Scrollable Content */}
            <div className="p-6 pt-16 flex flex-col gap-5 text-center overflow-y-auto custom-scrollbar overscroll-contain">

                <div className="flex flex-col items-center gap-2 mt-2">
                    <div className="w-20 h-20 bg-[#5c4033] rounded-3xl shadow-lg border-4 border-[#8c6b38] overflow-hidden">
                        <img
                            src="./logo.png"
                            alt="App Icon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="text-2xl font-black text-[#5c4033] tracking-wide">Cute-Go</h2>
                    <p className="text-xs font-bold text-[#8c6b38] opacity-80">可爱的围棋/五子棋对战助手<br/>Made with ❤️ by Yohaku</p>
                </div>

                <div className="h-px bg-[#e3c086] border-dashed border-b border-[#e3c086]/50"></div>

                {/* Version & Update */}
                <div className="bg-[#fff]/50 p-4 rounded-2xl border border-[#e3c086]">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-[#5c4033]">当前版本</span>
                        <span className="bg-[#8c6b38] text-[#fcf6ea] text-xs font-bold px-2 py-1 rounded-lg">v{CURRENT_VERSION}</span>
                    </div>
                    <button
                        onClick={onCheckUpdate}
                        disabled={checkingUpdate}
                        className="w-full btn-retro btn-beige py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                    >
                        {checkingUpdate ? <RefreshCw size={14} className="animate-spin"/> : <RefreshCw size={14}/>}
                        {checkingUpdate ? '检查中...' : '检查更新'}
                    </button>
                    {updateMsg && (
                        <p className={`text-xs font-bold mt-2 ${updateMsg.includes('新版本') ? 'text-green-600' : 'text-[#8c6b38]'}`}>
                            {updateMsg}
                        </p>
                    )}
                </div>

            </div>
          </div>
        </div>
    );
};
