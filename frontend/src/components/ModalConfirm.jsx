import Button from "./Button";

export default function ModalConfirm({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;
  return (
    <div className="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="min-w-[300px] rounded bg-white p-6 shadow-lg">
        <h2 className="mb-2 text-lg font-bold">{title}</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end gap-2">
          <Button
            className="bg-gray-300 text-black hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </div>
      </div>
    </div>
  );
}
