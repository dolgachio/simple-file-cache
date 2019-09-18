import './load-pdf-page.js';
import './dynamic-changes-on-page.js';

import { pdfFileUrl } from "./pdf-file-url.constant.js";

const pdfFileCacheName = 'my-hello-world-pdf';
const saveButton = document.querySelector('.save-binary');
saveButton.addEventListener('click', () => {
    caches.open(pdfFileCacheName)
        .then((cache) => cache.add(pdfFileUrl))
        .then(() => alert('File added to cache!'));
});

const deleteButton = document.querySelector('.delete-binary');
deleteButton.addEventListener('click', () => {
    caches.open(pdfFileCacheName)
        .then((cache) => cache.delete(pdfFileUrl))
        .then(() =>  alert('File deleted from cache'));
});
