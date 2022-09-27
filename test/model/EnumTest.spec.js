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
    describe('EnumTest', function() {
      beforeEach(function() {
        instance = new SwaggerPetstore.EnumTest();
      });

      it('should create an instance of EnumTest', function() {
        // TODO: update the code to test EnumTest
        expect(instance).to.be.a(SwaggerPetstore.EnumTest);
      });

      it('should have the property enumString (base name: "enum_string")', function() {
        // TODO: update the code to test the property enumString
        expect(instance).to.have.property('enumString');
        // expect(instance.enumString).to.be(expectedValueLiteral);
      });

      it('should have the property enumInteger (base name: "enum_integer")', function() {
        // TODO: update the code to test the property enumInteger
        expect(instance).to.have.property('enumInteger');
        // expect(instance.enumInteger).to.be(expectedValueLiteral);
      });

      it('should have the property enumNumber (base name: "enum_number")', function() {
        // TODO: update the code to test the property enumNumber
        expect(instance).to.have.property('enumNumber');
        // expect(instance.enumNumber).to.be(expectedValueLiteral);
      });

      it('should have the property outerEnum (base name: "outerEnum")', function() {
        // TODO: update the code to test the property outerEnum
        expect(instance).to.have.property('outerEnum');
        // expect(instance.outerEnum).to.be(expectedValueLiteral);
      });

    });
  });

}));
