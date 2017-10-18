var geoForm = require('../js/geoForm.js');
const assert = require('chai').assert;


describe('geoFormObj', function () {
  beforeEach(function () {
    geoFormObj = new geoForm();
  });

it("it has a sample test", function() {
  assert.equal(true, true)
  });


it('should return hello', function() {
  assert.equal(geoForm(), "hello");
});
  
  // it("can accept Edinburgh as a valid location", function() {
  //   geoFormObj.setLocation("Edinburgh");
  //   assert.equal("Edinburgh")
  // });

  });