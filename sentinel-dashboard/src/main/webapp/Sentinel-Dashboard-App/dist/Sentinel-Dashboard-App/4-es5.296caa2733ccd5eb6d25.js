function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Jioy:function(e,t,n){"use strict";n.d(t,"a",(function(){return M})),n.d(t,"b",(function(){return G})),n.d(t,"c",(function(){return U}));var i=n("rDax"),o=n("ofXK"),s=n("fXoL"),a=n("3Pt+"),c=n("YF2q"),r=n("pdGh"),l=n("PTRe"),u=n("mrSG"),h=n("/KA4"),p=n("FtGj"),f=n("+rOU"),v=n("quSY"),b=n("NXyV"),m=n("VRyK"),d=n("XNiG"),y=n("xgIS"),g=n("IzEk"),O=n("eIep"),z=n("pLZG"),C=n("vkgz"),k=n("3E0/"),A=n("1G5W"),S=n("GR68");function I(e,t){if(1&e&&(s.Sb(0),s.Ac(1),s.Rb()),2&e){var n=s.fc();s.Cb(1),s.Bc(n.nzLabel)}}var w=[[["nz-auto-option"]]],D=["nz-auto-option"],E=["*"],j=["panel"],R=["content"];function V(e,t){}function P(e,t){1&e&&s.yc(0,V,0,0,"ng-template")}function T(e,t){1&e&&s.jc(0)}function x(e,t){if(1&e&&(s.Ub(0,"nz-auto-option",8),s.Ac(1),s.Tb()),2&e){var n=t.$implicit;s.lc("nzValue",n)("nzLabel",n&&n.label?n.label:n),s.Cb(1),s.Cc(" ",n&&n.label?n.label:n," ")}}function _(e,t){if(1&e&&s.yc(0,x,2,3,"nz-auto-option",7),2&e){var n=s.fc(2);s.lc("ngForOf",n.nzDataSource)}}function L(e,t){if(1&e&&(s.Ub(0,"div",0,1),s.Ub(2,"div",2),s.Ub(3,"div",3),s.yc(4,P,1,0,void 0,4),s.Tb(),s.Tb(),s.Tb(),s.yc(5,T,1,0,"ng-template",null,5,s.zc),s.yc(7,_,1,1,"ng-template",null,6,s.zc)),2&e){var n=s.rc(6),i=s.rc(8),o=s.fc();s.Fb("ant-select-dropdown-hidden",!o.showPanel),s.lc("ngClass",o.nzOverlayClassName)("ngStyle",o.nzOverlayStyle)("nzNoAnimation",null==o.noAnimation?null:o.noAnimation.nzNoAnimation)("@slideMotion","enter")("@.disabled",null==o.noAnimation?null:o.noAnimation.nzNoAnimation),s.Cb(4),s.lc("ngTemplateOutlet",o.nzDataSource?i:n)}}var F=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Ib({type:e,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:D,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(e,t){1&e&&(s.kc(w),s.Ub(0,"div",0),s.yc(1,I,2,1,"ng-container",1),s.Tb(),s.jc(2)),2&e&&(s.Cb(1),s.lc("nzStringTemplateOutlet",t.nzLabel))},directives:[r.b],encapsulation:2,changeDetection:0}),e}(),B=function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_classCallCheck(this,e),this.source=t,this.isUserInput=n},W=function(){var e=function(){function e(t,n,i){_classCallCheck(this,e),this.changeDetectorRef=t,this.element=n,this.nzAutocompleteOptgroupComponent=i,this.nzDisabled=!1,this.selectionChange=new s.n,this.mouseEntered=new s.n,this.active=!1,this.selected=!1}return _createClass(e,[{key:"select",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.selected=!0,this.changeDetectorRef.markForCheck(),e&&this.emitSelectionChangeEvent()}},{key:"onMouseEnter",value:function(){this.mouseEntered.emit(this)}},{key:"deselect",value:function(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}},{key:"getLabel",value:function(){return this.nzLabel||this.nzValue.toString()}},{key:"setActiveStyles",value:function(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}},{key:"setInactiveStyles",value:function(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}},{key:"scrollIntoViewIfNeeded",value:function(){Object(h.l)(this.element.nativeElement)}},{key:"selectViaInteraction",value:function(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}},{key:"emitSelectionChangeEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.selectionChange.emit(new B(this,e))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Ob(s.h),s.Ob(s.l),s.Ob(F,8))},e.\u0275cmp=s.Ib({type:e,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(e,t){1&e&&s.cc("click",(function(){return t.selectViaInteraction()}))("mouseenter",(function(){return t.onMouseEnter()}))("mousedown",(function(e){return e.preventDefault()})),2&e&&(s.Db("aria-selected",t.selected.toString())("aria-disabled",t.nzDisabled.toString()),s.Fb("ant-select-item-option-grouped",t.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",t.selected)("ant-select-item-option-active",t.active)("ant-select-item-option-disabled",t.nzDisabled))},inputs:{nzDisabled:"nzDisabled",nzValue:"nzValue",nzLabel:"nzLabel"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:E,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(e,t){1&e&&(s.kc(),s.Ub(0,"div",0),s.jc(1),s.Tb())},encapsulation:2,changeDetection:0}),Object(u.b)([Object(h.a)(),Object(u.c)("design:type",Object)],e.prototype,"nzDisabled",void 0),e}(),M=function(){var e=function(){function e(t,n,i){var o=this;_classCallCheck(this,e),this.changeDetectorRef=t,this.ngZone=n,this.noAnimation=i,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=function(e,t){return e===t},this.selectionChange=new s.n,this.showPanel=!0,this.isOpen=!1,this.activeItemIndex=-1,this.selectionChangeSubscription=v.a.EMPTY,this.optionMouseEnterSubscription=v.a.EMPTY,this.dataSourceChangeSubscription=v.a.EMPTY,this.optionSelectionChanges=Object(b.a)((function(){return o.options?Object(m.a).apply(void 0,_toConsumableArray(o.options.map((function(e){return e.selectionChange})))):o.ngZone.onStable.asObservable().pipe(Object(g.a)(1),Object(O.a)((function(){return o.optionSelectionChanges})))})),this.optionMouseEnter=Object(b.a)((function(){return o.options?Object(m.a).apply(void 0,_toConsumableArray(o.options.map((function(e){return e.mouseEntered})))):o.ngZone.onStable.asObservable().pipe(Object(g.a)(1),Object(O.a)((function(){return o.optionMouseEnter})))}))}return _createClass(e,[{key:"ngAfterContentInit",value:function(){this.nzDataSource||this.optionsInit()}},{key:"ngAfterViewInit",value:function(){this.nzDataSource&&this.optionsInit()}},{key:"ngOnDestroy",value:function(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe()}},{key:"setVisibility",value:function(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}},{key:"setActiveItem",value:function(e){var t=this.options.toArray()[e];t&&!t.active&&(this.activeItem=t,this.activeItemIndex=e,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles(),this.changeDetectorRef.markForCheck())}},{key:"setNextItemActive",value:function(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}},{key:"setPreviousItemActive",value:function(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}},{key:"getOptionIndex",value:function(e){var t=this;return this.options.reduce((function(n,i,o){return-1===n?t.compareWith(e,i.nzValue)?o:-1:n}),-1)}},{key:"getOption",value:function(e){var t=this;return this.options.find((function(n){return t.compareWith(e,n.nzValue)}))||null}},{key:"optionsInit",value:function(){var e=this;this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe((function(t){!t.dirty&&e.isOpen&&setTimeout((function(){return e.setVisibility()})),e.subscribeOptionChanges()}))}},{key:"clearSelectedOptions",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.options.forEach((function(n){n!==e&&(t&&n.deselect(),n.setInactiveStyles())}))}},{key:"subscribeOptionChanges",value:function(){var e=this;this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe(Object(z.a)((function(e){return e.isUserInput}))).subscribe((function(t){t.source.select(),t.source.setActiveStyles(),e.activeItem=t.source,e.activeItemIndex=e.getOptionIndex(e.activeItem.nzValue),e.clearSelectedOptions(t.source,!0),e.selectionChange.emit(t.source)})),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe((function(t){t.setActiveStyles(),e.activeItem=t,e.activeItemIndex=e.getOptionIndex(e.activeItem.nzValue),e.clearSelectedOptions(t)}))}},{key:"options",get:function(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Ob(s.h),s.Ob(s.z),s.Ob(c.a,9))},e.\u0275cmp=s.Ib({type:e,selectors:[["nz-autocomplete"]],contentQueries:function(e,t,n){var i;1&e&&s.Hb(n,W,!0),2&e&&s.qc(i=s.dc())&&(t.fromContentOptions=i)},viewQuery:function(e,t){var n;1&e&&(s.Ec(s.L,!0),s.Ec(j,!0),s.Ec(R,!0),s.Ec(W,!0)),2&e&&(s.qc(n=s.dc())&&(t.template=n.first),s.qc(n=s.dc())&&(t.panel=n.first),s.qc(n=s.dc())&&(t.content=n.first),s.qc(n=s.dc())&&(t.fromDataSourceOptions=n))},inputs:{nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzWidth:"nzWidth",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:E,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(e,t){1&e&&(s.kc(),s.yc(0,L,9,8,"ng-template"))},directives:[o.i,o.l,c.a,o.p,o.j,W],encapsulation:2,data:{animation:[S.d]},changeDetection:0}),Object(u.b)([Object(h.a)(),Object(u.c)("design:type",Object)],e.prototype,"nzDefaultActiveFirstOption",void 0),Object(u.b)([Object(h.a)(),Object(u.c)("design:type",Object)],e.prototype,"nzBackfill",void 0),e}(),N={provide:a.j,useExisting:Object(s.U)((function(){return U})),multi:!0},U=function(){var e=function(){function e(t,n,i,o,s){_classCallCheck(this,e),this.elementRef=t,this.overlay=n,this.viewContainerRef=i,this.nzInputGroupWhitSuffixOrPrefixDirective=o,this.document=s,this.onChange=function(){},this.onTouched=function(){},this.panelOpen=!1,this.destroy$=new d.a,this.overlayRef=null,this.portal=null,this.previousValue=null}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.destroyPanel()}},{key:"writeValue",value:function(e){var t=this;Promise.resolve(null).then((function(){return t.setTriggerValue(e)}))}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this.elementRef.nativeElement.disabled=e,this.closePanel()}},{key:"openPanel",value:function(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}},{key:"closePanel",value:function(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.selectionChangeSubscription.unsubscribe(),this.overlayBackdropClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.overlayRef.dispose(),this.overlayRef=null,this.portal=null))}},{key:"handleKeydown",value:function(e){var t=e.keyCode,n=t===p.k||t===p.c;t===p.e&&e.preventDefault(),!this.panelOpen||t!==p.e&&t!==p.j?this.panelOpen&&t===p.d?this.nzAutocomplete.showPanel&&this.activeOption&&(e.preventDefault(),this.activeOption.selectViaInteraction()):this.panelOpen&&n&&this.nzAutocomplete.showPanel&&(e.stopPropagation(),e.preventDefault(),t===p.k?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}},{key:"handleInput",value:function(e){var t=e.target,n=this.document,i=t.value;"number"===t.type&&(i=""===i?null:parseFloat(i)),this.previousValue!==i&&(this.previousValue=i,this.onChange(i),this.canOpen()&&n.activeElement===e.target&&this.openPanel())}},{key:"handleFocus",value:function(){this.canOpen()&&this.openPanel()}},{key:"handleBlur",value:function(){this.onTouched()}},{key:"subscribeOptionsChange",value:function(){var e=this;return this.nzAutocomplete.options.changes.pipe(Object(C.a)((function(){return e.positionStrategy.reapplyLastPosition()})),Object(k.a)(0)).subscribe((function(){e.resetActiveItem(),e.panelOpen&&e.overlayRef.updatePosition()}))}},{key:"subscribeSelectionChange",value:function(){var e=this;return this.nzAutocomplete.selectionChange.subscribe((function(t){e.setValueAndClose(t)}))}},{key:"subscribeOverlayBackdropClick",value:function(){var e=this;return Object(m.a)(Object(y.a)(this.document,"click"),Object(y.a)(this.document,"touchend")).subscribe((function(t){var n=t.target;n!==e.elementRef.nativeElement&&!e.overlayRef.overlayElement.contains(n)&&e.panelOpen&&e.closePanel()}))}},{key:"attachOverlay",value:function(){var e=this;if(!this.nzAutocomplete)throw Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");!this.portal&&this.nzAutocomplete.template&&(this.portal=new f.g(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.overlayBackdropClickSubscription=this.subscribeOverlayBackdropClick(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayRef.detachments().pipe(Object(A.a)(this.destroy$)).subscribe((function(){e.closePanel()}))),this.nzAutocomplete.isOpen=this.panelOpen=!0}},{key:"updateStatus",value:function(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}},{key:"destroyPanel",value:function(){this.overlayRef&&this.closePanel()}},{key:"getOverlayConfig",value:function(){return new i.e({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}},{key:"getConnectedElement",value:function(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}},{key:"getHostWidth",value:function(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}},{key:"getOverlayPosition",value:function(){var e=[new i.c({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new i.c({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(e).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}},{key:"resetActiveItem",value:function(){var e=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==e?(this.nzAutocomplete.setActiveItem(e),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}},{key:"setValueAndClose",value:function(e){var t=e.nzValue;this.setTriggerValue(e.getLabel()),this.onChange(t),this.elementRef.nativeElement.focus(),this.closePanel()}},{key:"setTriggerValue",value:function(e){var t=this.nzAutocomplete.getOption(e),n=t?t.getLabel():e;this.elementRef.nativeElement.value=null!=n?n:"",this.nzAutocomplete.nzBackfill||(this.previousValue=n)}},{key:"doBackfill",value:function(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}},{key:"canOpen",value:function(){var e=this.elementRef.nativeElement;return!e.readOnly&&!e.disabled}},{key:"activeOption",get:function(){if(this.nzAutocomplete&&this.nzAutocomplete.options.length)return this.nzAutocomplete.activeItem}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Ob(s.l),s.Ob(i.d),s.Ob(s.P),s.Ob(l.c,8),s.Ob(o.d,8))},e.\u0275dir=s.Jb({type:e,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(e,t){1&e&&s.cc("focusin",(function(){return t.handleFocus()}))("blur",(function(){return t.handleBlur()}))("input",(function(e){return t.handleInput(e)}))("keydown",(function(e){return t.handleKeydown(e)}))},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[s.Bb([N])]}),e}(),G=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=s.Mb({type:e}),e.\u0275inj=s.Lb({factory:function(t){return new(t||e)},imports:[[o.c,i.f,a.i,r.a,c.b,l.d]]}),e}()}}]);