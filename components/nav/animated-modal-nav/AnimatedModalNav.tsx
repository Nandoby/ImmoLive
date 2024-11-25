"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "../../ui/animated-modal";
import { SignupForm } from "@/components/signup/SignupForm";
import { Check } from "lucide-react";
import Link from "next/link";

export function AnimatedModalNav() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="flex justify-center group/modal-btn">
          <span className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-brand rounded-md text-white font-light transition duration-200 ease-linear">
            Inscription / Connexion
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-xl text-neutral-800 font-bold text-center mb-8">
              Connectez-vous pour profiter pleinement des fonctionnalités
            </h4>
            <div className="flex gap-4">
              <div className="flex-1">
                <h4 className="font-bold text-xl text-neutral-600">
                  Créer un compte
                </h4>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check size={16} />
                    Enregistrez vos recherches
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check size={16} />
                    Recevez les nouveaux biens dans votre boite e-mail
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check size={16} />
                    Ajoutez des biens à vos favoris
                  </div>
                </div>
                <Link
                  href="/sign-up"
                  className="bg-brand group/btn from-black to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] flex items-center justify-center mt-3"
                >
                  S'inscrire
                </Link>
              </div>
              <SignupForm />
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
