export const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    })
    .then((response) => {
      if (response.success) {
        return { success: true, userEmail: data.email };
      } else {
        throw new Error("Failed to send message");
      }
    });
