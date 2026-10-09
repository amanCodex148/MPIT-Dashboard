 // Disable text selection, copying, cutting, and pasting
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    document.addEventListener('copy', function (e) {
        e.preventDefault();
    });

    document.addEventListener('cut', function (e) {
        e.preventDefault();
    });

    document.addEventListener('paste', function (e) {
        e.preventDefault();
    });