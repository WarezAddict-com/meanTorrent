(function () {
  'use strict';

  angular
    .module('invitations.services')
    .factory('InvitationsService', InvitationsService);

  InvitationsService.$inject = ['$resource'];

  function InvitationsService($resource) {
    return $resource('/api/invitations/:invitationId', {
      invitationId: '@_id'
    }, {
      update: {
        method: 'PUT'
      },
      verifyToken: {
        method: 'GET',
        url: '/api/invitations/token/:token',
        params: {
          token: '@token'
        }
      },
      countInvitations: {
        method: 'GET',
        url: '/api/invitations/count'
      },
      sendOfficial: {
        method: 'POST',
        url: '/api/invitations/official/send'
      },
      listOfficial: {
        method: 'GET',
        url: '/api/invitations/official/list',
        isArray: true
      }
    });
  }
}());
