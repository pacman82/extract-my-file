import { saveAs } from 'file-saver'
import './style.scss'

let member = {
  inputEl: null,
  dropEl: null,
  infoEl: null,
  unsupportedFileTypeInfoEl: null,
  unsupportedBrowserInfoEl: null,
  WasmSource: null,
}

;(async function main() {
  member.WasmSource = await getWasmSource()
  initElements()
  checkFileApiSupport()
})()

async function getWasmSource() {
  try {
    const wasm = await import('../pkg/index.js')
    return wasm.Source
  } catch (exc) {
    console.error(exc)
  }
}

function initElements() {
  const containerEl = document.getElementById('container')

  member.inputEl = containerEl.querySelector('input')
  member.dropEl = containerEl.querySelector('.drop-zone')
  member.infoEl = containerEl.querySelector('output')
  member.unsupportedFileTypeInfoEl = containerEl.querySelector('.unsupported-filetype-info')
  member.unsupportedBrowserInfoEl = containerEl.querySelector('.unsupported-browser-info')

  member.inputEl.addEventListener('change', handleFileSelect, false)
  member.dropEl.addEventListener('dragover', handleDragOver, false)
  member.dropEl.addEventListener('drop', handleDrop, false)
}

function checkFileApiSupport() {
  if (window.File && window.FileReader) {
    member.unsupportedBrowserInfoEl.classList.add('hide')
  } else {
    member.unsupportedBrowserInfoEl.classList.remove('hide')
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
      pos_split = file.name.lastIndexOf('.'),
      extension = file.name.substr(pos_split + 1),
      trunk = file.name.substr(0, pos_split),
      src = new member.WasmSource(extension, new Uint8Array(buffer))

    showFileInfo(file, src)

    if (src.extractingIsSupported()) {
      const out = src.extract(),
        blob = new Blob([out])
      saveAs(blob, trunk)
    }
  }
}

function showFileInfo(file, src) {
  const size = src.size(),
    isSupported = src.extractingIsSupported()

  if (isSupported) {
    member.unsupportedFileTypeInfoEl.classList.add('hide')
  } else {
    member.unsupportedFileTypeInfoEl.classList.remove('hide')
  }
  member.infoEl.innerText = `${file.name}, ${size} bytes`
}
