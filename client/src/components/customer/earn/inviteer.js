import React, { useState, useEffect, useRef, Fragment } from 'react'
import acquire1 from '../../../assets/images/earn/invite1.png'
import acquire2 from '../../../assets/images/earn/invite2.png'
import acquire3 from '../../../assets/images/earn/invite3.png'
import acquire4 from '../../../assets/images/earn/invite4.png'
import { Carousel, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
const Invite = ({ user }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const ref = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [showModal, setShowModal] = useState(false);
    let code;
    if (user != null) {
        code = user.inviteCode;
    }
    
    return (
        
        <div ref={ref} >
            <div className='d-flex justify-content-center row '  style={{ backgroundColor: '#ffffff' }}>
            {user!=null && <div class=" mb-3 col-md-12 col-lg-3 d-flex justify-content-center align-items-center pt-md-2">
              <div class={"shadow-shop"}>

                <form class="col-md-12 p-0 font-Futura-bold letter-spacing-cart mb-2 ">
                  <div class="row-wrap">

                  <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/user'} style={{ color: 'black' }} className='mb-1 lead'>
                        Personal Info
                    </Link>
                    </div>
                    
                    <div className='lead mb-1 pl-3 pr-3 pt-1'>
                      Bonus
                      
                    </div>
                    <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/invite'} style={{ color: 'black' , fontSize:'1.5rem'}} className='mb-1'>
       <span className='ml-1 pl-1' >- Invite & Earn</span>
                    </Link>
                    </div>
                    <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/acquire'} style={{ color: 'black' }} className='mb-1'>
       <span className='ml-1 pl-1' >   - Acquire & Earn</span>
                    </Link>
                    </div>
                    <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/bonus'} style={{ color: 'black' }} className='mb-1'>
       <span className='ml-1 pl-1' >- Vouchers & Activities</span>
                    </Link>
                    </div>
                    <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/orders'} style={{ color: 'black' }} className='mb-1 lead'>
                        Orders
                    </Link>
                    </div>
                    <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/merchantreturn'} style={{ color: 'black' }} className='mb-1 lead'>
                        Merchandise Returns
                    </Link>
                    </div>
                    

                    <div class="row mb-3 ">




                    </div>

                  </div>
                </form>
              </div>
            </div>}
                <div className='col-md-12 col-lg-5'>
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
                        <Carousel.Item>
                            <img
                                width={300}
                                height={500}
                                className="d-block w-100"
                                src={acquire1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                width={300}
                                height={500}
                                className="d-block w-100"
                                src={acquire2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                width={300}
                                height={500}
                                className="d-block w-100"
                                src={acquire3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                width={300}
                                height={500}
                                className="d-block w-100"
                                src={acquire4}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className="d-flex row  justify-content-center mt-0 p-0" style={{ paddingBottom: '30px', backgroundColor: '#ffffff' }}>
                <p className="lead text-center mx-3">
                    Copy and Share your personal invite link...
                </p>
            </div>
            <div className="d-flex row  justify-content-center mt-0 pt-0" style={{ paddingBottom: '30px', backgroundColor: '#ffffff' }}>
                <div className="col-6">
                    <form class="input-group mb-3 col p-0" onSubmit={(e) => {
                        e.preventDefault();
                    }}>


                        <input
                            // readOnly={true}
                            value={user != null ?
                                'http://nadaasi-client.herokuapp.com/user/sign-up/' + user.inviteCode : 'Login to get your personal invite link...'}
                            type="text"
                            class="form-control coupon-input font-Futura-light letter-spacing-cart shadow-shop"
                            placeholder="COUPON CODE"
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                        />
                        <div class="input-group-append">
                            <button width="34px" className="btn btn-dark border-0"
                                // disabled={loading || user == null}
                                disabled={user == null}
                                onClick={() => setShowModal(true)
                                }
                            >
                                SHARE
                            </button>
                        </div>
                    </form>
                    <Modal className='d-flex justify-content-center align-items-center' show={showModal} onHide={() => setShowModal(false)}>
                        <div style={{ backgroundColor: "white" }}>
                            <div class="modal-header">
                                <div class="modal-title h4">Share Invite Link Via</div>
                                <button

                                    type="button"
                                    class="close"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span aria-hidden="true">×</span>
                                    <span class="sr-only">Close</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className='d-flex justify-content-center '>

                                    {/* // Sharingbutton Facebook */}
                                    <a class="resp-sharing-button__link" href={`https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fnadaasi-client.herokuapp.com%2Fuser%2Fsign-up%2F${code}`} target="_blank" rel="noopener" aria-label="">
                                        <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z" /></svg>
                                        </div>
                                        </div>
                                    </a>

                                    {/* //  Sharingbutton Twitter  */}
                                    <a class="resp-sharing-button__link" href={`https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fnadaasi-client.herokuapp.com%2Fuser%2Fsign-up%2F2F${code}`} target="_blank" rel="noopener" aria-label="">
                                        <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z" /></svg>
                                        </div>
                                        </div>
                                    </a>

                                    {/* // Sharingbutton E-Mail */}
                                    {/* <a class="resp-sharing-button__link" href={`mailto:?subject=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;body=http%3A%2F%2Fnadaasi-client.herokuapp.com%2Fuser%2Fsign-up%2F2F${code}`} target="_self" rel="noopener" aria-label="">
                                        <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm8 16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8z" /><path d="M17.9 8.18c-.2-.2-.5-.24-.72-.07L12 12.38 6.82 8.1c-.22-.16-.53-.13-.7.08s-.15.53.06.7l3.62 2.97-3.57 2.23c-.23.14-.3.45-.15.7.1.14.25.22.42.22.1 0 .18-.02.27-.08l3.85-2.4 1.06.87c.1.04.2.1.32.1s.23-.06.32-.1l1.06-.9 3.86 2.4c.08.06.17.1.26.1.17 0 .33-.1.42-.25.15-.24.08-.55-.15-.7l-3.57-2.22 3.62-2.96c.2-.2.24-.5.07-.72z" /></svg>
                                        </div>
                                        </div>
                                    </a> */}
                                    <a class="resp-sharing-button__link" href={`whatsapp://send?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.%20http%3A%2F%2Fnadaasi-client.herokuapp.com%2Fuser%2Fsign-up%2F${code}`} target="_blank" rel="noopener" aria-label="">
                                        <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path d="m12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 3.8c2.2 0 4.2 0.9 5.7 2.4 1.6 1.5 2.4 3.6 2.5 5.7 0 4.5-3.6 8.1-8.1 8.1-1.4 0-2.7-0.4-3.9-1l-4.4 1.1 1.2-4.2c-0.8-1.2-1.1-2.6-1.1-4 0-4.5 3.6-8.1 8.1-8.1zm0.1 1.5c-3.7 0-6.7 3-6.7 6.7 0 1.3 0.3 2.5 1 3.6l0.1 0.3-0.7 2.4 2.5-0.7 0.3 0.099c1 0.7 2.2 1 3.4 1 3.7 0 6.8-3 6.9-6.6 0-1.8-0.7-3.5-2-4.8s-3-2-4.8-2zm-3 2.9h0.4c0.2 0 0.4-0.099 0.5 0.3s0.5 1.5 0.6 1.7 0.1 0.2 0 0.3-0.1 0.2-0.2 0.3l-0.3 0.3c-0.1 0.1-0.2 0.2-0.1 0.4 0.2 0.2 0.6 0.9 1.2 1.4 0.7 0.7 1.4 0.9 1.6 1 0.2 0 0.3 0.001 0.4-0.099s0.5-0.6 0.6-0.8c0.2-0.2 0.3-0.2 0.5-0.1l1.4 0.7c0.2 0.1 0.3 0.2 0.5 0.3 0 0.1 0.1 0.5-0.099 1s-1 0.9-1.4 1c-0.3 0-0.8 0.001-1.3-0.099-0.3-0.1-0.7-0.2-1.2-0.4-2.1-0.9-3.4-3-3.5-3.1s-0.8-1.1-0.8-2.1c0-1 0.5-1.5 0.7-1.7s0.4-0.3 0.5-0.3z" /></svg>
                                        </div>
                                        </div>
                                    </a>
                                    {/* <!-- Sharingbutton VK --> */}
                                    <a class="resp-sharing-button__link" href={`http://vk.com/share.php?title=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fnadaasi-client.herokuapp.com%2Fuser%2Fsign-up%2F${code}`} target="_blank" rel="noopener" aria-label="">
                                        <div class="resp-sharing-button resp-sharing-button--vk resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 6.352 5.15 11.5 11.5 11.5 6.352 0 11.5-5.148 11.5-11.5C23.5 5.65 18.352.5 12 .5zm8.11 16.82h-2.603c-.244 0-.48-.094-.658-.26l-1.98-1.862c-.118-.112-.276-.175-.438-.175-.355 0-.646.287-.646.643v1c0 .36-.292.654-.654.654h-1.655c-3.935 0-7.385-6.898-8.185-9.093-.018-.052-.028-.105-.028-.16.002-.247.204-.445.452-.445h2.637c.24 0 .456.14.556.355.57 1.42 1.31 2.764 2.2 4.004.126.14.304.217.49.214.357-.006.64-.3.63-.656-.014-.894-.034-1.958-.034-2.328 0-1.493-1.106-1.313-1.106-1.313.355-.49.94-.76 1.543-.717h2.182c.537 0 .974.435.974.972v3.093c0 .896.646 1.502 1.646-.43.37-.718 1.527-2.848 1.527-2.848.114-.214.337-.347.577-.347h2.9c1.323 0 .358 1.502-.175 2.21-.392.52-1.31 1.727-1.873 2.47-.267.353-.238.845.07 1.165 0 0 1.74 1.834 2.22 2.31.685.673.685 1.545-.57 1.545z" /></svg>
                                        </div>
                                        </div>
                                    </a>


                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>

            </div>
                </div>
            </div>
            
        </div >
    )
}
const mapStateToProps = (state) => ({
    user: state.app.user,
});
export default connect(mapStateToProps)(Invite);
