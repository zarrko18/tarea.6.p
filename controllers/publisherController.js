// controllers/ProfessorController.js
class publisherController {

    static index() {
      fetch('/server/publisher',
       { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data) => {
          return view('/views/publisher/list.html',
           {'title':'publisher Lista',
            'publisher':data},'content')();}
       )
    }
  
    static show(params) {
      fetch('/server/publisher/'+params.id,
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data) => {
          return view('/views/publisher/details.html',
            {'title':'publisher Details',
             'publisher':data,'show':true},'content')();}
       )
    }
  
    static create() {
      var prof = {'name':'','country':'',
            'email':'','phone':''};
      return view('/views/publisher/details.html',
            {'title':'publisher Create',
            'publisher':prof,'create':true},'content')();
    }
  
    static store() {
      var name = Input.get('name');
      var country = Input.get('country');
      var founded = Input.get('founded');
      var genere = Input.get('genere');
      var prof = {'name':name,'country':country,
              'founded':founded,'genere':genere};
      fetch('/server/publisher',
        { headers: {'Content-Type': 'application/json'},
          method: 'POST',
          body: JSON.stringify(prof)})
        .then((data) => {
           router.navigate('/publisher');
        }
      )
    }
  
    static edit(params) {
      fetch('/server/publisher/'+params.id,
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data) => {
          return view('/views/publisher/details.html',
            {'title':'publisher Edit',
             'publisher':data,'edit':true},'content')();}
       )
    }
  
    static update(params) {
      var name = Input.get('name');
      var country = Input.get('country');
      var founded = Input.get('founded');
      var genere = Input.get('genere');
      var prof = {'name':name,'country':country,
              'founded':founded,'genere':genere};
      fetch('/server/publisher/'+params.id,
        { headers: {'Content-Type': 'application/json'},
          method: 'PUT',
          body: JSON.stringify(prof)})
        .then((data) => {
           router.navigate('/publisher');
         }
       )
    }
  
    static destroy(params) {
      fetch('/server/publisher/'+params.id,
        { method: 'DELETE'})
        .then((data) => {
           router.navigate('/publisher');
         }
       )
    }
  }