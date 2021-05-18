
router.on('/Book', () => BooksController.index());
router.on('/Book/show/:id',({ data }) => BooksController.show(data));
router.on('/Book/edit/:id',({ data }) => BooksController.edit(data));
router.on('/Book/store',() => BooksController.store());
router.on('/Book/update/:id', ({ data }) => BooksController.update(data));
router.on('/Book/create', () => BooksController.create());
router.on('/Book/delete/:id', ({ data }) => BooksController.destroy(data));
router.on('/',  () => BooksController.index());



router.on('/author', () => authorController.index());
router.on('/author/show/:id',({ data }) => authorController.show(data));
router.on('/author/edit/:id',({ data }) => authorController.edit(data));
router.on('/author/store',() => authorController.store());
router.on('/author/update/:id', ({ data }) => authorController.update(data));
router.on('/author/create', () => authorController.create());
router.on('/author/delete/:id', ({ data }) => authorController.destroy(data));


router.on('/publisher', () => publisherController.index());
router.on('/publisher/show/:id',({ data }) => publisherController.show(data));
router.on('/publisher/edit/:id',({ data }) => publisherController.edit(data));
router.on('/publisher/store',() => publisherController.store());
router.on('/publisher/update/:id', ({ data }) => publisherController.update(data));
router.on('/publisher/create', () => publisherController.create());
router.on('/publisher/delete/:id', ({ data }) => publisherController.destroy(data));



router.resolve();