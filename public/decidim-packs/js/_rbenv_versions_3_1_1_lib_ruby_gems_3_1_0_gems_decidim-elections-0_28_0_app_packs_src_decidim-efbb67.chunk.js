"use strict";
(self["webpackChunkdecidim_base"] = self["webpackChunkdecidim_base"] || []).push([["_rbenv_versions_3_1_1_lib_ruby_gems_3_1_0_gems_decidim-elections-0_28_0_app_packs_src_decidim-efbb67"],{

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-elections-0.28.0/app/packs/src/decidim/elections/voter/setup-vote.js":
/*!**************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-elections-0.28.0/app/packs/src/decidim/elections/voter/setup-vote.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setupVoteComponent; }
/* harmony export */ });
/* harmony import */ var src_decidim_elections_broken_promises_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/elections/broken_promises_handler */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-elections-0.28.0/app/packs/src/decidim/elections/broken_promises_handler.js");
/* harmony import */ var src_decidim_elections_broken_promises_handler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_elections_broken_promises_handler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _decidim_decidim_bulletin_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @decidim/decidim-bulletin_board */ "./node_modules/@decidim/decidim-bulletin_board/src/index.js");
/* harmony import */ var _decidim_voting_schemes_dummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @decidim/voting_schemes-dummy */ "./node_modules/@decidim/voting_schemes-dummy/src/index.js");
/* harmony import */ var _decidim_voting_schemes_electionguard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @decidim/voting_schemes-electionguard */ "./node_modules/@decidim/voting_schemes-electionguard/src/index.js");
/* eslint-disable require-jsdoc */

// show a message to the user if comunication is lost



var DummyVoterWrapperAdapter = _decidim_voting_schemes_dummy__WEBPACK_IMPORTED_MODULE_2__.VoterWrapperAdapter;

var ElectionGuardVoterWrapperAdapter = _decidim_voting_schemes_electionguard__WEBPACK_IMPORTED_MODULE_3__.VoterWrapperAdapter;
function setupVoteComponent($voteWrapper) {
  // Data
  var bulletinBoardClientParams = {
    apiEndpointUrl: $voteWrapper.data("apiEndpointUrl")
  };
  var electionUniqueId = $voteWrapper.data("electionUniqueId");
  var authorityPublicKeyJSON = JSON.stringify($voteWrapper.data("authorityPublicKey"));
  var voterUniqueId = $voteWrapper.data("voterId");
  var schemeName = $voteWrapper.data("schemeName");

  // Use the correct voter wrapper adapter
  var voterWrapperAdapter = null;
  if (schemeName === "dummy") {
    voterWrapperAdapter = new DummyVoterWrapperAdapter({
      voterId: voterUniqueId
    });
  } else if (schemeName === "electionguard") {
    voterWrapperAdapter = new ElectionGuardVoterWrapperAdapter({
      voterId: voterUniqueId,
      workerUrl: "/assets/electionguard/webworker.js"
    });
  } else {
    throw new Error("Voting scheme ".concat(schemeName, " not supported."));
  }

  // Returns the vote component
  return new _decidim_decidim_bulletin_board__WEBPACK_IMPORTED_MODULE_1__.VoteComponent({
    bulletinBoardClientParams: bulletinBoardClientParams,
    authorityPublicKeyJSON: authorityPublicKeyJSON,
    electionUniqueId: electionUniqueId,
    voterUniqueId: voterUniqueId,
    voterWrapperAdapter: voterWrapperAdapter
  });
}

/***/ })

}]);
//# sourceMappingURL=_rbenv_versions_3_1_1_lib_ruby_gems_3_1_0_gems_decidim-elections-0_28_0_app_packs_src_decidim-efbb67.chunk.js.map