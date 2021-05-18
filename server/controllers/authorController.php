<?php
  // file: controllers/BooksController.php

  require_once('models/Author.php');

  class authorController extends Controller {

    public function index() {  
      return Author::all();
    }
    public function store($request) {
      return Author::create($request);
    }  
  
    public function show($id) {  
      return Author::find($id);
    }  
  
    public function update($request,$id) {  
      return Author::update($id,$request);
    }  
  
    public function destroy($id) {  
      return Author::destroy($id);
    }
  }
?>