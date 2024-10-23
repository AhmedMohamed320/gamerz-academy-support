"use client";

import PagesTab from "./pages-tab";
import { Page, Question } from "@prisma/client";
import { Tabs as Tabs_, Tab } from "@nextui-org/tabs";

import QuestionsTab from "./questions-tab";

interface TabsProps {
  questions: Question[];
  pages: Page[];
}
export default function Tabs({ questions, pages }: TabsProps) {
  return (
    <div className="flex w-full flex-col">
      <Tabs_ color="secondary" aria-label="Options">
        <Tab key="quesions" title="Questions">
          <QuestionsTab questions={questions} pages={pages} />
        </Tab>
        <Tab key="pages" title="Pages">
          <PagesTab pages={pages} />
        </Tab>
      </Tabs_>
    </div>
  );
}
