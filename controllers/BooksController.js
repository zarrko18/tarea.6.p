// controllers/ProfessorController.js
class BooksController {

    static index() {
      fetch('/server/book',
       { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data) => {
          return view('/views/book/list.html',
           {'title':'Professor Lista',
            'Books':data},'content')();}
       )
    }
  
    static show(params) {
      fetch('/server/book/'+params.id,
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data) => {
          return view('/views/book/details.html',
            {'title':'Professor Details',
             'Books':data,'show':true},'content')();}
       )
    }
  
    static create() {
      var prof = {'title':'','edition':'',
            'copyright':'','pages':''};
      return view('/views/book/details.html',
            {'title':'Professor Create',
            'Books':prof,'create':true},'content')();
    }
  
    static store() {
      var title = Input.get('title');
      var edition = Input.get('edition');
      var copyright = Input.get('copyright');
      var pages = Input.get('pages');
      var prof = {'title':title,'edition':edition,
              'copyright':copyright,'pages':pages};
      fetch('/server/book',
        { headers: {'Content-Type': 'application/json'},
          method: 'POST',
          body: JSON.stringify(prof)})
        .then((data) => {
           router.navigate('/Book');
        }
      )
    }
  
    static edit(params) {
      fetch('/server/book/'+params.id,
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data) => {
          return view('/views/book/details.html',
            {'title':'Professor Edit',
             'Books':data,'edit':true},'content')();}
       )
    }
  
    static update(params) {
      var title = Input.get('title');
      var edition = Input.get('edition');
      var copyright = Input.get('copyright');
      var pages = Input.get('pages');
      var prof = {'title':title,'edition':edition,
              'copyright':copyright,'pages':pages};

      fetch('/server/book/'+params.id,
        { headers: {'Content-Type': 'application/json'},
          method: 'PUT',
          body: JSON.stringify(prof)})
        .then((data) => {
           router.navigate('/Book');
         }
       )
    }
  
    static destroy(params) {
      fetch('/server/book/'+params.id,
        { method: 'DELETE'})
        .then((data) => {
           router.navigate('/Book');
         }
       )
    }
  }