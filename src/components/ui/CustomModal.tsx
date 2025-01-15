import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { cn } from "../../lib/utils";

interface ModalProps {
  openModal: boolean;
  closeModal: () => void;
  footer: JSX.Element;
  content: JSX.Element;
  className: string;
  title: string;
}

const CustomModal = ({ openModal, closeModal, footer, content, title, className }: ModalProps) => {
  return (
    <Dialog
      open={openModal}
      onClose={closeModal}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30"/>
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className={cn("max-w-lg space-y-4 border bg-white p-12", className)}>
          <DialogTitle className="font-bold">{ title }</DialogTitle>
          { content }
          { footer }
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CustomModal;
