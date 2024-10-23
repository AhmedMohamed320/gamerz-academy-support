"use client";
import { useEffect, useState } from "react";
import Loading from "../_components/loading";

export default function Destination() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoaded ? (
                <div className="flex min-h-screen flex-col items-center justify-center p-8 relative z-10">
                    <img src="/Sayjn.gif" alt="" className="headerImg" />
                    <img src="/image (1).png" alt="" className="headerImg2" />
                    <div className="card">
                        <img src="/circle.png" alt="" className="circle -left-96 -bottom-96" />
                        <p className="text-5xl leading-loose font-medium">
                            هل تواجه مشكلة في إتمام عملية الشراء؟
                        </p>
                        <hr className="bg-slate-500 w-3/5"></hr>
                        <div className="button grid grid-cols-2 gap-2">
                            <button>نعم</button>
                            <button>لا</button>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}
