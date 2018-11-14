angular
  .module('mwl.calendar.docs')
  .factory('alert', function($uibModal) {

    function show(action, event) {
      return $uibModal.open({
        templateUrl: 'modalContent.html',
        controller: function() {
          var vm = this;
          vm.action = action;
          vm.event = event;
          vm.medico = "Dr. Pablo Mendes"
        },
        controllerAs: 'vm'
      });
    }

    return {
      show: show
    };

  });
