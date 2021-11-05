import React, {Component, useState} from 'react';

function AddStudent(props){
    return(
        <form>
            <div class="form-group">
                <label> Firstname </label>
                <input type="text" class="form-control" id="firstname" placeholder="Enter your first name: " />
            </div>
            <div className="form-group">
                <label> Lastname </label>
                <input type="text" className="form-control" id="lastname" placeholder="Enter your last name: "/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddStudent