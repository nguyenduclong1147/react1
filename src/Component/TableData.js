import React, { Component } from 'react';
import TableDataRow from "./TableDataRow"
class TableData extends Component {
    mappingDataUser = () => {
        return(
        this.props.dataUserProps.map((value,key)=>
        {
            return <TableDataRow
            stt={key}
            key={key}
            id={value.id}
            name={value.name}
            permission={value.Permission}
            tel={value.tel}
            editUser= { (user) => this.props.editUser(value) }
            changeEditUserStatus = {  () => {this.props.changeEditUserStatus()} }
            deleteUser={(indexUser) => this.props.deleteUser(key)}
            ></TableDataRow>
        }))
    }
    render() {
       
        return (
            
                 <div className="col">
        <table className="table table-striped table-hover">
         
          <thead>
            <tr>
              <th>Stt</th>
              <th>Tên</th>
              <th>Điện Thoại</th>
              <th>Quyền</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
          {this.mappingDataUser()}
          </tbody>
        </table>
      </div>
            
        );
    }
}

export default TableData;