/**
 * User: walter
 * Date: 7/4/13
 * Time: 12:06 AM
 */
var swbpMapsModule = angular.module('swbp-google-map', []);

function MapModel(opts) {
   var that = this;
   var mapInstance = null;
   var defaultOptions = {
       zoom: 8,
       draggable: false,
       mapDiv: null
   }

   return {
       mapOptions: angular.extend({},defaultOptions,opts),
       drawMap: function() {
           mapInstance = new google.maps.Map(this.mapOptions.mapDiv,this.mapOptions);
       }



   };
}

swbpMapsModule.directive('swbpGoogleMap',['$log', '$timeout', '$filter', function($compile) {

    var controller = ["$scope","$element", "$attrs", function($scope, $element, $attrs) {
        var mapModel = new MapModel();

    }];

    return {
        transclude: true,
        replace: true,
        restrict: 'EAC',
        template: '<div style="width: 100%; height: 100%"></div>',
        scope: {
            center: '=center',
            lat: '=lat',
            lng: '=lng',
            zoom: '=zoom'

        },
        link: function (scope, element, attrs) {
            var mapOptions = {
                center: new google.maps.LatLng(-34.397, 150.644),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
                };
            var map = new MapModel(angular.extend({},mapOptions,{
                mapDiv: element[0]
            }));
            map.drawMap();

        }

    };
}]);
