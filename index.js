function formatDate(d){
  function pad(n){return n<10 ? '0'+n : n}
  return d.getFullYear()+'-'
      + pad(d.getMonth()+1)+'-'
      + pad(d.getDate());
}

var today = new Date();

exports.variables = {
    description: "Project description: "
  , author: "Enter your name: "
  , email: "Enter your email: "
  , username: "Enter your github username: "
  , date: formatDate(today)
  , year: today.getFullYear()
};