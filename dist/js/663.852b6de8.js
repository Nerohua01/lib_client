"use strict";(self["webpackChunklib_client"]=self["webpackChunklib_client"]||[]).push([[663],{8663:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[[t("div",{staticStyle:{"margin-top":"20px","margin-left":"40px","margin-bottom":"20px"}},[t("label",{staticStyle:{"font-family":"'宋体'","font-weight":"bolder"}},[e._v("快速查询：")]),t("span",[t("el-input",{staticStyle:{width:"200px","margin-left":"20px"},attrs:{placeholder:"请输入借阅编号",clearable:""},on:{input:e.refreshTable},model:{value:e.selid,callback:function(t){e.selid=t},expression:"selid"}}),t("el-input",{staticStyle:{width:"200px","margin-left":"20px"},attrs:{placeholder:"请输入书籍编号",clearable:""},on:{input:e.refreshTable},model:{value:e.selbid,callback:function(t){e.selbid=t},expression:"selbid"}})],1)]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-class-name":e.tableRowClassName,"header-cell-style":{background:"#f4f4f4",color:"#80878f"}},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"index",label:"序号",width:"100",align:"center"}}),t("el-table-column",{attrs:{prop:"id",label:"记录编号",align:"center",sortable:""}}),t("el-table-column",{attrs:{prop:"uid",label:"用户名",align:"center",sortable:""}}),t("el-table-column",{attrs:{prop:"bid",label:"书籍编号",align:"center",sortable:""}}),t("el-table-column",{attrs:{prop:"bdate",label:"借阅时间",align:"center",sortable:""}}),t("el-table-column",{attrs:{prop:"rdate",label:"归还时间",align:"center",sortable:""}}),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"success",size:"small",disabled:!e.isFree(a.row)},on:{click:function(t){return e.returnBook(a.row)}}},[e._v(" 归还")])]}}])})],1),t("el-pagination",{staticStyle:{"text-align":"center","margin-top":"8px"},attrs:{"current-page":e.currentPage,"page-sizes":[5,10,15,20],"page-size":e.sizePage,layout:"total, sizes, prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})]],2)},r=[],s=a(4161);const n={data(){return{bookDate:[],name:"MyBorrow",currentPage:1,sizePage:10,totalPage:0,selid:"",selbid:"",tableData:[]}},mounted(){this.seluid=this.$store.state.user.uid,s.Z.get("/api/books").then((e=>{this.bookDate=e.data.data})),this.refreshTable()},methods:{returnBook(e){this.borrow={},this.borrow.bid=e.bid,this.borrow.rdate=this.getTime(),s.Z.put("/api/borrows/return",this.borrow).then((e=>{20031===e.data.code?(this.$message({message:"归还成功",type:"success"}),this.refreshTable()):this.$message({message:"归还失败",type:"error"})})).catch((e=>{console.log(e)}))},getTime(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,l=e.getDate(),r=e.getHours(),s=e.getMinutes(),n=e.getSeconds();return t+"-"+a+"-"+l+" "+r+":"+s+":"+n},tableRowClassName({row:e}){return null==e.rdate?"warning-row":"success-row"},isFree(e){return null==e.rdate},refreshTable(){s.Z.get("/api/borrows/page/"+this.seluid,{params:{page:this.currentPage,size:this.sizePage,id:this.selid,bid:this.selbid}}).then((e=>{this.tableData=e.data.records,this.totalPage=e.data.total}))},handleSelectionChange(e){this.multipleSelection=e},handleSizeChange(e){this.sizePage=e,this.refreshTable()},handleCurrentChange(e){this.currentPage=e,this.refreshTable()}}};var i=n,o=i,c=a(3736),u=(0,c.Z)(o,l,r,!1,null,null,null),b=u.exports}}]);
//# sourceMappingURL=663.852b6de8.js.map