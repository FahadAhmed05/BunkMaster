"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Confetti from "react-confetti";

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function ThanksFeedbackModal({ isOpen, setIsOpen }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white/10 border border-white/20 p-6 text-left align-middle shadow-xl backdrop-blur-lg transition-all relative">
                {/* Confetti */}
                {isOpen && <Confetti numberOfPieces={150} recycle={false} />}

                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold text-center text-white mb-4"
                >
                  Thank You!
                </Dialog.Title>

                <p className="text-center text-gray-200 leading-relaxed">
                  Your feedback has safely reached us. We truly appreciate your thoughts, and we’ll work diligently to make your experience even better.  
                  <br />
                  <span className="block mt-2">Your voice helps guide the next steps!</span>
                </p>

                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg border border-white/30 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
