<?php
  // file: controllers/BooksController.php

  require_once('models/Publisher.php');

  class publisherController extends Controller {

    public function index() {  
      return Publisher::all();
    }
    public function store($request) {
      return Publisher::create($request);
    }  
  
    public function show($id) {  
      return Publisher::find($id);
    }  
  
    public function update($request,$id) {  
      return Publisher::update($id,$request);
    }  
  
    public function destroy($id) {  
      return Publisher::destroy($id);
    }
  }
?>