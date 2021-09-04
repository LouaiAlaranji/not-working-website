const button = document.querySelector("button")
button.addEventListener("click", () => {
  fetch("http://localhost:3000/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer sk_test_51JVtjcACtK5pBXsPyesrdG1V8YPQVBRV6SMMZ45RszLhD0KJTeAkuHDuFeT6AYMKmU3IXSuj7cQhOdchIuRyduTG00DGsURG7P"
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
})
