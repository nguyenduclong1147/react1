
import '../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data';
import React, { Component } from 'react';
const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      dataUser: [],
      searchValue: '',
      editUserStatus: false,
      userEditObjectDefaul: {}
    }
  }

  componentWillMount() {
    if (localStorage.getItem("dataUserLocalStorage") === null) {
      localStorage.setItem("dataUserLocalStorage", JSON.stringify(DataUser))
    }
    else {
      var temp = JSON.parse(localStorage.getItem("dataUserLocalStorage"))
      this.setState({
        dataUser: temp
      })
    }

  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }
  getDataAddUser = (name, tel, Permission) => {
    /*  console.log(name,tel,Permission) */
    var temp = {}
    temp.id = uuidv4();
    temp.name = name
    temp.tel = tel
    temp.Permission = Permission
    var items= this.state.dataUser
    items.push(temp)
   
    this.setState({
      dataUser: items
      
    })
    localStorage.setItem("dataUserLocalStorage", JSON.stringify(this.state.dataUser))
  }

  thayDoiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }
  getSearchFormValue = (sv) => {
    this.setState({
      searchValue: sv
    })

  }

  // sửa 
  getInfo = (object) => {

    this.state.dataUser.forEach(
      (value, key) => {
        if (value.id === object.id) {

          value.name = object.name
          value.tel = object.tel
          value.Permission = object.Permission
        }
      }
    )
    this.setState({
      dataUser: this.state.dataUser
    })
    localStorage.setItem("dataUserLocalStorage", JSON.stringify(this.state.dataUser))
  }


  editUser = (user) => {
    this.setState({
      userEditObjectDefaul: user
    })

  }

  deleteUser = (indexUser) => {
    console.log(indexUser)
    this.state.dataUser.forEach((value, key) => {

      if (key === indexUser) {
        this.state.dataUser.splice(key, 1)
        this.setState({
          dataUser: this.state.dataUser
        })
        localStorage.setItem("dataUserLocalStorage", JSON.stringify(this.state.dataUser))
      }
    })
  }

  // searchUser =  (ketqua) => {  
    
  //   this.state.dataUser.forEach((item) => {
  //     if (item.name.indexOf(this.state.searchValue) !== -1) {
  //       ketqua.push(item)
  //     }
  //   })} 
  render() {
    console.log(this.state.dataUser)
    var ketqua = []
    this.state.dataUser.forEach((item) => {
      if (item.name.indexOf(this.state.searchValue) !== -1) {
        ketqua.push(item)
      }})
    return (
      <div className="App">
        <Header></Header>

        <div className="searchForm">
          <div className="contaiter">
            <div className="row">

              <Search
                getInfo={(oj) => this.getInfo(oj)}

                userEditObjectDefaul={this.state.userEditObjectDefaul}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editUserStatus={this.state.editUserStatus}
                getSearchFormValue={(sv) => this.getSearchFormValue(sv)}
                hienThiForm={this.state.hienThiForm}
                thayDoiTrangThai={() => this.thayDoiTrangThai()}
              ></Search>

              <div className="contaiter"></div>

              <TableData
                deleteUser={(indexUser) => this.deleteUser(indexUser)}
                changeEditUserStatus={() => { this.changeEditUserStatus() }}
                dataUserProps={ketqua}
                editUser={(user) => this.editUser(user)}
              ></TableData>
              
              <AddUser
                getDataAddUser={(name, tel, Permission) => this.getDataAddUser(name, tel, Permission)}
                hienThiForm={this.state.hienThiForm}
                thayDoiTrangThai={() => this.thayDoiTrangThai()}
              ></AddUser>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
