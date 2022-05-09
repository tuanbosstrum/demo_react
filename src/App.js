/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import SearchSort from "./components/SearchSort";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // mảng chứa các công việc
      isDisplayForm: false, // biến để hiển thị form
    };
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }

  onGenerateData = () => {
    var tasks = [
      { id: this.generateID(), name: "học lập trình", status: true },
      { id: this.generateID(), name: "học Lập trình Java", status: true },
      {
        id: this.generateID(),
        name: "học lập trình hướng đối tượng",
        status: false,
      },
      { id: this.generateID(), name: "học Thể dục", status: true },
      { id: this.generateID(), name: "học Ngoại ngữ", status: false },
      { id: this.generateID(), name: "Kỹ năng giao tiếp", status: true },
      { id: this.generateID(), name: "học Giáo dục quốc phòng", status: true },
    ];
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  // hàm random ra chuỗi
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  // chuỗi random
  generateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    });
  };

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  };

  onSubmit = (data) => {
    // var tasks = {
    //   id : this.generateID(),
    //   name : data.name,
    //   status : true,
    // }
    console.log( data);
  }
  
  render() {
    var { tasks, isDisplayForm } = this.state; // cách viết khác của var tasks = this.state.tasks
    var elmTaskForm = isDisplayForm ? (
      <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {/* form */}
            {elmTaskForm}
          </div>
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5">&nbsp;Thêm Công Việc</span>
            </button>
            <button
              type="button"
              className="btn btn-danger ml-5"
              onClick={this.onGenerateData}
            >
              Generate Data
            </button>
            {/* search and sort */}
            <SearchSort />
            {/* list */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
