!function(){var t={8481:function(){$((function(){var t=function(){return $(".table-list .js-check-all-proposal:checked").length},e=function(){return $(".table-list [data-published-state=false] .js-check-all-proposal:checked").length},o=function(){var o=t(),a=e();0===o?$("#js-selected-proposals-count").text(""):$("#js-selected-proposals-count").text(o),o>=2?$('button[data-action="merge-proposals"]').parent().show():$('button[data-action="merge-proposals"]').parent().hide(),a>0?($('button[data-action="publish-answers"]').parent().show(),$("#js-form-publish-answers-number").text(a)):$('button[data-action="publish-answers"]').parent().hide()},a=function(){t()>0&&$("#js-bulk-actions-button").removeClass("hide")},n=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];0!==t()&&!0!==e||($("#js-bulk-actions-button").addClass("hide"),$("#js-bulk-actions-dropdown").removeClass("is-open"))},c=function(){$("#js-other-actions-wrapper").removeClass("hide")},s=function(){$("#js-other-actions-wrapper").addClass("hide")},l=function(){$(".js-bulk-action-form").addClass("hide")};window.selectedProposalsCount=t,window.selectedProposalsNotPublishedAnswerCount=e,window.selectedProposalsCountUpdate=o,window.showBulkActionsButton=a,window.hideBulkActionsButton=n,window.showOtherActionsButtons=c,window.hideOtherActionsButtons=s,window.hideBulkActionForms=l,$(".js-bulk-action-form").length&&(l(),$("#js-bulk-actions-button").addClass("hide"),$("#js-bulk-actions-dropdown ul li button").click((function(t){t.preventDefault();var e=$(t.target).data("action");e&&($("#js-form-".concat(e)).submit((function(){$(".layout-content > .callout-wrapper").html("")})),$("#js-".concat(e,"-actions")).removeClass("hide"),n(!0),s())})),$(".js-check-all").change((function(){$(".js-check-all-proposal").prop("checked",$(this).prop("checked")),$(this).prop("checked")?($(".js-check-all-proposal").closest("tr").addClass("selected"),a()):($(".js-check-all-proposal").closest("tr").removeClass("selected"),n()),o()})),$(".table-list").on("change",".js-check-all-proposal",(function(t){var e=$(this).val(),c=$(this).prop("checked");!1===$(this).prop("checked")&&$(".js-check-all").prop("checked",!1),$(".js-check-all-proposal:checked").length===$(".js-check-all-proposal").length&&($(".js-check-all").prop("checked",!0),a()),$(this).prop("checked")?(a(),$(this).closest("tr").addClass("selected")):(n(),$(this).closest("tr").removeClass("selected")),0===$(".js-check-all-proposal:checked").length&&n(),$(".js-bulk-action-form").find(".js-proposal-id-".concat(e)).prop("checked",c),o()})),$(".js-cancel-bulk-action").on("click",(function(t){l(),a(),c()})))}))}},e={};function o(a){var n=e[a];if(void 0!==n)return n.exports;var c=e[a]={exports:{}};return t[a](c,c.exports,o),c.exports}!function(){"use strict";o(8481);function t(t,e,o){var a="".concat(t,"Name");if(o[a])return o[a];var n=e.attr("name"),c=/\[[^\]]+\]$/;return n.match(c)?n.replace(c,"[".concat(t,"]")):t}function e(e,o,a){var n=$.extend({},o),c=e.attr("id").split("_");c.pop();var s="".concat(c.join("_")),l="latitude",i="longitude";e.length>0&&(l=t("latitude",e,n),i=t("longitude",e,n));var d=$.extend({latitudeId:"".concat(s,"_latitude"),longitudeId:"".concat(s,"_longitude"),latitudeName:l,longitudeName:i},o),r=!1,u=function(t){!function(){var t=$("#".concat(d.latitudeId));t.length<1&&(t=$('<input type="hidden" name="'.concat(d.latitudeName,'" id="').concat(d.latitudeId,'" />')),e.after(t));var o=$("#".concat(d.longitudeId));o.length<1&&(o=$('<input type="hidden" name="'.concat(d.longitudeName,'" id="').concat(d.longitudeId,'" />')),e.after(o))}(),$("#".concat(d.latitudeId)).val(t[0]).attr("value",t[0]),$("#".concat(d.longitudeId)).val(t[1]).attr("value",t[1])};e.on("change.decidim",(function(){r||($("#".concat(d.latitudeId)).val("").removeAttr("value"),$("#".concat(d.longitudeId)).val("").removeAttr("value"))})),e.on("geocoder-suggest-coordinates.decidim",(function(t,e){u(e),r=!0,"function"!==typeof a||a(e)}));var p="".concat(e.data("coordinates")).split(",").map(parseFloat);Array.isArray(p)&&2===p.length&&u(p)}$((function(){var t=$(".proposal_form_admin");if(t.length>0){var o=t.find("#proposal_created_in_meeting"),a=t.find("#proposal_meeting"),n=function(){var t=o.prop("checked");a.find("select").attr("disabled","disabled"),a.hide(),t&&(a.find("select").attr("disabled",!t),a.show())};o.on("change",n),n();var c=t.find("#proposal_address");0!==c.length&&e(c)}}))}()}();
//# sourceMappingURL=decidim_proposals_admin-b168e71f487411b1f5cf.js.map