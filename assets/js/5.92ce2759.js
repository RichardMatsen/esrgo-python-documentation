(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{161:function(t,n,i){},162:function(t,n,i){},207:function(t,n,i){"use strict";var o=i(161);i.n(o).a},208:function(t,n,i){"use strict";var o=i(162);i.n(o).a},219:function(t,n,i){"use strict";i.r(n);var o=i(0),e=i(177),s=i.n(e),a={name:"MiniMap",data:function(){return{minimapIsMounted:!1,mapWidth:250,topOffset:250,top:0,zoom:25,scrollSpeed:.5,content:null,page:null,subPage:null}},mounted:function(){this.content=this.$parent.$el,this.setCanvas()},destroyed:function(){window.removeEventListener("scroll",this.onScroll)},methods:{initScrollListener:function(){this.shouldScroll()&&(window.addEventListener("scroll",this.onScroll),this.setTop())},shouldScroll:function(){return this.$refs.minimap.clientHeight*this.zoom/100+this.topOffset>=window.innerHeight},setTop:function(){this.top=-window.scrollY*this.scrollSpeed},onScroll:function(t){this.setTop()},setCanvas:function(){var t=this,n=this.$refs.canvasContainer,i={ignoreElements:function(t){return t.classList.contains("nav-dropdown")||t==n}};o.a.nextTick(function(){s()(t.content,i).then(function(i){n.appendChild(i),t.minimapIsMounted=!0,t.initScrollListener()})})}}},c=(i(207),i(208),i(1)),l=Object(c.a)(a,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"minimap-container",style:{width:this.mapWidth+"px"}},[n("div",{ref:"minimap",staticClass:"minimap",style:{top:this.topOffset+this.top+"px",zoom:this.zoom+"%"}},[n("div",{ref:"canvasContainer"})])])},[],!1,null,"5674b532",null);l.options.__file="MiniMap.vue";n.default=l.exports}}]);