async function run(dc, message, args) {
  if (dc.state.get('jasonstat')) {
    dc.state.set('jasonstat', false);
  }
  else {
    dc.state.set('jasonstat', true);
  }
}

module.exports = {
  run
}