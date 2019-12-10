import { saveAs } from 'file-saver'
import './style.scss'

let member = {
  inputEl: null,
  dropEl: null,
  infoEl: null,
  unsupportedFileTypeInfoEl: null,
  unsupportedBrowserInfoEl: null,
  wasm: {
    extensionIsSupported: null,
    Decoder: null,
  },
}

;(async function main() {
  await initWasm()
  initElements()
  checkFileApiSupport()
})()

async function initWasm() {
  try {
    member.wasm = await import('../pkg/index.js')
  } catch (exc) {
    console.error(exc)
  }
}

function initElements() {
  const containerEl = document.getElementById('container')

  member = {
    ...member,
    inputEl: containerEl.querySelector('input'),
    dropEl: containerEl.querySelector('.drop-zone'),
    infoEl: containerEl.querySelector('output'),
    unsupportedFileTypeInfoEl: containerEl.querySelector('.unsupported-filetype-info'),
    unsupportedBrowserInfoEl: containerEl.querySelector('.unsupported-browser-info'),
  }

  member.inputEl.addEventListener('change', handleFileSelect, false)
  member.dropEl.addEventListener('dragover', handleDragOver, false)
  member.dropEl.addEventListener('drop', handleDrop, false)
}

function checkFileApiSupport() {
  if (window.File && window.FileReader) {
    hideElement(member.unsupportedBrowserInfoEl)
  } else {
    showElement(member.unsupportedBrowserInfoEl)
  }
}

function handleDragOver(event) {
  event.stopPropagation()
  event.preventDefault()
  event.dataTransfer.dropEffect = 'copy'
}

function handleDrop(event) {
  event.stopPropagation()
  event.preventDefault()

  const file = event.dataTransfer.files[0]
  processFile(file)
}

function handleFileSelect(event) {
  const file = event.target.files[0]
  processFile(file)
}

function processFile(file) {
  // `file` is supposed to be a blob which offers a possibility to wait for an `ArrayBuffer`. Yet,
  // until we get this to work, let's just use a `FileReader` instead.
  const reader = new FileReader()
  reader.onloadend = createHandleFileLoaded(file)
  reader.readAsArrayBuffer(file)
}

// Binds `file` to `handleFileLoaded`.
function createHandleFileLoaded(file) {
  return function handleFileLoaded(event) {
    const buffer = event.target.result,
      posSplit = file.name.lastIndexOf('.'),
      extension = file.name.substr(posSplit + 1),
      trunk = file.name.substr(0, posSplit)

    showFileInfo(file)

    if (member.wasm.extensionIsSupported(extension)) {
      hideElement(member.unsupportedFileTypeInfoEl)

      const src = new member.wasm.Decoder(extension),
        out = src.extract(new Uint8Array(buffer)),
        blob = new Blob([out])

      saveAs(blob, trunk)
    } else {
      showElement(member.unsupportedFileTypeInfoEl)
    }
  }
}

function showFileInfo(file) {
  member.infoEl.innerText = `${file.name}`
}

function showElement(element) {
  element.classList.remove('hide')
}

function hideElement(element) {
  element.classList.add('hide')
}
