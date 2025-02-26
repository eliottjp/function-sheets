export function downloadFunctionSheet(eventName, content) {
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${eventName}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
