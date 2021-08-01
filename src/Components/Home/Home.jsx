import React, { useState } from 'react'
import './style.css'
import { Button, Backdrop, Box, Modal, Fade, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { AccountCircle, Close } from '@material-ui/icons'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'

import submitData from "../Api"





function Home() {


    const [alert, setAlert] = useState(false);
    const handleAlertOpen = () => setAlert(true);
    const [AlertData, setAlertData] = useState()
    const handleAlertClose = () => { setAlertData(); setAlert(false); }




    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        if (Loading) {
            setAlertData({
                title: 'Please Wait!',
                message: "Please wait while system is processing some important data!",
                ok: "ok",
                cancel: "cancel",
                action: handleAlertClose
            })
            handleAlertOpen()
        } else {
            setOpen(false);

        }
    }

    const handleCloseClick = () => {
        if (Loading) {
            setAlertData({
                title: 'Please Wait!',
                message: "Please wait while system is processing some important data!",
                ok: "ok",
                cancel: "cancel",
                action: handleAlertClose
            })
            handleAlertOpen()
        } else {
            setAlertData({
                title: 'Data Remove Warning!',
                message: "Do you want to remove your data?",
                ok: "remove",
                cancel: "cancel",
                action: reset
            })
            handleAlertOpen()

        }
    }





    const DemoTimeList = [
        "1 - 2", "3 - 4", "5 - 6", "7 - 8"
    ]


    const [Loading, setLoading] = useState(false)

    const [Name, setName] = useState("")
    const [Address, setAddress] = useState("")
    const [Phone, setPhone] = useState("")
    const [Time, setTime] = useState("")
    const [About, setAbout] = useState("")

    const [AboutOtherVisable, setAboutOtherVisable] = useState(false)


    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Input Event Handler 
    //////////////////////////////////////////////////////////////////////////////////////////////

    const handleName = (txt) => {
        setName(txt)
    }

    const handleAddress = (txt) => {
        setAddress(txt)
    }

    const handlePhone = (txt) => {
        setPhone(txt)
    }

    const handleTime = (time) => {
        setTime(time)
    }

    const handleAbout = (txt) => {

        if (txt === "_Other_Text") {
            setAboutOtherVisable(true)
            setAbout("")
        } else {
            setAboutOtherVisable(false)
            setAbout(txt)
        }
    }

    const handleAboutOtherText = (txt) => {
        if (AboutOtherVisable) {
            setAbout(txt)
        }
    }

    const reset = () => {
        setName('')
        setAddress('')
        setPhone('')
        setTime('')
        setAbout('')
        setAlert(false)
        setOpen(false)
    }






    // Form Submit handler

    const handleSubmit = async (e) => {
        e.preventDefault()

        var errors = []
        var isError = false
        if (Name.trim() === "") {
            isError = true
            errors.push("Name")
        }

        if (Address.trim() === "") {
            isError = true
            errors.push("Address")
        }


        if (Phone.trim() === "") {
            isError = true
            errors.push("Phone Number")
        }

        if (Time.trim() === "") {
            isError = true
            errors.push("Demo Time")
        }


        // If any error during input handling
        if (isError) {
            setAlertData({
                title: "Input Warning!",
                message: `${errors.join(", ")} are not provided! \nPlease provide all the required field!`,
                ok: "ok",
                cancel: "cancel",
                action: handleAlertClose
            })
            return handleAlertOpen()
        }

        const data = {
            name: Name,
            address: Address,
            phone: Phone,
            time: Time,
            about: About
        }

        setLoading(true)

        // sending request to Google API
        const res = await submitData(data)
        setLoading(false)
        if (res) {
            
            setAlertData({
                title: "Successfull!",
                message: `Hi, ${Name},\nYour information has been submited successfully as google form custome REST Response.`,
                ok: "ok",
                cancel: "cancel",

                action: reset
            })
            handleAlertOpen()
        }else{
            setAlertData({
                title: "Fail to submit!",
                message: `Sorry, we are unable to send your response! Try again later!`,
                ok: "ok",
                cancel: "cancel",

                action: handleAlertClose
            })
            handleAlertOpen()
        }


    }







    return (
        <React.Fragment>

            <Button variant="contained" onClick={handleOpen} endIcon={<AccountCircle />}>
                Click here
            </Button>




            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>


                    <Box className="modal-box" >


                        <Dialog
                            open={alert}
                            onClose={handleAlertClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {AlertData ? AlertData.title : "Warning"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {AlertData ? AlertData.message : "Please wait!"}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleAlertClose} > {AlertData ? AlertData.cancel : "cancel"}</Button>
                                <Button onClick={AlertData ? AlertData.action : handleAlertClose} autoFocus>
                                    {AlertData ? AlertData.ok : "ok"}
                                </Button>
                            </DialogActions>
                        </Dialog>


                        <div className="logo-div">
                            <img src="/logo192.png" alt="logo" className="side-logo" />
                            <div className=" logo-title" >
                                PolyMatic
                            </div>
                            <div className="logo-desc" >
                                Redesign Everything
                            </div>
                        </div>

                        <div className="form-div">
                            <div className="close-btn" onClick={handleCloseClick}>
                                <Close fontSize="small" />
                            </div>

                            <div className="form-sec">
                                <div className="title-div">
                                    <span>Get a Free Demo.</span> <br />
                                    <span>It's Completely </span><span style={{ color: '#3584A7' }}>Free!</span>
                                </div>

                                <form onSubmit={handleSubmit} className="inputform" >

                                    {/* Name */}
                                    <div className="input-group">
                                        <div className="input-label">
                                            Name <span className="star" >*</span>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" value={Name} onChange={(e) => { handleName(e.target.value) }} placeholder="Enter your name here" />
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="input-group">
                                        <div className="input-label">
                                            Address <span className="star" >*</span>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" value={Address} onChange={(e) => { handleAddress(e.target.value) }} placeholder="Enter your Address here" />
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="input-group">
                                        <div className="input-label">
                                            Phone Number <span className="star" >*</span>
                                        </div>
                                        <div className="input-box">
                                            <PhoneInput
                                                inputStyle={{ padding: '5px 10px 5px 55px', width: '100%', fontSize: '14px' }}
                                                inputClass="ph-input"
                                                enableSearch={true}
                                                country={'in'}
                                                required={true}
                                                countryCodeEditable={true}
                                                value={Phone}
                                                onChange={(e) => { handlePhone(e) }}
                                            />
                                        </div>
                                    </div>


                                    {/* Demo times */}
                                    <div className="input-group">
                                        <div className="input-label">
                                            Select Demo Time <span className="star" >*</span>
                                        </div>
                                        <div className="demo-time-div">
                                            {DemoTimeList.map((dd, i) => {
                                                return (
                                                    <div key={i} className={Time === dd ? "demo-time-box-active" : "demo-time-box"} onClick={() => { handleTime(dd) }} >
                                                        {dd}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>


                                    {/* Where did you hear */}
                                    <div className="input-group">
                                        <div className="input-label">
                                            Where did you hear about us?
                                        </div>
                                        <div className="input-box">
                                            <select defaultValue={""} onChange={(e) => { handleAbout(e.target.value) }} >
                                                <option disabled value={""}>Select</option>
                                                <option value="Google">Google</option>
                                                <option value="Facebook">Facebook</option>
                                                <option value="Friends & Families">Friends & Families</option>
                                                <option value="_Other_Text">Other</option>

                                            </select>
                                        </div>
                                        {
                                            AboutOtherVisable ?
                                                <div className="input-box">
                                                    <input type="text" value={About} onChange={(e) => { handleAboutOtherText(e.target.value) }} placeholder="Other" />
                                                </div>
                                                : ""
                                        }
                                    </div>


                                    <div className="input-group ">
                                        <center>
                                            <button type="submit" disabled={Loading} className="submit-btn"  >{!Loading ? "Continue" : "Please wait..."}</button>
                                        </center>
                                    </div>

                                    <div className="tc">
                                        By registering here, I agree to PolyMatic’s <span className="tc-link"> Terms & Conditions </span> and <span className="tc-link" > Privacy Policy </span>
                                    </div>


                                </form>

                            </div>

                        </div>
                    </Box>
                </Fade>
            </Modal>




        </React.Fragment >
    )

}



export default Home
