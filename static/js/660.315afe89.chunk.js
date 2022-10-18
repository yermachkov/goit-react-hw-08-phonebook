"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[660],{5660:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,i,a,o,s,c=r(2791),d=r(9434),l=r(3682),u=r(5705),h=r(7103),x=r(168),f=r(3842),p=(0,f.Z)(u.gN)(t||(t=(0,x.Z)(["\n  width: 250px;\n  height: 25px;\n  font-size: inherit;\n"]))),m=f.Z.button(i||(i=(0,x.Z)(["\n  background-color: #0a66c2;\n  border: none;\n  border-radius: 100px;\n  color: #ffffff;\n  cursor: pointer;\n  font: inherit;\n  max-width: 480px;\n  min-height: 40px;\n  overflow: hidden;\n  padding: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  /* touch-action: manipulation; */\n  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,\n    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,\n    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  &:hover {\n    background-color: #16437e;\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    background: rgba(0, 0, 0, 0.08);\n    color: rgba(0, 0, 0, 0.3);\n  }\n"]))),b=r(208),g=r(184),j=h.Ry().shape({name:h.Z_().matches(/(^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$)/,"Name may contain only letters, apostrophe, dash and spaces. For example, 'Adrian', 'Jacob Mercer', 'Charles de Batz de Castelmore d'Artagnan'").required("Add the name, please"),number:h.Z_().matches(/(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Add the phone number, please")}),w=function(){var n=(0,d.I0)();return(0,g.jsx)(u.J9,{initialValues:{name:"",number:""},validationSchema:j,onSubmit:function(e,r){var t=r.resetForm;n((0,b.uK)(e)),t()},children:(0,g.jsxs)(u.l0,{children:[(0,g.jsx)("label",{htmlFor:"name",children:"Name"}),(0,g.jsxs)(l.x,{display:"flex",alignItems:"baseline",gridGap:10,children:[(0,g.jsx)(p,{name:"name",id:"name"}),(0,g.jsx)(u.Bc,{name:"name"})]}),(0,g.jsx)("label",{htmlFor:"number",children:"Number"}),(0,g.jsxs)(l.x,{display:"flex",alignItems:"baseline",gridGap:10,children:[(0,g.jsx)(p,{name:"number"}),(0,g.jsx)(u.Bc,{name:"number",id:"number"})]}),(0,g.jsx)(m,{type:"submit",children:"Add contact"})]})})},v=r(6895),Z=f.Z.input(a||(a=(0,x.Z)(["\n  width: 250px;\n  height: 25px;\n  font: inherit;\n"]))),k=function(){var n=(0,d.I0)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("label",{htmlFor:"filter",children:"Find a contact by name"}),(0,g.jsx)(Z,{type:"text",name:"filter",id:"filter",onChange:function(e){n((0,v.xO)(e.target.value))}})]})},y=f.Z.ul(o||(o=(0,x.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n"]))),z=f.Z.button(s||(s=(0,x.Z)(["\n  background: #ffffff;\n  border: 1px solid #ff4742;\n  border-radius: 10px;\n  color: #ff4742;\n  cursor: pointer;\n  font: inherit;\n  max-width: 480px;\n  overflow: hidden;\n  padding: 4px 14px;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;\n  /* touch-action: manipulation; */\n  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,\n    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,\n    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  &:hover {\n    background-color: #ff4742;\n    color: #ffffff;\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  }\n"]))),F=function(n){var e=n.contact,r=(0,d.I0)(),t=e.id,i=e.name,a=e.number;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("p",{children:[i,": ",a]}),(0,g.jsx)(z,{onClick:function(){return r((0,b.GK)(t))},children:"Delete"})]})},C=function(n){return n.contacts.items},A=function(n){return n.contacts.isLoading},I=function(n){return n.contacts.error},_=function(n){return n.filter},N=function(){var n=(0,d.v9)(C),e=(0,d.v9)(_),r=e?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n;return(0,g.jsx)(y,{children:r.map((function(n){return(0,g.jsx)("li",{children:(0,g.jsx)(l.x,{display:"flex",justifyContent:"space-between",alignItems:"center",width:450,children:(0,g.jsx)(F,{contact:n})})},n.id)}))})},G=function(){var n=(0,d.I0)(),e=(0,d.v9)(C),r=(0,d.v9)(A),t=(0,d.v9)(I);return(0,c.useEffect)((function(){n((0,b.yF)())}),[n]),(0,g.jsxs)(l.x,{display:"flex",flexDirection:"column",gridGap:10,width:[1/4],ml:"auto",mr:"auto",p:20,children:[(0,g.jsx)(w,{}),r&&!t&&(0,g.jsx)("p",{children:"Request is in progress..."}),e.length>0&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{children:"Contacts"}),(0,g.jsx)(k,{}),(0,g.jsx)(N,{})]}),!r&&!t&&0===e.length&&(0,g.jsx)("h2",{children:"No contacts yet. Fill the fields to add some."})]})}}}]);
//# sourceMappingURL=660.315afe89.chunk.js.map