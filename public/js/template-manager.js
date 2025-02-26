export const templates = {
  Wedding: "Wedding Function Sheet\nDate: {date}\nVenue: {venue}",
  Conference: "Conference Function Sheet\nDate: {date}\nSpeaker: {speaker}",
};

export function applyTemplate(eventType, details) {
  let template = templates[eventType] || "Custom Event\n{details}";
  return template.replace(/\{(\w+)\}/g, (_, key) => details[key] || "");
}
