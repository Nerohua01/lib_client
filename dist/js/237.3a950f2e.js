"use strict";(self["webpackChunklib_client"]=self["webpackChunklib_client"]||[]).push([[237],{3237:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[[t("div",{staticStyle:{"margin-top":"20px","margin-left":"40px","margin-bottom":"20px"}},[t("label",{staticStyle:{"font-family":"'宋体'","font-weight":"bolder"}},[e._v("快速查询：")]),t("span",[t("el-input",{staticStyle:{width:"200px","margin-left":"20px"},attrs:{placeholder:"请输入书本编号",clearable:""},on:{input:e.refreshTable},model:{value:e.selbid,callback:function(t){e.selbid=t},expression:"selbid"}}),t("el-input",{staticStyle:{width:"200px","margin-left":"20px"},attrs:{placeholder:"请输入书名",clearable:""},on:{input:e.refreshTable},model:{value:e.selbname,callback:function(t){e.selbname=t},expression:"selbname"}}),t("el-input",{staticStyle:{width:"200px","margin-left":"20px"},attrs:{placeholder:"请输入作者",clearable:""},on:{input:e.refreshTable},model:{value:e.selbauthor,callback:function(t){e.selbauthor=t},expression:"selbauthor"}}),t("el-select",{staticStyle:{width:"200px","margin-left":"20px"},attrs:{placeholder:"请选择状态",clearable:""},on:{change:e.refreshTable},model:{value:e.selbstatus,callback:function(t){e.selbstatus=t},expression:"selbstatus"}},[t("el-option",{attrs:{value:"已借出",label:"已借出"}}),t("el-option",{attrs:{value:"未借出",label:"未借出"}})],1)],1),t("div",{staticStyle:{float:"right"}},[e.isAdmin()?t("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:e.addBook}},[e._v("新增")]):e._e(),e.isAdmin()?t("el-button",{staticStyle:{"margin-right":"60px"},attrs:{type:"danger"},on:{click:e.deleteByIds}},[e._v("批量删除")]):e._e()],1)]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-cell-style":{background:"#f4f4f4",color:"#80878f"},"row-class-name":e.tableRowClassName},on:{"selection-change":e.handleSelectionChange}},[e.isAdmin()?t("el-table-column",{attrs:{type:"selection",align:"center",width:"50"}}):e._e(),t("el-table-column",{attrs:{type:"index",label:"序号",width:"100",align:"center"}}),t("el-table-column",{attrs:{prop:"bid",label:"编号",align:"center",sortable:""}}),t("el-table-column",{attrs:{prop:"bname",label:"书名",align:"center",sortable:""}}),t("el-table-column",{attrs:{prop:"bauthor",label:"作者",align:"center",sortable:""}}),t("el-table-column",{attrs:{prop:"bstatus",label:"状态",align:"center",sortable:""}}),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(s){return[e.isAdmin()?t("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"warning",size:"small",plain:""},on:{click:function(t){return e.editBook(s.row)}}},[e._v("修改")]):e._e(),t("el-popconfirm",{attrs:{"confirm-button-text":"确定","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定要删除吗？"},on:{confirm:function(t){return e.deleteOne(s.row)}}},[e.isAdmin()?t("el-button",{attrs:{slot:"reference",type:"danger",size:"small",plain:""},slot:"reference"},[e._v(" 删除")]):e._e()],1),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small",plain:"",disabled:e.isFree(s.row)},on:{click:function(t){return e.borrowBook(s.row)}}},[e._v("借阅")]),e.isAdmin()?t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"success",size:"small",plain:"",disabled:!e.isFree(s.row)},on:{click:function(t){return e.returnBook(s.row)}}},[e._v("归还")]):e._e()]}}])})],1),t("el-pagination",{staticStyle:{"text-align":"center","margin-top":"8px"},attrs:{"current-page":e.currentPage,"page-sizes":[5,10,15,20],"page-size":e.sizePage,layout:"total, sizes, prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],t("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"25%",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"book",staticStyle:{"text-align":"center"},attrs:{rules:e.rules,model:e.book,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"编号",prop:"bid"}},[t("el-input",{staticStyle:{width:"218px"},attrs:{placeholder:"请输入书籍编号",disabled:e.flag},on:{blur:e.checkBid},model:{value:e.book.bid,callback:function(t){e.$set(e.book,"bid",t)},expression:"book.bid"}})],1),t("el-form-item",{attrs:{label:"书名",prop:"bname"}},[t("el-input",{staticStyle:{width:"218px"},attrs:{placeholder:"请输入书籍名称"},model:{value:e.book.bname,callback:function(t){e.$set(e.book,"bname",t)},expression:"book.bname"}})],1),t("el-form-item",{attrs:{label:"作者",prop:"bauthor"}},[t("el-input",{staticStyle:{width:"218px"},attrs:{placeholder:"请输入书籍作者"},model:{value:e.book.bauthor,callback:function(t){e.$set(e.book,"bauthor",t)},expression:"book.bauthor"}})],1),t("el-form-item",{attrs:{label:"状态",prop:"bstatus"}},[t("el-select",{staticStyle:{width:"218px"},attrs:{clearable:"",disabled:!e.flag},model:{value:e.book.bstatus,callback:function(t){e.$set(e.book,"bstatus",t)},expression:"book.bstatus"}},[t("el-option",{attrs:{value:"未借出",label:"未借出"}}),t("el-option",{attrs:{value:"已借出",label:"已借出"}})],1)],1),t("el-form-item",[t("el-button",{staticStyle:{"margin-right":"55px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提交")])],1)],1)],1)],2)},l=[],i=(s(7658),s(4161));const r={data(){return{name:"BookManage",currentPage:1,sizePage:10,totalPage:0,selbid:"",selbname:"",selbauthor:"",selbstatus:"",multipleSelection:[],tableData:[],dialogVisible:!1,title:"",book:{bid:"",bname:"",bauthor:"",bstatus:"未借出"},borrow:{},flag:!1,rules:{bid:[{required:!0,message:"请输入书籍编号",trigger:"blur"}],bname:[{required:!0,message:"请输入书名",trigger:"blur"}],bauthor:[{required:!0,message:"请输入作者",trigger:"blur"}],bstatus:[{required:!0,message:"请选择状态",trigger:"change"}]}}},mounted(){this.refreshTable()},methods:{isAdmin(){return"admin"==this.$store.state.user.uidentity},borrowBook(e){this.borrow={},this.borrow.uid=this.$store.state.user.uid,this.borrow.bid=e.bid,this.borrow.bdate=this.getTime(),i.Z.post("/api/borrows",this.borrow).then((e=>{20011===e.data.code?(this.$message({message:"借阅成功",type:"success"}),this.refreshTable()):this.$message({message:"借阅失败",type:"error"})})).catch((e=>{console.log(e)}))},returnBook(e){this.borrow={},this.borrow.bid=e.bid,this.borrow.rdate=this.getTime(),i.Z.put("/api/borrows/return",this.borrow).then((e=>{20031===e.data.code?(this.$message({message:"归还成功",type:"success"}),this.refreshTable()):this.$message({message:"归还失败",type:"error"})})).catch((e=>{console.log(e)}))},getTime(){var e=new Date,t=e.getFullYear(),s=e.getMonth()+1,a=e.getDate(),l=e.getHours(),i=e.getMinutes(),r=e.getSeconds();return t+"-"+s+"-"+a+" "+l+":"+i+":"+r},isFree(e){return"已借出"==e.bstatus},tableRowClassName({row:e}){return"已借出"==e.bstatus?"warning-row":"未借出"==e.bstatus?"success-row":""},submitForm(){if(null===this.book||""===this.book.bid||""===this.book.bname||""===this.book.bauthor||""===this.book.bstatus)this.$message({message:"请填写完整信息",type:"error"});else if(this.flag)i.Z.put("/api/books",this.book).then((e=>{20031===e.data.code?(this.$message({message:"修改成功",type:"success"}),this.dialogVisible=!1,this.refreshTable()):this.$message({message:"修改失败",type:"error"})}));else{const e=this.checkBid();e.then((e=>{e&&i.Z.post("/api/books",this.book).then((e=>{20011===e.data.code?(this.$message({message:"添加成功",type:"success"}),this.dialogVisible=!1,this.refreshTable()):this.$message({message:"添加失败",type:"error"})}))}))}},addBook(){this.cleanForm(),this.title="添加书籍",this.dialogVisible=!0,this.flag=!1,this.book={bid:"",bname:"",bauthor:"",bstatus:"未借出"}},editBook(e){this.cleanForm(),this.title="修改书籍",this.dialogVisible=!0,this.flag=!0,this.book={...e}},async checkBid(){if(""===this.book.bid)return!1;try{const e=await i.Z.get("/api/books/"+this.book.bid);return 20041!=e.data.code||(this.$message({message:"此书籍编号已存在，请换一个",type:"error"}),!1)}catch(e){return console.log(e),!1}},cleanForm(){this.$nextTick((()=>{this.$refs["book"].clearValidate()})),this.book={bid:"",bname:"",bauthor:"",bstatus:"未借出"}},refreshTable(){i.Z.get("/api/books/page",{params:{page:this.currentPage,size:this.sizePage,bid:this.selbid,bname:this.selbname,bauthor:this.selbauthor,bstatus:this.selbstatus}}).then((e=>{this.tableData=e.data.records,this.totalPage=e.data.total}))},deleteOne(e){i.Z["delete"]("/api/books/"+e.bid).then((e=>{20021===e.data.code?(this.$message({message:"删除成功",type:"success"}),this.refreshTable()):this.$message({message:"删除失败",type:"error"}),this.refreshTable()}))},handleSelectionChange(e){this.multipleSelection=e},deleteByIds(){0==this.multipleSelection.length?this.$message({message:"请至少选择一项",type:"warning"}):this.$confirm("此操作将永久删除这些数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{let e=[];this.multipleSelection.forEach((t=>{e.push(t.bid)})),i.Z["delete"]("/api/books/ids",{data:e}).then((()=>{this.$message({type:"success",message:"操作成功"}),this.refreshTable()}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},handleSizeChange(e){this.sizePage=e,this.refreshTable()},handleCurrentChange(e){this.currentPage=e,this.refreshTable()}}};var o=r,n=o,b=s(3736),c=(0,b.Z)(n,a,l,!1,null,null,null),h=c.exports}}]);
//# sourceMappingURL=237.3a950f2e.js.map