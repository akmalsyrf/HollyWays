import React from 'react'
import NavBar from '../components/NavBar'
import ProfilePic from '../assets/img/ava.png'

export default function Profile() {
    return (
        <>
        <NavBar/>
        <div class="row container-fluid py-5 px-5 d-flex bg-light justify-content-center">
            <div class="col-6">
                <h3 className="mb-4 fw-bold">My Profile</h3>
                <div class="d-flex justify-content-start">
                    <div class="col-4">
                        <img src={ProfilePic} alt="profile" width="180px" className="rounded"/>
                    </div>
                    <div class="col-8">
                        <div class="info">
                            <h5 className="text-danger fw-bold">Full Name</h5>
                            <p className="text-secondary">Paijo</p>
                        </div>
                        <div class="info">
                            <h5 className="text-danger fw-bold">Email</h5>
                            <p className="text-secondary">paijogans@mail.com</p>
                        </div>
                        <div class="info">
                            <h5 className="text-danger fw-bold">Phone</h5>
                            <p className="text-secondary">0812-3456-7890</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 offset-1 me-1">
            <h3 className="me-5 fw-bold mb-4">History Donation</h3>
                <div className="px-3 py-4" style={{backgroundColor:"white", width:"580px"}}>
                    <h5>The Strength of a People. Power of Community</h5>
                    <p>Saturday, 12 April 2021</p>
                    <div class="d-flex justify-content-between">
                        <p className="fw-bold text-danger">Total : Rp 45.000</p>
                        <button class="btn btn-light text-success fw-bold px-5" style={{backgroundColor:"linear-gradient(180deg, #00FF75 0%, #00FF85 100%)"}}>Finished</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
