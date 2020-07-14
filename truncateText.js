function truncateText(
  content = "...",
  { word = false, limit = 160, after = true }
) {
  if (!content) return "";

  let newContent = null;
  let spacer = word ? " " : "";
  newContent = content.split(spacer);
  if (newContent.length <= limit) return content;

  return newContent.slice(0, limit).join(spacer) + (after ? "..." : "");
}

module.exports.truncateText = truncateText;
