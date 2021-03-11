export async function sendEmail (route, payload) {
  const response = await fetch(route, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
  })

  return await response
}