<?php    
  // file: routes.php  

  Route::resource('server/book', 'BooksController');
  Route::resource('server/author', 'authorController');
  Route::resource('server/publisher', 'publisherController');
  Route::dispatch();
  
?> 
