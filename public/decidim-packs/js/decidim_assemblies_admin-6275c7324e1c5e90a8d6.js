!function(){var e={97726:function(){$((function(){var e=$("#assembly_scopes_enabled"),n=$("#assembly_scope_id");$(".edit_assembly, .new_assembly").length>0&&(e.on("change",(function(e){var t=e.target.checked;n.attr("disabled",!t)})),n.attr("disabled",!e.prop("checked")));var t=$(".assembly_form_admin");if(t.length>0){var r=t.find("#private_space"),i=t.find("#is_transparent"),o=t.find("#special_features"),l=function(){var e=r.find("input[type='checkbox']").prop("checked");i.find("input[type='checkbox']").attr("disabled","disabled"),o.hide(),e&&(i.find("input[type='checkbox']").attr("disabled",!e),o.show())};r.on("change",l),l();var a=t.find("#assembly_assembly_type"),s=t.find("#assembly_type_other"),d=t.find("#assembly_created_by"),c=t.find("#created_by_other"),u=function(e,n){var t=e.val();n.hide(),"others"===t&&n.show()};a.on("change",(function(e){var n=$(e.target);u(n,s)})),d.on("change",(function(e){var n=$(e.target);u(n,c)})),u(a,s),u(d,c)}}))},16551:function(){$((function(){var e=$(".slug"),n=e.find("input"),t=e.find("span.slug-url-value");n.on("keyup",(function(e){t.html(e.target.value)}))}))}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}!function(){"use strict";t(97726);function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,r(i.key),i)}}function r(n){var t=function(n,t){if("object"!=e(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var i=r.call(n,t||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==e(t)?t:String(t)}var i=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.controllerField=n.controllerField,this.wrapperSelector=n.wrapperSelector,this.dependentFieldsSelector=n.dependentFieldsSelector,this.dependentInputSelector=n.dependentInputSelector,this.enablingCondition=n.enablingCondition,this._bindEvent(),this._run()}var t,r,i;return t=e,(r=[{key:"_run",value:function(){var e=this.controllerField,n=e.parents(this.wrapperSelector).find(this.dependentFieldsSelector),t=n.find(this.dependentInputSelector);this.enablingCondition(e)?(t.prop("disabled",!1),n.show()):(t.prop("disabled",!0),n.hide())}},{key:"_bindEvent",value:function(){var e=this;this.controllerField.on("change",(function(){e._run()}))}}])&&n(t.prototype,r),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return new i(e)}$((function(){var e=$("#assembly_member_existing_user");o({controllerField:e,wrapperSelector:".user-fields",dependentFieldsSelector:".user-fields--full-name",dependentInputSelector:"input",enablingCondition:function(e){return"false"===e.val()}}),o({controllerField:e,wrapperSelector:".user-fields",dependentFieldsSelector:".user-fields--non-user-avatar",dependentInputSelector:"input",enablingCondition:function(e){return"false"===e.val()}}),o({controllerField:e,wrapperSelector:".user-fields",dependentFieldsSelector:".user-fields--user-picker",dependentInputSelector:"input",enablingCondition:function(e){return"true"===e.val()}}),o({controllerField:$("#assembly_member_position"),wrapperSelector:".position-fields",dependentFieldsSelector:".position-fields--position-other",dependentInputSelector:"input",enablingCondition:function(e){return"other"===e.val()}})}));t(16551)}()}();
//# sourceMappingURL=decidim_assemblies_admin-6275c7324e1c5e90a8d6.js.map