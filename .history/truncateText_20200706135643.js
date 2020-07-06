function truncateText(
  content = "...",
  word = false,
  limit = 160,
  after = false
) {
  let newContent;

  if (content && content.length) {
    if (word === true) {
      newContent = content.split(" ");
      if (newContent.length <= limit) return content;
      newContent = newContent.slice(0, limit);
      newContent = newContent.join(" ") + (after ? "..." : "");
    } else {
      newContent = content.split("");
      if (newContent.length <= limit) return content;
      newContent = newContent.slice(0, limit);
      newContent = newContent.join("") + (after ? "..." : "");
    }
  }

  return newContent;
}

module.exports.truncateText = truncateText;
