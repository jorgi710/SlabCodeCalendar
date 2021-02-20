import React from 'react'
import { Button} from 'react-bootstrap';

const Calendario = () => {
    return (
        <>
            <div className="container bg-light">
                <>
                <h1 className="text-center my-1 bg-Light p-2 lead">Challenger Calendar <span className="bg-secondary">SlabCode</span></h1>               
                <div className="row">
                    <div className="col lead text-center my-4 btn btn-dark"><h2>February</h2></div>
                </div>
                <hr className="bg-secondary"/>
                <div className="row mx-5">          
                    <div className="col"><Button variant="dark btn-lg">Sun</Button>{' '}</div>
                    <div className="col"><Button variant="dark btn-lg">Mon</Button></div>
                    <div className="col"><Button variant="dark btn-lg">Tue</Button></div>
                    <div className="col"><Button variant="dark btn-lg">Wed</Button></div>
                    <div className="col"><Button variant="dark btn-lg">Thu</Button></div>
                    <div className="col"><Button variant="dark btn-lg">Fri</Button></div>
                    <div className="col"><Button variant="dark btn-lg">Sat</Button></div>
                </div>
                <div className="row mt-4 mx-5">
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">-</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">1</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">2</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">3</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">4</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">5</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">6</Button></div>
                </div>
                <div className="row mt-4 mx-5">
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">7</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">8</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">9</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">10</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">11</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">12</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">13</Button></div>
                </div>
                <div className="row mt-4 mx-5">
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">14</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">15</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">16</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">17</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">18</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">19</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">20</Button></div>
                </div>
                <div className="row mt-4 mx-5">
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">21</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">22</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">23</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">24</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">25</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">26</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">27</Button></div>
                </div>
                <div className="row my-4 mx-5">
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">28</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">-</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">-</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">-</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">-</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">-</Button></div>
                    <div className="col"><Button variant="btn btn-outline-secondary py-2 px-4">-</Button></div>
                </div>
                </>
                
            </div>
            <hr/>
        </>
    )
}

export default Calendario
