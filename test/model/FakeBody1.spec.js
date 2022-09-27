/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerPetstore);
  }
}(this, function(expect, SwaggerPetstore) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('FakeBody1', function() {
      beforeEach(function() {
        instance = new SwaggerPetstore.FakeBody1();
      });

      it('should create an instance of FakeBody1', function() {
        // TODO: update the code to test FakeBody1
        expect(instance).to.be.a(SwaggerPetstore.FakeBody1);
      });

      it('should have the property integer (base name: "integer")', function() {
        // TODO: update the code to test the property integer
        expect(instance).to.have.property('integer');
        // expect(instance.integer).to.be(expectedValueLiteral);
      });

      it('should have the property int32 (base name: "int32")', function() {
        // TODO: update the code to test the property int32
        expect(instance).to.have.property('int32');
        // expect(instance.int32).to.be(expectedValueLiteral);
      });

      it('should have the property int64 (base name: "int64")', function() {
        // TODO: update the code to test the property int64
        expect(instance).to.have.property('int64');
        // expect(instance.int64).to.be(expectedValueLiteral);
      });

      it('should have the property _number (base name: "number")', function() {
        // TODO: update the code to test the property _number
        expect(instance).to.have.property('_number');
        // expect(instance._number).to.be(expectedValueLiteral);
      });

      it('should have the property _float (base name: "float")', function() {
        // TODO: update the code to test the property _float
        expect(instance).to.have.property('_float');
        // expect(instance._float).to.be(expectedValueLiteral);
      });

      it('should have the property _double (base name: "double")', function() {
        // TODO: update the code to test the property _double
        expect(instance).to.have.property('_double');
        // expect(instance._double).to.be(expectedValueLiteral);
      });

      it('should have the property _string (base name: "string")', function() {
        // TODO: update the code to test the property _string
        expect(instance).to.have.property('_string');
        // expect(instance._string).to.be(expectedValueLiteral);
      });

      it('should have the property patternWithoutDelimiter (base name: "pattern_without_delimiter")', function() {
        // TODO: update the code to test the property patternWithoutDelimiter
        expect(instance).to.have.property('patternWithoutDelimiter');
        // expect(instance.patternWithoutDelimiter).to.be(expectedValueLiteral);
      });

      it('should have the property _byte (base name: "byte")', function() {
        // TODO: update the code to test the property _byte
        expect(instance).to.have.property('_byte');
        // expect(instance._byte).to.be(expectedValueLiteral);
      });

      it('should have the property binary (base name: "binary")', function() {
        // TODO: update the code to test the property binary
        expect(instance).to.have.property('binary');
        // expect(instance.binary).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property dateTime (base name: "dateTime")', function() {
        // TODO: update the code to test the property dateTime
        expect(instance).to.have.property('dateTime');
        // expect(instance.dateTime).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property callback (base name: "callback")', function() {
        // TODO: update the code to test the property callback
        expect(instance).to.have.property('callback');
        // expect(instance.callback).to.be(expectedValueLiteral);
      });

    });
  });

}));
