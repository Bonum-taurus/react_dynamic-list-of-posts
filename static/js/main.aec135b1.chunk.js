(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var c=s(7),n=s.n(c),a=s(2),i=s(1),r=(s(13),s(14),s(15),s(3)),o=s.n(r),l=s(0),d=function(e){var t=e.postsOfUser,s=e.loadComments,c=e.currentPostId,n=e.isOpenPost;return Object(l.jsxs)("div",{"data-cy":"PostsList",children:[Object(l.jsx)("p",{className:"title",children:"Posts:"}),Object(l.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"has-background-link-light",children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{children:" "})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title;return Object(l.jsxs)("tr",{"data-cy":"Post",children:[Object(l.jsx)("td",{"data-cy":"PostId",children:t}),Object(l.jsx)("td",{"data-cy":"PostTitle",children:a}),Object(l.jsx)("td",{className:"has-text-right is-vcentered",children:Object(l.jsx)("button",{onClick:function(){return s(t)},type:"button","data-cy":"PostButton",className:o()("button is-link",{"is-light":c!==t}),children:c===t&&n?"Close":"Open"})})]},t)}))})]})]})},m=(s(17),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),j=s(8),u="https://mate.academy/students-api";function b(e){return new Promise((function(t){setTimeout(t,e)}))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),b(300).then((function(){return fetch(u+e,c)})).then((function(e){return e.json()}))}var O=function(e){return h(e)},x=function(e,t){return h(e,"POST",t)},f=function(e){return h(e,"DELETE")},p=function(e){var t=e.currentPostId,s=e.setComments,c=e.comments,n=e.setIsErrorComments,r=Object(i.useState)(""),d=Object(a.a)(r,2),m=d[0],u=d[1],b=Object(i.useState)(!1),h=Object(a.a)(b,2),O=h[0],f=h[1],p=Object(i.useState)(""),N=Object(a.a)(p,2),y=N[0],v=N[1],g=Object(i.useState)(!1),C=Object(a.a)(g,2),S=C[0],P=C[1],w=Object(i.useState)(""),E=Object(a.a)(w,2),I=E[0],k=E[1],F=Object(i.useState)(!1),T=Object(a.a)(F,2),D=T[0],U=T[1],B=Object(i.useState)(!1),L=Object(a.a)(B,2),M=L[0],A=L[1];return Object(l.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault();var a=m.trim(),i=y.trim(),r=I.trim();f(!a),P(!i),U(!r),a&&i&&r&&(A(!0),function(e){var t=e.postId,s=e.name,c=e.email,n=e.body;return x("/comments",{postId:t,name:s,email:c,body:n})}({postId:t,name:a,email:i,body:r}).then((function(e){s([].concat(Object(j.a)(c),[e])),k("")})).catch((function(){return n(!0)})).finally((function(){return A(!1)})))},onReset:function(){u(""),v(""),k(""),f(!1),P(!1),U(!1)},children:[Object(l.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{value:m,onChange:function(e){u(e.target.value),f(!1)},type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:o()("input",{"is-danger":O})}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-user"})}),O&&Object(l.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),O&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(l.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{value:y,onChange:function(e){v(e.target.value),P(!1)},required:!0,type:"email",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:o()("input",{"is-danger":S})}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-envelope"})}),S&&Object(l.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(l.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("textarea",{value:I,onChange:function(e){k(e.target.value),U(!1)},id:"comment-body",name:"body",placeholder:"Type comment here",className:o()("textarea",{"is-danger":D})})}),D&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:o()("button is-link",{"is-loading":M}),children:"Add"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"reset",className:"button is-link is-light",children:"Clear"})})]})]})},N=function(e){var t=e.currentPost,s=e.comments,c=e.showSpinner,n=e.isErrorComments,a=e.openForm,i=e.setOpenForm,r=e.currentPostId,o=e.setComments,d=e.setIsErrorComments,j=e.hendleDeleteComment,u=function(e,t,s){return!e&&!t&&!s};return Object(l.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(l.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(l.jsxs)("div",{className:"block",children:[Object(l.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(l.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(l.jsxs)("div",{className:"block",children:[c&&Object(l.jsx)(m,{}),n&&Object(l.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!s.length&&!c&&Object(l.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),u(c,!s.length,n)&&Object(l.jsx)("p",{className:"title is-4",children:"Comments:"}),!n&&s.map((function(e){var t=e.id,s=e.email,c=e.name,n=e.body;return Object(l.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(l.jsxs)("div",{className:"message-header",children:[Object(l.jsx)("a",{href:"mailto:".concat(s),"data-cy":"CommentAuthor",children:c}),Object(l.jsx)("button",{onClick:function(){return j(t)},"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",children:"delete button"})]}),Object(l.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:n})]},t)})),u(c,n,a)&&Object(l.jsx)("button",{onClick:function(){return i(!0)},"data-cy":"WriteCommentButton",type:"button",className:"button is-link",children:"Write a comment"})]}),a&&!n&&Object(l.jsx)(p,{currentPostId:r,setComments:o,comments:s,setIsErrorComments:d})]})})},y=function(e){var t=e.user,s=e.setUser,c=e.users,n=e.loadPosts,a=e.dropdown,i=e.setDropdown,r=e.activeUserId;return Object(l.jsxs)("div",{"data-cy":"UserSelector",className:o()("dropdown",{"is-active":a}),children:[Object(l.jsx)("div",{className:"dropdown-trigger",children:Object(l.jsxs)("button",{onClick:function(){return i(!a)},type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",children:[Object(l.jsx)("span",{children:t}),Object(l.jsx)("span",{className:"icon is-small",children:Object(l.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(l.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(l.jsx)("div",{className:"dropdown-content",children:c.map((function(e){var t=e.id,c=e.name;return Object(l.jsx)("a",{onClick:function(){s(c),n(t)},href:"#user-".concat(t),className:o()("dropdown-item",{"is-active":r===t}),children:c},t)}))})})]})},v={id:0,userId:0,title:"",body:""},g=function(){var e=Object(i.useState)("Choose a user"),t=Object(a.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)([]),r=Object(a.a)(n,2),j=r[0],u=r[1],b=Object(i.useState)([]),h=Object(a.a)(b,2),x=h[0],p=h[1],g=Object(i.useState)(!1),C=Object(a.a)(g,2),S=C[0],P=C[1],w=Object(i.useState)(!1),E=Object(a.a)(w,2),I=E[0],k=E[1],F=Object(i.useState)(0),T=Object(a.a)(F,2),D=T[0],U=T[1],B=Object(i.useState)(!1),L=Object(a.a)(B,2),M=L[0],A=L[1],_=Object(i.useState)(!1),q=Object(a.a)(_,2),J=q[0],W=q[1],G=Object(i.useState)([]),R=Object(a.a)(G,2),Y=R[0],z=R[1],H=Object(i.useState)(0),K=Object(a.a)(H,2),Q=K[0],V=K[1],X=Object(i.useState)(!1),Z=Object(a.a)(X,2),$=Z[0],ee=Z[1],te=Object(i.useState)(!1),se=Object(a.a)(te,2),ce=se[0],ne=se[1],ae=Object(i.useState)(!1),ie=Object(a.a)(ae,2),re=ie[0],oe=ie[1];Object(i.useEffect)((function(){O("/users").then(u)}),[]);var le=Object(i.useMemo)((function(){var e=x.find((function(e){return e.id===Q}));return e||v}),[Q]);return Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"tile is-ancestor",children:[Object(l.jsx)("div",{className:"tile is-parent",children:Object(l.jsxs)("div",{className:"tile is-child box is-success",children:[Object(l.jsx)("div",{className:"block",children:Object(l.jsx)(y,{user:s,setUser:c,users:j,loadPosts:function(e){p([]),V(0),W(!1),A(!0),function(e){return O("/posts?userId=".concat(e))}(e).then(p).catch((function(){return W(!0)})).finally((function(){return A(!1)})),k(!1),U(e)},dropdown:I,setDropdown:k,activeUserId:D})}),Object(l.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!D&&Object(l.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),M&&Object(l.jsx)(m,{}),J&&Object(l.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),!x.length&&!M&&!!D&&Object(l.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),!!x.length&&Object(l.jsx)(d,{postsOfUser:x,loadComments:function(e){if(S&&Q===e)return P(!1),void V(0);P(!0),oe(!1),ne(!1),z([]),ee(!0),V(e),function(e){return O("/comments?postId=".concat(e))}(e).then(z).catch((function(){return ne(!0)})).finally((function(){return ee(!1)}))},currentPostId:Q,isOpenPost:S})]})]})}),S&&Object(l.jsx)("div",{"data-cy":"Sidebar",className:o()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":S}),children:Object(l.jsx)("div",{className:"tile is-child box is-success ",children:Object(l.jsx)(N,{comments:Y,currentPost:le,showSpinner:$,isErrorComments:ce,openForm:re,setOpenForm:oe,currentPostId:Q,setComments:z,setIsErrorComments:ne,hendleDeleteComment:function(e){z((function(t){return t.filter((function(t){return t.id!==e}))})),function(e){return f("/comments/".concat(e))}(e).catch((function(){return z(Y)}))}})})})]})})})};n.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.aec135b1.chunk.js.map