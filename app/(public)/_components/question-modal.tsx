"use client";

import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Question } from "@prisma/client";
import Link from "next/link";
import { Link as NUI_Link } from "@nextui-org/link";

interface AnswerItem {
  id: string;
  type: "text" | "img" | "link";
  value: string;
  pageId?: string;
}

interface QuestionModalProps {
  question: Question;
  fullWidth?: boolean;
}

export default function QuestionModal({
  question,
  fullWidth = false,
}: QuestionModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentNode, setCurrentNode] = useState<any>(question);
  const [history, setHistory] = useState<any>([]);

  const handleChildClick = (child: any) => {
    setHistory([...history, currentNode]);
    setCurrentNode(child);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const previousNode = history[history.length - 1];
      setCurrentNode(previousNode);
      setHistory(history.slice(0, -1));
    }
  };

  const renderAnswerItems = (answerItems: AnswerItem[]) => {
    return answerItems.map((item) => (
      <div key={item.id} className="mb-4">
        {item.type === "text" && <p>{item.value}</p>}
        {item.type === "img" && (
          <img src={item.value} alt="Answer" className="rounded-lg" />
        )}
        {item.type === "link" && (
          <NUI_Link
            as={Link}
            isExternal
            showAnchorIcon
            href={`/pages/${item.pageId}`}
          >
            {item.value}
          </NUI_Link>
        )}
      </div>
    ));
  };

  return (
    <>
      <Button
        fullWidth={fullWidth}
        variant={"bordered"}
        color="primary"
        onPress={onOpen}
      >
        {question.title}
      </Button>
      <Modal
        size="3xl"
        isOpen={isOpen}
        scrollBehavior="inside"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                New Question
              </ModalHeader>
              <ModalBody>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentNode.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 max-w-2xl mx-auto"
                  >
                    <h2 className="text-2xl font-bold mb-4">
                      {currentNode.title || currentNode.label}
                    </h2>

                    {/* Render the answer items */}
                    {renderAnswerItems(currentNode.answer)}

                    {currentNode.children &&
                      currentNode.children.length > 0 && (
                        <div className="flex flex-wrap gap-5">
                          {currentNode.children.map((child: any) => (
                            <Button
                              key={child.id}
                              onClick={() => handleChildClick(child)}
                              className="bg-blue-200/50 text-blue-800"
                            >
                              {child.label}
                            </Button>
                          ))}
                        </div>
                      )}

                    {history.length > 0 && (
                      <Button
                        size="sm"
                        isIconOnly
                        variant="light"
                        className="mt-5"
                        onPress={handleBack}
                      >
                        <IoMdArrowRoundBack
                          size={25}
                          className="text-primary"
                        />
                      </Button>
                    )}
                  </motion.div>
                </AnimatePresence>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
