suite("Test page ABOUT:...", function () {
    test("page must contain link on Contact's page", function () {
        assert( $('a[href="/contact"]').length);

    });
});