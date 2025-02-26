export function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const eventDetails = Object.fromEntries(formData.entries());

  console.log("Form Submitted:", eventDetails);
}
