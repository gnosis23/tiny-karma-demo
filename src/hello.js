export function onePlusOne(a, b) {
  return 2
}

export function jump(name) {
  const div = document.createElement('p')
  div.className = 'jump'
  div.textContent = name
  document.body.appendChild(div)
}
