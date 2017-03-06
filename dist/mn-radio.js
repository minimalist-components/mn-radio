"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var MnRadio=function(_HTMLElement){function MnRadio(self){function setInputAttribute(attribute){var isDefaultAttribute=attribute.hasOwnProperty("default"),attributeValue=element.getAttribute(attribute.name);if(isDefaultAttribute){var isValidValue=attribute.hasOwnProperty("values")&&attribute.values.indexOf(attributeValue)>=0,value=isValidValue?attributeValue:attribute.default;input.setAttribute(attribute.name,value)}else attributeValue&&input.setAttribute(attribute.name,attributeValue)}var _this,_ret;_classCallCheck(this,MnRadio),self=_this=_possibleConstructorReturn(this,(MnRadio.__proto__||Object.getPrototypeOf(MnRadio)).call(this,self));var element=_this,inputAttributes=[{name:"type",default:"radio"},{name:"name"},{name:"autofocus"},{name:"checked"},{name:"disabled"},{name:"value"}],label=document.createElement("label"),input=document.createElement("input");inputAttributes.map(setInputAttribute),label.appendChild(input);var radio=document.createElement("div");return radio.className="radio",label.appendChild(radio),element.appendChild(label),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnRadio,_HTMLElement),MnRadio}(HTMLElement);window.customElements.define("mn-radio",MnRadio),window.MnRadio=MnRadio;
//# sourceMappingURL=mn-radio.js.map
