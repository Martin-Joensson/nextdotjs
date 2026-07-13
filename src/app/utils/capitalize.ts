export const capitalize = (text: string): string => {
  const cleanedText = text.toLowerCase();

  return cleanedText.charAt(0).toUpperCase() + cleanedText.slice(1);
};
