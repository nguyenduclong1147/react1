import React, { Component } from 'react';

class TableDataRow extends Component {
    per = () => {
        if(parseInt(this.props.permission,10) === 1){
            return "Admin"
        }
        else if (parseInt(this.props.permission,10) === 2){
            return "Moderator"
        }
        else if (parseInt(this.props.permission,10) === 3){
            return "Normal User"
        }
    }
    
    clickEdit =  () => {
        this.props.editUser()
        this.props.changeEditUserStatus()
    } 

    clickDelete =  () => {
        this.props.deleteUser()
    } 
    render() {
     
        return (
            <tr>
            <td >{this.props.stt}</td>
            <td>{this.props.name}</td>
            <td>{this.props.tel}</td>
            <td>{this.per()}</td>
            <td>
              <div className="btn-group">
                <div onClick = {() => this.clickEdit()} className="btn btn-warning sua"><i className="fa fa-edit    ">Sửa</i></div>
                <div  onClick = {() => this.clickDelete()} className="btn btn-danger sua"><i className="fa fa-delete    ">Xóa</i></div>
              </div>
            </td>
          </tr>
        );
    }
}

export default TableDataRow;