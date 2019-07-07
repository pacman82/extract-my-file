// Check support for file API
if (window.File && window.FileReader) {
    // Success! Do nothing for now
} else {
    let info = document.getElementById('info')
    info.innerText = 'Oh uh, your browser does not seem to support what we do.';
}

function showFileInfo(file) {
    let text = 'Name: '
        + escape(file.name)
        + ' Size: '
        + file.size
        + 'bytes';

    document.getElementById('info').innerText = text;
}

function handleFileSelect(event) {
    let file = event.target.files[0];
    showFileInfo(file);
}

function handleDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
}

function handleDrop(event) {
    event.stopPropagation();
    event.preventDefault();

    let file = event.dataTransfer.files[0];
    showFileInfo(file);
}

// Set up handler for file selections
document
    .getElementById('source')
    .addEventListener('change', handleFileSelect, false);

// Set up handler for drag over
document
    .getElementById('drop_zone')
    .addEventListener('dragover', handleDragOver, false);

// Set up handler for drop
document
    .getElementById('drop_zone')
    .addEventListener('drop', handleDrop, false)