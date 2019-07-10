// Use ES module import syntax to import functionality from the module
// that we have compiled.
//
// Note that the `default` import is an initialization function which
// will "boot" the module and make it ready to use. Currently browsers
// don't support natively imported WebAssembly as an ES module, but
// eventually the manual initialization won't be required!
import init, { extractingIsSupported } from './pkg/extract_my_file.js';

let member = {
    inputEl: null,
    dropEl: null,
    infoEl: null
};

(function main() {
    member = {...initElements()}
    checkFileApiSupport()
    initWasm();
})()

async function initWasm() {
    await init();
}

function initElements() {
    const containerEl = document.createElement('div');
    containerEl.innerHTML =
        `<input type="file"/><br>
            <div class="drop-zone">Drop input file here</div>
            <output></output>`;

    const inputEl = containerEl.querySelector('input'),
        dropEl = containerEl.querySelector('div'),
        infoEl = containerEl.querySelector('output');

    inputEl.addEventListener('change', handleFileSelect, false);
    dropEl.addEventListener('dragover', handleDragOver, false);
    dropEl.addEventListener('drop', handleDrop, false);

    document.body.appendChild(containerEl)

    return {
        inputEl,
        dropEl,
        infoEl,
    };
}

function checkFileApiSupport() {
    if (!(window.File && window.FileReader)) {
        member.infoEl.innerText = 'Oh uh, your browser does not seem to support what we do.';
    }
}

function handleDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
}

function handleDrop(event) {
    event.stopPropagation();
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    showFileInfo(file);
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    showFileInfo(file);
}

function showFileInfo(file) {
    const extension = file.name.substr((file.name.lastIndexOf('.') + 1));
    const is_supported = extractingIsSupported(extension);
    member.infoEl.innerText = `Name: ${file.name} Size: ${file.size} bytes Supported: ${is_supported}`;
}
