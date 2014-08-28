describe('Slider', function () {
  beforeEach(module('ideum.slider'));

  describe('<ideum-slider>', function () {
    beforeEach(inject(function ($rootScope, $compile) {
      var scope = $rootScope.$new(),
          element = '<div ideum-slider><article ideum-slide>Hello, World</article></div>';

      this.element = $compile(element)(scope);
      scope.$digest();
    }));

    it('should have a class of "slider"', function () {
      expect(this.element).toHaveClass('slider');
    });

    it('should transclude its children into a div with a class of "slides"', function () {
      var div = this.element.find('div.slides');

      expect(div).toExist();
      expect(div).toHaveText('Hello, World');
    });
  });
});
