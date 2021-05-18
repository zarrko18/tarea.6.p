<?php
  // file: controllers/BooksController.php

  require_once('models/Book.php');

  class BooksController extends Controller {

    public function index() {  
      return Book::all();
    }
    public function store($request) {
      return Book::create($request);
    }  
  
    public function show($id) {  
      return Book::find($id);
    }  
  
    public function update($request,$id) {  
      return Book::update($id,$request);
    }  
  
    public function destroy($id) {  
      return Book::destroy($id);
    }

  }
?>