const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pieces-DLbqhDML.css","./pieces-D9ZFZEYe.css","./pieces-BJ-bZq8S.css","./pieces-DFLfFE4k.css","./pieces-B8wvb_Qi.css","./pieces-B6Ow5YmH.css","./pieces-CEMrv9jL.css"])))=>i.map(i=>d[i]);
import{_ as L}from"./iframe-CLMNxNwm.js";import{j as re}from"./jsx-runtime-QvZ8i92b.js";import{r as I}from"./index-uubelm5h.js";import{k as v,c as qe,d as P,o as fe,e as De,f as V,i as sn,g as le,h as an,j as se,l as N,n as Ae,t as q,q as he,r as U,u as dn,v as un,w as A,x as ye,y as Oe,z as fn}from"./index-DdleKAuV.js";import{d as $e}from"./styled-components.browser.esm-E6UAbezC.js";const hn=(e,n,r)=>{const o=e[n];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((i,t)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+n+(n.split("/").length!==r?". Note that variables only represent file names one level deep.":""))))})},B=(e,n)=>Math.abs(e-n),pn=e=>(n,r,o,i)=>B(n,o)<2&&(e==="white"?i===r+1||r<=1&&i===r+2&&n===o:i===r-1||r>=6&&i===r-2&&n===o),Re=(e,n,r,o)=>{const i=B(e,r),t=B(n,o);return i===1&&t===2||i===2&&t===1},Le=(e,n,r,o)=>B(e,r)===B(n,o),Ke=(e,n,r,o)=>e===r||n===o,Be=(e,n,r,o)=>Le(e,n,r,o)||Ke(e,n,r,o),gn=(e,n,r)=>(o,i,t,c)=>B(o,t)<2&&B(i,c)<2||r&&i===c&&i===(e==="white"?0:7)&&(o===4&&(t===2&&n.includes(0)||t===6&&n.includes(7))||n.includes(t));function mn(e,n){const r=n==="white"?"1":"8",o=[];for(const[i,t]of e)i[1]===r&&t.color===n&&t.role==="rook"&&o.push(v(i)[0]);return o}function Ne(e,n,r){const o=e.get(n);if(!o)return[];const i=v(n),t=o.role,c=t==="pawn"?pn(o.color):t==="knight"?Re:t==="bishop"?Le:t==="rook"?Ke:t==="queen"?Be:gn(o.color,mn(e,o.color),r);return qe.filter(s=>(i[0]!==s[0]||i[1]!==s[1])&&c(i[0],i[1],s[0],s[1])).map(P)}function y(e,...n){e&&setTimeout(()=>e(...n),1)}function vn(e){e.orientation=fe(e.orientation),e.animation.current=e.draggable.current=e.selected=void 0}function bn(e,n){for(const[r,o]of n)o?e.pieces.set(r,o):e.pieces.delete(r)}function wn(e,n){if(e.check=void 0,n===!0&&(n=e.turnColor),n)for(const[r,o]of e.pieces)o.role==="king"&&o.color===n&&(e.check=r)}function yn(e,n,r,o){R(e),e.premovable.current=[n,r],y(e.premovable.events.set,n,r,o)}function $(e){e.premovable.current&&(e.premovable.current=void 0,y(e.premovable.events.unset))}function xn(e,n,r){$(e),e.predroppable.current={role:n,key:r},y(e.predroppable.events.set,n,r)}function R(e){const n=e.predroppable;n.current&&(n.current=void 0,y(n.events.unset))}function kn(e,n,r){if(!e.autoCastle)return!1;const o=e.pieces.get(n);if(!o||o.role!=="king")return!1;const i=v(n),t=v(r);if(i[1]!==0&&i[1]!==7||i[1]!==t[1])return!1;i[0]===4&&!e.pieces.has(r)&&(t[0]===6?r=P([7,t[1]]):t[0]===2&&(r=P([0,t[1]])));const c=e.pieces.get(r);return!c||c.color!==o.color||c.role!=="rook"?!1:(e.pieces.delete(n),e.pieces.delete(r),i[0]<t[0]?(e.pieces.set(P([6,t[1]]),o),e.pieces.set(P([5,t[1]]),c)):(e.pieces.set(P([2,t[1]]),o),e.pieces.set(P([3,t[1]]),c)),!0)}function We(e,n,r){const o=e.pieces.get(n),i=e.pieces.get(r);if(n===r||!o)return!1;const t=i&&i.color!==o.color?i:void 0;return r===e.selected&&S(e),y(e.events.move,n,r,t),kn(e,n,r)||(e.pieces.set(r,o),e.pieces.delete(n)),e.lastMove=[n,r],e.check=void 0,y(e.events.change),t||!0}function pe(e,n,r,o){if(e.pieces.has(r))if(o)e.pieces.delete(r);else return!1;return y(e.events.dropNewPiece,n,r),e.pieces.set(r,n),e.lastMove=[r],e.check=void 0,y(e.events.change),e.movable.dests=void 0,e.turnColor=fe(e.turnColor),!0}function Ie(e,n,r){const o=We(e,n,r);return o&&(e.movable.dests=void 0,e.turnColor=fe(e.turnColor),e.animation.current=void 0),o}function ze(e,n,r){if(ge(e,n,r)){const o=Ie(e,n,r);if(o){const i=e.hold.stop();S(e);const t={premove:!1,ctrlKey:e.stats.ctrlKey,holdTime:i};return o!==!0&&(t.captured=o),y(e.movable.events.after,n,r,t),!0}}else if(Sn(e,n,r))return yn(e,n,r,{ctrlKey:e.stats.ctrlKey}),S(e),!0;return S(e),!1}function He(e,n,r,o){const i=e.pieces.get(n);i&&(Pn(e,n,r)||o)?(e.pieces.delete(n),pe(e,i,r,o),y(e.movable.events.afterNewPiece,i.role,r,{premove:!1,predrop:!1})):i&&Cn(e,n,r)?xn(e,i.role,r):($(e),R(e)),e.pieces.delete(n),S(e)}function ae(e,n,r){if(y(e.events.select,n),e.selected){if(e.selected===n&&!e.draggable.enabled){S(e),e.hold.cancel();return}else if((e.selectable.enabled||r)&&e.selected!==n&&ze(e,e.selected,n)){e.stats.dragged=!1;return}}(e.selectable.enabled||e.draggable.enabled)&&(je(e,n)||me(e,n))&&(Fe(e,n),e.hold.start())}function Fe(e,n){e.selected=n,me(e,n)?e.premovable.customDests||(e.premovable.dests=Ne(e.pieces,n,e.premovable.castle)):e.premovable.dests=void 0}function S(e){e.selected=void 0,e.premovable.dests=void 0,e.hold.cancel()}function je(e,n){const r=e.pieces.get(n);return!!r&&(e.movable.color==="both"||e.movable.color===r.color&&e.turnColor===r.color)}const ge=(e,n,r)=>{var o,i;return n!==r&&je(e,n)&&(e.movable.free||!!(!((i=(o=e.movable.dests)===null||o===void 0?void 0:o.get(n))===null||i===void 0)&&i.includes(r)))};function Pn(e,n,r){const o=e.pieces.get(n);return!!o&&(n===r||!e.pieces.has(r))&&(e.movable.color==="both"||e.movable.color===o.color&&e.turnColor===o.color)}function me(e,n){const r=e.pieces.get(n);return!!r&&e.premovable.enabled&&e.movable.color===r.color&&e.turnColor!==r.color}function Sn(e,n,r){var o,i;const t=(i=(o=e.premovable.customDests)===null||o===void 0?void 0:o.get(n))!==null&&i!==void 0?i:Ne(e.pieces,n,e.premovable.castle);return n!==r&&me(e,n)&&t.includes(r)}function Cn(e,n,r){const o=e.pieces.get(n),i=e.pieces.get(r);return!!o&&(!i||i.color!==e.movable.color)&&e.predroppable.enabled&&(o.role!=="pawn"||r[1]!=="1"&&r[1]!=="8")&&e.movable.color===o.color&&e.turnColor!==o.color}function Mn(e,n){const r=e.pieces.get(n);return!!r&&e.draggable.enabled&&(e.movable.color==="both"||e.movable.color===r.color&&(e.turnColor===r.color||e.premovable.enabled))}function _n(e){const n=e.premovable.current;if(!n)return!1;const r=n[0],o=n[1];let i=!1;if(ge(e,r,o)){const t=Ie(e,r,o);if(t){const c={premove:!0};t!==!0&&(c.captured=t),y(e.movable.events.after,r,o,c),i=!0}}return $(e),i}function Tn(e,n){const r=e.predroppable.current;let o=!1;if(!r)return!1;if(n(r)){const i={role:r.role,color:e.movable.color};pe(e,i,r.key)&&(y(e.movable.events.afterNewPiece,r.role,r.key,{premove:!1,predrop:!0}),o=!0)}return R(e),o}function ve(e){$(e),R(e),S(e)}function xe(e){e.movable.color=e.movable.dests=e.animation.current=void 0,ve(e)}function W(e,n,r){let o=Math.floor(8*(e[0]-r.left)/r.width);n||(o=7-o);let i=7-Math.floor(8*(e[1]-r.top)/r.height);return n||(i=7-i),o>=0&&o<8&&i>=0&&i<8?P([o,i]):void 0}function En(e,n,r,o){const i=v(e),t=qe.filter(l=>Be(i[0],i[1],l[0],l[1])||Re(i[0],i[1],l[0],l[1])),s=t.map(l=>De(P(l),r,o)).map(l=>V(n,l)),[,a]=s.reduce((l,u,d)=>l[0]<u?l:[u,d],[s[0],0]);return P(t[a])}const x=e=>e.orientation==="white",Ve="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",qn={p:"pawn",r:"rook",n:"knight",b:"bishop",q:"queen",k:"king"},Dn={pawn:"p",rook:"r",knight:"n",bishop:"b",queen:"q",king:"k"};function Ue(e){e==="start"&&(e=Ve);const n=new Map;let r=7,o=0;for(const i of e)switch(i){case" ":case"[":return n;case"/":if(--r,r<0)return n;o=0;break;case"~":{const t=n.get(P([o-1,r]));t&&(t.promoted=!0);break}default:{const t=i.charCodeAt(0);if(t<57)o+=t-48;else{const c=i.toLowerCase();n.set(P([o,r]),{role:qn[c],color:i===c?"black":"white"}),++o}}}return n}function An(e){return sn.map(n=>le.map(r=>{const o=e.get(r+n);if(o){let i=Dn[o.role];return o.color==="white"&&(i=i.toUpperCase()),o.promoted&&(i+="~"),i}else return"1"}).join("")).join("/").replace(/1{2,}/g,n=>n.length.toString())}function Ze(e,n){n.animation&&(be(e.animation,n.animation),(e.animation.duration||0)<70&&(e.animation.enabled=!1))}function Ge(e,n){var r,o,i;if(!((r=n.movable)===null||r===void 0)&&r.dests&&(e.movable.dests=void 0),!((o=n.drawable)===null||o===void 0)&&o.autoShapes&&(e.drawable.autoShapes=[]),be(e,n),n.fen&&(e.pieces=Ue(n.fen),e.drawable.shapes=((i=n.drawable)===null||i===void 0?void 0:i.shapes)||[]),"check"in n&&wn(e,n.check||!1),"lastMove"in n&&!n.lastMove?e.lastMove=void 0:n.lastMove&&(e.lastMove=n.lastMove),e.selected&&Fe(e,e.selected),Ze(e,n),!e.movable.rookCastle&&e.movable.dests){const t=e.movable.color==="white"?"1":"8",c="e"+t,s=e.movable.dests.get(c),a=e.pieces.get(c);if(!s||!a||a.role!=="king")return;e.movable.dests.set(c,s.filter(l=>!(l==="a"+t&&s.includes("c"+t))&&!(l==="h"+t&&s.includes("g"+t))))}}function be(e,n){for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(Object.prototype.hasOwnProperty.call(e,r)&&ke(e[r])&&ke(n[r])?be(e[r],n[r]):e[r]=n[r])}function ke(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return n===Object.prototype||n===null}const K=(e,n)=>n.animation.enabled?Rn(e,n):O(e,n);function O(e,n){const r=e(n);return n.dom.redraw(),r}const oe=(e,n)=>({key:e,pos:v(e),piece:n}),On=(e,n)=>n.sort((r,o)=>V(e.pos,r.pos)-V(e.pos,o.pos))[0];function $n(e,n){const r=new Map,o=[],i=new Map,t=[],c=[],s=new Map;let a,l,u;for(const[d,g]of e)s.set(d,oe(d,g));for(const d of an)a=n.pieces.get(d),l=s.get(d),a?l?se(a,l.piece)||(t.push(l),c.push(oe(d,a))):c.push(oe(d,a)):l&&t.push(l);for(const d of c)l=On(d,t.filter(g=>se(d.piece,g.piece))),l&&(u=[l.pos[0]-d.pos[0],l.pos[1]-d.pos[1]],r.set(d.key,u.concat(u)),o.push(l.key));for(const d of t)o.includes(d.key)||i.set(d.key,d.piece);return{anims:r,fadings:i}}function Ye(e,n){const r=e.animation.current;if(r===void 0){e.dom.destroyed||e.dom.redrawNow();return}const o=1-(n-r.start)*r.frequency;if(o<=0)e.animation.current=void 0,e.dom.redrawNow();else{const i=Ln(o);for(const t of r.plan.anims.values())t[2]=t[0]*i,t[3]=t[1]*i;e.dom.redrawNow(!0),requestAnimationFrame((t=performance.now())=>Ye(e,t))}}function Rn(e,n){const r=new Map(n.pieces),o=e(n),i=$n(r,n);if(i.anims.size||i.fadings.size){const t=n.animation.current&&n.animation.current.start;n.animation.current={start:performance.now(),frequency:1/n.animation.duration,plan:i},t||Ye(n,performance.now())}else n.dom.redraw();return o}const Ln=e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,Kn=["green","red","blue","yellow"];function Bn(e,n){if(n.touches&&n.touches.length>1)return;n.stopPropagation(),n.preventDefault(),n.ctrlKey?S(e):ve(e);const r=N(n),o=W(r,x(e),e.dom.bounds());o&&(e.drawable.current={orig:o,pos:r,brush:zn(n),snapToValidMove:e.drawable.defaultSnapToValidMove},Qe(e))}function Qe(e){requestAnimationFrame(()=>{const n=e.drawable.current;if(n){const r=W(n.pos,x(e),e.dom.bounds());r||(n.snapToValidMove=!1);const o=n.snapToValidMove?En(n.orig,n.pos,x(e),e.dom.bounds()):r;o!==n.mouseSq&&(n.mouseSq=o,n.dest=o!==n.orig?o:void 0,e.dom.redrawNow()),Qe(e)}})}function Nn(e,n){e.drawable.current&&(e.drawable.current.pos=N(n))}function Wn(e){const n=e.drawable.current;n&&(n.mouseSq&&Hn(e.drawable,n),Xe(e))}function Xe(e){e.drawable.current&&(e.drawable.current=void 0,e.dom.redraw())}function In(e){e.drawable.shapes.length&&(e.drawable.shapes=[],e.dom.redraw(),Je(e.drawable))}function zn(e){var n;const r=(e.shiftKey||e.ctrlKey)&&Ae(e),o=e.altKey||e.metaKey||((n=e.getModifierState)===null||n===void 0?void 0:n.call(e,"AltGraph"));return Kn[(r?1:0)+(o?2:0)]}function Hn(e,n){const r=i=>i.orig===n.orig&&i.dest===n.dest,o=e.shapes.find(r);o&&(e.shapes=e.shapes.filter(i=>!r(i))),(!o||o.brush!==n.brush)&&e.shapes.push({orig:n.orig,dest:n.dest,brush:n.brush}),Je(e)}function Je(e){e.onChange&&e.onChange(e.shapes)}function Fn(e,n){if(!(e.trustAllEvents||n.isTrusted)||n.buttons!==void 0&&n.buttons>1||n.touches&&n.touches.length>1)return;const r=e.dom.bounds(),o=N(n),i=W(o,x(e),r);if(!i)return;const t=e.pieces.get(i),c=e.selected;if(!c&&e.drawable.enabled&&(e.drawable.eraseOnClick||!t||t.color!==e.turnColor)&&In(e),n.cancelable!==!1&&(!n.touches||e.blockTouchScroll||t||c||jn(e,o)))n.preventDefault();else if(n.touches)return;const s=!!e.premovable.current,a=!!e.predroppable.current;e.stats.ctrlKey=n.ctrlKey,e.selected&&ge(e,e.selected,i)?K(d=>ae(d,i),e):ae(e,i);const l=e.selected===i,u=nn(e,i);if(t&&u&&l&&Mn(e,i)){e.draggable.current={orig:i,piece:t,origPos:o,pos:o,started:e.draggable.autoDistance&&e.stats.dragged,element:u,previouslySelected:c,originTarget:n.target,keyHasChanged:!1},u.cgDragging=!0,u.classList.add("dragging");const d=e.dom.elements.ghost;d&&(d.className=`ghost ${t.color} ${t.role}`,q(d,U(r)(v(i),x(e))),he(d,!0)),we(e)}else s&&$(e),a&&R(e);e.dom.redraw()}function jn(e,n){const r=x(e),o=e.dom.bounds(),i=Math.pow(o.width/8,2);for(const t of e.pieces.keys()){const c=De(t,r,o);if(V(c,n)<=i)return!0}return!1}function Vn(e,n,r,o){const i="a0";e.pieces.set(i,n),e.dom.redraw();const t=N(r);e.draggable.current={orig:i,piece:n,origPos:t,pos:t,started:!0,element:()=>nn(e,i),originTarget:r.target,newPiece:!0,force:!!o,keyHasChanged:!1},we(e)}function we(e){requestAnimationFrame(()=>{var n;const r=e.draggable.current;if(!r)return;!((n=e.animation.current)===null||n===void 0)&&n.plan.anims.has(r.orig)&&(e.animation.current=void 0);const o=e.pieces.get(r.orig);if(!o||!se(o,r.piece))Y(e);else if(!r.started&&V(r.pos,r.origPos)>=Math.pow(e.draggable.distance,2)&&(r.started=!0),r.started){if(typeof r.element=="function"){const t=r.element();if(!t)return;t.cgDragging=!0,t.classList.add("dragging"),r.element=t}const i=e.dom.bounds();q(r.element,[r.pos[0]-i.left-i.width/16,r.pos[1]-i.top-i.height/16]),r.keyHasChanged||(r.keyHasChanged=r.orig!==W(r.pos,x(e),i))}we(e)})}function Un(e,n){e.draggable.current&&(!n.touches||n.touches.length<2)&&(e.draggable.current.pos=N(n))}function Zn(e,n){const r=e.draggable.current;if(!r)return;if(n.type==="touchend"&&n.cancelable!==!1&&n.preventDefault(),n.type==="touchend"&&r.originTarget!==n.target&&!r.newPiece){e.draggable.current=void 0;return}$(e),R(e);const o=N(n)||r.pos,i=W(o,x(e),e.dom.bounds());i&&r.started&&r.orig!==i?r.newPiece?He(e,r.orig,i,r.force):(e.stats.ctrlKey=n.ctrlKey,ze(e,r.orig,i)&&(e.stats.dragged=!0)):r.newPiece?e.pieces.delete(r.orig):e.draggable.deleteOnDropOff&&!i&&(e.pieces.delete(r.orig),y(e.events.change)),(r.orig===r.previouslySelected||r.keyHasChanged)&&(r.orig===i||!i)?S(e):e.selectable.enabled||S(e),en(e),e.draggable.current=void 0,e.dom.redraw()}function Y(e){const n=e.draggable.current;n&&(n.newPiece&&e.pieces.delete(n.orig),e.draggable.current=void 0,S(e),en(e),e.dom.redraw())}function en(e){const n=e.dom.elements;n.ghost&&he(n.ghost,!1)}function nn(e,n){let r=e.dom.elements.board.firstChild;for(;r;){if(r.cgKey===n&&r.tagName==="PIECE")return r;r=r.nextSibling}}function Gn(e,n){e.exploding={stage:1,keys:n},e.dom.redraw(),setTimeout(()=>{Pe(e,2),setTimeout(()=>Pe(e,void 0),120)},120)}function Pe(e,n){e.exploding&&(n?e.exploding.stage=n:e.exploding=void 0,e.dom.redraw())}function Yn(e,n){function r(){vn(e),n()}return{set(o){o.orientation&&o.orientation!==e.orientation&&r(),Ze(e,o),(o.fen?K:O)(i=>Ge(i,o),e)},state:e,getFen:()=>An(e.pieces),toggleOrientation:r,setPieces(o){K(i=>bn(i,o),e)},selectSquare(o,i){o?K(t=>ae(t,o,i),e):e.selected&&(S(e),e.dom.redraw())},move(o,i){K(t=>We(t,o,i),e)},newPiece(o,i){K(t=>pe(t,o,i),e)},playPremove(){if(e.premovable.current){if(K(_n,e))return!0;e.dom.redraw()}return!1},playPredrop(o){if(e.predroppable.current){const i=Tn(e,o);return e.dom.redraw(),i}return!1},cancelPremove(){O($,e)},cancelPredrop(){O(R,e)},cancelMove(){O(o=>{ve(o),Y(o)},e)},stop(){O(o=>{xe(o),Y(o)},e)},explode(o){Gn(e,o)},setAutoShapes(o){O(i=>i.drawable.autoShapes=o,e)},setShapes(o){O(i=>i.drawable.shapes=o,e)},getKeyAtDomPos(o){return W(o,x(e),e.dom.bounds())},redrawAll:n,dragNewPiece(o,i,t){Vn(e,o,i,t)},destroy(){xe(e),e.dom.unbind&&e.dom.unbind(),e.dom.destroyed=!0}}}function Qn(){return{pieces:Ue(Ve),orientation:"white",turnColor:"white",coordinates:!0,coordinatesOnSquares:!1,ranksPosition:"right",autoCastle:!0,viewOnly:!1,disableContextMenu:!1,addPieceZIndex:!1,blockTouchScroll:!1,pieceKey:!1,trustAllEvents:!1,highlight:{lastMove:!0,check:!0},animation:{enabled:!0,duration:200},movable:{free:!0,color:"both",showDests:!0,events:{},rookCastle:!0},premovable:{enabled:!0,showDests:!0,castle:!0,events:{}},predroppable:{enabled:!1,events:{}},draggable:{enabled:!0,distance:3,autoDistance:!0,showGhost:!0,deleteOnDropOff:!1},dropmode:{active:!1},selectable:{enabled:!0},stats:{dragged:!("ontouchstart"in window)},events:{},drawable:{enabled:!0,visible:!0,defaultSnapToValidMove:!0,eraseOnClick:!0,shapes:[],autoShapes:[],brushes:{green:{key:"g",color:"#15781B",opacity:1,lineWidth:10},red:{key:"r",color:"#882020",opacity:1,lineWidth:10},blue:{key:"b",color:"#003088",opacity:1,lineWidth:10},yellow:{key:"y",color:"#e68f00",opacity:1,lineWidth:10},paleBlue:{key:"pb",color:"#003088",opacity:.4,lineWidth:15},paleGreen:{key:"pg",color:"#15781B",opacity:.4,lineWidth:15},paleRed:{key:"pr",color:"#882020",opacity:.4,lineWidth:15},paleGrey:{key:"pgr",color:"#4a4a4a",opacity:.35,lineWidth:15},purple:{key:"purple",color:"#68217a",opacity:.65,lineWidth:10},pink:{key:"pink",color:"#ee2080",opacity:.5,lineWidth:10},white:{key:"white",color:"white",opacity:1,lineWidth:10}},prevSvgHash:""},hold:dn()}}const Se={hilitePrimary:{key:"hilitePrimary",color:"#3291ff",opacity:1,lineWidth:1},hiliteWhite:{key:"hiliteWhite",color:"#ffffff",opacity:1,lineWidth:1}};function Xn(){const e=b("defs"),n=w(b("filter"),{id:"cg-filter-blur"});return n.appendChild(w(b("feGaussianBlur"),{stdDeviation:"0.019"})),e.appendChild(n),e}function Jn(e,n,r){var o;const i=e.drawable,t=i.current,c=t&&t.mouseSq?t:void 0,s=new Map,a=e.dom.bounds(),l=i.autoShapes.filter(h=>!h.piece);for(const h of i.shapes.concat(l).concat(c?[c]:[])){if(!h.dest)continue;const p=(o=s.get(h.dest))!==null&&o!==void 0?o:new Set,f=J(X(v(h.orig),e.orientation),a),M=J(X(v(h.dest),e.orientation),a);p.add(ue(f,M)),s.set(h.dest,p)}const u=i.shapes.concat(l).map(h=>({shape:h,current:!1,hash:Ce(h,de(h.dest,s),!1,a)}));c&&u.push({shape:c,current:!0,hash:Ce(c,de(c.dest,s),!0,a)});const d=u.map(h=>h.hash).join(";");if(d===e.drawable.prevSvgHash)return;e.drawable.prevSvgHash=d;const g=n.querySelector("defs");er(i,u,g),nr(u,n.querySelector("g"),r.querySelector("g"),h=>ir(e,h,i.brushes,s,a))}function er(e,n,r){var o;const i=new Map;let t;for(const a of n.filter(l=>l.shape.dest&&l.shape.brush))t=rn(e.brushes[a.shape.brush],a.shape.modifiers),!((o=a.shape.modifiers)===null||o===void 0)&&o.hilite&&i.set(Q(t).key,Q(t)),i.set(t.key,t);const c=new Set;let s=r.firstElementChild;for(;s;)c.add(s.getAttribute("cgKey")),s=s.nextElementSibling;for(const[a,l]of i.entries())c.has(a)||r.appendChild(lr(l))}function nr(e,n,r,o){const i=new Map;for(const t of e)i.set(t.hash,!1);for(const t of[n,r]){const c=[];let s=t.firstElementChild,a;for(;s;)a=s.getAttribute("cgHash"),i.has(a)?i.set(a,!0):c.push(s),s=s.nextElementSibling;for(const l of c)t.removeChild(l)}for(const t of e.filter(c=>!i.get(c.hash)))for(const c of o(t))c.isCustom?r.appendChild(c.el):n.appendChild(c.el)}function Ce({orig:e,dest:n,brush:r,piece:o,modifiers:i,customSvg:t,label:c},s,a,l){var u,d;return[l.width,l.height,a,e,n,r,s&&"-",o&&rr(o),i&&or(i),t&&`custom-${Me(t.html)},${(d=(u=t.center)===null||u===void 0?void 0:u[0])!==null&&d!==void 0?d:"o"}`,c&&`label-${Me(c.text)}`].filter(g=>g).join(",")}function rr(e){return[e.color,e.role,e.scale].filter(n=>n).join(",")}function or(e){return[e.lineWidth,e.hilite&&"*"].filter(n=>n).join(",")}function Me(e){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r)>>>0;return n.toString()}function ir(e,{shape:n,current:r,hash:o},i,t,c){var s,a;const l=J(X(v(n.orig),e.orientation),c),u=n.dest?J(X(v(n.dest),e.orientation),c):l,d=n.brush&&rn(i[n.brush],n.modifiers),g=t.get(n.dest),h=[];if(d){const p=w(b("g"),{cgHash:o});h.push({el:p}),l[0]!==u[0]||l[1]!==u[1]?p.appendChild(cr(n,d,l,u,r,de(n.dest,t))):p.appendChild(tr(i[n.brush],l,r,c))}if(n.label){const p=n.label;(s=p.fill)!==null&&s!==void 0||(p.fill=n.brush&&i[n.brush].color);const f=n.brush?void 0:"tr";h.push({el:sr(p,o,l,u,g,f),isCustom:!0})}if(n.customSvg){const p=(a=n.customSvg.center)!==null&&a!==void 0?a:"orig",[f,M]=p==="label"?tn(l,u,g).map(k=>k-.5):p==="dest"?u:l,C=w(b("g"),{transform:`translate(${f},${M})`,cgHash:o});C.innerHTML=`<svg width="1" height="1" viewBox="0 0 100 100">${n.customSvg.html}</svg>`,h.push({el:C,isCustom:!0})}return h}function tr(e,n,r,o){const i=ar(),t=(o.width+o.height)/(4*Math.max(o.width,o.height));return w(b("circle"),{stroke:e.color,"stroke-width":i[r?0:1],fill:"none",opacity:on(e,r),cx:n[0],cy:n[1],r:t-i[1]/2})}function Q(e){return["#ffffff","#fff","white"].includes(e.color)?Se.hilitePrimary:Se.hiliteWhite}function cr(e,n,r,o,i,t){var c;function s(u){var d;const g=ur(t&&!i),h=o[0]-r[0],p=o[1]-r[1],f=Math.atan2(p,h),M=Math.cos(f)*g,C=Math.sin(f)*g;return w(b("line"),{stroke:u?Q(n).color:n.color,"stroke-width":dr(n,i)+(u?.04:0),"stroke-linecap":"round","marker-end":`url(#arrowhead-${u?Q(n).key:n.key})`,opacity:!((d=e.modifiers)===null||d===void 0)&&d.hilite?1:on(n,i),x1:r[0],y1:r[1],x2:o[0]-M,y2:o[1]-C})}if(!(!((c=e.modifiers)===null||c===void 0)&&c.hilite))return s(!1);const a=b("g"),l=w(b("g"),{filter:"url(#cg-filter-blur)"});return l.appendChild(fr(r,o)),l.appendChild(s(!0)),a.appendChild(l),a.appendChild(s(!1)),a}function lr(e){const n=w(b("marker"),{id:"arrowhead-"+e.key,orient:"auto",overflow:"visible",markerWidth:4,markerHeight:4,refX:e.key.startsWith("hilite")?1.86:2.05,refY:2});return n.appendChild(w(b("path"),{d:"M0,0 V4 L3,2 Z",fill:e.color})),n.setAttribute("cgKey",e.key),n}function sr(e,n,r,o,i,t){var c;const a=.4*.75**e.text.length,l=tn(r,o,i),u=t==="tr"?.4:0,d=w(b("g"),{transform:`translate(${l[0]+u},${l[1]-u})`,cgHash:n});d.appendChild(w(b("circle"),{r:.4/2,"fill-opacity":t?1:.8,"stroke-opacity":t?1:.7,"stroke-width":.03,fill:(c=e.fill)!==null&&c!==void 0?c:"#666",stroke:"white"}));const g=w(b("text"),{"font-size":a,"font-family":"Noto Sans","text-anchor":"middle",fill:"white",y:.13*.75**e.text.length});return g.innerHTML=e.text,d.appendChild(g),d}function X(e,n){return n==="white"?e:[7-e[0],7-e[1]]}function de(e,n){return(e&&n.has(e)&&n.get(e).size>1)===!0}function b(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e,n){for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.setAttribute(r,n[r]);return e}function rn(e,n){return n?{color:e.color,opacity:Math.round(e.opacity*10)/10,lineWidth:Math.round(n.lineWidth||e.lineWidth),key:[e.key,n.lineWidth].filter(r=>r).join("")}:e}function ar(){return[3/64,4/64]}function dr(e,n){return(e.lineWidth||10)*(n?.85:1)/64}function on(e,n){return(e.opacity||1)*(n?.9:1)}function ur(e){return(e?20:10)/64}function J(e,n){const r=Math.min(1,n.width/n.height),o=Math.min(1,n.height/n.width);return[(e[0]-3.5)*r,(3.5-e[1])*o]}function fr(e,n){const r={from:[Math.floor(Math.min(e[0],n[0])),Math.floor(Math.min(e[1],n[1]))],to:[Math.ceil(Math.max(e[0],n[0])),Math.ceil(Math.max(e[1],n[1]))]};return w(b("rect"),{x:r.from[0],y:r.from[1],width:r.to[0]-r.from[0],height:r.to[1]-r.from[1],fill:"none",stroke:"none"})}function ue(e,n,r=!0){const o=Math.atan2(n[1]-e[1],n[0]-e[0])+Math.PI;return r?(Math.round(o*8/Math.PI)+16)%16:o}function hr(e,n){return Math.sqrt([e[0]-n[0],e[1]-n[1]].reduce((r,o)=>r+o*o,0))}function tn(e,n,r){let o=hr(e,n);const i=ue(e,n,!1);if(r&&(o-=33/64,r.size>1)){o-=10/64;const t=ue(e,n);(r.has((t+1)%16)||r.has((t+15)%16))&&t&1&&(o-=.4)}return[e[0]-Math.cos(i)*o,e[1]-Math.sin(i)*o].map(t=>t+.5)}function pr(e,n){e.innerHTML="",e.classList.add("cg-wrap");for(const a of un)e.classList.toggle("orientation-"+a,n.orientation===a);e.classList.toggle("manipulable",!n.viewOnly);const r=A("cg-container");e.appendChild(r);const o=A("cg-board");r.appendChild(o);let i,t,c;if(n.drawable.visible&&(i=w(b("svg"),{class:"cg-shapes",viewBox:"-4 -4 8 8",preserveAspectRatio:"xMidYMid slice"}),i.appendChild(Xn()),i.appendChild(b("g")),t=w(b("svg"),{class:"cg-custom-svgs",viewBox:"-3.5 -3.5 8 8",preserveAspectRatio:"xMidYMid slice"}),t.appendChild(b("g")),c=A("cg-auto-pieces"),r.appendChild(i),r.appendChild(t),r.appendChild(c)),n.coordinates){const a=n.orientation==="black"?" black":"",l=n.ranksPosition==="left"?" left":"";if(n.coordinatesOnSquares){const u=n.orientation==="white"?d=>d+1:d=>8-d;le.forEach((d,g)=>r.appendChild(ie(ye.map(h=>d+h),"squares rank"+u(g)+a+l)))}else r.appendChild(ie(ye,"ranks"+a+l)),r.appendChild(ie(le,"files"+a))}let s;return n.draggable.enabled&&n.draggable.showGhost&&(s=A("piece","ghost"),he(s,!1),r.appendChild(s)),{board:o,container:r,wrap:e,ghost:s,svg:i,customSvg:t,autoPieces:c}}function ie(e,n){const r=A("coords",n);let o;for(const i of e)o=A("coord"),o.textContent=i,r.appendChild(o);return r}function gr(e,n){if(!e.dropmode.active)return;$(e),R(e);const r=e.dropmode.piece;if(r){e.pieces.set("a0",r);const o=N(n),i=o&&W(o,x(e),e.dom.bounds());i&&He(e,"a0",i)}e.dom.redraw()}function mr(e,n){const r=e.dom.elements.board;if("ResizeObserver"in window&&new ResizeObserver(n).observe(e.dom.elements.wrap),(e.disableContextMenu||e.drawable.enabled)&&r.addEventListener("contextmenu",i=>i.preventDefault()),e.viewOnly)return;const o=br(e);r.addEventListener("touchstart",o,{passive:!1}),r.addEventListener("mousedown",o,{passive:!1})}function vr(e,n){const r=[];if("ResizeObserver"in window||r.push(F(document.body,"chessground.resize",n)),!e.viewOnly){const o=_e(e,Un,Nn),i=_e(e,Zn,Wn);for(const c of["touchmove","mousemove"])r.push(F(document,c,o));for(const c of["touchend","mouseup"])r.push(F(document,c,i));const t=()=>e.dom.bounds.clear();r.push(F(document,"scroll",t,{capture:!0,passive:!0})),r.push(F(window,"resize",t,{passive:!0}))}return()=>r.forEach(o=>o())}function F(e,n,r,o){return e.addEventListener(n,r,o),()=>e.removeEventListener(n,r,o)}const br=e=>n=>{e.draggable.current?Y(e):e.drawable.current?Xe(e):n.shiftKey||Ae(n)?e.drawable.enabled&&Bn(e,n):e.viewOnly||(e.dropmode.active?gr(e,n):Fn(e,n))},_e=(e,n,r)=>o=>{e.drawable.current?e.drawable.enabled&&r(e,o):e.viewOnly||n(e,o)};function wr(e){const n=x(e),r=U(e.dom.bounds()),o=e.dom.elements.board,i=e.pieces,t=e.animation.current,c=t?t.plan.anims:new Map,s=t?t.plan.fadings:new Map,a=e.draggable.current,l=xr(e),u=new Set,d=new Set,g=new Map,h=new Map;let p,f,M,C,k,z,ee,_,ne,Z;for(f=o.firstChild;f;){if(p=f.cgKey,cn(f))if(M=i.get(p),k=c.get(p),z=s.get(p),C=f.cgPiece,f.cgDragging&&(!a||a.orig!==p)&&(f.classList.remove("dragging"),q(f,r(v(p),n)),f.cgDragging=!1),!z&&f.cgFading&&(f.cgFading=!1,f.classList.remove("fading")),M){if(k&&f.cgAnimating&&C===j(M)){const m=v(p);m[0]+=k[2],m[1]+=k[3],f.classList.add("anim"),q(f,r(m,n))}else f.cgAnimating&&(f.cgAnimating=!1,f.classList.remove("anim"),q(f,r(v(p),n)),e.addPieceZIndex&&(f.style.zIndex=te(v(p),n)));C===j(M)&&(!z||!f.cgFading)?u.add(p):z&&C===j(z)?(f.classList.add("fading"),f.cgFading=!0):ce(g,C,f)}else ce(g,C,f);else if(ln(f)){const m=f.className;l.get(p)===m?d.add(p):ce(h,m,f)}f=f.nextSibling}for(const[m,H]of l)if(!d.has(m)){ne=h.get(H),Z=ne&&ne.pop();const T=r(v(m),n);if(Z)Z.cgKey=m,q(Z,T);else{const E=A("square",H);E.cgKey=m,q(E,T),o.insertBefore(E,o.firstChild)}}for(const[m,H]of i)if(k=c.get(m),!u.has(m))if(ee=g.get(j(H)),_=ee&&ee.pop(),_){_.cgKey=m,_.cgFading&&(_.classList.remove("fading"),_.cgFading=!1);const T=v(m);e.addPieceZIndex&&(_.style.zIndex=te(T,n)),k&&(_.cgAnimating=!0,_.classList.add("anim"),T[0]+=k[2],T[1]+=k[3]),q(_,r(T,n))}else{const T=j(H),E=A("piece",T),G=v(m);E.cgPiece=T,E.cgKey=m,k&&(E.cgAnimating=!0,G[0]+=k[2],G[1]+=k[3]),q(E,r(G,n)),e.addPieceZIndex&&(E.style.zIndex=te(G,n)),o.appendChild(E)}for(const m of g.values())Ee(e,m);for(const m of h.values())Ee(e,m)}function yr(e){const n=x(e),r=U(e.dom.bounds());let o=e.dom.elements.board.firstChild;for(;o;)(cn(o)&&!o.cgAnimating||ln(o))&&q(o,r(v(o.cgKey),n)),o=o.nextSibling}function Te(e){var n,r;const o=e.dom.elements.wrap.getBoundingClientRect(),i=e.dom.elements.container,t=o.height/o.width,c=Math.floor(o.width*window.devicePixelRatio/8)*8/window.devicePixelRatio,s=c*t;i.style.width=c+"px",i.style.height=s+"px",e.dom.bounds.clear(),(n=e.addDimensionsCssVarsTo)===null||n===void 0||n.style.setProperty("---cg-width",c+"px"),(r=e.addDimensionsCssVarsTo)===null||r===void 0||r.style.setProperty("---cg-height",s+"px")}const cn=e=>e.tagName==="PIECE",ln=e=>e.tagName==="SQUARE";function Ee(e,n){for(const r of n)e.dom.elements.board.removeChild(r)}function te(e,n){const o=e[1];return`${n?10-o:3+o}`}const j=e=>`${e.color} ${e.role}`;function xr(e){var n,r,o;const i=new Map;if(e.lastMove&&e.highlight.lastMove)for(const s of e.lastMove)D(i,s,"last-move");if(e.check&&e.highlight.check&&D(i,e.check,"check"),e.selected&&(D(i,e.selected,"selected"),e.movable.showDests)){const s=(n=e.movable.dests)===null||n===void 0?void 0:n.get(e.selected);if(s)for(const l of s)D(i,l,"move-dest"+(e.pieces.has(l)?" oc":""));const a=(o=(r=e.premovable.customDests)===null||r===void 0?void 0:r.get(e.selected))!==null&&o!==void 0?o:e.premovable.dests;if(a)for(const l of a)D(i,l,"premove-dest"+(e.pieces.has(l)?" oc":""))}const t=e.premovable.current;if(t)for(const s of t)D(i,s,"current-premove");else e.predroppable.current&&D(i,e.predroppable.current.key,"current-premove");const c=e.exploding;if(c)for(const s of c.keys)D(i,s,"exploding"+c.stage);return e.highlight.custom&&e.highlight.custom.forEach((s,a)=>{D(i,a,s)}),i}function D(e,n,r){const o=e.get(n);o?e.set(n,`${o} ${r}`):e.set(n,r)}function ce(e,n,r){const o=e.get(n);o?o.push(r):e.set(n,[r])}function kr(e,n,r){const o=new Map,i=[];for(const s of e)o.set(s.hash,!1);let t=n.firstElementChild,c;for(;t;)c=t.getAttribute("cgHash"),o.has(c)?o.set(c,!0):i.push(t),t=t.nextElementSibling;for(const s of i)n.removeChild(s);for(const s of e)o.get(s.hash)||n.appendChild(r(s))}function Pr(e,n){const o=e.drawable.autoShapes.filter(i=>i.piece).map(i=>({shape:i,hash:Mr(i),current:!1}));kr(o,n,i=>Cr(e,i,e.dom.bounds()))}function Sr(e){var n;const r=x(e),o=U(e.dom.bounds());let i=(n=e.dom.elements.autoPieces)===null||n===void 0?void 0:n.firstChild;for(;i;)Oe(i,o(v(i.cgKey),r),i.cgScale),i=i.nextSibling}function Cr(e,{shape:n,hash:r},o){var i,t,c;const s=n.orig,a=(i=n.piece)===null||i===void 0?void 0:i.role,l=(t=n.piece)===null||t===void 0?void 0:t.color,u=(c=n.piece)===null||c===void 0?void 0:c.scale,d=A("piece",`${a} ${l}`);return d.setAttribute("cgHash",r),d.cgKey=s,d.cgScale=u,Oe(d,U(o)(v(s),x(e)),u),d}const Mr=e=>{var n,r,o;return[e.orig,(n=e.piece)===null||n===void 0?void 0:n.role,(r=e.piece)===null||r===void 0?void 0:r.color,(o=e.piece)===null||o===void 0?void 0:o.scale].join(",")};function _r(e,n){const r=Qn();Ge(r,n||{});function o(){const i="dom"in r?r.dom.unbind:void 0,t=pr(e,r),c=fn(()=>t.board.getBoundingClientRect()),s=u=>{wr(l),t.autoPieces&&Pr(l,t.autoPieces),!u&&t.svg&&Jn(l,t.svg,t.customSvg)},a=()=>{Te(l),yr(l),t.autoPieces&&Sr(l)},l=r;return l.dom={elements:t,bounds:c,redraw:Tr(s),redrawNow:s,unbind:i},l.drawable.prevSvgHash="",Te(l),s(!1),mr(l,a),i||(l.dom.unbind=vr(l,a)),l.events.insert&&l.events.insert(t),l}return Yn(o(),o)}function Tr(e){let n=!1;return()=>{n||(n=!0,requestAnimationFrame(()=>{e(),n=!1}))}}const Er="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:x='http://www.w3.org/1999/xlink'%20viewBox='0%200%208%208'%20shape-rendering='crispEdges'%3e%3cg%20id='a'%3e%3cg%20id='b'%3e%3cg%20id='c'%3e%3cg%20id='d'%3e%3crect%20width='1'%20height='1'%20fill='rgb(201,217,233)'%20id='e'/%3e%3cuse%20x='1'%20y='1'%20href='%23e'%20x:href='%23e'/%3e%3crect%20y='1'%20width='1'%20height='1'%20fill='rgb(129,164,187)'%20id='f'/%3e%3cuse%20x='1'%20y='-1'%20href='%23f'%20x:href='%23f'/%3e%3c/g%3e%3cuse%20x='2'%20href='%23d'%20x:href='%23d'/%3e%3c/g%3e%3cuse%20x='4'%20href='%23c'%20x:href='%23c'/%3e%3c/g%3e%3cuse%20y='2'%20href='%23b'%20x:href='%23b'/%3e%3c/g%3e%3cuse%20y='4'%20href='%23a'%20x:href='%23a'/%3e%3c/svg%3e",qr="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:x='http://www.w3.org/1999/xlink'%20viewBox='0%200%208%208'%20shape-rendering='crispEdges'%3e%3cg%20id='a'%3e%3cg%20id='b'%3e%3cg%20id='c'%3e%3cg%20id='d'%3e%3crect%20width='1'%20height='1'%20fill='rgb(234,208,165)'%20id='e'/%3e%3cuse%20x='1'%20y='1'%20href='%23e'%20x:href='%23e'/%3e%3crect%20y='1'%20width='1'%20height='1'%20fill='rgb(165,117,80)'%20id='f'/%3e%3cuse%20x='1'%20y='-1'%20href='%23f'%20x:href='%23f'/%3e%3c/g%3e%3cuse%20x='2'%20href='%23d'%20x:href='%23d'/%3e%3c/g%3e%3cuse%20x='4'%20href='%23c'%20x:href='%23c'/%3e%3c/g%3e%3cuse%20y='2'%20href='%23b'%20x:href='%23b'/%3e%3c/g%3e%3cuse%20y='4'%20href='%23a'%20x:href='%23a'/%3e%3c/svg%3e",Dr="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:x='http://www.w3.org/1999/xlink'%20viewBox='0%200%208%208'%20shape-rendering='crispEdges'%3e%3cg%20id='a'%3e%3cg%20id='b'%3e%3cg%20id='c'%3e%3cg%20id='d'%3e%3crect%20width='1'%20height='1'%20fill='%23e3e2c4'%20id='e'/%3e%3cuse%20x='1'%20y='1'%20href='%23e'%20x:href='%23e'/%3e%3crect%20y='1'%20width='1'%20height='1'%20fill='%23b7b58f'%20id='f'/%3e%3cuse%20x='1'%20y='-1'%20href='%23f'%20x:href='%23f'/%3e%3c/g%3e%3cuse%20x='2'%20href='%23d'%20x:href='%23d'/%3e%3c/g%3e%3cuse%20x='4'%20href='%23c'%20x:href='%23c'/%3e%3c/g%3e%3cuse%20y='2'%20href='%23b'%20x:href='%23b'/%3e%3c/g%3e%3cuse%20y='4'%20href='%23a'%20x:href='%23a'/%3e%3c/svg%3e",Ar=""+new URL("board-gray--n2KD8Ih.svg",import.meta.url).href,Or="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:x='http://www.w3.org/1999/xlink'%20viewBox='0%200%208%208'%20shape-rendering='crispEdges'%3e%3cg%20id='a'%3e%3cg%20id='b'%3e%3cg%20id='c'%3e%3cg%20id='d'%3e%3crect%20width='1'%20height='1'%20fill='rgb(255,255,248)'%20id='e'/%3e%3cuse%20x='1'%20y='1'%20href='%23e'%20x:href='%23e'/%3e%3crect%20y='1'%20width='1'%20height='1'%20fill='rgb(88,139,87)'%20id='f'/%3e%3cuse%20x='1'%20y='-1'%20href='%23f'%20x:href='%23f'/%3e%3c/g%3e%3cuse%20x='2'%20href='%23d'%20x:href='%23d'/%3e%3c/g%3e%3cuse%20x='4'%20href='%23c'%20x:href='%23c'/%3e%3c/g%3e%3cuse%20y='2'%20href='%23b'%20x:href='%23b'/%3e%3c/g%3e%3cuse%20y='4'%20href='%23a'%20x:href='%23a'/%3e%3c/svg%3e",$r="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:x='http://www.w3.org/1999/xlink'%20viewBox='0%200%208%208'%20shape-rendering='crispEdges'%3e%3cg%20id='a'%3e%3cg%20id='b'%3e%3cg%20id='c'%3e%3cg%20id='d'%3e%3crect%20width='1'%20height='1'%20fill='rgb(255,255,213)'%20id='e'/%3e%3cuse%20x='1'%20y='1'%20href='%23e'%20x:href='%23e'/%3e%3crect%20y='1'%20width='1'%20height='1'%20fill='rgb(116,152,83)'%20id='f'/%3e%3cuse%20x='1'%20y='-1'%20href='%23f'%20x:href='%23f'/%3e%3c/g%3e%3cuse%20x='2'%20href='%23d'%20x:href='%23d'/%3e%3c/g%3e%3cuse%20x='4'%20href='%23c'%20x:href='%23c'/%3e%3c/g%3e%3cuse%20y='2'%20href='%23b'%20x:href='%23b'/%3e%3c/g%3e%3cuse%20y='4'%20href='%23a'%20x:href='%23a'/%3e%3c/svg%3e",Rr=""+new URL("board-old-mJt4d5a4.svg",import.meta.url).href,Lr=""+new URL("board-stone-D1BbTekV.svg",import.meta.url).href,Kr=""+new URL("board-wood-BXURbdRG.svg",import.meta.url).href,Br=$e.div`
  aspect-ratio: 1;
`,Nr=({config:e={},colorTheme:n="default",pieceType:r="alpha",coordinates:o="out",...i})=>{const[t,c]=I.useState(null),s=I.useRef(null);I.useEffect(()=>{hn(Object.assign({"../assets/scss/pieces.alpha.scss":()=>L(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url),"../assets/scss/pieces.berlin.scss":()=>L(()=>Promise.resolve({}),__vite__mapDeps([1]),import.meta.url),"../assets/scss/pieces.cheq.scss":()=>L(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),"../assets/scss/pieces.hastings.scss":()=>L(()=>Promise.resolve({}),__vite__mapDeps([3]),import.meta.url),"../assets/scss/pieces.linares.scss":()=>L(()=>Promise.resolve({}),__vite__mapDeps([4]),import.meta.url),"../assets/scss/pieces.wikipedia.scss":()=>L(()=>Promise.resolve({}),__vite__mapDeps([5]),import.meta.url),"../assets/scss/pieces.zurich.scss":()=>L(()=>Promise.resolve({}),__vite__mapDeps([6]),import.meta.url)}),`../assets/scss/pieces.${r}.scss`,4)},[r]),I.useEffect(()=>{if(s&&s.current&&!t){const l=_r(s.current,e);c(l)}else s&&s.current&&t&&t.set(e)},[s]),I.useEffect(()=>{!i.threat&&e&&(t==null||t.set(e))},[t,e,i.threat]),I.useEffect(()=>{t&&e&&(t==null||t.set(e)),i.threatFrom&&i.threatTo&&(i.threat&&i.threatFrom&&i.threatTo?t==null||t.setShapes([{orig:i.threatFrom,dest:i.threatTo,brush:"red"}]):t==null||t.setShapes([])),i.bestFrom&&i.bestTo&&(i.best&&i.bestFrom&&i.bestTo?t==null||t.setShapes([{orig:i.bestFrom,dest:i.bestTo,brush:"green"}]):t==null||t.setShapes([]))},[e]);const a=()=>{switch(n){case"blue":return Er;case"green1":return Or;case"green2":return $r;case"old":return Rr;case"brown":return qr;case"gray":return Ar;case"stone":return Lr;case"wood":return Kr;default:return Dr}};return re.jsx(Br,{children:re.jsx(Wr,{$background:a(),className:`cgConfig ${r} ${n} ${o}`,children:re.jsx("div",{ref:s,style:{height:"100%",width:"100%"}})})})},Wr=$e.div`
  height: 100%;
  width: 100%;
  cg-board {
    background-image: ${({$background:e})=>`url("${e}")`};
  }
`;Nr.__docgenInfo={description:"Chess board component.",methods:[],displayName:"Board",props:{config:{required:!1,tsType:{name:"CgConfig"},description:"The configuration object for the chessboard.",defaultValue:{value:"{}",computed:!1}},bestFrom:{required:!1,tsType:{name:"string"},description:"The starting position of the best."},bestTo:{required:!1,tsType:{name:"string"},description:"The ending position of the best."},best:{required:!1,tsType:{name:"boolean"},description:"Indicates if there is a best on the board."},threatFrom:{required:!1,tsType:{name:"string"},description:"The starting position of the threat."},threatTo:{required:!1,tsType:{name:"string"},description:"The ending position of the threat."},threat:{required:!1,tsType:{name:"boolean"},description:"Indicates if there is a threat on the board."},colorTheme:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'blue'
| 'brown'
| 'green2'
| 'gray'
| 'green1'
| 'old'
| 'stone'
| 'wood'
| ''`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'brown'"},{name:"literal",value:"'green2'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green1'"},{name:"literal",value:"'old'"},{name:"literal",value:"'stone'"},{name:"literal",value:"'wood'"},{name:"literal",value:"''"}]},description:"The color theme for the chess board.",defaultValue:{value:"'default'",computed:!1}},pieceType:{required:!1,tsType:{name:"union",raw:`| 'alpha'
| 'berlin'
| 'hastings'
| 'linares'
| 'cheq'
| 'zurich'
| 'wikipedia'
| ''`,elements:[{name:"literal",value:"'alpha'"},{name:"literal",value:"'berlin'"},{name:"literal",value:"'hastings'"},{name:"literal",value:"'linares'"},{name:"literal",value:"'cheq'"},{name:"literal",value:"'zurich'"},{name:"literal",value:"'wikipedia'"},{name:"literal",value:"''"}]},description:"The type of chess pieces to use.",defaultValue:{value:"'alpha'",computed:!1}},coordinates:{required:!1,tsType:{name:"union",raw:"'in' | 'out' | 'none'",elements:[{name:"literal",value:"'in'"},{name:"literal",value:"'out'"},{name:"literal",value:"'none'"}]},description:"The display mode for the coordinates on the chess board.",defaultValue:{value:"'out'",computed:!1}}}};export{Nr as B};