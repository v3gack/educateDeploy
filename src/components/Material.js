import { Mongoose } from 'mongoose';
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Material extends Component{
    constructor() {
        super();
        this.state = {
          title: '',
          description: '',
          link:'',
          _id: '',
          tasks: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
      }
      addTask(e) {
        e.preventDefault();
        if(this.state._id) {
          fetch(`/api/tasks/${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify({
              title: this.state.title,
              description: this.state.description,
              link: this.state.link
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              window.M.toast({html: 'Task Updated'});
              this.setState({_id: '', title: '', description: '', link: ''});
              this.fetchTasks();
            });
        } else {
          fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              window.M.toast({html: 'Task Saved'});
              this.setState({title: '', description: '', link: ''});
              this.fetchTasks();
            })
            .catch(err => console.error(err));
          }
        }
        componentDidMount() {
            this.fetchTasks();
          }
    fetchTasks() {
        fetch('/api/tasks')
          .then(res => res.json())
          .then(data => {
            this.setState({tasks: data});
            console.log(this.state.tasks);
          });
      }
    handleChange(e){
        const { name,value } = e.target;
        this.setState({
            [name]: value
        });
    }
    deleteTask(id) {
          fetch(`/api/tasks/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              window.M.toast({html: 'Task deleted'});
              this.fetchTasks();
            });
      }
      editTask(id) {
        fetch(`/api/tasks/${id}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              title: data.title,
              description: data.description,
              link: data.link,
              _id: data._id
            });
          });
      }
      render(){
          return(<div className='container'>
          <h1> Crear Material</h1>
          <form onSubmit={this.addTask}>
              <div className="form-group">
                  <input className="form-control" name="title" placeholder="Título" onChange={this.handleChange} value={this.state.title} type="text"></input>
              </div>
              <div className="form-group">
                  <textarea name="description" onChange={this.handleChange} value={this.state.description} cols="30" rows="10" className="form-control" placeholder="Descripción"></textarea>
              </div>
              <div>
                  <input name="link" onChange={this.handleChange} value={this.state.link} type="url" className="form-control" placeholder="Coloca el Link Aqui"></input>
              </div>
              <button type="submit" className="btn btn-lg btn-info">Enviar</button>
          </form>
          <div className="col s7">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map(task =>{
                            return (
                                <tr key = {task._id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.link}</td>
                                    <td>
                                        <button onClick={() => this.deleteTask(task._id)} className="btn light-blue darken-4">
                                            <i>delete</i>
                                        </button>
                                        <button onClick={()=> this.editTask(task._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                                            <i>Edit</i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
          </div>
  
        </div>

          )
      }
}


export default Material;