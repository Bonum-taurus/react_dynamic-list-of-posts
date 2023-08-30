(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var c=s(8),n=s.n(c),a=s(6),i=s(2),r=s(1),o=(s(13),s(14),s(15),s(3)),l=s.n(o),d=s(0),m=function(e){var t=e.postsOfUser,s=e.loadComments,c=e.currentPostId,n=e.isOpenPost;return Object(d.jsxs)("div",{"data-cy":"PostsList",children:[Object(d.jsx)("p",{className:"title",children:"Posts:"}),Object(d.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"has-background-link-light",children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"Post",children:[Object(d.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(d.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{onClick:function(){return s(e.id)},type:"button","data-cy":"PostButton",className:l()("button is-link",{"is-light":c!==e.id}),children:c===e.id&&n?"Close":"Open"})})]},e.id)}))})]})]})},j=(s(17),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),b="https://mate.academy/students-api";function u(e){return new Promise((function(t){setTimeout(t,e)}))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),u(300).then((function(){return fetch(b+e,c)})).then((function(e){return e.json()}))}var O=function(e){return h(e)},x=function(e,t){return h(e,"POST",t)},f=function(e){return h(e,"DELETE")},p=function(e){var t=e.currentPostId,s=e.setComments,c=e.comments,n=e.setIsErrorComments,o=Object(r.useState)(""),m=Object(i.a)(o,2),j=m[0],b=m[1],u=Object(r.useState)(!1),h=Object(i.a)(u,2),O=h[0],f=h[1],p=Object(r.useState)(""),N=Object(i.a)(p,2),y=N[0],v=N[1],g=Object(r.useState)(!1),C=Object(i.a)(g,2),S=C[0],P=C[1],w=Object(r.useState)(""),E=Object(i.a)(w,2),I=E[0],k=E[1],F=Object(r.useState)(!1),T=Object(i.a)(F,2),D=T[0],U=T[1],B=Object(r.useState)(!1),L=Object(i.a)(B,2),M=L[0],A=L[1];return Object(d.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault();var i=j.trim(),r=y.trim(),o=I.trim();f(!i),P(!r),U(!o),i&&r&&o&&(A(!0),function(e){var t=e.postId,s=e.name,c=e.email,n=e.body;return x("/comments",{postId:t,name:s,email:c,body:n})}({postId:t,name:i,email:r,body:o}).then((function(e){s([].concat(Object(a.a)(c),[e])),k("")})).catch((function(){return n(!0)})).finally((function(){return A(!1)})))},onReset:function(){b(""),v(""),k(""),f(!1),P(!1),U(!1)},children:[Object(d.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{value:j,onChange:function(e){b(e.target.value),f(!1)},type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:l()("input",{"is-danger":O})}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-user"})}),O&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),O&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{value:y,onChange:function(e){v(e.target.value),P(!1)},type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:l()("input",{"is-danger":S})}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-envelope"})}),S&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("textarea",{value:I,onChange:function(e){k(e.target.value),U(!1)},id:"comment-body",name:"body",placeholder:"Type comment here",className:l()("textarea",{"is-danger":D})})}),D&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit",className:l()("button is-link",{"is-loading":M}),children:"Add"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"reset",className:"button is-link is-light",children:"Clear"})})]})]})},N=function(e){var t=e.currentPost,s=e.comments,c=e.showSpinner,n=e.isNotComments,a=e.isErrorComments,i=e.openForm,r=e.setOpenForm,o=e.currentPostId,l=e.setComments,m=e.setIsErrorComments,b=e.hendleDeleteComment;return Object(d.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(d.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(d.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(d.jsxs)("div",{className:"block",children:[c&&Object(d.jsx)(j,{}),a&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),n&&Object(d.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!c&&!n&&!a&&Object(d.jsx)("p",{className:"title is-4",children:"Comments:"}),!a&&s.map((function(e){return Object(d.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(d.jsxs)("div",{className:"message-header",children:[Object(d.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(d.jsx)("button",{onClick:function(){return b(e.id)},"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",children:"delete button"})]}),Object(d.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)})),!c&&!a&&!i&&Object(d.jsx)("button",{onClick:function(){return r(!0)},"data-cy":"WriteCommentButton",type:"button",className:"button is-link",children:"Write a comment"})]}),i&&!a&&Object(d.jsx)(p,{currentPostId:o,setComments:l,comments:s,setIsErrorComments:m})]})})},y=function(e){var t=e.user,s=e.setUser,c=e.users,n=e.loadPosts,a=e.dropdown,i=e.setDropdown,r=e.activeUserId;return Object(d.jsxs)("div",{"data-cy":"UserSelector",className:l()("dropdown",{"is-active":a}),children:[Object(d.jsx)("div",{className:"dropdown-trigger",children:Object(d.jsxs)("button",{onClick:function(){return i(!a)},type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",children:[Object(d.jsx)("span",{children:t}),Object(d.jsx)("span",{className:"icon is-small",children:Object(d.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(d.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(d.jsx)("div",{className:"dropdown-content",children:c.map((function(e){var t=e.id,c=e.name;return Object(d.jsx)("a",{onClick:function(){s(c),n(t)},href:"#user-".concat(t),className:l()("dropdown-item",{"is-active":r===t}),children:c},t)}))})})]})},v=function(){var e=Object(r.useState)("Choose a user"),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(r.useState)([]),o=Object(i.a)(n,2),b=o[0],u=o[1],h=Object(r.useState)([]),x=Object(i.a)(h,2),p=x[0],v=x[1],g=Object(r.useState)(!1),C=Object(i.a)(g,2),S=C[0],P=C[1],w=Object(r.useState)(!1),E=Object(i.a)(w,2),I=E[0],k=E[1],F=Object(r.useState)(0),T=Object(i.a)(F,2),D=T[0],U=T[1],B=Object(r.useState)(!1),L=Object(i.a)(B,2),M=L[0],A=L[1],_=Object(r.useState)(!1),J=Object(i.a)(_,2),q=J[0],W=J[1],G=Object(r.useState)(!1),R=Object(i.a)(G,2),Y=R[0],z=R[1],H=Object(r.useState)([]),K=Object(i.a)(H,2),Q=K[0],V=K[1],X=Object(r.useState)(0),Z=Object(i.a)(X,2),$=Z[0],ee=Z[1],te=Object(r.useState)(!1),se=Object(i.a)(te,2),ce=se[0],ne=se[1],ae=Object(r.useState)(!1),ie=Object(i.a)(ae,2),re=ie[0],oe=ie[1],le=Object(r.useState)(!1),de=Object(i.a)(le,2),me=de[0],je=de[1],be=Object(r.useState)(!1),ue=Object(i.a)(be,2),he=ue[0],Oe=ue[1];Object(r.useEffect)((function(){O("/users").then(u)}),[]);var xe=Object(r.useMemo)((function(){var e=p.find((function(e){return e.id===$}));return e||{id:0,userId:0,title:"",body:""}}),[$]);return Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"tile is-ancestor",children:[Object(d.jsx)("div",{className:"tile is-parent",children:Object(d.jsxs)("div",{className:"tile is-child box is-success",children:[Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(y,{user:s,setUser:c,users:b,loadPosts:function(e){v([]),ee(0),z(!1),W(!0),A(!1),function(e){return O("/posts?userId=".concat(e))}(e).then((function(e){e.length||A(!0),e.length&&A(!1),v(e)})).catch((function(){return z(!0)})).finally((function(){return W(!1)})),k(!1),U(e)},dropdown:I,setDropdown:k,activeUserId:D})}),Object(d.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!D&&Object(d.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),q&&Object(d.jsx)(j,{}),Y&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),M&&Object(d.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),!!p.length&&Object(d.jsx)(m,{postsOfUser:p,loadComments:function(e){if(S&&$===e)return P(!1),void ee(0);P(!0),Oe(!1),oe(!1),je(!1),V([]),ne(!0),ee(e),function(e){return O("/comments?postId=".concat(e))}(e).then((function(e){e.length||oe(!0),e.length&&oe(!1),V(e)})).catch((function(){return je(!0)})).finally((function(){return ne(!1)}))},currentPostId:$,isOpenPost:S})]})]})}),S&&Object(d.jsx)("div",{"data-cy":"Sidebar",className:l()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":S}),children:Object(d.jsx)("div",{className:"tile is-child box is-success ",children:Object(d.jsx)(N,{comments:Q,currentPost:xe,showSpinner:ce,isNotComments:re,isErrorComments:me,openForm:he,setOpenForm:Oe,currentPostId:$,setComments:V,setIsErrorComments:je,hendleDeleteComment:function(e){var t=Object(a.a)(Q),s=t.find((function(t){return t.id===e}));if(s){var c=t.indexOf(s);t.splice(c,1),V(t)}(function(e){return f("/comments/".concat(e))})(e).catch((function(){return V(Q)}))}})})})]})})})};n.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.04f27643.chunk.js.map