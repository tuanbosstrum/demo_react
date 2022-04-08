/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class TaskForm extends Component {
  onCloseForm = () => {
    this.props.onCloseForm();
  };

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Thêm Công Việc</h3>
          <span
            className="fa fa-times-circle text-right text-close"
            onClick={this.onCloseForm}
          ></span>
        </div>
        <div className="panel-body">
          {/* form */}
          <form>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" class="form-control" />
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control" required="required">
              <option value="1">Kích Hoạt</option>
              <option value="0">Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button type="submit" className="btn btn-danger">
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
