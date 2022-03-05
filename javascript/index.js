function newvue(){
	// new Vue({
	// 	el: '#app',
	// 	data:function() {
	// 		return {
	// 			userInfo:{
	// 				name:'',
	// 				gender:'',
	// 				phoneNum:'',
	// 				birthday:'',
	// 			}, 
	// 			tableData: [{
	// 			  name: '风花雪月',
	// 			  gender:'女',
	// 			  phoneNum:'13956945030',
	// 			  birthday:'2002-06-16'
	// 			}],
	// 			dialogVisible:false,
	// 			editObj:{
	// 				name:'',
	// 				gender:'',
	// 				phoneNum:'',
	// 				birthday:''
	// 			}
	// 		};
	// 	},
	// 	methods: {
	// 		addUser(){
	// 			if(!this.userInfo.name){
	// 				this.$message({
	// 				  message: '请输入姓名',
	// 				  type: 'warning',
	// 				});
	// 				return;
	// 			}
	// 			if(!this.userInfo.gender){
	// 				this.$message({
	// 				  message: '请输入性别',
	// 				  type: 'warning',
	// 				});
	// 				return;
	// 			}
	// 			if(!/^1[3456789]\d{9}$/.test(this.userInfo.phoneNum)){
	// 				this.$message({
	// 				  message: '请输入正确的电话号码',
	// 				  type: 'warning',
	// 				});
	// 				return;
	// 			}
	// 			if(!this.userInfo.birthday){
	// 				this.$message({
	// 				  message: '请输入生日',
	// 				  type: 'warning',
	// 				});
	// 				return;
	// 			}
	// 			this.tableData.push(this.userInfo);
	// 			this.userInfo={
	// 				name:'',
	// 				gender:'',
	// 				phoneNum:'',
	// 				birthday:'',
	// 			}
	// 		},
	// 		delUser(idx){
	// 			this.$confirm('确认删除？')
	// 			  .then(_ => {
	// 			    this.tableData.splice(idx,1)
	// 			  })
	// 			  .catch(_ => {});
	// 		},
	// 		editUser(item,idx){
	// 			this.userIndex=idx;
	// 			this.editObj={
	// 				name:item.name,
	// 				gender:item.gender,
	// 				phoneNum:item.phoneNum,
	// 				birthday:item.birthday,
	// 			}
	// 			this.dialogVisible=true;
	// 		},
	// 		handleClose(){
	// 			this.dialogVisible=false;
	// 		},
	// 		confirm(){
	// 			if(!this.editObj.name){
	// 				this.$message({
	// 				  message: '请输入姓名',
	// 				  type: 'warning',
	// 				});
	// 				return;
	// 			}
	// 			if(!this.editObj.gender){
	// 				this.$message({
	// 				  message: '请输入性别',
	// 				  type: 'warning',
	// 				});
	// 				return;
	// 			}
	// 			if(!/^1[3456789]\d{9}$/.test(this.editObj.phoneNum)){
	// 				this.$message({
	// 				  message: '请输入正确的电话号码',
	// 				  type: 'warning',
	// 				});
	// 				return;
	// 			}
	// 			if(!this.editObj.birthday){
	// 				this.$message({
	// 				  message: '请输入生日',
	// 				  type: 'warning',
	// 				});
	// 				return;
	// 			}
	// 			Vue.set(this.tableData,this.userIndex,this.editObj);
	// 			this.dialogVisible=false;
	// 		}
	// 	}
	// })
	alert("1111")
}
			
			export{
				newvue
			}