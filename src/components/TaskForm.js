/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", status: true };
  }

  componentWillMount() {
    if (this.props.task) {
      this.setState({
        id : this.props.task.id,
        name : this.props.task.name,
        status : this.props.task.status,
      });
    }
  }

  //khắc phục lỗi thêm công việc và cập nhật công việc
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id : nextProps.task.id,
        name : nextProps.task.name,
        status : nextProps.task.status,
      });
    } else if (nextProps.task) {
      //chuyển đổi sửa công việc thành thêm công việc
      this.setState({
        id : "",
        name : "",
        status : false,
      });
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    //ép kiểu
    if (name === "status") {
      value = target.value === "true" ? true : false; 
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    //hủy bỏ và close form sau khi thêm công việc
    this.onClear();
    this.onCloseForm();
  };

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  // hủy form(reset form)
  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
  };

  render() {
    var {id} = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== "" ? "Cập nhật công việc" : "Thêm công việc"}
            <span
              className="fa fa-times-circle text-right text-close"
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          {/* form */}
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                class="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value="1">Kích Hoạt</option>
              <option value="0">Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button type="submit"
                      className="btn btn-danger"
                      onClick={this.onClear}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
