import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchFormValue: ""
        }
    }
    
    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <div  onClick={() => this.props.thayDoiTrangThai()} className="btn btn-block btn-outline-secondary">Đóng lại</div>
        }
        else {
            return <div  onClick={() => this.props.thayDoiTrangThai()} className="btn btn-block btn-outline-secondary">Thêm mới</div>
        }
    }

    isChange =(event) => {
        this.setState({
            searchFormValue: event.target.value
        })
        
             this.props.getSearchFormValue(event.target.value)
             
    } 

    showEditUser =  (status) => {
        if(status === true)
        {
            return <EditUser
            getInfo = {(oj) =>this.props.getInfo(oj)}        
            
            changeEditUserStatus = {  () => {this.props.changeEditUserStatus()} }
            userEditObjectDefaul = {this.props.userEditObjectDefaul}
            ></EditUser>
        }
    } 
    render() {
      
        return (

            <div className="col-12">
                <div className="row">
                   {this.showEditUser(this.props.editUserStatus)}
                </div>
                <div className="form-group">
                    <div className="btn-group"><input onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Nhập từ khóa tìm kiếm" aria-describedby="helpId" />
                        <div  onClick={() => this.props.getSearchFormValue(this.state.searchFormValue)} className="btn btn-info"> Tìm </div>
                    </div>
                    {this.hienThiNut()}
                </div>
                <hr></hr>
             
                
            </div>
            


        );
    }
}

export default Search;