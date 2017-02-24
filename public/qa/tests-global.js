
suite("Global Tests", function() {
    test("This page has correct TITLE", function () {
        assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== "TODO");

    });
});