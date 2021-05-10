import React, { Component } from 'react';


class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
           name:this.props.userEditObjectDefaul.name,
           tel:this.props.userEditObjectDefaul.tel,
            Permission:this.props.userEditObjectDefaul.Permission,
            id:this.props.userEditObjectDefaul.id
        }
    }

    saveUser = () => {
        this.props.changeEditUserStatus()

    }

    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
       this.setState({
           [name]:value
       })
    
    }
   


    saveUser =  () => {
        var temp={}
        temp.name=this.state.name
        temp.tel=this.state.tel
        temp.Permission=this.state.Permission
        temp.id=this.state.id
       
        this.props.getInfo(temp)
    }  

    render() {
        
       
        return (
            
            <div className="col">
                <form method="post">
                    <div className="card text-white bg-warning mb-3" >
                        <div className="card-header text-center">Sửa Thông Tin User </div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <div className="form-group ">

                                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObjectDefaul.name} name="name" type="text" className="form-control" aria-describedby="helpId" placeholder="Tên user" />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObjectDefaul.tel} name="tel" type="text" className="form-control" aria-describedby="helpId" placeholder="Điện Thoại" />
                                </div>
                            </div>
                            <div className="form-group">
                                <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObjectDefaul.Permission} name="Permission" className="custom-select" required>
                                    <option >Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="button" onClick={() => this.saveUser()} className="btn btn-block btn-danger" value=" Lưu" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;