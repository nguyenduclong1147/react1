import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            name:"",
            tel:"",
            Permission:""
        }
    }

    isChange =  (event) => {
        const name = event.target.name;
        const value = event.target.value
        
        this.setState({
            [name] : value
        })
            
    } 
   
    hienThiForm = () => {

        if (this.props.hienThiForm === true) {
            return (
                <div className="col-12">
                    <form>
                    <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">Thêm mới</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <div className="form-group">
                                    <label >Tên User</label>
                                    <input onChange= { (event) => this.isChange(event)}  name="name" type="text" className="form-control" aria-describedby="helpId" placeholder="Tên user" />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-group">
                                    <input  onChange= { (event) => this.isChange(event)} name="tel" type="text" className="form-control" aria-describedby="helpId" placeholder="Điện Thoại" />
                                </div>
                            </div>
                            <div className="form-group">
                                <select  onChange= { (event) => this.isChange(event)} name="Permission" className="custom-select" required>
                                    <option >Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div onClick = { () =>this.props.getDataAddUser(this.state.name,this.state.tel,this.state.Permission) } className="btn btn-block btn-primary" >Thêm Mới</div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            )
        }
   
    }

    render() {
        
        return (

            

                <div>
                    {this.hienThiForm()}
                </div>

          



        );
    }
}

export default AddUser;