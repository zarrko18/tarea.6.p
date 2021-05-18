
class authorController {

    static index() {
      fetch('/server/author',
       { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data) => {
          return view('/views/author/list.html',
           {'title':'Professor Lista',
            'author':data},'content')();}
       )
    }
  
    static show(params) {
      fetch('/server/author/'+params.id,
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data) => {
          return view('/views/author/details.html',
            {'title':'Professor Details',
             'author':data,'show':true},'content')();}
       )
    }
  
    static create() {
      var prof = {'title':'','nationality':'',
            'birth':'','fields':''};
      return view('/views/author/details.html',
            {'title':'author Create',
            'author':prof,'create':true},'content')();
    }
  
    static store() {
      var name = Input.get('name');
      var nationality = Input.get('nationality');
      var birth = Input.get('birth');
      var fields = Input.get('fields');
      var prof = {'name':name,'nationality':nationality,
              'birth':birth,'fields':fields};
      fetch('/server/author',
        { headers: {'Content-Type': 'application/json'},
          method: 'POST',
          body: JSON.stringify(prof)})
        .then((data) => {
           router.navigate('/author');
        }
      )
    }
  
    static edit(params) {
      fetch('/server/author/'+params.id,
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data) => {
          return view('/views/author/details.html',
            {'title':'author Edit',
             'author':data,'edit':true},'content')();}
       )
    }
  
    static update(params) {
      var name = Input.get('name');
      var nationality = Input.get('nationality');
      var birth = Input.get('birth');
      var fields = Input.get('fields');
      var prof = {'name':name,'nationality':nationality,
              'birth':birth,'fields':fields};
      fetch('/server/author/'+params.id,
        { headers: {'Content-Type': 'application/json'},
          method: 'PUT',
          body: JSON.stringify(prof)})
        .then((data) => {
           router.navigate('/author');
         }
       )
    }
  
    static destroy(params) {
      fetch('/server/author/'+params.id,
        { method: 'DELETE'})
        .then((data) => {
           router.navigate('/author');
         }
       )
    }
  }