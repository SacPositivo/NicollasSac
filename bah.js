var pdfIframes = document.querySelectorAll('.pdfcontainer iframe');

        pdfIframes.forEach(function(pdfIframe) {
            pdfIframe.addEventListener('click', function () {
                if (pdfIframe.requestFullscreen) {
                    pdfIframe.requestFullscreen();
                } else if (pdfIframe.mozRequestFullScreen) {
                    pdfIframe.mozRequestFullScreen();
                } else if (pdfIframe.webkitRequestFullscreen) {
                    pdfIframe.webkitRequestFullscreen();
                } else if (pdfIframe.msRequestFullscreen) {
                    pdfIframe.msRequestFullscreen();
                }
            });
        });


