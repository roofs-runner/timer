var React = require('react');
var RactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Clock = require ('Clock');

describe('Clock', () => {
    it('should check if Clock variable exists', () => {
      expect(Clock).toExist();
    });

    describe('render', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            var $el = $(RactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');
        });

    });

    describe('formatSeconds', () => {
       it('should format seconds', () => {
           var clock = TestUtils.renderIntoDocument(<Clock/>);
           var seconds = 615;
           var expected = '10:15';
           var actual = clock.formatSeconds(seconds);

           expect(actual).toBe(expected);
       });

        it('should format seconds when min/sec is less then 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        })
    })
});