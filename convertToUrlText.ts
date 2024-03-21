export default function convertToUrlText(productTitle: string): string {
  // Remove special characters and convert to lowercase
  const urlFriendlyText: string = productTitle
    .trim() // Trim leading and trailing spaces
    .toLowerCase() // Convert to lowercase

  // Replace spaces with hyphens
  return urlFriendlyText.replace(/[/#?|()\s]/g, "-")
}
