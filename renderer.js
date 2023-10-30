// __dirname
const dirBtn = document.getElementById('dirBtn')
const dirElement = document.getElementById('dirPath')
dirBtn.addEventListener('click', async () => {
  const filePath = await window.electronAPI.dirPath()
  dirElement.innerText = filePath
})

// path.resolve
const resolveBtn = document.getElementById('resolveBtn')
const resolveElement = document.getElementById('resolvePath')
resolveBtn.addEventListener('click', async () => {
  const filePath = await window.electronAPI.resolvePath()
  resolveElement.innerText = filePath
})
