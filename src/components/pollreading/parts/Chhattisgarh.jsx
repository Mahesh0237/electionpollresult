import React, { useState } from 'react'
import Partyreadings from '../shared/Partyreadings'
import { Box, LoadingOverlay } from '@mantine/core'

function Chhattisgarh({ chhattisgarh, totalseats, isLoadingEffect }) {
    return (
        <>
            <div className=" mt-4">
                <div className="row">
                    <div className="col-7">
                        <div>
                            <p className="font-weight-bold m-0" style={{ fontSize: "17px", color: "#ff8700" }}>
                                Chhattisgarh</p>
                            <p className="text-white font-weight-bold m-0" style={{ fontSize: "17px" }}>Assembly Election Results
                                2023</p>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-before-119 mt-4">
                            <p className=" font-weight-bold m-0"
                                style={{ fontSize: "22px", color: "#ff8700" }}>{totalseats}</p>
                            <p className="text-white font-weight-bold m-0">Total Seats</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className=" col-4 col-md-4"></div>
                    <div className=" col-4 col-md-4 text-center">
                        <span style={{ color: "#ff0000" }}
                            className="font-weight-bold">Lead</span>
                    </div>
                    <div className="col-4 col-md-4 text-center">
                        <span style={{ color: "#12f212" }}
                            className="font-weight-bold">Won</span>
                    </div>
                </div>
                <Partyreadings
                    partyname="BJP"
                    totalData={chhattisgarh}
                />
                <Partyreadings
                    partyname="CONG"
                    totalData={chhattisgarh}
                />
                <Partyreadings
                    partyname="BSP+GGP"
                    totalData={chhattisgarh}
                />

                <Partyreadings
                    partyname="JCC"
                    totalData={chhattisgarh}
                />
                <Partyreadings
                    partyname="AAP"
                    totalData={chhattisgarh}
                />
                <Partyreadings
                    partyname="CPI+CPM"
                    totalData={chhattisgarh}
                />
            </div>
            <LoadingOverlay visible={isLoadingEffect} loaderProps={{ color: 'green', type: 'dots' }} />
        </>
    )
}

export default Chhattisgarh