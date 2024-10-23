

import Link from "next/link";

// import prisma from "@/lib/prisma";
// import QuestionModal from "./_components/question-modal";
// import SearchQuestions from "./_components/search-questions";

export const revalidate = 0;

export default function Home() {
    // const questions = await prisma.question.findMany();

    return (
        <main>
            {/* <h1 className="text-4xl font-bold mb-5">Frequently Asked Questions</h1>
      <SearchQuestions />
      <div className="grid grid-cols-3 gap-4">
        {questions.map((question) => (
          <QuestionModal key={question.id} question={question} />
        ))}
      </div> */}
            <header className=" relative z-10 ">
                <img src="/Sayjn.gif" alt="" className="headerImg" />
                <img src="/image (1).png" alt="" className="headerImg2" />
                <div className="grid grid-cols-6 relative z-10 mainContainer uppderHero h-screen">
                    <div className="col-span-2 flex justify-center items-center flex-col gap-12 text-center max-w-3xl -m-16">
                        <p className="text-8xl font-bold leading-snug">
                            مرحبا بك في مغامرة الدعم!
                        </p>
                        <p className="text-4xl text-neutral-500">
                            استعد لحل مشكلتك بخطوات بسيطة!
                        </p>
                        <Link href="/questions">
                            <img
                                src="/hero-button.png"
                                alt="ابدا المغامره"
                                className="cursor-pointer w-3/4 m-auto"
                            />
                        </Link>
                    </div>
                    <div className="col-span-4 flex justify-center items-end relative">
                        <img
                            src="/hero.png"
                            alt="hero img"
                            className="z-10 hero"
                        />
                        <img src="/circle.png" alt="" className="circle" />
                    </div>
                </div>
            </header>
        </main>
    );
}
