/**
 * It checks if the file is a valid type and size, and if it is, it returns true, otherwise it returns
 * false
 * @param file - { type: string; size: number }
 * @param message - { error: (arg0: string) => void }
 * @returns A function that takes two arguments, file and message, and returns a boolean.
 */
export const fileValidation = (
  file({ type: string, size: number }),
  toast(any)
) =>{
  const isValidFile =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "application/msword" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    file.type === "application/pdf";
  if (!isValidFile) {
    toast.error("You can only upload JPG/PNG/Docx/PDF file!", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
    return false;
  }

  const isValidSize = file.size / 1024 / 1024 < 1;
  if (!isValidSize) {
    toast.error("File must be smaller than 1MB!", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
    return false;
  }
  return isValidFile && isValidSize;
};
